(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9f3dc600"],{4221:function(n,t,e){},c19c:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return f}));var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"initial-state-unstoppable"},[e("div",{staticClass:"content-container"},[e("div",{staticClass:"title-container"},[e("div",{staticClass:"title"},[e("span",[n._v(" "+n._s(n.$t("unstoppable.your-crypto-domains"))+" ")])])]),e("div",{staticClass:"content"},[e("div",{directives:[{name:"show",rawName:"v-show",value:!n.loading&&(!n.domains||!n.domains.length),expression:"!loading && (!domains || !domains.length)"}],staticClass:"no-domains"},[n._v(" "+n._s(n.$t("unstoppable.no-crypto-domains-one"))+" "),e("span",{staticClass:"link",on:{click:function(t){return n.handleBuyClick()}}},[n._v(" "+n._s(n.$t("unstoppable.no-crypto-domains-two")))])]),e("div",{directives:[{name:"show",rawName:"v-show",value:n.loading,expression:"loading"}],staticClass:"loading-container"},[e("i",{staticClass:"fa fa-spinner fa-lg fa-spin"})]),n._l(n.domains,(function(t){return e("div",{directives:[{name:"show",rawName:"v-show",value:!n.loading,expression:"!loading"}],key:t,staticClass:"domain-row"},[e("div",{staticClass:"name"},[n._v(n._s(t))]),e("button",{staticClass:"button",on:{click:function(e){return n.setDomain(t)}}},[n._v("Manage")])])}))],2)]),e("interface-bottom-text",{attrs:{"link-text":n.$t("common.help-center"),question:n.$t("common.have-issues"),link:"https://howto.xinfin.org/XinFinWallet/features"}})],1)},s=[],i=(e("d81d"),e("d3b7"),e("96cf"),e("1da1")),o=e("5530"),c=e("539d"),r=e("2f62"),u=e("ce96"),l={components:{"interface-bottom-text":c["a"]},props:{account:{type:Object,default:function(){}},setDomain:{type:Function,default:function(){}}},data:function(){return{domains:[],loading:!0}},computed:Object(o["a"])({},Object(r["c"])("main",["online"])),mounted:function(){this.setDomain(""),this.online&&this.getDomains()},methods:{getDomains:function(){var n=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://unstoppabledomains.com/api/zns-domains/".concat(n.account.address)).then((function(n){if(200===n.status)return n.json();throw new Error("Failed to fetch crypto domains")})).then((function(n){var t=n.domains;return t.map((function(n){return n.label+"."+n.extension}))})).catch((function(n){u["e"].responseHandler(n,u["e"].ERROR)}));case 2:e=t.sent,n.domains=e,n.loading=!1;case 5:case"end":return t.stop()}}),t)})))()},handleBuyClick:function(){this.$router.push("/interface/dapps/unstoppable")}}},d=l,p=(e("e355"),e("2877")),m=Object(p["a"])(d,a,s,!1,null,"1492b24f",null),f=m.exports},e355:function(n,t,e){"use strict";var a=e("4221"),s=e.n(a);s.a}}]);
//# sourceMappingURL=../sourcemaps/js/chunk-9f3dc600.458ebb2f.js.map