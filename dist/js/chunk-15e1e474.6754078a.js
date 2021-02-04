(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15e1e474"],{"2bdf":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return C}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"manage-ens-container"},[n("div",{staticClass:"title-container"},[n("h3",[t._v(t._s(t.$t("ens.manage-domain")))]),n("h3",[t._v(t._s(t.domainName))])]),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isController,expression:"!isController"}],staticClass:"set-controller-container"},[n("i18n",{attrs:{path:"ens.controller-text",tag:"div"}},[n("b",{attrs:{slot:"domain"},slot:"domain"},[t._v(t._s(t.domainName))]),n("b",{attrs:{slot:"addr"},slot:"addr"},[t._v(t._s(t.account.address))]),n("br")]),n("div",{staticClass:"set-controller-submit"},[n("button",{on:{click:function(e){return t.setController()}}},[t._v(t._s(t.$t("ens.set-controller")))])])],1),n("b-btn",{directives:[{name:"show",rawName:"v-show",value:t.resolverMultiCoinSupport,expression:"resolverMultiCoinSupport"},{name:"b-toggle",rawName:"v-b-toggle.multicoinsec",modifiers:{multicoinsec:!0}}],staticClass:"collapse-open-button",attrs:{variant:"primary"}},[n("p",[t._v(t._s(t.$t("ens.multi-coin")))]),n("i",{staticClass:"when-open fa fa-angle-up fa-lg"}),n("i",{staticClass:"when-closed fa fa-angle-down fa-lg"})]),n("b-collapse",{staticClass:"collapse-content",attrs:{id:"multicoinsec",visible:t.resolverMultiCoinSupport,accordion:"manage-ens-accordion"}},[n("div",{staticClass:"form-container"},[n("form",{staticClass:"manage-multi-coin-form"},[n("div",{staticClass:"title-and-dropdown-container"},[n("h4",[t._v(t._s(t.$t("ens.multi-coin"))+":")]),n("b-dd",{staticClass:"dropdown-button-2",attrs:{text:t.selectedCurrency}},t._l(Object.keys(t.supportedCoins),(function(e,a){return n("b-dd-item",{key:e+a,on:{click:function(n){return t.addCurrencyInput(e)}}},[t._v(t._s(e))])})),1)],1),t._l(t.currencyInputs,(function(e,a){return n("div",{key:a.id,staticClass:"multi-coin-input-container"},[n("label",{attrs:{for:"updateResolver"}},[t._v(t._s(a)+":")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"v.value"}],attrs:{placeholder:e.name+" address",type:"text",name:"updateResolver"},domProps:{value:e.value},on:{input:function(n){n.target.composing||t.$set(e,"value",n.target.value)}}}),n("i",{class:["validity-indication fa",t.isInvalidAddress(e)?"error fa-times-circle-o":"valid fa-check-circle-o"]}),n("i",{staticClass:"fa fa-lg fa-times",on:{click:function(){t.removeCoinInput(a)}}})])})),n("div",{staticClass:"multi-coin-submit-container"},[n("button",{class:[t.isValidAddresses?"":"disabled",t.isController?"":"disabled"],on:{click:function(e){return e.preventDefault(),t.checkAndSendCurrency(e)}}},[t._v(" "+t._s(t.$t("common.save"))+" ")])])],2)])]),n("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.textrecords",modifiers:{textrecords:!0}}],staticClass:"collapse-open-button",attrs:{variant:"primary"}},[n("p",[t._v(t._s(t.$t("ens.txt-record")))]),n("i",{staticClass:"when-open fa fa-angle-up fa-lg"}),n("i",{staticClass:"when-closed fa fa-angle-down fa-lg"})]),n("b-collapse",{staticClass:"collapse-content",attrs:{id:"textrecords",visible:!t.resolverMultiCoinSupport&&t.resolverTxtSupport,accordion:"manage-ens-accordion"}},[n("div",{staticClass:"form-container"},[n("form",{staticClass:"manage-multi-coin-form"},[n("div",{staticClass:"title-and-dropdown-container"},[n("h4",[t._v(t._s(t.$t("ens.txt-record"))+":")]),n("b-dd",{staticClass:"dropdown-button-2",attrs:{text:t._f("capitalize")(t.selectedText)}},t._l(Object.keys(t.txtRecords),(function(e,a){return n("b-dd-item",{key:e+a,on:{click:function(n){return t.addTxtInput(e)}}},[t._v(t._s(t._f("capitalize")(e)))])})),1)],1),t._l(t.txtRecordInputs,(function(e,a){return n("div",{key:a.id},[n("div",{staticClass:"multi-coin-input-container"},[n("label",{attrs:{for:"updateResolver"}},[t._v(t._s(t._f("capitalize")(a))+":")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.txtRecordInputs[a],expression:"txtRecordInputs[k]"},{name:"validate",rawName:"v-validate",value:t.getInputType(a),expression:"getInputType(k)"}],attrs:{placeholder:t._f("capitalize")(a),name:a,type:"text"},domProps:{value:t.txtRecordInputs[a]},on:{input:function(e){e.target.composing||t.$set(t.txtRecordInputs,a,e.target.value)}}}),n("i",{class:["validity-indication fa",t.txtRecordInputs[a]&&""!==t.txtRecordInputs[a]&&!t.errors.hasOwnProperty(""+a)&&t.validateTxtValue(a)?"valid fa-check-circle-o":"error fa-times-circle-o"]}),n("i",{staticClass:"fa fa-lg fa-times",on:{click:function(){t.removeTxtInput(a)}}})]),n("p",{directives:[{name:"show",rawName:"v-show",value:!t.validateTxtValue(a),expression:"!validateTxtValue(k)"}],staticClass:"text-error"},[t._v(" "+t._s(t.$t("ens.text-record-error",{value:t.txtRecordInputs[a],name:a}))+" ")])])})),n("div",{staticClass:"multi-coin-submit-container"},[n("button",{class:[t.validTextRecords?"disabled":"",t.isController?"":"disabled"],on:{click:function(e){return e.preventDefault(),t.checkAndSendTxtRecs(e)}}},[t._v(" "+t._s(t.$t("common.save"))+" ")])])],2)])]),n("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.transferens",modifiers:{transferens:!0}}],staticClass:"collapse-open-button",attrs:{variant:"primary"}},[n("p",[t._v(t._s(t.$t("ens.transfer-domain")))]),n("i",{staticClass:"when-open fa fa-angle-up fa-lg"}),n("i",{staticClass:"when-closed fa fa-angle-down fa-lg"})]),n("b-collapse",{staticClass:"collapse-content",attrs:{id:"transferens",visible:!t.resolverMultiCoinSupport&&!t.resolverTxtSupport,accordion:"manage-ens-accordion"}},[n("div",{staticClass:"form-container"},[n("form",{staticClass:"manage-form"},[n("div",{staticClass:"input-container"},[n("label",{attrs:{for:"transferEns"}},[t._v(t._s(t.$t("ens.transfer-to"))+":")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.transferTo,expression:"transferTo"}],attrs:{type:"text",name:"transferEns",placeholder:"0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D"},domProps:{value:t.transferTo},on:{input:function(e){e.target.composing||(t.transferTo=e.target.value)}}})]),n("div",{staticClass:"submit-container"},[n("button",{class:[t.isAddress(t.transferTo)?"":"disabled"],attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.transferDomain(t.transferTo)}}},[t._v(" "+t._s(t.$t("ens.transfer"))+" ")])])])])]),t.isDeedOwner&&t.hasDeed?n("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.redeemdeed",modifiers:{redeemdeed:!0}}],staticClass:"collapse-open-button",attrs:{variant:"primary"}},[n("p",[t._v(t._s(t.$t("ens.release-deed")))]),n("i",{staticClass:"when-open fa fa-angle-up fa-lg"}),n("i",{staticClass:"when-closed fa fa-angle-down fa-lg"})]):t._e(),t.isDeedOwner&&t.hasDeed?n("b-collapse",{staticClass:"collapse-content",attrs:{id:"redeemdeed",accordion:"manage-ens-accordion"}},[t.isDeedOwner&&t.hasDeed?n("div",{staticClass:"form-container"},[n("form",[n("h4",[t._v(" "+t._s(t.$t("ens.release-deed-confirmation",{deedValueEth:t.deedValueEth,network:t.network.type.name}))+" ")]),n("div",{staticClass:"submit-container"},[n("button",{attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.releaseDeed()}}},[t._v(" "+t._s(t.$t("ens.release-deed"))+" ")])])])]):t._e()]):t._e(),n("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.ipfs",modifiers:{ipfs:!0}}],staticClass:"collapse-open-button",attrs:{variant:"primary"}},[n("p",[t._v(t._s(t.$t("ens.content-hash")))]),n("i",{staticClass:"when-open fa fa-angle-up fa-lg"}),n("i",{staticClass:"when-closed fa fa-angle-down fa-lg"})]),n("b-collapse",{staticClass:"collapse-content",attrs:{id:"ipfs",accordion:"manage-ens-accordion"}},[t.ipfsProcessing?n("div",{staticClass:"ipfs-loading"},[n("i",{staticClass:"fa fa-lg fa-spinner fa-spin"}),n("h3",[t._v(t._s(t.$t("ens.ipfs-processing")))]),n("p",[t._v(t._s(t.$t("ens.ipfs-processing-description")))])]):n("div",{staticClass:"ipfs-content-container"},[t.validIpfs?n("div",{staticClass:"link-to-name"},[n("p",[t._v(" "+t._s(t.$t("ens.ipfs-check-website",{domainName:t.domainName}))+" "),n("a",{attrs:{href:"http://"+t.domainName+".link",target:"_blank",rel:"noopener noreferrer"}},[t._v(" "+t._s(t.domainName+".link")+" ")])])]):t._e(),n("form",{staticClass:"file-upload-form",attrs:{enctype:"multipart/form-data",novalidate:""}},[n("input",{ref:"zipInput",attrs:{type:"file",name:"file",accept:".zip"},on:{change:t.fileChange}})]),n("div",{staticClass:"form-container"},[n("form",{staticClass:"manage-form"},[n("div",{staticClass:"input-container"},[n("label",{attrs:{for:"transferEns"}},[n("span",[t._v(t._s(t.$t("ens.content-hash"))+":")]),n("p",{staticClass:"file-upload-text",on:{click:function(e){return e.preventDefault(),t.ipfsClick(e)}}},[t._v(" "+t._s(t.$t("ens.upload-my-website"))+" ")])]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.localContentHash,expression:"localContentHash"}],attrs:{type:"text",name:"transferEns",placeholder:"QmVHxRocoWgUChLEvfEyDuuD6qJ4PhdDL2dTLcpUy3dSC2"},domProps:{value:t.localContentHash},on:{input:function(e){e.target.composing||(t.localContentHash=e.target.value)}}})]),n("div",{staticClass:"submit-container"},[t.validIpfs?t._e():n("span",{staticClass:"text-error"},[t._v(t._s(t.$t("ens.error.empty-invalid-ipfs")))]),n("br"),n("button",{class:[t.validIpfs?"":"disabled"],attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.saveContentHash(t.localContentHash)}}},[t._v(" "+t._s(t.$t("ens.set-hash"))+" ")])])])])])]),n("interface-bottom-text",{attrs:{"link-text":t.$t("common.help-center"),question:t.$t("common.have-issues"),link:"https://howto.xinfin.org/XinFinWallet/features"}})],1)},s=[],i=(n("7db0"),n("4160"),n("caad"),n("d81d"),n("b0c0"),n("b64b"),n("2532"),n("159b"),n("5530")),r=n("539d"),o=n("b7d3"),c=n("2f62"),l=n("ce96"),d=n("1131"),u=n.n(d),p=n("3c35f"),f=n("b306"),v=n.n(f),m={components:{"interface-bottom-text":r["a"]},props:{domainName:{type:String,default:""},setMultiCoin:{type:Function,default:function(){}},setRecord:{type:Function,default:function(){}},transferDomain:{type:Function,default:function(){}},tld:{type:String,default:""},resolverMultiCoinSupport:{type:Boolean,default:!1},resolverTxtSupport:{type:Boolean,default:!1},supportedCoins:{type:Object,default:function(){}},setController:{type:Function,default:function(){}},txtRecords:{type:Object,default:function(){}},isController:{type:Boolean,default:!1},hasDeed:{type:Boolean,default:!1},isDeedOwner:{type:Boolean,default:!1},deedValue:{type:String,default:"0"},releaseDeed:{type:Function,default:function(){}},contentHash:{type:String,default:""},uploadFile:{type:Function,default:function(){}},saveContentHash:{type:Function,default:function(){}},ipfsProcessing:{type:Boolean,default:!1}},data:function(){var t=this.copySupported(),e={},n={};for(var a in p["a"].forEach((function(t){n[t.name]=t.validate})),t)t[a].hasOwnProperty("value")&&""===t[a].value&&delete t[a];for(var s in this.txtRecords)""!==this.txtRecords[s]&&(e[s]=this.txtRecords[s]);return{transferTo:"",multiCoinSupport:!1,isAddress:o["a"],currencyInputs:t,selectedCurrency:"ETH",selectedText:"Email",hasError:!1,txtRecordInputs:e,txtValidators:n,localContentHash:this.contentHash||""}},computed:Object(i["a"])(Object(i["a"])({},Object(c["c"])("main",["web3","account","network"])),{},{validIpfs:function(){return v.a.multihash(this.localContentHash)},deedValueEth:function(){return u.a.fromWei(this.deedValue,"ether")},isValidAddresses:function(){for(var t in this.currencyInputs){if(this.currencyInputs[t].id===this.currencyInputs.ETH.id&&""===this.currencyInputs[t].value)return!1;if(""!==this.currencyInputs[t].value&&!this.currencyInputs[t].validator.validate(this.currencyInputs[t].value))return!1}return!0},validTextRecords:function(){for(var t in this.txtRecordInputs)if(this.txtRecordInputs[t]&&""!==this.txtRecordInputs[t]&&!this.txtValidators[t](this.txtRecordInputs[t]))return!0;return!1}}),watch:{currencyInputs:{handler:function(t){this.currencyInputs=t},deep:!0},txtRecordInputs:{handler:function(t){this.txtRecordInputs=t},deep:!0}},mounted:function(){"."===this.domainName&&this.$router.push("/interface/dapps/manage-ens")},methods:{fileChange:function(t){var e=["application/zip","application/x-zip","application/octet-stream","application/x-zip-compressed"],n=e.find((function(e){return t.target.files[0].type===e||t.target.files[0].name.includes(".zip")}));return n?t.target.files[0].size<500?(this.$refs.zipInput.value="",void l["e"].responseHandler(this.$t("ens.warning.too-small"),l["e"].WARN)):t.target.files[0].size>5e7?(this.$refs.zipInput.value="",void l["e"].responseHandler(this.$t("ens.warning.too-big"),l["e"].WARN)):void this.uploadFile(t.target.files[0]):(this.$refs.zipInput.value="",void l["e"].responseHandler(this.$t("ens.warning.upload-zip"),l["e"].WARN))},ipfsClick:function(){var t=this.$refs.zipInput;t.value="",t.click()},isInvalidAddress:function(t){return t.id===this.supportedCoins.ETH.id&&""===t.value||""!==t.value&&!t.validator.validate(t.value)},getInputType:function(t){var e=p["a"].find((function(e){return e.name.toLowerCase()===t.toLowerCase()}));switch(e.type){case"url":return"required|url:require_protocol";case"email":return"email|required";default:return"required"}},validateTxtValue:function(t){return this.txtValidators[t](this.txtRecordInputs[t])},copySupported:function(){var t=u.a._.map(this.supportedCoins,u.a._.clone),e={};return t.forEach((function(t){e[t.symbol]=t})),e},addCurrencyInput:function(t){this.selectedCurrency=t;var e=this.copySupported(),n=Object.assign({},this.currencyInputs);n[t]?l["e"].responseHandler(this.$t("ens.currency-already-exists",{currency:t,domainName:this.domainName}),l["e"].WARN):(n[t]=e[t],this.currencyInputs=n)},addTxtInput:function(t){this.selectedText=t;var e=Object.assign({},this.txtRecordInputs);e[t]?l["e"].responseHandler(this.$t("ens.currency-already-exists",{txtRecord:t,domainName:this.domainName}),l["e"].WARN):(e[t]=this.txtRecordInputs[t],this.txtRecordInputs=e)},removeCoinInput:function(t){var e=Object.assign({},this.currencyInputs);e[t].value="",this.currencyInputs=e},removeTxtInput:function(t){var e=Object.assign({},this.txtRecordInputs);e[t]="",this.txtRecordInputs=e},checkAndSendTxtRecs:function(){if("."!==this.domainName){var t={},e=Object.assign({},this.txtRecordInputs),n=Object.assign({},this.txtRecords);Object.keys(n).forEach((function(a){e[a]&&n[a]!==e[a]&&(t[a]=e[a])})),Object.keys(t).length>0&&this.setRecord(t)}},checkAndSendCurrency:function(){if("."!==this.domainName){var t=[],e=Object.assign({},this.currencyInputs),n=Object.assign({},this.supportedCoins);Object.keys(n).forEach((function(a){e[a]&&n[a].value!==e[a].value&&t.push(e[a])})),t.length>0&&this.setMultiCoin(t)}}}},h=m,b=(n("5b51"),n("2877")),g=Object(b["a"])(h,a,s,!1,null,"ad1c91ee",null),C=g.exports},"3c35f":function(t,e,n){"use strict";n("99af"),n("caad"),n("c975"),n("4d63"),n("ac1f"),n("25f0"),n("2532");var a=n("7856"),s=(n("1276"),function(t){var e;return e=t.indexOf("://")>-1?t.split("/")[2]:t.split("/")[0],e=e.split(":")[0],e=e.split("?")[0],e}),i=function(t){if(!t)return"";var e=s(t),n=e.split("."),a=n.length;return a>2&&(e=n[a-2]+"."+n[a-1],2==n[a-2].length&&2==n[a-1].length&&(e=n[a-3]+"."+e)),e.toLowerCase()},r=function(t){var e=i(t),n=Object(a["a"])(e),s=new RegExp(/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/);return s.test(n.toLowerCase())},o=function(t){if(!t||""===t)return!1;var e=t.indexOf("@"),n=new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/);try{var s=Object(a["a"])(t.substr(0,e)),i=Object(a["a"])(t.substr(e+1,t.length));return n.test("".concat(s,"@").concat(i).toLowerCase())}catch(r){return n.test(t)}},c=function(t){return!(!t||""===t)&&"string"===typeof t},l=function(t){if(!t||""===t)return!1;var e=t.indexOf("@"),n=Object(a["a"])(t.substr(e+1,t.length));return!!c(n)&&!n.includes("@")},d=[{name:"email",type:"email",validate:o},{name:"url",type:"url",validate:r},{name:"avatar",type:"url",validate:r},{name:"description",type:"string",validate:c},{name:"notice",type:"string",validate:c},{name:"keywords",type:"string",validate:c},{name:"vnd.twitter",type:"string",validate:l},{name:"vnd.github",type:"string",validate:l}];e["a"]=d},"5b51":function(t,e,n){"use strict";var a=n("720b"),s=n.n(a);s.a},"720b":function(t,e,n){}}]);
//# sourceMappingURL=../sourcemaps/js/chunk-15e1e474.6754078a.js.map