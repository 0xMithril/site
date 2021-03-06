<template>
  <section id="createToken">
    <div class="container">
      <img class="token-icon" :src="token.metadata.image"/>
      
      <div class="row d-flex">
        <div class="col-lg-12">
          <h2>{{ token.name }} </h2>
          <h3 class="address"><small>{{ token.addr }}</small></h3>    
          <p>{{token.metadata.description}}</p>
          <p>Homepage: <a :href="token.metadata.website" target="_blank">{{token.metadata.website}}</a></p>
        </div>
      </div>

      <div class="row d-flex">
        <div class="col-lg-1"></div>
        <div class="col-lg-5">
          <h2>Overview </h2>
          <table class="table token-table">
            <tr>
              <td><b>Symbol</b></td>
              <td>{{ token.symbol }}</td>
            </tr>
            <tr>
              <td><b>Decimal</b></td>
              <td>{{ token.decimal }}</td>
            </tr>
            <tr>
              <td><b>Supply</b></td>
              <td>{{ token.supply }}</td>
            </tr>
            <tr>
              <td><b>Remaining</b></td>
              <td>{{ token.remainingSupply }}</td>
            </tr>
            <tr>
              <td><b>Minted</b></td>
              <td>{{ token.tokensMinted }}</td>
            </tr>
            <tr>
              <td><b>Block Target</b></td>
              <td>{{ token.adjustmentInterval }} minutes</td>
            </tr>
            <tr>
              <td><b>Blocks / Epoch</b></td>
              <td>{{ token.blocksPerReadjustment }}</td>
            </tr>
            <tr>
              <td><b>Hash Algorithm</b></td>
              <td>{{ token.metadata.type }}</td>
            </tr>
          </table>

        </div>

        <div class="col-lg-5">
          <h2>Statistics 
            <button v-if="reloadVisible" class="btn btn-link" v-on:click="loadStatistics()">Reload</button>
            <small v-if="!reloadVisible">loading...</small>
          </h2>
          <table class="table token-table">
            <tr>
              <td><b>Token Difficulty</b></td>
              <td>{{ statistics.diff }}</td>
            </tr>
            <tr>
              <td><b>Account Difficulty</b></td>
              <td>{{ statistics.userDiff }}</td>
            </tr>
            <tr>
              <td><b>Estimated Hashrate</b></td>
              <td>{{ statistics.hashRate }}</td>
            </tr>
            <tr>
              <td><b>Rewards Until Readjustment</b></td>
              <td>{{ statistics.rewardsUntilReadjustment }} <small>(~{{statistics.nextEraEstimatedTime}})</small></td>
            </tr>
            <tr>
              <td><b>Average Reward Time  </b></td>
              <td>{{ statistics.averageRewardTime }}</td>
            </tr>
            <tr>
              <td><b>Last Difficulty Start Block</b></td>
              <td>{{ statistics.lastDifficultyStartBlock }}</td>
            </tr>
            <tr>
              <td><b>Max Supply for Current Era</b></td>
              <td>{{ statistics.maxSupplyforCurrentEra }}</td>
            </tr>
            <tr>
              <td><b>Supply Remaining in Era</b></td>
              <td>{{ statistics.supplyRemainingInEra }}</td>
            </tr>
            <tr>
              <td><b>Current Reward Era</b></td>
              <td>{{ statistics.currentRewardEra }} / 39</td>
            </tr>
            <tr>
              <td><b>Current Mining Reward</b></td>
              <td>{{ statistics.currentMiningReward }}</td>
            </tr>
            <tr>
              <td><b>Epoch Count</b></td>
              <td>{{ statistics.epochCount }}</td>
            </tr>

          </table>
        </div>
        <div class="col-lg-1"></div>

      </div>
    </div>
  </section>
</template>

<script>
import util from '../common/util.js'
/* time calculated using 5-second eth blocks */
const SECONDS_PER_ETH_BLOCK = 5

