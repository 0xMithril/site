webpackJsonp([7],{"3Oqv":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"createToken"}},[n("div",{staticClass:"container"},[n("img",{staticClass:"token-icon",attrs:{src:t.token.metadata.image}}),t._v(" "),n("div",{staticClass:"row d-flex"},[n("div",{staticClass:"col-lg-12"},[n("h2",[t._v(t._s(t.token.name)+" ")]),t._v(" "),n("h3",{staticClass:"address"},[n("small",[t._v(t._s(t.token.addr))])]),t._v(" "),n("p",[t._v(t._s(t.token.metadata.description))]),t._v(" "),n("p",[t._v("Homepage: "),n("a",{attrs:{href:t.token.metadata.website,target:"_blank"}},[t._v(t._s(t.token.metadata.website))])])])]),t._v(" "),n("div",{staticClass:"row d-flex"},[n("div",{staticClass:"col-lg-1"}),t._v(" "),n("div",{staticClass:"col-lg-5"},[n("h2",[t._v("Overview ")]),t._v(" "),n("table",{staticClass:"table token-table"},[n("tr",[t._m(0),t._v(" "),n("td",[t._v(t._s(t.token.symbol))])]),t._v(" "),n("tr",[t._m(1),t._v(" "),n("td",[t._v(t._s(t.token.decimal))])]),t._v(" "),n("tr",[t._m(2),t._v(" "),n("td",[t._v(t._s(t.token.supply))])]),t._v(" "),n("tr",[t._m(3),t._v(" "),n("td",[t._v(t._s(t.token.remainingSupply))])]),t._v(" "),n("tr",[t._m(4),t._v(" "),n("td",[t._v(t._s(t.token.tokensMinted))])]),t._v(" "),n("tr",[t._m(5),t._v(" "),n("td",[t._v(t._s(t.token.adjustmentInterval)+" minutes")])]),t._v(" "),n("tr",[t._m(6),t._v(" "),n("td",[t._v(t._s(t.token.blocksPerReadjustment))])]),t._v(" "),n("tr",[t._m(7),t._v(" "),n("td",[t._v(t._s(t.token.metadata.type))])])])]),t._v(" "),n("div",{staticClass:"col-lg-5"},[n("h2",[t._v("Statistics \n          "),t.reloadVisible?n("button",{staticClass:"btn btn-link",on:{click:function(e){t.loadStatistics()}}},[t._v("Reload")]):t._e(),t._v(" "),t.reloadVisible?t._e():n("small",[t._v("loading...")])]),t._v(" "),n("table",{staticClass:"table token-table"},[n("tr",[t._m(8),t._v(" "),n("td",[t._v(t._s(t.statistics.diff))])]),t._v(" "),n("tr",[t._m(9),t._v(" "),n("td",[t._v(t._s(t.statistics.userDiff))])]),t._v(" "),n("tr",[t._m(10),t._v(" "),n("td",[t._v(t._s(t.statistics.hashRate))])]),t._v(" "),n("tr",[t._m(11),t._v(" "),n("td",[t._v(t._s(t.statistics.rewardsUntilReadjustment)+" "),n("small",[t._v("(~"+t._s(t.statistics.nextEraEstimatedTime)+")")])])]),t._v(" "),n("tr",[t._m(12),t._v(" "),n("td",[t._v(t._s(t.statistics.averageRewardTime))])]),t._v(" "),n("tr",[t._m(13),t._v(" "),n("td",[t._v(t._s(t.statistics.lastDifficultyStartBlock))])]),t._v(" "),n("tr",[t._m(14),t._v(" "),n("td",[t._v(t._s(t.statistics.maxSupplyforCurrentEra))])]),t._v(" "),n("tr",[t._m(15),t._v(" "),n("td",[t._v(t._s(t.statistics.supplyRemainingInEra))])]),t._v(" "),n("tr",[t._m(16),t._v(" "),n("td",[t._v(t._s(t.statistics.currentRewardEra)+" / 39")])]),t._v(" "),n("tr",[t._m(17),t._v(" "),n("td",[t._v(t._s(t.statistics.currentMiningReward))])]),t._v(" "),n("tr",[t._m(18),t._v(" "),n("td",[t._v(t._s(t.statistics.epochCount))])])])]),t._v(" "),n("div",{staticClass:"col-lg-1"})])])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("b",[t._v("Symbol")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("b",[t._v("Decimal")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("b",[t._v("Supply")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("b",[t._v("Remaining")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("b",[t._v("Minted")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("b",[t._v("Block Target")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("b",[t._v("Blocks / Epoch")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("b",[t._v("Hash Algorithm")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("b",[t._v("Token Difficulty")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("b",[t._v("Account Difficulty")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("b",[t._v("Estimated Hashrate")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("b",[t._v("Rewards Until Readjustment")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("b",[t._v("Average Reward Time  ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("b",[t._v("Last Difficulty Start Block")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("b",[t._v("Max Supply for Current Era")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("b",[t._v("Supply Remaining in Era")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("b",[t._v("Current Reward Era")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("b",[t._v("Current Mining Reward")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("b",[t._v("Epoch Count")])])}],a={render:r,staticRenderFns:s};e.a=a},"7FPZ":function(t,e,n){var r=n("oewo");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("18059225",r,!0,{})},IWaO:function(t,e,n){"use strict";function r(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){function r(s,a){try{var i=e[s](a),o=i.value}catch(t){return void n(t)}if(!i.done)return Promise.resolve(o).then(function(t){r("next",t)},function(t){r("throw",t)});t(o)}return r("next")})}}var s=n("s0MJ"),a=n.n(s);e.a={name:"Token",data:function(){return{addr:this.$route.params.addr,reloadVisible:!0,token:{},statistics:{}}},methods:{loadToken:function(){function t(t,n){return e.apply(this,arguments)}var e=r(regeneratorRuntime.mark(function t(e,n){var r,s,a,i,o,c,u,l,d,m,_,v;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.name();case 2:return r=t.sent,t.next=5,n.symbol();case 5:return s=t.sent,t.next=8,n.totalSupply();case 8:return a=t.sent,t.next=11,n.decimals();case 11:return i=t.sent,t.next=14,n.getMiningDifficulty();case 14:return o=t.sent,t.next=17,n.getInstalledBooster();case 17:return c=t.sent,t.next=20,n.tokensMinted();case 20:return u=t.sent,t.next=23,n.blockTimeInMinutes();case 23:return l=t.sent,t.next=26,n.blocksPerReadjustment();case 26:return d=t.sent,t.next=29,n.metadataURI();case 29:return m=t.sent,console.log(m),t.next=33,this.$http.get(m);case 33:_=t.sent,console.log(_.body),v=_.body,this.token={addr:e,name:r,symbol:s,decimal:i.toNumber(),installedBoosterId:c,supply:a/Math.pow(10,i),remainingSupply:a/Math.pow(10,i)-u/Math.pow(10,i),diff:o.toNumber(),tokensMinted:(u/Math.pow(10,i)).toFixed(0),metadata:v,adjustmentInterval:l.toNumber(),blocksPerReadjustment:d.toNumber()};case 37:case"end":return t.stop()}},t,this)}));return t}(),loadStatistics:function(){function t(){return e.apply(this,arguments)}var e=r(regeneratorRuntime.mark(function t(){var e,n,r,s,i,o,c,u,l,d,m,_,v;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.reloadVisible=!1,console.log("loading statistics from blockchain..."),t.next=4,this.mineable.getMiningDifficulty({from:"0x8Cc5A1a0802DB41DB826C2FcB72423744338DcB0"});case 4:return e=t.sent,t.next=7,this.mineable.getMiningDifficulty();case 7:return n=t.sent,t.next=10,this.mineable.decimals();case 10:return r=t.sent,t.next=13,this.mineable.blockTimeInMinutes();case 13:return s=t.sent,t.next=16,this.mineable.epochCount();case 16:return i=t.sent.toNumber(),t.next=19,this.mineable.blocksPerReadjustment();case 19:return o=t.sent,t.next=22,this.mineable.latestDifficultyPeriodStarted();case 22:return c=t.sent.toNumber(),t.next=25,this.mineable.maxSupplyForEra();case 25:return u=t.sent.toNumber(),t.next=28,this.mineable.rewardEra();case 28:return l=t.sent.toNumber(),t.next=31,this.mineable.tokensMinted();case 31:return d=t.sent.toNumber(),t.next=34,this.mineable.getMiningReward();case 34:m=t.sent.toNumber(),_=i%o,v=this,window.web3.eth.getBlockNumber(function(t,f){if(!t){var h=u-d;h=(h/Math.pow(10,r)).toFixed(0);var b=parseInt(f.toString(10),10),p=b-c,g=5*p,x=0===_?1:_,k=g/x,A=a.a.secondsToReadableTime(k),w=e*Math.pow(2,22)/s;w*=s/k;var C=o-i%o,E=a.a.secondsToReadableTime(C*k);v.statistics={diff:e.toNumber(),userDiff:n.toNumber(),hashRate:a.a.toReadableHashrate(w),rewardsUntilReadjustment:C,nextEraEstimatedTime:E,averageRewardTime:A,lastDifficultyStartBlock:c,maxSupplyforCurrentEra:u/Math.pow(10,r),supplyRemainingInEra:h,currentRewardEra:l,currentMiningReward:m/Math.pow(10,r),epochCount:i},v.reloadVisible=!0}});case 38:case"end":return t.stop()}},t,this)}));return t}()},mounted:function(){function t(){return e.apply(this,arguments)}var e=r(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.MineableContract.at(this.addr);case 2:return this.mineable=t.sent,t.next=5,this.loadToken(this.addr,this.mineable);case 5:return t.next=7,this.loadStatistics();case 7:this.reloadVisible=!0;case 8:case"end":return t.stop()}},t,this)}));return t}()}},oewo:function(t,e,n){e=t.exports=n("FZ+f")(!0),e.push([t.i,".token-table{max-width:25em}.address{margin-top:-16px}.token-icon{position:relative;top:-30px;border-radius:50%;width:7em;height:7em;float:left;margin:1em;padding:.25em;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}","",{version:3,sources:["/Users/logelj1/Documents/playground/0xMithril/site/site/src/views/Token.vue"],names:[],mappings:"AACA,aACE,cAAgB,CACjB,AACD,SACE,gBAAkB,CACnB,AACD,YACE,kBAAmB,AACnB,UAAW,AACX,kBAAmB,AACnB,UAAW,AACX,WAAY,AACZ,WAAY,AACZ,WAAY,AACZ,cAAgB,AAChB,kEAA6E,CAC9E",file:"Token.vue",sourcesContent:["\n.token-table{\n  max-width: 25em;\n}\n.address{\n  margin-top: -16px;\n}\n.token-icon {\n  position: relative;\n  top: -30px;\n  border-radius: 50%;\n  width: 7em;\n  height: 7em;\n  float: left;\n  margin: 1em;\n  padding: 0.25em;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n"],sourceRoot:""}])},s0MJ:function(t,e){t.exports={toReadableHashrate:function(t){var e=["H/s","Kh/s","Mh/s","Gh/s","Th/s","Ph/s"],n="Eh/s";for(var r in e){var s=e[r];if(t<1e3){n=s;break}t/=1e3}var a=t.toFixed(2);return a.endsWith(".00")&&(a=t.toFixed(0)),a+" "+n},secondsToReadableTime:function(t){if(t<=0)return"0 seconds";var e=["years","months","days","hours","minutes","seconds"],n=[31557600,30.4*24*60*60,86400,3600,60,1];for(var r in e){var s=e[r],a=n[r];if(t>a)return(t/a).toFixed(1)+" "+s}return t.toFixed(1)+" seconds"},readable:function(t){return Math.round(t/Math.pow(10,18))},findPartImage:function(t,e){for(var n=0;n<t.length;n++)if(t[n].id===e)return t[n].market?t[n].market:t[n].img0},parseModifier:function(t){var e=this.parseCommand(t),n=e[0],r=e[2],s=e[3];if(1===r)return"[+] Adds "+s+" to "+this.getPositionName(n);if(2===r)return"[-] Subtracts "+s+" from "+this.getPositionName(n);if(3===r)return"[*] Multiplies "+this.getPositionName(n)+" by "+s;if(4===r)return"[/] Divides "+this.getPositionName(n)+" by "+s;if(5===r)return"[+%] Adds "+s+"% to "+this.getPositionName(n);if(6===r)return"[-%] Subtracts "+s+"% from "+this.getPositionName(n);if(7===r)return"Requires "+this.getPositionName(n)+" > "+s;if(8===r)return"Requires "+this.getPositionName(n)+" < "+s;if(9===r){var a=this.parseExponent(s);return 4===n&&(a=this.toReadableHashrate(a)),"Adds "+a+" to "+this.getPositionName(n)}},parseCommand:function(t){var e=String(t),n=e.substring(1,3),r=e.substring(3),s=r.substring(0,1),a=r.substring(1,4);return[Number(n),Number(r),Number(s),Number(a)]},getPositionName:function(t){return 0===t?"Experience":1===t?"Life Decrement":2===t?"Execution Cost":3===t?"Socket Count":4===t?"Synthetic Hash Rate":5===t?"Accuracy":6===t?"Level":"["+t+"]"},parseExponent:function(t){var e=String(t),n=e.substring(0,1),r=e.substring(1,3);return Number(n)*Math.pow(10,Number(r))}}},uEMa:function(t,e,n){"use strict";function r(t){n("7FPZ")}Object.defineProperty(e,"__esModule",{value:!0});var s=n("IWaO"),a=n("3Oqv"),i=n("VU/8"),o=r,c=i(s.a,a.a,!1,o,null,null);e.default=c.exports}});
//# sourceMappingURL=7.20b1b115f4c0ae12ad3d.js.map