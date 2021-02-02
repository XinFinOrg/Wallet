(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a654278"],{"44c8":function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return V}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"send-currency-container"},[a("interface-container-title",{attrs:{title:t.$t("sendTx.send-tx")}}),a("div",{staticClass:"send-form"},[a("div",{staticClass:"form-block amount-to-address"},[a("div",{staticClass:"amount"},[a("div",{staticClass:"single-input-block"},[a("div",{staticClass:"title"},[a("h4",[t._v(t._s(t.$t("sendTx.type")))])]),a("currency-picker",{attrs:{currency:t.tokensWithBalance,page:"sendEthAndTokens",token:!0,default:""!==t.selectedCurrency?t.selectedCurrency:{}},on:{selectedCurrency:function(e){t.selectedCurrency=e}}})],1),a("div",{staticClass:"single-input-block"},[a("div",{staticClass:"title"},[a("h4",[t._v(t._s(t.$t("sendTx.amount")))]),a("p",{staticClass:"title-button prevent-user-select",on:{click:t.sendEntireBalance}},[t._v(" "+t._s(t.$t("sendTx.button-entire"))+" ")])]),a("div",{staticClass:"the-form amount-number"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.toValue,expression:"toValue"}],attrs:{placeholder:t.$t("sendTx.amount"),type:"number",min:"0",name:"value",step:"any"},domProps:{value:t.toValue},on:{input:function(e){e.target.composing||(t.toValue=e.target.value)}}}),a("i",{class:[!t.isValidAmount.valid||t.errors.has("value")?"not-good":"","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})]),!t.isValidAmount.valid||t.errors.has("value")?a("div",{staticClass:"error-message-container"},[a("p",[t._v(t._s(t.isValidAmount.msg))])]):t._e()])]),a("div",{staticClass:"to-address"},[a("dropdown-address-selector",{attrs:{"clear-address":t.clearAddress,title:t.$t("sendTx.to-addr")},on:{toAddress:function(e){return t.getToAddress(e)}}})],1),a("div",{staticClass:"tx-fee"},[a("div",{staticClass:"title"},[a("h4",[t._v(t._s(t.$t("sendTx.tx-fee")))]),a("p",{staticClass:"copy-button prevent-user-select",on:{click:t.openSettings}},[t._v(" "+t._s(t.$t("common.edit"))+" ")])]),a("div",{staticClass:"fee-value"},[a("div",{staticClass:"gwei"},[t._v(" "+t._s(t.displayedGasPrice)+" "+t._s(t.$t("common.gas.gwei"))+" ")]),a("div",{directives:[{name:"show",rawName:"v-show",value:"ETH"===t.network.type.name,expression:"network.type.name === 'ETH'"}],staticClass:"usd"},[a("i18n",{attrs:{path:"sendTx.cost-eth-convert",tag:"div"}},[a("span",{attrs:{slot:"txFeeEth"},slot:"txFeeEth"},[t._v(t._s(t.txFeeEth))]),a("span",{attrs:{slot:"convert"},slot:"convert"},[t._v(t._s(t.convert))])])],1)]),t.showGasWarning?a("div",{staticClass:"gas-price-warning"},[t._v(" "+t._s(t.$t("errorsGlobal.high-gas-limit-warning"))+" ")]):t._e()])])]),a("div",{staticClass:"send-form advanced"},[a("div",{staticClass:"advanced-content"},[a("div",{staticClass:"toggle-button-container"},[a("h4",[t._v(t._s(t.$t("common.advanced")))]),a("div",{staticClass:"toggle-button"},[a("span",[t._v(t._s(t.$t("sendTx.data-gas")))]),a("div",{staticClass:"sliding-switch-white"},[a("label",{staticClass:"switch"},[a("input",{attrs:{type:"checkbox"},on:{click:function(e){t.advancedExpand=!t.advancedExpand}}}),a("span",{staticClass:"slider round"})])])])]),a("div",{staticClass:"input-container",class:t.advancedExpand&&"input-container-open"},[a("div",{staticClass:"margin-container"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isToken,expression:"!isToken"}],staticClass:"the-form user-input"},[a("p",[t._v(t._s(t.$t("sendTx.add-data")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.toData,expression:"toData"}],attrs:{placeholder:t.$t("sendTx.ph-add-data"),type:"text",autocomplete:"off"},domProps:{value:t.toData},on:{input:function(e){e.target.composing||(t.toData=e.target.value)}}}),a("i",{class:[t.isValidData?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})]),a("div",{staticClass:"the-form user-input"},[a("p",[t._v(t._s(t._f("capitalize")(t.$t("common.gas.limit"))))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.gasLimit,expression:"gasLimit"}],attrs:{placeholder:t.$t("common.gas.limit"),type:"number",min:"0",name:""},domProps:{value:t.gasLimit},on:{input:function(e){e.target.composing||(t.gasLimit=e.target.value)}}}),a("i",{class:[t.isValidGasLimit?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])])])])]),a("div",{staticClass:"submit-button-container"},[a("div",{class:[t.validInputs?"":"disabled","submit-button large-round-button-green-filled"],on:{click:t.submitTransaction}},[t._v(" "+t._s(t.$t("sendTx.send-tx"))+" ")]),a("div",{staticClass:"clear-all-btn",on:{click:function(e){return t.clear()}}},[t._v(" "+t._s(t.$t("common.clear-all"))+" ")])])],1)},n=[],i=(a("7db0"),a("caad"),a("b0c0"),a("a9e3"),a("b680"),a("d3b7"),a("ac1f"),a("25f0"),a("2532"),a("1276"),a("498a"),a("bf19"),a("53ca")),r=(a("96cf"),a("1da1")),o=a("5530"),c=a("2f62"),l=a("55c1"),d=a("d7a2"),u=a("8d23"),h=a("ce96"),m=a("901e"),p=a.n(m),v=a("70c1"),f=a.n(v),g=a("1131"),w=a.n(g),b=a("a18f"),x=a.n(b),y=a("94b2"),C={components:{"interface-container-title":l["a"],"currency-picker":d["a"],"dropdown-address-selector":y["a"]},props:{checkPrefilled:{type:Function,default:function(){}},clearPrefilled:{type:Function,default:function(){}},isPrefilled:{type:Boolean,default:!1},value:{type:String,default:"0"},data:{type:String,default:""},to:{type:String,default:""},gaslimit:{type:String,default:""},gas:{type:Number,default:0},tokensymbol:{type:String,default:""},tokensWithBalance:{type:Array,default:function(){return[]}},getBalance:{type:Function,default:function(){}}},data:function(){return{advancedExpand:!1,isValidAddress:!1,hexAddress:"",address:"",toValue:"0",gasLimit:"21000",toData:"",selectedCurrency:"",ethPrice:0,clearAddress:!1}},computed:Object(o["a"])(Object(o["a"])({},Object(c["c"])("main",["account","gasPrice","web3","network","linkQuery","online","gasLimitWarning"])),{},{currency:function(){return this.selectedCurrency.symbol},showGasWarning:function(){return this.gasPrice>=this.gasLimitWarning},txFee:function(){return new p.a(f.a.toWei(this.gasPrice,"gwei")).times(this.gasLimit||0)},txFeeEth:function(){return new p.a(this.txFee).gt(0)?f.a.fromWei(this.txFee,"ether"):0},isValidAmount:function(){var t=this.$t("errorsGlobal.not-valid-amount-total")+" Gas "+this.$t("errorsGlobal.to-send"),e=this.$t("errorsGlobal.not-valid-amount-total")+" "+this.selectedCurrency.symbol+" "+this.$t("errorsGlobal.to-send"),a=this.$t("errorsGlobal.not-valid-amount-total")+" "+this.network.type.currencyName+" "+this.$t("errorsGlobal.to-send"),s=this.$t("errorsGlobal.invalid-value"),n=new p.a(this.toValue).lte(this.selectedCurrency.balance),i=new p.a(this.toValue).plus(this.txFeeEth).lte(this.balanceDefault),r=new p.a(this.txFeeEth).lte(this.balanceDefault),o=this.isValidDecimals;if(new p.a(this.toValue).lt(0))return{msg:s,valid:!1};if(this.isToken){var c=n&&r&&o;return{valid:c,msg:c?"":n?r?s:t:e}}return{valid:i&&o,msg:i?"":i?s:a}},isValidDecimals:function(){var t=(this.toValue+"").split(".")[1];return!t||(this.isToken?t.length<=this.selectedCurrency.decimals:t.length<=18)},isValidData:function(){return h["d"].validateHexString(this.toData)},isValidGasLimit:function(){return new p.a(this.gasLimit).gte(0)},balanceDefault:function(){return new p.a(f.a.fromWei(this.account.balance,"ether"))},validInputs:function(){return this.isValidAmount.valid&&this.isValidAddress&&new p.a(this.gasLimit).gte(0)&&h["d"].validateHexString(this.toData)},isToken:function(){var t=this.network.type.currencyName;return this.selectedCurrency.symbol!==t},txData:function(){return this.isToken?this.getTokenTransferABI(this.toValue,this.selectedCurrency.decimals):h["d"].sanitizeHex(this.toData)},txValue:function(){return this.isToken?"0x00":h["d"].sanitizeHex(f.a.toWei(this.toValue,"ether").toString(16))},txTo:function(){return this.isToken?this.selectedCurrency.address.toLowerCase():this.hexAddress.toLowerCase().trim()},multiWatch:function(){return this.toValue,this.isValidAddress,this.toData,this.selectedCurrency,(new Date).getTime()/1e3},convert:function(){return this.ethPrice?new p.a(new p.a(this.txFeeEth).times(new p.a(this.ethPrice))).toFixed(2).toString():"--"},displayedGasPrice:function(){var t=this.gasPrice.toString(),e="~".concat(new p.a(t).toString()),a="~".concat(new p.a(t).toFixed(2).toString());return t.includes(".")?new p.a(t).lt(1)?e:a:t}}),watch:{multiWatch:w.a._.debounce((function(){this.validInputs&&this.estimateGas()}),500),network:function(t){this.online&&"ETH"===t.type.name&&this.getEthPrice()},isPrefilled:function(){this.prefillForm()}},mounted:function(){this.checkPrefilled(),this.online&&"ETH"===this.network.type.name&&this.getEthPrice()},methods:{clear:function(){this.toData="",this.toValue="0",this.hexAddress="",this.address="",this.gasLimit="21000",this.isValidAddress=!1,this.advancedExpand=!1,this.clearAddress=!this.clearAddress,this.selectedCurrency={name:this.network.type.name_long,symbol:this.network.type.currencyName}},getToAddress:function(t){this.address=t.address,this.hexAddress=t.address,this.isValidAddress=t.valid},prefillForm:function(){var t=this;if(this.isPrefilled){var e=this.tokensymbol?this.tokensWithBalance.find((function(e){return e.symbol.toLowerCase()===t.tokensymbol.toLowerCase()})):void 0;this.toData=h["d"].validateHexString(this.data)?this.data:"",this.toValue=this.value,this.hexAddress=this.to,this.address=this.to,this.gasLimit=new p.a(this.gaslimit).toString(),this.selectedCurrency=e||this.selectedCurrency,this.advancedExpand=!0,h["e"].responseHandler("Form has been prefilled. Please proceed with caution!",h["e"].WARN),this.clearPrefilled()}},openSettings:function(){this.$eventHub.$emit("open-settings")},sendEntireBalance:function(){this.isToken?this.toValue=this.selectedCurrency.balance:this.toValue=this.balanceDefault>0?this.balanceDefault.minus(f.a.fromWei(new p.a(f.a.toWei(this.gasPrice,"gwei")).times(this.gasLimit).toString(),"ether")):0},getTokenTransferABI:function(t,e){var a=[{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_amount",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}],s=new this.web3.eth.Contract(a);return s.methods.transfer(this.hexAddress.toLowerCase(),new p.a(t).times(new p.a(10).pow(e)).toFixed()).encodeABI()},estimateGas:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.web3.eth.getCoinbase();case 2:a=e.sent,s={from:a,value:t.txValue,to:t.txTo,gasPrice:h["d"].sanitizeHex(f.a.toWei(t.gasPrice,"gwei").toString(16)),data:t.txData},t.web3.eth.estimateGas(s).then((function(e){t.gasLimit=e})).catch((function(e){t.gasLimit=-1,h["e"].responseHandler(e,h["e"].ERROR)}));case 5:case"end":return e.stop()}}),e)})))()},submitTransaction:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,s,n,i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return window.scrollTo(0,0),e.prev=1,e.next=4,t.web3.eth.getCoinbase();case 4:return a=e.sent,e.next=7,t.web3.eth.getTransactionCount(a);case 7:s=e.sent,n={nonce:h["d"].sanitizeHex(new p.a(s).toString(16)),gasLimit:h["d"].sanitizeHex(new p.a(t.gasLimit).toString(16)),to:t.txTo,value:t.txValue,data:t.txData},i=new u["Transaction"](n),r=i.toJSON(!0),r.from=a,t.web3.eth.sendTransaction(r).catch((function(t){h["e"].responseHandler(t,h["e"].ERROR)})),t.clear(),e.next=19;break;case 16:e.prev=16,e.t0=e["catch"](1),h["e"].responseHandler(e.t0,h["e"].ERROR);case 19:case"end":return e.stop()}}),e,null,[[1,16]])})))()},getEthPrice:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x()("https://cryptorates.mewapi.io/ticker?filter=ETH").then((function(t){return t.json()})).catch((function(t){h["e"].responseHandler(t,h["e"].ERROR)}));case 2:a=e.sent,t.ethPrice="object"===Object(i["a"])(a)?a.data.ETH.quotes.USD.price:0;case 4:case"end":return e.stop()}}),e)})))()}}},k=C,T=(a("691e4"),a("2877")),_=Object(T["a"])(k,s,n,!1,null,"c47be7ba",null),V=_.exports},"691e4":function(t,e,a){"use strict";var s=a("bec5"),n=a.n(s);n.a},bec5:function(t,e,a){}}]);
//# sourceMappingURL=../sourcemaps/js/chunk-1a654278.c74facd6.js.map