(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-316fe4ff"],{"0c87":function(e,t,n){},a19b:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return A}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"initial-state-unstoppable"},[n("div",{staticClass:"content-container"},[n("div",{staticClass:"title-container"},[n("div",{staticClass:"title"},[n("span",[e._v(" "+e._s(e.domainName)+" ")])])]),n("div",{staticClass:"content"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"loading-container"},[n("i",{staticClass:"fa fa-spinner fa-lg fa-spin"})]),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}]},[e._l(Object.keys(e.edit),(function(t){return n("div",{key:t,staticClass:"info-row"},[n("span",{staticClass:"info-title"},[e._v(e._s(t))]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.edit[t],expression:"edit[key]"}],class:[e.error[t]?"errored":""],attrs:{placeholder:e.$t("unstoppable.your-address"),type:"text",name:t},domProps:{value:e.edit[t]},on:{input:[function(n){n.target.composing||e.$set(e.edit,t,n.target.value)},e.addressChange]}})])})),n("div",{staticClass:"dropdown-container",on:{click:function(t){e.dropdownOpen=!e.dropdownOpen}}},[n("div",{staticClass:"dropdown-title"},[e._v(" "+e._s(e.$t("unstoppable.more-currencies"))+" ")]),n("div",{staticClass:"dropdown-open-button"},[e.dropdownOpen?e._e():n("i",{staticClass:"fa fa-chevron-down",attrs:{"aria-hidden":"true"}}),e.dropdownOpen?n("i",{staticClass:"fa fa-chevron-up",attrs:{"aria-hidden":"true"}}):e._e()]),e.dropdownOpen?n("div",{staticClass:"dropdown-list-box"},[n("ul",e._l(e.additionalRecords,(function(t){return n("li",{key:t,on:{click:function(n){return e.handleAddRecord(t)}}},[n("div",[n("p",[e._v(" "+e._s(t)+" ")])])])})),0)]):e._e()]),n("div",{staticClass:"save-button-container"},[n("button",{class:[e.canSave?"":"disabled"],on:{click:function(t){return e.handleSave()}}},[e._v(" "+e._s(e.$t("unstoppable.save-changes"))+" ")])])],2)])]),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],staticClass:"ipfs-container"},[e.ipfsProcessing?n("div",{staticClass:"ipfs-loading-container"},[n("i",{staticClass:"fa fa-lg fa-spinner fa-spin"}),n("h3",[e._v(e._s(e.$t("unstoppable.ipfs.processing")))]),n("p",[e._v(e._s(e.$t("unstoppable.ipfs.processing-description")))])]):n("div",[n("p",{directives:[{name:"show",rawName:"v-show",value:e.validIpfs,expression:"validIpfs"}]},[e._v(" "+e._s(e.$t("unstoppable.ipfs.see-website",{domainName:e.domainName}))+" ")]),n("div",[n("div",{staticClass:"label-container"},[n("form",{staticClass:"file-upload-container",attrs:{enctype:"multipart/form-data",novalidate:""}},[n("input",{ref:"zipInput",attrs:{type:"file",name:"file",accept:".zip"},on:{change:e.fileChange}})]),n("label",{staticClass:"info-title"},[e._v(e._s(e.$t("unstoppable.ipfs.hash")))]),n("p",{staticClass:"upload-zip",on:{click:e.ipfsClick}},[e._v(" "+e._s(e.$t("unstoppable.ipfs.upload"))+" ")])]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.ipfsHash,expression:"ipfsHash"}],attrs:{placeholder:"QmWXdjNC362aPDtwHPUE9o2VMqPeNeCQuTBTv1NsKtwypg",type:"text"},domProps:{value:e.ipfsHash},on:{input:function(t){t.target.composing||(e.ipfsHash=t.target.value)}}})]),n("div",{staticClass:"save-button-container save-ipfs-hash"},[e.validIpfs?e._e():n("span",{staticClass:"text-error"},[e._v(e._s(e.$t("unstoppable.error.empty-invalid-ipfs")))]),n("br"),n("button",{class:[e.validIpfs?"":"disabled"],on:{click:function(t){return e.saveIpfsHash(e.ipfsHash)}}},[e._v(" "+e._s(e.$t("unstoppable.ipfs.set-hash"))+" ")])])])]),n("interface-bottom-text",{attrs:{"link-text":e.$t("common.help-center"),question:e.$t("common.have-issues"),link:"https://howto.xinfin.org/XinFinWallet/features"}})],1)},s=[],i=(n("cb29"),n("7db0"),n("caad"),n("c975"),n("a434"),n("b0c0"),n("b64b"),n("d3b7"),n("07ac"),n("2532"),n("ddb0"),n("3835")),r=n("b85c"),p=(n("96cf"),n("1da1")),o=n("5530"),d=n("539d"),y=n("2f62"),u=[{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"string",name:"uri",type:"string"}],name:"NewURI",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"string",name:"prefix",type:"string"}],name:"NewURIPrefix",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"address",name:"to",type:"address"}],name:"Resolve",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"resolver",type:"address"},{indexed:!0,internalType:"uint256",name:"updateId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Sync",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{constant:!1,inputs:[{internalType:"address",name:"account",type:"address"}],name:"addController",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"burn",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"label",type:"string"}],name:"burnChild",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"label",type:"string"}],name:"childIdOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"pure",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"controlledBurn",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"label",type:"string"}],name:"controlledMintChild",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"controlledResolveTo",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"label",type:"string"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"controlledSafeMintChild",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"controlledSafeTransferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"string",name:"prefix",type:"string"}],name:"controlledSetTokenURIPrefix",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"controlledTransferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"isApprovedOrOwner",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"account",type:"address"}],name:"isController",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"label",type:"string"}],name:"mintChild",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"renounceController",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"resolveTo",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"resolverOf",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"root",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"pure",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"label",type:"string"}],name:"safeMintChild",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"label",type:"string"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeMintChild",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"label",type:"string"}],name:"safeTransferFromChild",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"label",type:"string"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFromChild",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"setOwner",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"updateId",type:"uint256"}],name:"sync",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"label",type:"string"}],name:"transferFromChild",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}],l=[{inputs:[{internalType:"contract Registry",name:"registry",type:"address"},{internalType:"contract MintingController",name:"mintingController",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"string",name:"keyIndex",type:"string"},{indexed:!1,internalType:"string",name:"key",type:"string"}],name:"NewKey",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ResetRecords",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"string",name:"keyIndex",type:"string"},{indexed:!0,internalType:"string",name:"valueIndex",type:"string"},{indexed:!1,internalType:"string",name:"key",type:"string"},{indexed:!1,internalType:"string",name:"value",type:"string"}],name:"Set",type:"event"},{constant:!0,inputs:[{internalType:"string",name:"key",type:"string"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"get",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"keyHash",type:"uint256"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getByHash",outputs:[{internalType:"string",name:"key",type:"string"},{internalType:"string",name:"value",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"string[]",name:"keys",type:"string[]"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getMany",outputs:[{internalType:"string[]",name:"",type:"string[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint256[]",name:"keyHashes",type:"uint256[]"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getManyByHash",outputs:[{internalType:"string[]",name:"keys",type:"string[]"},{internalType:"string[]",name:"values",type:"string[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"keyHash",type:"uint256"}],name:"hashToKey",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint256[]",name:"hashes",type:"uint256[]"}],name:"hashesToKeys",outputs:[{internalType:"string[]",name:"",type:"string[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"nonceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"string[]",name:"keys",type:"string[]"},{internalType:"string[]",name:"values",type:"string[]"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"preconfigure",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"string[]",name:"keys",type:"string[]"},{internalType:"string[]",name:"values",type:"string[]"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"reconfigure",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"string[]",name:"keys",type:"string[]"},{internalType:"string[]",name:"values",type:"string[]"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"signature",type:"bytes"}],name:"reconfigureFor",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"registry",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"reset",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"signature",type:"bytes"}],name:"resetFor",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"string",name:"key",type:"string"},{internalType:"string",name:"value",type:"string"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"set",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"string",name:"key",type:"string"},{internalType:"string",name:"value",type:"string"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"signature",type:"bytes"}],name:"setFor",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"string[]",name:"keys",type:"string[]"},{internalType:"string[]",name:"values",type:"string[]"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"setMany",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"string[]",name:"keys",type:"string[]"},{internalType:"string[]",name:"values",type:"string[]"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"signature",type:"bytes"}],name:"setManyFor",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}],c=n("2c0b"),m=(n("4d63"),n("ac1f"),n("25f0"),n("2ca0"),n("498a"),{ETH:"crypto.ETH.address",BTC:"crypto.BTC.address",ZIL:"crypto.ZIL.address",LTC:"crypto.LTC.address",ETC:"crypto.ETC.address",EQL:"crypto.EQL.address",LINK:"crypto.LINK.address",USDC:"crypto.USDC.address",BAT:"crypto.BAT.address",REP:"crypto.REP.address",ZRX:"crypto.ZRX.address",DAI:"crypto.DAI.address",BCH:"crypto.BCH.address",XMR:"crypto.XMR.address",DASH:"crypto.DASH.address",NEO:"crypto.NEO.address",SWTH:"crypto.SWTH.address",DOGE:"crypto.DOGE.address",XRP:"crypto.XRP.address",ZEC:"crypto.ZEC.address",ADA:"crypto.ADA.address",EOS:"crypto.EOS.address",XLM:"crypto.XLM.address",BNB:"crypto.BNB.address",BTG:"crypto.BTG.address",NANO:"crypto.NANO.address",WAVES:"crypto.WAVES.address",KMD:"crypto.KMD.address",AE:"crypto.AE.address",RSK:"crypto.RSK.address",WAN:"crypto.WAN.address",STRAT:"crypto.STRAT.address",UBQ:"crypto.UBQ.address",XTZ:"crypto.XTZ.address",IOTA:"crypto.IOTA.address",VET:"crypto.VET.address",QTUM:"crypto.QTUM.address",ICX:"crypto.ICX.address",DGB:"crypto.DGB.address",XZC:"crypto.XZC.address",BURST:"crypto.BURST.address",DCR:"crypto.DCR.address",XEM:"crypto.XEM.address",LSK:"crypto.LSK.address",ATOM:"crypto.ATOM.address",ONG:"crypto.ONG.address",ONT:"crypto.ONT.address",SMART:"crypto.SMART.address",TPAY:"crypto.TPAY.address",GRS:"crypto.GRS.address",BSV:"crypto.BSV.address",GAS:"crypto.GAS.address",TRX:"crypto.TRX.address",VTHO:"crypto.VTHO.address",BCD:"crypto.BCD.address",BTT:"crypto.BTT.address",KIN:"crypto.KIN.address",RVN:"crypto.RVN.address",ARK:"crypto.ARK.address",XVG:"crypto.XVG.address",ALGO:"crypto.ALGO.address",NEBL:"crypto.NEBL.address",XPM:"crypto.XPM.address",ONE:"crypto.ONE.address",BNTY:"crypto.BNTY.address"}),b={BTC:new RegExp("^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$"),ZIL:new RegExp("^zil[a-zA-Z0-9]{39}$"),ETH:new RegExp("^0x[a-fA-F0-9]{40}$"),ETC:new RegExp("^0x[a-fA-F0-9]{40}$"),LINK:new RegExp("^0x[a-fA-F0-9]{40}$"),USDC:new RegExp("^0x[a-fA-F0-9]{40}$"),BAT:new RegExp("^0x[a-fA-F0-9]{40}$"),REP:new RegExp("^0x[a-fA-F0-9]{40}$"),ZRX:new RegExp("^0x[a-fA-F0-9]{40}$"),EQL:new RegExp("^bnb[0-9a-z]{39}$"),DAI:new RegExp("^0x[a-fA-F0-9]{40}$"),BNTY:new RegExp("^0x[a-fA-F0-9]{40}$"),BCH:new RegExp("^[13][a-km-zA-HJ-NP-Z1-9]{33}$|^((bitcoincash|bchreg|bchtest):)?(q|p)[a-z0-9]{41}$|^((BITCOINCASH:)?(Q|P)[A-Z0-9]{41})$"),XMR:new RegExp("^4[0-9AB][1-9A-HJ-NP-Za-km-z]{93}$"),DASH:new RegExp("^X[1-9A-HJ-NP-Za-km-z]{33}$"),NEO:new RegExp("^A[0-9a-zA-Z]{33}$"),SWTH:new RegExp("^A[0-9a-zA-Z]{33}$"),DOGE:new RegExp("^D[5-9A-HJ-NP-U]{1}[1-9A-HJ-NP-Za-km-z]{32}$"),XRP:new RegExp("^r[1-9a-km-zA-HJ-NP-Z]{24,34}$"),ZEC:new RegExp("^z([a-zA-Z0-9]){94}$|^zs([a-zA-Z0-9]){75}$|^t([a-zA-Z0-9]){34}$"),ADA:new RegExp("^[1-9a-km-zA-HJ-NP-Z]{104}$|^A[1-9A-HJ-NP-Za-km-z]{58}$"),EOS:new RegExp("^[a-z][a-z1-5.]{10}[a-z1-5]$"),XLM:new RegExp("^G[A-Z2-7]{55}$"),BNB:new RegExp("^bnb[0-9a-z]{39}$"),BTG:new RegExp("^[GA][a-km-zA-HJ-NP-Z1-9]{33}$"),NANO:new RegExp("^nano_[1-9a-z]{60}$"),WAVES:new RegExp("^3[a-km-zA-HJ-NP-Z1-9]{34}$"),KMD:new RegExp("^R[a-km-zA-Z1-9]{33}$"),AE:new RegExp("^ak_[a-km-zA-Z1-9]{48,52}$"),RSK:new RegExp("^0x[a-fA-F0-9]{40}$"),WAN:new RegExp("^0x[a-fA-F0-9]{40}$"),STRAT:new RegExp("^S[a-km-zA-HJ-NP-Z1-9]{33}$"),UBQ:new RegExp("^0x[a-km-zA-HJ-NP-Z0-9]{40}$"),XTZ:new RegExp("^(tz|KT)[a-km-zA-HJ-NP-Z1-9]{34}$"),IOTA:new RegExp("^[A-Z0-9]{90}$"),VET:new RegExp("^0x[a-km-zA-HJ-NP-Z0-9]{40}$"),QTUM:new RegExp("^Q[a-km-zA-HJ-NP-Z1-9]{33}$"),ICX:new RegExp("^[a-km-zA-HJ-NP-Z0-9]{42}$"),DGB:new RegExp("^D[a-km-zA-HJ-NP-Z1-9]{33}$"),XZC:new RegExp("^[a-km-zA-HJ-NP-Z1-9]{34}$"),BURST:new RegExp("^BURST-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{5}"),ATOM:new RegExp("^(cosmos)1([qpzry9x8gf2tvdw0s3jn54khce6mua7l]+)$"),XEM:new RegExp("^N[ABCDEFGHIJKLMNOPQRSTUVWXYZ234567]{39}$"),LSK:new RegExp("/^d{1,21}[L]$/"),ONG:new RegExp("^[a-zA-Z0-9]{34}$"),ONT:new RegExp("^[a-zA-Z0-9]{34}$"),ONE:new RegExp("^one[a-zA-Z0-9]{39}$"),SMART:new RegExp("^[a-zA-Z0-9]{34}$"),TPAY:new RegExp("^[a-zA-Z0-9]{34}$"),GRS:new RegExp("^[a-zA-Z0-9]{34}$"),BSV:new RegExp("^[a-zA-Z0-9]{34}$|^bitcoincash:[a-zA-Z0-9]{42}$"),TRX:new RegExp("^[a-zA-Z0-9]{34}$"),VTHO:new RegExp("^[a-zA-Z0-9]{42}$"),BCD:new RegExp("^[a-zA-Z0-9]{34}$"),BTT:new RegExp("^[a-zA-Z0-9]{34}$"),KIN:new RegExp("^[a-zA-Z0-9]{56}$"),RVN:new RegExp("^[a-zA-Z0-9]{34}$"),ARK:new RegExp("^[a-zA-Z0-9]{34}$"),XVG:new RegExp("^[a-zA-Z0-9]{34}$"),ALGO:new RegExp("^[a-zA-Z0-9]{58}$"),NEBL:new RegExp("^[a-zA-Z0-9]{34}$"),XPM:new RegExp("^[a-zA-Z0-9]{34}$")},f=function(e,t){if(t=t.trim(),t){if("LTC"===e)return t.startsWith("ltc1")&&43===t.length;if(b[e]&&!b[e].test(t))return!1}return!0},g=n("ce96"),T=n("b306"),h=n.n(T),v={components:{"interface-bottom-text":d["a"]},props:{account:{type:Object,default:function(){}},domainName:{type:String,default:""},web3:{type:Object,default:function(){}}},data:function(){return{domains:[],loading:!0,records:{},edit:{},error:{},dropdownOpen:!1,additionalRecords:[],canSave:!1,ipfsHash:"",ipfsProcessing:!1}},computed:Object(o["a"])(Object(o["a"])({},Object(y["c"])("main",["online"])),{},{validIpfs:function(){return h.a.multihash(this.ipfsHash)}}),mounted:function(){this.getRecords()},methods:{fileChange:function(e){this.ipfsProcessing=!0;var t=["application/zip","application/x-zip","application/octet-stream","application/x-zip-compressed"],n=t.find((function(t){return e.target.files[0].type===t||e.target.files[0].name.includes(".zip")}));return n?e.target.files[0].size<500?(this.ipfsProcessing=!1,this.$refs.zipInput.value="",void g["e"].responseHandler(this.$t("unstoppable.warning.too-small"),g["e"].WARN)):e.target.files[0].size>5e4?(this.ipfsProcessing=!1,this.$refs.zipInput.value="",void g["e"].responseHandler(this.$t("unstoppable.warning.too-big"),g["e"].WARN)):void this.uploadZip(e.target.files[0]):(this.$refs.zipInput.value="",void g["e"].responseHandler(this.$t("unstoppable.warning.upload-zip"),g["e"].WARN))},uploadZip:function(e){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function n(){var a,s,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=new FormData,n.prev=1,n.next=4,fetch("https://swap.mewapi.io/ipfs",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({method:"getUploadUrl"})}).then((function(e){return e.json()}));case 4:for(i in s=n.sent,s.body.fields)a.append(i,s.body.fields[i]);a.append("file",e),fetch(s.body.signedUrl,{method:"POST",headers:{"Content-Length":e.size},body:a}).then((function(e){if(!e.ok)return t.ipfsProcessing=!1,void g["e"].responseHandler(t.$t("unstoppable.error.upload-error"),g["e"].ERROR);t.getHashFromFile(s.body.hashResponse)})),n.next=14;break;case 10:n.prev=10,n.t0=n["catch"](1),t.ipfsProcessing=!1,g["e"].responseHandler(n.t0,g["e"].ERROR);case 14:case"end":return n.stop()}}),n,null,[[1,10]])})))()},getHashFromFile:function(e){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://swap.mewapi.io/ipfs",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({method:"uploadComplete",hash:e})}).then((function(e){return e.json()})).catch((function(e){t.ipfsProcessing=!1,g["e"].responseHandler(e,g["e"].ERROR)}));case 3:a=n.sent,a.error?g["e"].responseHandler(t.$t("unstoppable.ipfs.error-fetching-hash"),g["e"].ERROR):t.saveIpfsHash(a),n.next=11;break;case 7:n.prev=7,n.t0=n["catch"](0),t.ipfsProcessing=!1,g["e"].responseHandler(n.t0,g["e"].ERROR);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))()},saveIpfsHash:function(e){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function n(){var a,s,i,r,p;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.ipfsProcessing=!0,a=Object(c["hash"])(t.domainName),s=new t.web3.eth.Contract(u,"0xd1e5b0ff1287aa9f9a268759062e4ab08b9dacbe"),n.next=5,t.getResolverAddress(s,a);case 5:if(i=n.sent,i){n.next=8;break}throw new Error(t.$t("unstoppable.error.no-resolver-set"));case 8:r=new t.web3.eth.Contract(l,i);try{p={from:t.account.address,to:i,data:r.methods.set("ipfs.html.value",e,a).encodeABI(),value:0},t.web3.eth.sendTransaction(p).then((function(){t.ipfsHash=e,t.ipfsProcessing=!1}))}catch(o){t.ipfsProcessing=!1,g["e"].responseHandler(o,g["e"].ERROR)}case 10:case"end":return n.stop()}}),n)})))()},ipfsClick:function(){var e=this.$refs.zipInput;e.value="",e.click()},getResolverAddress:function(e,t){return Object(p["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.abrupt("return",e.methods.resolverOf(t).call().catch((function(){return null})));case 1:case"end":return n.stop()}}),n)})))()},getRecords:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var n,a,s,p,o,d,y,b,f,g,T,h,v,w,R;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=[],t.prev=1,a=Object(c["hash"])(e.domainName),s=new e.web3.eth.Contract(u,"0xd1e5b0ff1287aa9f9a268759062e4ab08b9dacbe"),t.next=6,e.getResolverAddress(s,a);case 6:if(p=t.sent,p){t.next=9;break}throw new Error(e.$t("unstoppable.error.no-resolver-set"));case 9:return o=new e.web3.eth.Contract(l,p),t.next=12,o.methods.getMany(Object.values(m),a).call();case 12:return n=t.sent,t.next=15,o.methods.get("ipfs.html.value",a).call();case 15:d=t.sent,e.ipfsHash=d&&""!==d?d:"",t.next=24;break;case 19:t.prev=19,t.t0=t["catch"](1),n=new Array(65).fill(""),e.ipfsHash="",e.loading=!1;case 24:e.additionalRecords=[],e.edit={},e.records={},y=Object(r["a"])(Object.keys(m).entries());try{for(y.s();!(b=y.n()).done;)f=Object(i["a"])(b.value,2),g=f[0],T=f[1],n[g]?(e.records[T]=n[g],e.edit[T]=n[g]):e.additionalRecords.push(T)}catch(x){y.e(x)}finally{y.f()}for(h=["ETH","BTC","LTC","ZIL"],v=0,w=h;v<w.length;v++)R=w[v],e.edit[R]||(e.edit[R]="",e.records[R]="");e.additionalRecords.sort(),e.loading=!1;case 33:case"end":return t.stop()}}),t,null,[[1,19]])})))()},handleAddRecord:function(e){this.dropdownOpen=!1,this.edit[e]="",this.records[e]="",this.additionalRecords.splice(this.additionalRecords.indexOf(e),1),this.additionalRecords.sort(),this.dropdownOpen=!this.dropdownOpen},addressChange:function(e){var t=e.target.name,n=e.target.value;n&&!f(t,n)?this.error[t]=!0:this.error[t]=!1,this.canSave=!1;for(var a=0,s=Object.keys(this.edit);a<s.length;a++){var i=s[a];if(this.error[i])return void(this.canSave=!1);this.edit[i]!==this.records[i]&&(this.canSave=!0)}},handleSave:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var n,a,s,i,r,p,o,d,y;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,n=Object(c["hash"])(e.domainName),a=new e.web3.eth.Contract(u,"0xd1e5b0ff1287aa9f9a268759062e4ab08b9dacbe"),t.next=5,e.getResolverAddress(a,n);case 5:for(s=t.sent,i=[],r=[],p=0,o=Object.keys(e.edit);p<o.length;p++)d=o[p],e.edit[d]!==e.records[d]&&(i.push(m[d]||d),r.push(e.edit[d]));if(y=new e.web3.eth.Contract(l,s||"0xEf31d4Eb54A743a6d665D067A374cD64CBD71ee3"),s){t.next=13;break}return t.next=13,a.methods.resolveTo(y.options.address,n).send({from:e.account.address}).on("error",(function(){e.loading=!1,e.getRecords()}));case 13:return t.next=15,y.methods.setMany(i,r,n).send({from:e.account.address}).on("confirmation",(function(t){4===t&&(e.loading=!1,e.getRecords())})).on("error",(function(){e.loading=!1,e.getRecords()}));case 15:case"end":return t.stop()}}),t)})))()}}},w=v,R=(n("b5e5"),n("2877")),x=Object(R["a"])(w,a,s,!1,null,"0d87f1e6",null),A=x.exports},b5e5:function(e,t,n){"use strict";var a=n("0c87"),s=n.n(a);s.a}}]);
//# sourceMappingURL=../sourcemaps/js/chunk-316fe4ff.b79a1f8c.js.map