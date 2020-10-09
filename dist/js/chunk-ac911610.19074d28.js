(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ac911610"],{"44c8":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"send-currency-container"},[n("interface-container-title",{attrs:{title:e.$t("common.sendTx")}}),n("div",{staticClass:"send-form"},[n("div",{staticClass:"form-block amount-to-address"},[n("div",{staticClass:"amount"},[n("div",{staticClass:"single-input-block"},[n("div",{staticClass:"title"},[n("h4",[e._v(e._s(e.$t("interface.sendTxType")))])]),n("currency-picker",{attrs:{currency:e.tokensWithBalance,page:"sendEthAndTokens",token:!0},on:{selectedCurrency:function(t){e.selectedCurrency=t}}})],1),n("div",{staticClass:"single-input-block"},[n("div",{staticClass:"title"},[n("h4",[e._v(e._s(e.$t("interface.sendTxAmount")))]),n("p",{staticClass:"title-button prevent-user-select",on:{click:e.sendEntireBalance}},[e._v("Entire Balance")])]),n("div",{staticClass:"the-form amount-number"},[n("input",{directives:[{name:"validate",rawName:"v-validate",value:"min_value:0",expression:"'min_value:0'"},{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{type:"number",placeholder:"Amount",min:"0",name:"value"},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}}),n("i",{class:[!e.isValidAmount||e.errors.has("value")?"not-good":"","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})]),!e.isValidAmount||e.errors.has("value")?n("div",{staticClass:"error-message-container"},[n("p",[e._v(e._s(e.$t("common.notAValidAmount")))])]):e._e()])]),n("div",{staticClass:"to-address"},[n("div",{staticClass:"title"},[n("h4",[e._v("\n            "+e._s(e.$t("interface.sendTxToAddr"))+"\n            "),n("p",[e._v(e._s(e.newAdd))]),n("blockie",{directives:[{name:"show",rawName:"v-show",value:e.isValidAddress,expression:"isValidAddress"}],staticClass:"blockie-image",attrs:{address:e.hexAddress,size:8,scale:16,width:"32px",height:"32px"}})],1),n("p",{staticClass:"copy-button prevent-user-select",on:{click:function(t){return e.copyToClipboard("address")}}},[e._v(e._s(e.$t("common.copy")))])]),n("div",{staticClass:"the-form address-block"},[n("input",{directives:[{name:"ens-resolver",rawName:"v-ens-resolver",value:"address",expression:"'address'"},{name:"model",rawName:"v-model",value:e.oldAddress,expression:"oldAddress"}],ref:"oldAddress",attrs:{type:"text",name:"name",autocomplete:"off"},domProps:{value:e.oldAddress},on:{input:function(t){t.target.composing||(e.oldAddress=t.target.value)}}}),n("i",{class:[e.isValidAddress&&0!==e.hexAddress.length?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])])])]),n("div",{staticClass:"send-form advanced"},[n("div",{staticClass:"advanced-content"},[n("div",{staticClass:"toggle-button-container"},[n("h4",[e._v(e._s(e.$t("common.advanced")))]),n("div",{staticClass:"toggle-button"},[n("span",[e._v(e._s(e.$t("interface.dataGas")))]),n("div",{staticClass:"sliding-switch-white"},[n("label",{staticClass:"switch"},[n("input",{attrs:{type:"checkbox"},on:{click:function(t){e.advancedExpand=!e.advancedExpand}}}),n("span",{staticClass:"slider round"})])])])]),n("div",{staticClass:"input-container",class:e.advancedExpand&&"input-container-open"},[n("div",{staticClass:"margin-container"},[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.isToken,expression:"!isToken"}],staticClass:"the-form user-input"},[n("p",[e._v("Add Data")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.data,expression:"data"}],attrs:{type:"text",placeholder:"Add Data (e.g. 0x7834f874g298hf298h234f)",autocomplete:"off"},domProps:{value:e.data},on:{input:function(t){t.target.composing||(e.data=t.target.value)}}}),n("i",{class:[e.isValidData?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})]),n("div",{staticClass:"the-form user-input"},[n("p",[e._v(e._s(e._f("capitalize")(e.$t("common.gasLimit"))))]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.gasLimit,expression:"gasLimit"}],attrs:{placeholder:e.$t("common.gasLimit"),type:"number",min:"0",name:""},domProps:{value:e.gasLimit},on:{input:function(t){t.target.composing||(e.gasLimit=t.target.value)}}}),n("i",{class:[e.isValidGasLimit?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])])])])]),n("div",{staticClass:"submit-button-container"},[n("div",{class:[e.validInputs?"":"disabled","submit-button large-round-button-green-filled"],on:{click:e.submitTransaction}},[e._v(e._s(e.$t("interface.sendTx")))]),n("interface-bottom-text",{attrs:{"link-text":e.$t("interface.helpCenter"),question:e.$t("interface.haveIssues"),link:"https://xinfin.network"}})],1)],1)},s=[],i=(n("1c01"),n("58b2"),n("8e6e"),n("f3e2"),n("d25f"),n("ac6a"),n("456d"),n("0298"),n("96cf"),n("3b8d")),r=(n("a481"),n("6b54"),n("87b3"),n("7f7f"),n("28a5"),n("bd86")),o=(n("c5f6"),n("2f62")),c=n("55c1"),d=n("d7a2"),l=n("539d"),u=n("c8e5"),h=n("dbd9"),p=n.n(h),m=n("ce96"),f=n("901e"),v=n.n(f),b=n("70c1"),w=n.n(b),g=n("1131"),y=n.n(g);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){Object(r["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C={components:{"interface-container-title":c["a"],"interface-bottom-text":l["a"],blockie:u["a"],"currency-picker":d["a"]},props:{tokensWithBalance:{type:Array,default:function(){return[]}},getBalance:{type:Function,default:function(){}},highestGas:{type:Number,default:0}},data:function(){return{advancedExpand:!1,isValidAddress:!1,hexAddress:"",address:"",oldAddress:"",value:"0",gasLimit:"21000",data:"",selectedCurrency:""}},computed:x(x({},Object(o["b"])({account:"account",gasPrice:"gasPrice",web3:"web3",network:"network"})),{},{isValidAmount:function(){var e=new v.a(w.a.toWei(this.gasPrice,"gwei")).times(this.gasLimit||0),t=w.a.fromWei(e,"ether");return this.isToken?new v.a(this.value).lte(this.selectedCurrency.balance)&&new v.a(t).lte(this.balanceDefault)&&this.isValidDecimals:new v.a(this.value).plus(t).lte(this.balanceDefault)&&this.isValidDecimals},isValidDecimals:function(){var e=(this.value+"").split(".")[1];return!e||(this.isToken?e.length<=this.selectedCurrency.decimals:e.length<=18)},isValidData:function(){return m["d"].validateHexString(this.data)},isValidGasLimit:function(){return new v.a(this.gasLimit).gte(0)},balanceDefault:function(){return new v.a(w.a.fromWei(this.account.balance,"ether"))},validInputs:function(){return this.isValidAmount&&this.isValidAddress&&(new v.a(this.gasLimit).gte(0)||-1==this.gasLimit)&&m["d"].validateHexString(this.data)},isToken:function(){return this.selectedCurrency.symbol!==this.network.type.name},txData:function(){return this.isToken?this.getTokenTransferABI(this.value,this.selectedCurrency.decimals):m["d"].sanitizeHex(this.data)},txValue:function(){return this.isToken?"0x00":m["d"].sanitizeHex(w.a.toWei(this.value,"ether").toString(16))},txTo:function(){return this.isToken?this.selectedCurrency.address:this.hexAddress},newAdd:function(){return this.address=this.oldAddress.replace("xdc","0x"),""},multiWatch:function(){return this.value,this.isValidAddress,this.data,this.selectedCurrency,(new Date).getTime()/1e3}}),watch:{multiWatch:y.a._.debounce((function(){this.validInputs&&this.estimateGas()}),500)},methods:{sendEntireBalance:function(){this.isToken?this.value=this.selectedCurrency.balance:this.value=this.balanceDefault>0?this.balanceDefault.minus(w.a.fromWei(new v.a(w.a.toWei(this.gasPrice,"gwei")).times(this.gasLimit).toString(),"ether")):0},getTokenTransferABI:function(e,t){var n=[{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_amount",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}],a=new this.web3.eth.Contract(n);return a.methods.transfer(this.hexAddress,new v.a(e).times(new v.a(10).pow(t)).toFixed()).encodeABI()},estimateGas:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,n,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.web3.eth.getCoinbase();case 2:t=e.sent,n={from:t,value:this.txValue,to:this.txTo,gasPrice:m["d"].sanitizeHex(w.a.toWei(this.gasPrice,"gwei").toString(16)),data:this.txData},this.web3.eth.estimateGas(n).then((function(e){a.gasLimit=e})).catch((function(e){a.gasLimit=-1,m["e"].responseHandler(e,m["e"].ERROR)}));case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),submitTransaction:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,n,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return window.scrollTo(0,0),e.prev=1,e.next=4,this.web3.eth.getCoinbase();case 4:return t=e.sent,e.next=7,this.web3.eth.getTransactionCount(t);case 7:n=e.sent,a=new p.a({nonce:m["d"].sanitizeHex(new v.a(n).toString(16)),gasPrice:m["d"].sanitizeHex(w.a.toWei(this.gasPrice,"gwei").toString(16)),gasLimit:m["d"].sanitizeHex(new v.a(this.gasLimit).toString(16)),to:this.txTo,value:this.txValue,data:this.txData,chainId:this.network.type.chainID}),s=a.toJSON(!0),s.from=t,this.web3.eth.sendTransaction(s).catch((function(e){m["e"].responseHandler(e,m["e"].ERROR)})),e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](1),m["e"].responseHandler(e.t0,m["e"].ERROR);case 17:case"end":return e.stop()}}),e,this,[[1,14]])})));function t(){return e.apply(this,arguments)}return t}(),copyToClipboard:function(e){this.$refs[e].select(),document.execCommand("copy")}}},O=C,_=(n("b79d"),n("2877")),A=Object(_["a"])(O,a,s,!1,null,"4ed45650",null),T=A.exports;n.d(t,"default",(function(){return T}))},a809:function(e,t,n){},b5cb:function(e,t,n){"use strict";var a=n("a809"),s=n.n(a);s.a},b79d:function(e,t,n){"use strict";var a=n("e7ec"),s=n.n(a);s.a},d7a2:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.openDropdown,expression:"openDropdown"}],staticClass:"currency-picker-container"},[n("div",[n("div",{class:[e.open?"open":"","dropdown-container",e.token?"dropdown-text-container":"dropdown-text-container-white"],on:{click:e.openDropdown}},[n("p",{directives:[{name:"show",rawName:"v-show",value:e.token,expression:"token"}]},[e._v("\n        "+e._s(e.selectedCurrency.symbol)+"\n        "),n("span",{staticClass:"subname"},[e._v("- "+e._s(e.selectedCurrency.name))])]),n("p",{directives:[{name:"show",rawName:"v-show",value:!e.token,expression:"!token"}]},[e._v(e._s(e.selectedCurrency.name))]),n("i",{class:["fa",e.open?"fa-angle-up":"fa-angle-down"]})]),n("div",{class:[e.open?"open":"hide","dropdown-item-container"]},[n("div",{staticClass:"dropdown-search-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],attrs:{placeholder:"Search"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}}),n("i",{staticClass:"fa fa-search"})]),n("div",{staticClass:"item-container"},e._l(e.localCurrency,(function(t,a){return n("div",{key:e.token?t.name+a+t.symbol+e.page:t.name+e.page+a,class:[e.token?e.selectedCurrency.symbol===t.symbol?"selected":"":e.selectedCurrency.name===t.name?"selected":"","item"],on:{click:function(n){return e.selectCurrency(t)}}},[n("p",{directives:[{name:"show",rawName:"v-show",value:e.token,expression:"token"}]},[e._v("\n            "+e._s(t.symbol)),n("span",{staticClass:"subname"},[e._v(" - "+e._s(t.name))])]),n("p"),n("p",{directives:[{name:"show",rawName:"v-show",value:!e.token,expression:"!token"}]},[e._v(e._s(t.name))])])})),0)])])])},s=[],i=(n("1c01"),n("58b2"),n("8e6e"),n("f3e2"),n("ac6a"),n("456d"),n("75fc")),r=(n("6762"),n("2fdb"),n("d25f"),n("386d"),n("7f7f"),n("bd86")),o=n("2f62");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(r["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={props:{currency:{type:Array,default:function(){return[]}},page:{type:String,default:""},token:{type:Boolean,default:!0}},data:function(){return{selectedCurrency:{name:"Select an item",abi:"",address:""},open:!1,search:"",abi:"",address:""}},computed:d(d({},Object(o["b"])({network:"network"})),{},{networkToken:function(){return{name:this.network.type.name_long,symbol:this.network.type.name}},localCurrency:function(){var e=this;return""!==this.search?this.currency.filter((function(t){if(t.name.toLowerCase().includes(e.search.toLowerCase()))return t})):this.token?[this.networkToken].concat(Object(i["a"])(this.currency)):[{name:"Select an item",abi:"",address:""}].concat(Object(i["a"])(this.currency))}}),watch:{networkToken:function(){this.token&&(this.selectedCurrency=this.networkToken)},selectedCurrency:function(e){this.$emit("selectedCurrency",e)}},mounted:function(){this.selectedCurrency=!0===this.token?this.networkToken:{name:"Select an item",abi:"",address:""}},methods:{openDropdown:function(){this.open=!this.open},selectCurrency:function(e){this.openDropdown(),this.selectedCurrency=e}}},u=l,h=(n("b5cb"),n("2877")),p=Object(h["a"])(u,a,s,!1,null,"7f812414",null),m=p.exports;n.d(t,"a",(function(){return m}))},e7ec:function(e,t,n){}}]);
//# sourceMappingURL=chunk-ac911610.19074d28.js.map