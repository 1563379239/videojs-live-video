(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/gameRecord/gameRecord"],{"51e9":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{lists:[]}},onLoad:function(){this.getList(1,10)},onReachBottom:function(){var t=Math.ceil(this.lists.length/10)+1,e=10,n=this;n.getList(t,e)},onPullDownRefresh:function(){var e=1,n=10;this.lists.length&&(n=this.lists.length);this.getList(e,n),setTimeout(function(){t.stopPullDownRefresh()},1e3)},methods:{getList:function(e,n){var s=this;this.bus.request({url:this.bus.url+"/point/findQqUpdownScorePageList",method:"GET",data:{userId:this.bus.user.userId,current:e,size:n},success:function(e){s.lists=s.lists.concat(e.data.data.records),0==e.data.data.records.length&&t.showToast({title:"没有更多了"})}})}}};e.default=n}).call(this,n("6e42")["default"])},8739:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return s}),n.d(e,"b",function(){return u})},b5e0:function(t,e,n){"use strict";var s=n("d404"),u=n.n(s);u.a},c33b:function(t,e,n){"use strict";n.r(e);var s=n("8739"),u=n("d36e");for(var i in u)"default"!==i&&function(t){n.d(e,t,function(){return u[t]})}(i);n("b5e0");var o=n("2877"),a=Object(o["a"])(u["default"],s["a"],s["b"],!1,null,null,null);e["default"]=a.exports},d36e:function(t,e,n){"use strict";n.r(e);var s=n("51e9"),u=n.n(s);for(var i in s)"default"!==i&&function(t){n.d(e,t,function(){return s[t]})}(i);e["default"]=u.a},d404:function(t,e,n){},e77e:function(t,e,n){"use strict";(function(t){n("abc2"),n("921b");s(n("66fd"));var e=s(n("c33b"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["e77e","common/runtime","common/vendor"]]]);