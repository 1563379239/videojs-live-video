(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-callcenter-callcenter"],{"0d10":function(t,e,a){"use strict";a.r(e);var n=a("9868"),i=a("bff7");for(var c in i)"default"!==c&&function(t){a.d(e,t,function(){return i[t]})}(c);a("8bf8");var l=a("2877"),r=Object(l["a"])(i["default"],n["a"],n["b"],!1,null,"590c3302",null);e["default"]=r.exports},1121:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{tel:"",qrCode:"",wxid:""}},onLoad:function(){this.getInfo()},methods:{callTel:function(t){var e=t.currentTarget.dataset.call;uni.makePhoneCall({phoneNumber:e})},getInfo:function(){var t=this;this.bus.request({url:this.bus.url+"/contact",method:"GET",data:{},success:function(e){"1"==e.data.status&&(t.tel=e.data.data.telephone,t.qrCode=t.bus.url+e.data.data.wechatCode,t.wxid=e.data.data.wechatNum)},fail:function(){},complete:function(){}})}}};e.default=n},"52aa":function(t,e,a){var n=a("9b17");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("71495d02",n,!0,{sourceMap:!1,shadowMode:!1})},"8bf8":function(t,e,a){"use strict";var n=a("52aa"),i=a.n(n);i.a},9868:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"kefuInfo"},[a("v-uni-view",{staticClass:"line1 center"},[a("v-uni-image",{staticClass:"kefu_img1",attrs:{src:"../../static/app/ic_launcher_round.png"}})],1),a("v-uni-view",{staticClass:"line2 center",attrs:{"data-call":t.tel},on:{click:function(e){e=t.$handleEvent(e),t.callTel(e)}}},[t._v("咨询电话: "+t._s(t.tel)),a("v-uni-image",{staticClass:"kefu_call",attrs:{src:"../../static/app/icon_phone.png"}})],1),a("v-uni-view",{staticClass:"blank"}),a("v-uni-view",{staticClass:"line4 center"},[a("v-uni-image",{staticClass:"kefu_qr",attrs:{src:t.qrCode}})],1),a("v-uni-view",{staticClass:"line5 center"},[t._v("当前版本:1.1.0")])],1)},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},"9b17":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".line1[data-v-590c3302]{margin-top:%?70?%;margin-bottom:%?50?%}.line3[data-v-590c3302]{margin-top:%?40?%;margin-bottom:%?70?%}.line5[data-v-590c3302]{margin-top:%?40?%}.kefu_img1[data-v-590c3302]{width:%?180?%;height:%?180?%}.kefu_call[data-v-590c3302]{width:%?40?%;height:%?40?%;margin-left:%?10?%}.blank[data-v-590c3302]{width:100%;height:%?50?%}.kefu_qr[data-v-590c3302]{width:%?200?%;height:%?200?%}.kefuInfo[data-v-590c3302]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;\r\n\t/* background-color: yellow; */-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:18px}.center[data-v-590c3302]{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}",""])},bff7:function(t,e,a){"use strict";a.r(e);var n=a("1121"),i=a.n(n);for(var c in n)"default"!==c&&function(t){a.d(e,t,function(){return n[t]})}(c);e["default"]=i.a}}]);