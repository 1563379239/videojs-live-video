(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/me"],{2250:function(e,n,a){"use strict";a.r(n);var u=a("6018"),i=a.n(u);for(var t in u)"default"!==t&&function(e){a.d(n,e,function(){return u[e]})}(t);n["default"]=i.a},"5ed2":function(e,n,a){},6018:function(e,n,a){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=function(){return a.e("components/uni-list/uni-list").then(a.bind(null,"9085"))},i=function(){return a.e("components/uni-list-item/uni-list-item").then(a.bind(null,"4b08"))},t=function(){return a.e("components/uni-collapse/uni-collapse").then(a.bind(null,"d1e4"))},s=function(){return a.e("components/uni-collapse-item/uni-collapse-item").then(a.bind(null,"cdf7"))},o={data:function(){return{userId:this.bus.user.userId,user_score:this.bus.user.user_score,name:this.bus.user.name,proxy:this.bus.user.proxy}},methods:{gotoPage:function(n){switch(n){case 1:e.navigateTo({url:"/pages/youxiajilu/youxiajilu"});break;case 2:e.navigateTo({url:"/pages/youxitongji/youxitongji"});break;case 3:e.navigateTo({url:"/pages/shangxiafenjilu/shangxiafenjilu"});break;case 4:e.navigateTo({url:"/pages/xieyi/xieyi"});break;case 5:e.navigateTo({url:"/pages/xiugaimima/xiugaimima"});break;case 6:e.switchTab({url:"/pages/callcenter/callcenter"});break;case 7:this.loginOut();break;case 8:e.navigateTo({url:"/pages/huiYuanChaXun/huiYuanChaXun"});break;case 9:e.navigateTo({url:"/pages/chuangJianHuiYuan/chuangJianHuiYuan"});break;case 10:e.navigateTo({url:"/pages/huiYuanChongZhiMiMa/huiYuanChongZhiMiMa"});break;case 11:e.navigateTo({url:"/pages/HuiYuanChongZhi/HuiYuanChongZhi"});break;case 12:e.navigateTo({url:"/pages/huiYuanJiFenLiuShui/huiYuanJiFenLiuShui"});break;case 13:e.navigateTo({url:"/pages/gameRecord/gameRecord"});break;case 14:e.navigateTo({url:"/pages/youxitongji1/youxitongji1"});break;case 15:e.navigateTo({url:"/pages/centRecord/centRecord"});break;case 16:e.navigateTo({url:"/pages/childrecord/childrecord"});break;case 17:e.navigateTo({url:"/pages/dlcentRecord/dlcentRecord"});break;case 18:e.navigateTo({url:"/pages/vipyouxitongji/vipyouxitongji"});break;default:break}},loginOut:function(){var n=this;this.bus.request({url:this.bus.url+"/user/logout",method:"GET",header:{"content-type":"application/x-www-form-urlencoded"},data:this.bus.login,success:function(a){a=a.data,"1"==a.status?(n.bus.login={},n.bus.user={},e.redirectTo({url:"/pages/login/login"})):e.showToast({title:a.errMsg,duration:2e3,icon:"none"})},fail:function(){},complete:function(){e.hideLoading()}})}},components:{uniList:u,uniListItem:i,uniCollapse:t,uniCollapseItem:s},onShow:function(){this.userId=this.bus.user.userId,this.user_score=this.bus.user.user_score,this.name=this.bus.user.name}};n.default=o}).call(this,a("6e42")["default"])},"6bbb":function(e,n,a){"use strict";a.r(n);var u=a("d440"),i=a("2250");for(var t in i)"default"!==t&&function(e){a.d(n,e,function(){return i[e]})}(t);a("e734");var s=a("2877"),o=Object(s["a"])(i["default"],u["a"],u["b"],!1,null,null,null);n["default"]=o.exports},d2f3:function(e,n,a){"use strict";(function(e){a("abc2"),a("921b");u(a("66fd"));var n=u(a("6bbb"));function u(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,a("6e42")["createPage"])},d440:function(e,n,a){"use strict";var u=function(){var e=this,n=e.$createElement;e._self._c},i=[];a.d(n,"a",function(){return u}),a.d(n,"b",function(){return i})},e734:function(e,n,a){"use strict";var u=a("5ed2"),i=a.n(u);i.a}},[["d2f3","common/runtime","common/vendor"]]]);