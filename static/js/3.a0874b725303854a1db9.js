webpackJsonp([3],{"2NVW":function(t,e,a){"use strict";function n(t){a("ZJEw")}var i=a("5OgL"),r=a("3fVA"),s=a("VU/8"),o=n,c=s(i.a,r.a,!1,o,null,null);e.a=c.exports},"3fVA":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[void 0===t.web3||void 0===t.web3.eth.defaultAccount?a("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._m(0),t._v("\n    This Dapp will only work if you have metamask installed are logged in.\n  ")]):100!==t.netId?a("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._m(1),t._v("\n       Mineables uses the xDai Network to keep all token mining transactions ultra-cheap! To configure Metamask to point to the xDai Chain network. ( Under 'Networks > Custom RPC', create a new network definition called "),a("strong",[t._v("'xDai Chain'")]),t._v(" using RPC "),a("strong",[t._v("https://dai.poa.network")]),t._v(" )."),a("br"),a("br"),t._v("\n       In order to fund your account with xDai, please do the following:"),a("br"),t._v(" "),a("strong",[t._v("Option A")]),t._v(" "),a("br"),t._v(" "),t._m(2),t._v(" "),a("strong",[t._v("Option B")]),t._v(" "),a("br"),t._v("\n       Hit up @lodge on the "),a("a",{attrs:{target:"_blank",href:"https://discord.gg/yckdJdw"}},[t._v("mineables discord")]),t._v(" "),a("strong",[t._v("#xdai-microdonations")]),t._v(" channel for some xDai and start mining!\n  ")]):t._e()])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"metamask",attrs:{href:"https://metamask.io",target:"_blank"}},[a("img",{attrs:{src:"/static/icons/metamask.png"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"metamask",attrs:{href:"https://metamask.io",target:"_blank"}},[a("img",{attrs:{src:"/static/icons/metamask.png"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ol",[a("li",[t._v("On Mainnet, swap ETH with DAI. A great place to do this is at "),a("a",{attrs:{target:"_blank",href:"https://uniswap.exchange/swap"}},[t._v("https://uniswap.exchange/swap")])]),t._v(" "),a("li",[t._v("Bridge DAI tokens to xDAI tokens at "),a("a",{attrs:{target:"_blank",href:"https://dai-bridge.poa.network"}},[t._v("https://dai-bridge.poa.network")])])])}],r={render:n,staticRenderFns:i};e.a=r},"5OgL":function(t,e,a){"use strict";e.a={name:"xCheckMetamask",data:function(){return{web3:void 0}},mounted:function(){this.web3=window.web3,this.netId=window.netId}}},"8f6f":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container wrapped"},[a("br"),a("br"),t._v(" "),a("h4",{staticClass:"balance"},[a("b-badge",{attrs:{variant:"light"}},[t._v("Balance:  "+t._s(t.mithrilBalance)+" "),a("span",{staticClass:"tengwar"},[t._v("5Ì#")])])],1),t._v(" "),a("h2",{staticClass:"header-text"},[t._v("Virtual Artifact Market")]),t._v(" "),a("p",[t._v("Purchase ERC721 Virtual Rigs and GPUs with 0xMithril. vRigs and vGPUs can be attached to your mining account to vastly improve mining performance. Virtualizing hash power saves overall mining hardware, maintenance and electricity costs and can additionally be combined with traditional hardware-based mining operations.")]),t._v(" "),a("b-tabs",[a("b-tab",{attrs:{title:"VRIG Market",active:""}},[a("section",{attrs:{id:"vrig-market"}},[a("div",{staticClass:"row"},t._l(t.vrigResults,function(e){return a("div",{staticClass:"col-sm-4"},[e.childArtifacts.length>0?a("b-alert",{staticClass:"overlay",attrs:{variant:"secondary",show:""}},[a("strong",[t._v("Warning:")]),t._v(" Owner must remove all components from Rig in order to list artifact.\n              ")]):t._e(),t._v(" "),a("div",{staticClass:"card market-card"},[a("h3",{staticClass:"card-title price-wrap"},[a("h4",{staticClass:"float-left"},[t._v(t._s(e.name)+" ")]),t._v(" "),a("span",{staticClass:"price"},[t._v(t._s(e.price))]),t._v(" "),a("span",{staticClass:"tengwar"},[t._v("5Ì#")])]),t._v(" "),a("div",{staticClass:"card-body"},[a("div",{staticClass:"float-left",staticStyle:{width:"10em",height:"10em"}},[a("x-vrig-component",{attrs:{rigComponents:e.metadata.component}})],1),t._v(" "),a("p",{staticClass:"card-text"},[a("ul",{staticClass:"statistics"},[a("li",[t._v("Experience: "+t._s(e.experience))]),t._v(" "),a("li",[t._v("Life Decrement: "+t._s(e.lifeDecrement))]),t._v(" "),a("li",[t._v("Execution Cost: "+t._s(e.executionCost))]),t._v(" "),a("li",[t._v("Available Sockets: "+t._s(e.sockets))]),t._v(" "),a("li",[t._v("Virtual Hash Rate: "+t._s(e.vhash)+" H/s")]),t._v(" "),a("li",[t._v("Accuracy: "+t._s(e.accuracy))]),t._v(" "),a("li",[t._v("Level: "+t._s(e.level))])])]),t._v(" "),e.childArtifacts.length<1&&!e.ownedByCoinbase?a("b-button",{staticClass:"btn btn-lg btn-outline-info",attrs:{"data-toggle":"modal","data-target":"#myModal"},on:{click:function(a){t.purchasevRig(e.id,e.mithrilPrice)}}},[t._v("\n                    Purchase for "+t._s(e.price)+" "),a("span",{staticClass:"tengwar"},[t._v("5Ì#")])]):t._e(),t._v(" "),a("br"),t._v(" "),a("span",{staticClass:"uid"},[t._v("uid: "+t._s(e.id)+" ")])],1)])],1)}))])]),t._v(" "),a("b-tab",{attrs:{title:"VGPU Market"}},[a("section",{attrs:{id:"vgpu-market"}},[a("div",{staticClass:"row"},t._l(t.vgpuResults,function(e){return a("div",{staticClass:"col-sm-4"},[e.parent>0?a("b-alert",{staticClass:"overlay",attrs:{variant:"secondary",show:""}},[a("strong",[t._v("Warning:")]),t._v(" Owner must remove all vGPUs from vRig in order to list artifact.\n              ")]):t._e(),t._v(" "),a("div",{staticClass:"card market-card"},[a("h3",{staticClass:"card-title price-wrap"},[a("h4",{staticClass:"float-left"},[t._v(t._s(e.name)+" ")]),t._v(" "),a("span",{staticClass:"price"},[t._v(t._s(e.price))]),t._v(" "),a("span",{staticClass:"tengwar"},[t._v("5Ì#")])]),t._v(" "),a("div",{staticClass:"card-body"},[a("img",{staticClass:"card-img-top float-left",attrs:{src:e.metadata.image,alt:"Card image cap"}}),t._v(" "),a("p",{staticClass:"card-text"},[t._v("Remaining cycles: "+t._s(e.life))]),t._v(" "),t._l(e.modifiers,function(e){return a("p",{staticClass:"card-text modifier"},[t._v(t._s(e))])}),t._v(" "),e.ownedByCoinbase||0!==e.parent?t._e():a("b-button",{staticClass:"btn btn-lg btn-outline-info",attrs:{"data-toggle":"modal","data-target":"#myModal"},on:{click:function(a){t.purchasevGPU(e.id,e.mithrilPrice)}}},[t._v("\n                    Purchase for "+t._s(e.price)+" "),a("span",{staticClass:"tengwar"},[t._v("5Ì#")])]),t._v(" "),a("br"),t._v(" "),a("span",{staticClass:"uid"},[t._v("uid: "+t._s(e.id)+" ")])],2)])],1)}))])])],1),t._v(" "),a("b-modal",{ref:"modal",attrs:{id:"modal-center",size:"lg",centered:"",title:"Processing...","hide-footer":""}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"blockTimeInMinutes"}},[t._v("Purchase Transaction")]),a("br"),t._v(" "),a("a",{attrs:{href:t.txUrl+t.purchaseTx,target:"_blank"}},[t._v(t._s(t.purchaseTx))])]),t._v(" "),a("b-progress",{attrs:{value:100,max:100,striped:t.loading,animated:t.loading}}),a("br"),t._v(" "),t.loading?a("b-alert",{attrs:{show:"",variant:"warning"}},[t._v("Please don't refresh this page until the transaction is completed.")]):t._e(),t._v(" "),t.loading?t._e():a("b-alert",{attrs:{show:"",variant:"success"}},[t._v("\n      Purchase complete.\n      "),a("router-link",{staticClass:"nav-link",attrs:{to:{name:"configure"}}},[t._v("Configure your Virtual Rig")])],1)],1)],1)},i=[],r={render:n,staticRenderFns:i};e.a=r},EILE:function(t,e,a){var n=a("Oe6w");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("33d226ec",n,!0,{})},Ekte:function(t,e,a){"use strict";function n(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,a){function n(i,r){try{var s=e[i](r),o=s.value}catch(t){return void a(t)}if(!s.done)return Promise.resolve(o).then(function(t){n("next",t)},function(t){n("throw",t)});t(o)}return n("next")})}}var i=a("s0MJ"),r=a.n(i),s=a("2NVW"),o=a("QNo/"),c=a("H7xs"),g=a.n(c),m=a("S6aO").explorer_url,u=a("S6aO").addresses;e.a={name:"Marketplace",components:{xCheckMetamask:s.a,xVrigComponent:o.a},data:function(){return{currentVrigId:0,vgpuResults:[],vrigResults:[],marketContract:{},vgpuContract:{},vrigContract:{},mithrilContract:{},vgpuMarketContract:{},vrigMarketContract:{},purchaseTx:"Pending...",txUrl:m,loading:!0,showDismissibleAlert:!1,mithrilBalance:0,vrigKey:0}},methods:{purchasevGPU:function(){function t(t,a){return e.apply(this,arguments)}var e=n(regeneratorRuntime.mark(function t(e,a){var n,i=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.approvalTx="Pending...",this.purchaseTx="Pending...",t.next=4,this.vgpuContract.ownerOf(e);case 4:if((n=t.sent)===window.web3.eth.coinbase){t.next=9;break}return this.$refs.modal.show(),t.next=9,this.mithrilContract.approveAndCall(u.VGPU_MARKET,a,this.toHex(e)).then(function(t){console.log(t),i.purchaseTx=t.tx,i.loading=!1,i.vgpuResults=[],i.loadVGPUMarket()});case 9:case"end":return t.stop()}},t,this)}));return t}(),toHex:function(t){return"0x"+t.toString(16).padStart(8,"0")},purchasevRig:function(){function t(t,a){return e.apply(this,arguments)}var e=n(regeneratorRuntime.mark(function t(e,a){var n,i=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.approvalTx="Pending...",this.purchaseTx="Pending...",t.next=4,this.vrigContract.ownerOf(e);case 4:if((n=t.sent)===window.web3.eth.coinbase){t.next=9;break}return this.$refs.modal.show(),t.next=9,this.mithrilContract.approveAndCall(u.VRIG_MARKET,a,this.toHex(e)).then(function(t){console.log(t),i.purchaseTx=t.tx,i.loading=!1,i.vrigResults=[],i.loadVRIGMarket()});case 9:case"end":return t.stop()}},t,this)}));return t}(),loadVGPUMarket:function(){function t(){return e.apply(this,arguments)}var e=n(regeneratorRuntime.mark(function t(){var e,a,n,i,s,o,c,m,u;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.vgpuMarketContract.size();case 2:e=t.sent,a=0;case 4:if(!(a<e)){t.next=45;break}return t.next=7,this.vgpuMarketContract.getAt(a);case 7:return n=t.sent,t.next=10,this.vgpuContract.artifactAt(n[0]);case 10:return i=t.sent,s={},s.id=parseInt(n[0]),s.parent=i[1].toNumber(),t.next=16,this.vgpuContract.ownerOf(s.id);case 16:for(o=t.sent,this.coinbase&&o===window.web3.eth.coinbase?s.ownedByCoinbase=!0:s.ownedByCoinbase=!1,s.name=i[0],s.life=parseInt(i[2]),c=i[3],s.modifiers=[],m=0;m<c.length;m++)s.modifiers.push(r.a.parseModifier(c[m]));return s.mithrilPrice=n[1].toNumber(),s.price=r.a.readable(s.mithrilPrice),t.next=27,this.vgpuContract.tokenURI(s.id);case 27:if(s.tokenURI=t.sent,"https://ipfs.io/ipfs/QmPi1hMtExAxk4pFrUncmbYcskrax2K4nDH7bKG5m8MWYC"!==s.tokenURI){t.next=32;break}s.metadata={image:"/static/images/gpu/market/baseGPU.png"},t.next=39;break;case 32:return t.next=34,fetch(s.tokenURI);case 34:if(!(u=t.sent)){t.next=39;break}return t.next=38,u.json();case 38:s.metadata=t.sent;case 39:s.metadata.image=r.a.findPartImage(g.a,s.metadata.component),console.log(s),this.vgpuResults.push(s);case 42:a++,t.next=4;break;case 45:case"end":return t.stop()}},t,this)}));return t}(),loadVRIGMarket:function(){function t(){return e.apply(this,arguments)}var e=n(regeneratorRuntime.mark(function t(){var e,a,n,i,s,o,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.vrigMarketContract.size();case 2:e=t.sent,a=0;case 4:if(!(a<e)){t.next=45;break}return t.next=7,this.vrigMarketContract.getAt(a);case 7:return n=t.sent,console.log(n),t.next=11,this.vrigContract.baseStats(n[0]);case 11:return i=t.sent,s={},s.mithrilPrice=n[1].toNumber(),s.price=r.a.readable(s.mithrilPrice),s.id=parseInt(n[0]),t.next=18,this.vrigContract.ownerOf(s.id);case 18:return o=t.sent,this.coinbase&&o===window.web3.eth.coinbase?s.ownedByCoinbase=!0:s.ownedByCoinbase=!1,s.name=i[0],c=i[1],s.experience=c[0].toNumber(),s.lifeDecrement=c[1].toNumber(),s.executionCost=c[2].toNumber(),s.sockets=c[3].toNumber(),s.vhash=c[4].toNumber(),s.accuracy=c[5].toNumber(),s.level=c[6].toNumber(),s.childArtifacts=i[2],t.next=32,this.vrigContract.tokenURI(n[0]);case 32:return s.tokenURI=t.sent,t.next=35,fetch(s.tokenURI);case 35:return t.next=37,t.sent.json();case 37:s.metadata=t.sent,console.log(s.metadata),s.metadata.image=r.a.findPartImage(g.a,s.metadata.component[0]),console.log(s),this.vrigResults.push(s);case 42:a++,t.next=4;break;case 45:case"end":return t.stop()}},t,this)}));return t}(),loadMithrilBalance:function(){function t(){return e.apply(this,arguments)}var e=n(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=r.a,t.next=3,this.mithrilContract.balanceOf(window.web3.eth.coinbase);case 3:t.t1=t.sent,this.mithrilBalance=t.t0.readable.call(t.t0,t.t1);case 5:case"end":return t.stop()}},t,this)}));return t}()},mounted:function(){function t(){return e.apply(this,arguments)}var e=n(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,window.web3.eth.coinbase;case 3:this.coinbase=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),this.coinbase=!1;case 9:this.loadMithrilBalance(),this.loadVGPUMarket(),this.loadVRIGMarket();case 12:case"end":return t.stop()}},t,this,[[0,6]])}));return t}()}},H7xs:function(t,e){t.exports=[{name:"Gold Frame",id:1,type:1,img0:"/static/images/rig/baserig.png",img1:"/static/images/rig/baserig_cover.png",img2:"/static/images/rig/riggpucover.png"},{name:"Black Frame",id:10,type:1,img0:"/static/images/rig/baserig2.png",img1:"/static/images/rig/baserig_cover2.png",img2:"/static/images/rig/riggpucover2.png"},{name:"White Frame",id:19,type:1,img0:"/static/images/rig/baserig3.png",img1:"/static/images/rig/baserig_cover3.png",img2:"/static/images/rig/riggpucover3.png"},{name:"Red Frame",id:35,type:1,img0:"/static/images/rig/baserig4.png",img1:"/static/images/rig/baserig_cover4.png",img2:"/static/images/rig/riggpucover4.png"},{name:"Blue Frame",id:36,type:1,img0:"/static/images/rig/baserig5.png",img1:"/static/images/rig/baserig_cover5.png",img2:"/static/images/rig/riggpucover5.png"},{name:"Red Motherboard",id:2,type:2,img0:"/static/images/board/baseboard.png"},{name:"Blue Motherboard",id:18,type:2,img0:"/static/images/board/baseboard2.png"},{name:"White Motherboard",id:29,type:2,img0:"/static/images/board/baseboard3.png"},{name:"Green Motherboard",id:30,type:2,img0:"/static/images/board/baseboard4.png"},{name:"PowerSupply",id:3,type:3,img0:"/static/images/tap/basetap.png"},{name:"Blue PowerSupply",id:25,type:3,img0:"/static/images/tap/basetap2.png"},{name:"Orange PowerSupply",id:26,type:3,img0:"/static/images/tap/basetap3.png"},{name:"Red PowerSupply",id:27,type:3,img0:"/static/images/tap/basetap4.png"},{name:"White PowerSupply",id:28,type:3,img0:"/static/images/tap/basetap5.png"},{name:"Green PowerSupply",id:37,type:3,img0:"/static/images/tap/basetap6.png"},{name:"GPU 1",id:4,type:4,img0:"/static/images/gpu/baseGPU.png",img1:"/static/images/gpu/gputop.png",market:"/static/images/gpu/market/baseGPU.png"},{name:"White KFA2 GPU 2",id:5,type:4,img0:"/static/images/gpu/baseGPU2.png",img1:"/static/images/gpu/gputop.png",market:"/static/images/gpu/market/baseGPU2.png"},{name:"Vega Black",id:6,type:4,img0:"/static/images/gpu/baseGPU3.png",img1:"/static/images/gpu/gputop.png",market:"/static/images/gpu/market/baseGPU3.png"},{name:"GPU 2",id:7,type:4,img0:"/static/images/gpu/baseGPU4.png",img1:"/static/images/gpu/gputop.png",market:"/static/images/gpu/market/baseGPU4.png"},{name:"Founder GTX",id:8,type:4,img0:"/static/images/gpu/baseGPU5.png",img1:"/static/images/gpu/gputop.png",market:"/static/images/gpu/market/baseGPU5.png"},{name:"GPU 2",id:9,type:4,img0:"/static/images/gpu/baseGPU6.png",img1:"/static/images/gpu/gputop.png",market:"/static/images/gpu/market/baseGPU6.png"},{name:"GPU 1",id:11,type:4,img0:"/static/images/gpu/baseGPU7.png",img1:"/static/images/gpu/gputop.png",market:"/static/images/gpu/market/baseGPU7.png"},{name:"GPU 2",id:12,type:4,img0:"/static/images/gpu/baseGPU8.png",img1:"/static/images/gpu/gputop.png",market:"/static/images/gpu/market/baseGPU8.png"},{name:"GPU 2",id:13,type:4,img0:"/static/images/gpu/baseGPU9.png",img1:"/static/images/gpu/gputop.png",market:"/static/images/gpu/market/baseGPU9.png"},{name:"GPU 2",id:14,type:4,img0:"/static/images/gpu/baseGPU10.png",img1:"/static/images/gpu/gputop.png",market:"/static/images/gpu/market/baseGPU10.png"},{name:"GPU 2",id:15,type:4,img0:"/static/images/gpu/baseGPU11.png",img1:"/static/images/gpu/gputop.png",market:"/static/images/gpu/market/baseGPU11.png"},{name:"GPU 2",id:16,type:4,img0:"/static/images/gpu/baseGPU12.png",img1:"/static/images/gpu/gputop.png",market:"/static/images/gpu/market/baseGPU12.png"},{name:"Toxic Orange",id:17,type:4,img0:"/static/images/gpu/baseGPU13.png",img1:"/static/images/gpu/gputop.png",market:"/static/images/gpu/market/baseGPU13.png"},{name:"GPU 2",id:31,type:4,img0:"/static/images/gpu/baseGPU14.png",img1:"/static/images/gpu/gputop.png",market:"/static/images/gpu/market/baseGPU14.png"},{name:"GPU 2",id:34,type:4,img0:"/static/images/gpu/baseGPU15.png",img1:"/static/images/gpu/gputop.png",market:"/static/images/gpu/market/baseGPU15.png"}]},Oe6w:function(t,e,a){e=t.exports=a("FZ+f")(!0),e.push([t.i,".img-responsive{display:block;height:auto;max-width:100%}","",{version:3,sources:["/Users/logelj1/Documents/playground/0xMithril/site/site/src/components/VrigComponent.vue"],names:[],mappings:"AACA,gBACI,cAAe,AACf,YAAa,AACb,cAAgB,CACnB",file:"VrigComponent.vue",sourcesContent:["\n.img-responsive {\n    display: block;\n    height: auto;\n    max-width: 100%;\n}\n"],sourceRoot:""}])},"QNo/":function(t,e,a){"use strict";function n(t){a("EILE")}var i=a("cvMt"),r=a("e/WS"),s=a("VU/8"),o=n,c=s(i.a,r.a,!1,o,null,null);e.a=c.exports},ZJEw:function(t,e,a){var n=a("ZxP4");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("3113b16a",n,!0,{})},ZxP4:function(t,e,a){e=t.exports=a("FZ+f")(!0),e.push([t.i,".metamask{float:left;padding-right:1em}","",{version:3,sources:["/Users/logelj1/Documents/playground/0xMithril/site/site/src/components/CheckMetamask.vue"],names:[],mappings:"AACA,UACE,WAAY,AACZ,iBAAmB,CACpB",file:"CheckMetamask.vue",sourcesContent:["\n.metamask {\n  float: left;\n  padding-right: 1em;\n}\n"],sourceRoot:""}])},cvMt:function(t,e,a){"use strict";function n(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,a){function n(i,r){try{var s=e[i](r),o=s.value}catch(t){return void a(t)}if(!s.done)return Promise.resolve(o).then(function(t){n("next",t)},function(t){n("throw",t)});t(o)}return n("next")})}}var i=a("H7xs"),r=a.n(i);e.a={name:"x-vrig-component",props:["rigComponents"],data:function(){return{web3:void 0,dataURL:void 0,canvas:{},rigdrawCanvas:void 0}},methods:{animationFrame:function(){var t=null,e=new Promise(function(e,a){t=e});return window.requestAnimationFrame(t),e},generateImage:function(){this.dataURL=this.canvas.toDataURL("image/png",.5)},drawImg:function(){function t(t,a,n,i){return e.apply(this,arguments)}var e=n(regeneratorRuntime.mark(function t(e,a,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.animationFrame();case 2:void 0!==window.loadedImages[a]&&e.drawImage(window.loadedImages[a],n,i),1===r&&this.generateImage();case 4:case"end":return t.stop()}},t,this)}));return t}(),drawRig:function(t){this.rigdrawCanvas.fillStyle="white",this.rigdrawCanvas.fillRect(0,0,this.canvas.width,this.canvas.height);for(var e=0;e<23;e++){if(0===e||4===e||14===e)for(var a=0;a<r.a.length;a++)r.a[a].id===t[0]&&(0===e?this.addPart(e,r.a[a].img0):4===e?this.addPart(e,r.a[a].img1):14===e&&this.addPart(e,r.a[a].img2));if(1===e)for(var n=0;n<r.a.length;n++)r.a[n].id===t[1]&&this.addPart(e,r.a[n].img0);if(2===e)for(var i=0;i<r.a.length;i++)r.a[i].id===t[2]&&this.addPart(e,r.a[i].img0);if(e>=5&&e<=13)for(var s=0;s<r.a.length;s++)r.a[s].id===t[e-2]&&this.addPart(e,r.a[s].img0);if(e>=15)for(var o=0;o<r.a.length;o++)r.a[o].id===t[e-12]&&(22===e?this.addPart(e,r.a[o].img1,1):this.addPart(e,r.a[o].img1));22===e&&this.addPart(0,0,1)}},addPart:function(){function t(t,a){return e.apply(this,arguments)}var e=n(regeneratorRuntime.mark(function t(e,a){var n,i,r,s,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.animationFrame();case 2:n=0,i=50,23===e&&(i=0),e>=5&&e<=13?(r=12-e,n+=-72*r,i+=-42*r):e>=15&&e<=22&&(s=22-e,n+=-72*s,i+=-42*s),1===o?this.drawImg(this.rigdrawCanvas,a,n,i,1):this.drawImg(this.rigdrawCanvas,a,n,i);case 7:case"end":return t.stop()}},t,this)}));return t}(),loadImages:function(){var t=[];window.loadedImages=[];for(var e=0;e<r.a.length;e++)for(var a=0;a<3;a++){var n="img"+a;if(void 0!==r.a[e][n]){console.log(r.a[e][n]),t.push(r.a[e][n]);var i=r.a[e][n],s=new Image;s.src=i,window.loadedImages.push(s)}}},loadImages2:function(t){for(var e=[],a=0;a<r.a.length;a++)for(var n=0;n<3;n++){var i="img"+n;void 0!==r.a[a][i]?e.push(r.a[a][i]):console.log("Error:",r.a[a][i])}return t(e)}},mounted:function(){function t(){return e.apply(this,arguments)}var e=n(regeneratorRuntime.mark(function t(){var e,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.web3=window.web3,this.netId=window.netId,console.log("rigComponents",this.rigComponents),this.canvas=document.createElement("canvas",{id:"rig_draw2"}),this.canvas.width=1180,this.canvas.height=1180,this.rigdrawCanvas=this.canvas.getContext("2d"),window.loadedImages={},e=this,a=new Promise(function(t,e){}),t.next=12,this.loadImages2(function(t){window.promiseArray=t.map(function(t){return new Promise(function(e,a){var n=new Image;n.onload=function(){window.loadedImages[t]=n,e()},n.src=t})}),Promise.all(window.promiseArray).then(function(){return e.drawRig(e.rigComponents),a})});case 12:this.drawRig(this.rigComponents);case 13:case"end":return t.stop()}},t,this)}));return t}()}},cz57:function(t,e,a){var n=a("osVe");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("2f8f1728",n,!0,{})},"e/WS":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:"rig_container"}},[a("img",{staticClass:"img-responsive",attrs:{id:"random_rig",src:t.dataURL}})])])},i=[],r={render:n,staticRenderFns:i};e.a=r},osVe:function(t,e,a){e=t.exports=a("FZ+f")(!0),e.push([t.i,'@font-face{font-family:TengwarAnnatarGlaemscrafu;src:url("/static/font/tnganb.eot")}@font-face{font-family:TengwarAnnatarGlaemscrafu;src:local("FreeMonoTengwar"),local("FreeMonoTengwar-embedding"),url("/static/font/tnganb.ttf") format("TrueType")}.market-card{margin-bottom:2em}.card-img-top{max-width:160px;display:block;margin-left:auto;margin-right:auto;width:50%}.float-left{float:left}.uid{color:#d3d3d3;float:right}.uid:hover{color:#000}.tengwar{font-family:TengwarAnnatarGlaemscrafu;font-size:110%;line-height:1.5;text-decoration:none;font-weight:400!important}.price{color:#827d7d;font-weight:700;font-size:120%}.price-wrap{text-align:right;padding:15px;background-color:#ececec}.modifier{font-style:italic;color:#827d7d}.wrapped{padding-top:2em}.header-text{clear:both}.balance{float:right}.statistics{list-style:none}.overlay{margin:auto;position:absolute;top:35%;left:30px;right:30px;z-index:9999}',"",{version:3,sources:["/Users/logelj1/Documents/playground/0xMithril/site/site/src/views/Marketplace.vue"],names:[],mappings:"AACA,WACI,sCAAyC,AACzC,kCAAoC,CACvC,AACD,WACI,sCAAyC,AACzC,iHAEkD,CACrD,AACD,aACE,iBAAmB,CACpB,AACD,cACE,gBAAiB,AACjB,cAAe,AACf,iBAAkB,AAClB,kBAAmB,AACnB,SAAW,CACZ,AACD,YACE,UAAY,CACb,AACD,KACE,cAAiB,AACjB,WAAa,CACd,AACD,WACE,UAAa,CACd,AACD,SACE,sCAAuC,AACvC,eAAgB,AAChB,gBAAiB,AACjB,qBAAsB,AACtB,yBAA2B,CAC5B,AACD,OACE,cAAe,AACf,gBAAkB,AAClB,cAAgB,CACjB,AACD,YACE,iBAAkB,AAClB,aAAc,AACd,wBAA0B,CAC3B,AACD,UACE,kBAAmB,AACnB,aAAe,CAChB,AACD,SACE,eAAiB,CAClB,AACD,aACE,UAAY,CACb,AACD,SACE,WAAY,CACb,AACD,YACE,eAAiB,CAClB,AACD,SACE,YAAa,AACb,kBAAmB,AACnB,QAAS,AACT,UAAW,AACX,WAAY,AACZ,YAAc,CACf",file:"Marketplace.vue",sourcesContent:['\n@font-face {\n    font-family: "TengwarAnnatarGlaemscrafu";\n    src: url("/static/font/tnganb.eot");\n}\n@font-face {\n    font-family: "TengwarAnnatarGlaemscrafu";\n    src: local("FreeMonoTengwar"),\n    local("FreeMonoTengwar-embedding"),\n    url("/static/font/tnganb.ttf") format("TrueType");\n}\n.market-card {\n  margin-bottom: 2em;\n}\n.card-img-top {\n  max-width: 160px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n.float-left {\n  float: left;\n}\n.uid {\n  color: lightgray;\n  float: right;\n}\n.uid:hover {\n  color: black;\n}\n.tengwar {\n  font-family: TengwarAnnatarGlaemscrafu;\n  font-size: 110%;\n  line-height: 1.5;\n  text-decoration: none;\n  font-weight: 400!important;\n}\n.price {\n  color: #827d7d;\n  font-weight: bold;\n  font-size: 120%;\n}\n.price-wrap {\n  text-align: right;\n  padding: 15px;\n  background-color: #ececec;\n}\n.modifier {\n  font-style: italic;\n  color: #827d7d;\n}\n.wrapped {\n  padding-top: 2em;\n}\n.header-text {\n  clear: both;\n}\n.balance {\n  float:right;\n}\n.statistics {\n  list-style: none;\n}\n.overlay {\n  margin: auto;\n  position: absolute;\n  top: 35%;\n  left: 30px;\n  right: 30px;\n  z-index: 9999;\n}\n\n'],sourceRoot:""}])},rowc:function(t,e,a){"use strict";function n(t){a("cz57")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("Ekte"),r=a("8f6f"),s=a("VU/8"),o=n,c=s(i.a,r.a,!1,o,null,null);e.default=c.exports},s0MJ:function(t,e){t.exports={toReadableHashrate:function(t){var e=["H/s","Kh/s","Mh/s","Gh/s","Th/s","Ph/s"],a="Eh/s";for(var n in e){var i=e[n];if(t<1e3){a=i;break}t/=1e3}var r=t.toFixed(2);return r.endsWith(".00")&&(r=t.toFixed(0)),r+" "+a},secondsToReadableTime:function(t){if(t<=0)return"0 seconds";var e=["years","months","days","hours","minutes","seconds"],a=[31557600,30.4*24*60*60,86400,3600,60,1];for(var n in e){var i=e[n],r=a[n];if(t>r)return(t/r).toFixed(1)+" "+i}return t.toFixed(1)+" seconds"},readable:function(t){return Math.round(t/Math.pow(10,18))},findPartImage:function(t,e){for(var a=0;a<t.length;a++)if(t[a].id===e)return t[a].market?t[a].market:t[a].img0},parseModifier:function(t){var e=this.parseCommand(t),a=e[0],n=e[2],i=e[3];if(1===n)return"[+] Adds "+i+" to "+this.getPositionName(a);if(2===n)return"[-] Subtracts "+i+" from "+this.getPositionName(a);if(3===n)return"[*] Multiplies "+this.getPositionName(a)+" by "+i;if(4===n)return"[/] Divides "+this.getPositionName(a)+" by "+i;if(5===n)return"[+%] Adds "+i+"% to "+this.getPositionName(a);if(6===n)return"[-%] Subtracts "+i+"% from "+this.getPositionName(a);if(7===n)return"Requires "+this.getPositionName(a)+" > "+i;if(8===n)return"Requires "+this.getPositionName(a)+" < "+i;if(9===n){var r=this.parseExponent(i);return 4===a&&(r=this.toReadableHashrate(r)),"Adds "+r+" to "+this.getPositionName(a)}},parseCommand:function(t){var e=String(t),a=e.substring(1,3),n=e.substring(3),i=n.substring(0,1),r=n.substring(1,4);return[Number(a),Number(n),Number(i),Number(r)]},getPositionName:function(t){return 0===t?"Experience":1===t?"Life Decrement":2===t?"Execution Cost":3===t?"Socket Count":4===t?"Synthetic Hash Rate":5===t?"Accuracy":6===t?"Level":"["+t+"]"},parseExponent:function(t){var e=String(t),a=e.substring(0,1),n=e.substring(1,3);return Number(a)*Math.pow(10,Number(n))}}}});
//# sourceMappingURL=3.a0874b725303854a1db9.js.map