export default {
  name: 'Token',
  data () {
    return {
      addr: this.$route.params.addr,
      reloadVisible: true,
      token: {},
      statistics: {}
    }
  },
  methods: {
    async loadToken (addr, mineable) {
      let name = await mineable.name()
      let symbol = await mineable.symbol()
      let supply = await mineable.totalSupply()
      let decimal = await mineable.decimals()
      let diff = await mineable.getMiningDifficulty()
      let installedBoosterId = await mineable.getInstalledBooster()
      let tokensMinted = await mineable.tokensMinted()
      let adjustmentInterval = await mineable.blockTimeInMinutes()
      let blocksPerReadjustment = await mineable.blocksPerReadjustment()
      // metadata
      let metadataURI = await mineable.metadataURI()
      console.log(metadataURI)
      let response = await this.$http.get(metadataURI)
      console.log(response.body)
      let metadata = response.body
      this.token = {
        addr,
        name,
        symbol,
        decimal: decimal.toNumber(),
        installedBoosterId,
        supply: supply / (10 ** decimal),
        remainingSupply: supply / (10 ** decimal) - tokensMinted / (10 ** decimal),
        diff: diff.toNumber(),
        tokensMinted: (tokensMinted / (10 ** decimal)).toFixed(0),
        metadata: metadata,
        adjustmentInterval: adjustmentInterval.toNumber(),
        blocksPerReadjustment: blocksPerReadjustment.toNumber()
      }
    },
    async loadStatistics () {
      this.reloadVisible = false
      console.log('loading statistics from blockchain...')
      let diff = await this.mineable.getMiningDifficulty({from: '0x8Cc5A1a0802DB41DB826C2FcB72423744338DcB0'})
      let userDiff = await this.mineable.getMiningDifficulty()
      let decimal = await this.mineable.decimals()
      let adjustmentInterval = await this.mineable.blockTimeInMinutes()
      let epochCount = (await this.mineable.epochCount()).toNumber()
      let blocksPerReadjustment = await this.mineable.blocksPerReadjustment()
      let lastDifficultyStartBlock = (await this.mineable.latestDifficultyPeriodStarted()).toNumber()
      let maxSupplyforCurrentEra = (await this.mineable.maxSupplyForEra()).toNumber()
      let currentRewardEra = (await this.mineable.rewardEra()).toNumber()
      let tokensMinted = (await this.mineable.tokensMinted()).toNumber()
      let currentMiningReward = (await this.mineable.getMiningReward()).toNumber()
      let rewardsSinceReadjustment = epochCount % blocksPerReadjustment
      let parent = this
      window.web3.eth.getBlockNumber(function (error, result) {
        if (!error) {
          let supplyRemainingInEra = maxSupplyforCurrentEra - tokensMinted
          supplyRemainingInEra = (supplyRemainingInEra / (10 ** decimal)).toFixed(0)
          let currentEthBlock = parseInt(result.toString(10), 10)
          var ethBlocksSinceLastDifficultyPeriod = currentEthBlock - lastDifficultyStartBlock
          var secondsSinceReadjustment = ethBlocksSinceLastDifficultyPeriod * SECONDS_PER_ETH_BLOCK
          let formattedRewardsSince = rewardsSinceReadjustment === 0 ? 1 : rewardsSinceReadjustment
          var secondsPerReward = secondsSinceReadjustment / formattedRewardsSince
          let currentAverageRewardTime = util.secondsToReadableTime(secondsPerReward) // (secondsPerReward / 60).toFixed(2)
          let hashrate = diff * 2 ** 22 / adjustmentInterval
          hashrate *= (adjustmentInterval / secondsPerReward)
          let rewardsLeft = blocksPerReadjustment - (epochCount % blocksPerReadjustment)
          let nextEraEstimatedTime = util.secondsToReadableTime(rewardsLeft * secondsPerReward)
          parent.statistics = {
            diff: diff.toNumber(),
            userDiff: userDiff.toNumber(),
            hashRate: util.toReadableHashrate(hashrate),
            rewardsUntilReadjustment: rewardsLeft,
            nextEraEstimatedTime: nextEraEstimatedTime,
            averageRewardTime: currentAverageRewardTime,
            lastDifficultyStartBlock: lastDifficultyStartBlock,
            maxSupplyforCurrentEra: maxSupplyforCurrentEra / (10 ** decimal),
            supplyRemainingInEra: supplyRemainingInEra,
            currentRewardEra: currentRewardEra,
            currentMiningReward: currentMiningReward / (10 ** decimal),
            epochCount: epochCount
          }
          parent.reloadVisible = true
        }
      })
    }
  },
  async mounted () {
    this.mineable = await this.MineableContract.at(this.addr)
    await this.loadToken(this.addr, this.mineable)
    await this.loadStatistics()
    this.reloadVisible = true
  }
}
</script>

<style>

.token-table{
  max-width: 25em;
}
.address{
  margin-top: -16px;
}

.token-icon {
  position: relative;
  top: -30px;
  border-radius: 50%;
  width: 7em;
  height: 7em;
  float: left;
  margin: 1em;
  padding: 0.25em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

</style>
