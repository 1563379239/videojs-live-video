(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{5824:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={onLaunch:function(){console.log(e("App Launch"," at App.vue:4"))},onShow:function(){console.log(e("App Show"," at App.vue:7"))},onHide:function(){console.log(e("App Hide"," at App.vue:10"))}};n.default=t}).call(this,t("0de9")["default"])},"5aa6":function(e,n,t){"use strict";t.r(n);var o=t("89b9");for(var a in o)"default"!==a&&function(e){t.d(n,e,function(){return o[e]})}(a);t("f93a");var r,u,l=t("2877"),c=Object(l["a"])(o["default"],r,u,!1,null,null,null);n["default"]=c.exports},"824a":function(e,n,t){},"89b9":function(e,n,t){"use strict";t.r(n);var o=t("5824"),a=t.n(o);for(var r in o)"default"!==r&&function(e){t.d(n,e,function(){return o[e]})}(r);n["default"]=a.a},9530:function(e,n,t){"use strict";(function(e,n,o){t("abc2"),t("921b");var a=u(t("66fd")),r=u(t("5aa6"));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){c(e,n,t[n])})}return e}function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}a.default.config.productionTip=!1;var i={};a.default.prototype.bus=new a.default({data:{user:{userId:5,proxy:0},login:{},url:"http://139.9.122.163:8081"},methods:{request:function(t){var o=t.success,a=t.fail,r=t.complete;t.success=function(a){console.log(e(JSON.stringify(a)," at main.js:27")),o&&(a.header&&(console.log(e("res.heaeder=========",a.header," at main.js:30")),i=a.header,n.getStorageSync("token")&&(t.header["x-auth-token"]=n.getStorageSync("token"))),o(a))},t.fail=function(n){a&&(console.log(e("fail---------"," at main.js:42")),a(n))},t.complete=function(o){console.log(e("-----------------------------------------------------------E"," at main.js:48")),r&&(console.log(e("complete-----",o.header," at main.js:50")),r(o)),t.hideLoading||n.hideLoading()},t.header||(t.header=i,n.getStorageSync("token")&&(t.header["x-auth-token"]=n.getStorageSync("token"))),console.log(e("-----------------------------------------------------------S"," at main.js:68")),console.log(e("url="+t.url," at main.js:69")),console.log(e("header="+JSON.stringify(t.header)," at main.js:70")),console.log(e("data="+JSON.stringify(t.data)," at main.js:71")),t.hideLoading||n.showLoading({title:"加载中"}),n.request(t)}}}),r.default.mpType="app";var f=new a.default(l({},r.default));o(f).$mount()}).call(this,t("0de9")["default"],t("6e42")["default"],t("6e42")["createApp"])},f93a:function(e,n,t){"use strict";var o=t("824a"),a=t.n(o);a.a}},[["9530","common/runtime","common/vendor"]]]);