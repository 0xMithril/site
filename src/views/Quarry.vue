<template>
  <div>
    <section id="quarry">
        <div class="container">
            <x-check-metamask></x-check-metamask>

            <h2 class="header-text">Mineable Tokens</h2>
            <x-quarry-table></x-quarry-table>
        </div>
    </section>
  </div>
</template>

<script>

import xQuarryTable from '@/components/QuarryTable'
import xCheckMetamask from '@/components/CheckMetamask'

export default {
  name: 'Quarry',
  components: {
    xQuarryTable,
    xCheckMetamask
  }
}
</script>

<style>

</style>
