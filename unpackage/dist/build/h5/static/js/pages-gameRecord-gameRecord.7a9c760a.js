(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-gameRecord-gameRecord"],{"1d3d":function(t,e,i){"use strict";i.r(e);var s=i("9186"),a=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);e["default"]=a.a},"36e3":function(t,e,i){"use strict";i.r(e);var s=i("7e5e"),a=i("1d3d");for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);i("a039");var o=i("2877"),r=Object(o["a"])(a["default"],s["a"],s["b"],!1,null,"0660839c",null);e["default"]=r.exports},"482d":function(t,e,i){var s=i("635e");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=i("4f06").default;a("1f4f4c4a",s,!0,{sourceMap:!1,shadowMode:!1})},"635e":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"*[data-v-0660839c]{-webkit-box-sizing:border-box;box-sizing:border-box}uni-page-body[data-v-0660839c]{background:#f3f5f7}.r-item[data-v-0660839c]{background:#fff;margin-top:%?20?%}.r-item>uni-view[data-v-0660839c]{border-bottom:%?1?% solid #f3f5f7}.header[data-v-0660839c]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:%?50?%;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.r-item .txt[data-v-0660839c]{height:%?70?%;line-height:%?70?%;color:#f0ad4e;font-size:%?30?%;font-weight:600;text-indent:%?40?%}.header>uni-view[data-v-0660839c]{text-align:center;height:%?50?%;line-height:%?50?%;font-size:%?32?%}.table[data-v-0660839c]{width:100%;padding:0!important}.table .tr[data-v-0660839c]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.tr .td[data-v-0660839c]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;border-right:1px solid #f3f5f7;font-size:%?32?%}.tr .td[data-v-0660839c]:last-child{border:none}.tr[data-v-0660839c]:first-child{border-bottom:1px solid #f3f5f7}body.?%PAGE?%[data-v-0660839c]{background:#f3f5f7}",""])},"7e5e":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"body"},t._l(t.lists,function(e,s){return i("v-uni-view",{key:s,staticClass:"r-item"},[i("v-uni-view",{staticClass:"header"},[i("v-uni-view",[t._v("编号:"+t._s(e.id))]),i("v-uni-view",[t._v(t._s(e.created_time))]),i("v-uni-view",[t._v(t._s(e.race_desc))])],1),i("v-uni-view",{staticClass:"txt"},[t._v(t._s(e.remark))]),i("v-uni-view",{staticClass:"table"},[i("v-uni-view",{staticClass:"tr"},[i("v-uni-view",{staticClass:"td"},[t._v("操作积分")]),i("v-uni-view",{staticClass:"td"},[t._v("开始积分")]),i("v-uni-view",{staticClass:"td"},[t._v("结束积分")])],1),i("v-uni-view",{staticClass:"tr"},[i("v-uni-view",{staticClass:"td"},[t._v(t._s(e.point))]),i("v-uni-view",{staticClass:"td"},[t._v(t._s(e.point_start))]),i("v-uni-view",{staticClass:"td"},[t._v(t._s(e.point_end))])],1)],1)],1)}),1)},a=[];i.d(e,"a",function(){return s}),i.d(e,"b",function(){return a})},9186:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{lists:[]}},onLoad:function(){this.getList(1,10)},onReachBottom:function(){var t=Math.ceil(this.lists.length/10)+1,e=10,i=this;i.getList(t,e)},onPullDownRefresh:function(){var t=1,e=10;this.lists.length&&(e=this.lists.length);this.getList(t,e),setTimeout(function(){uni.stopPullDownRefresh()},1e3)},methods:{getList:function(t,e){var i=this;this.bus.request({url:this.bus.url+"/point/findQqUpdownScorePageList",method:"GET",data:{userId:JSON.parse(sessionStorage.getItem("userInfo")).userId,current:t,size:e},success:function(t){i.lists=i.lists.concat(t.data.data.records),0==t.data.data.records.length&&uni.showToast({title:"没有更多了"})}})}}};e.default=s},a039:function(t,e,i){"use strict";var s=i("482d"),a=i.n(s);a.a}}]);