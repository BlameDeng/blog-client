webpackJsonp([4],{ItZM:function(t,e){},vv7P:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("Dd8w"),i=s.n(n),a=s("NYxO"),r=s("7+uW"),o=s("SR0v"),c=s("IIW1"),d=s("AU0D"),l={name:"MyPage",components:{"x-button":o.a,"x-icon":c.a},data:function(){return{ToastConstructor:r.a.extend(d.a),userId:"",indexBlogs:[],user:{},totalPage:0,currentIndex:0,start:0,pageSize:5,isMask:!1,deleteBlogId:""}},computed:{end:function(){return this.start+this.pageSize>this.totalPage?this.totalPage:this.start+this.pageSize-1}},created:function(){var t=this;this.userId=this.$route.query.redirect,this.getBlogsByUserId({userId:this.userId,page:1}).then(function(e){t.indexBlogs=e.data,t.indexBlogs[0]&&(t.user=t.indexBlogs[0].user),t.totalPage=+e.totalPage}).catch(function(){})},methods:i()({},Object(a.b)(["getBlogsByUserId","deleteBlog"]),{updateIndexBlogs:function(t){var e=this;this.getBlogsByUserId({userId:this.userId,page:t+1}).then(function(t){e.indexBlogs=t.data,e.totalPage=+t.totalPage,e.watchCurrentIndex()})},goPageIndex:function(t){0===t?this.currentIndex=0:1===t&&(this.currentIndex=this.totalPage-1,this.start=this.currentIndex-this.pageSize+1),this.updateIndexBlogs(this.currentIndex)},onClickDelte:function(t){this.isMask=!0,this.deleteBlogId=t},deleteCancle:function(){this.isMask=!1,this.deleteBlogId=""},deleteConfirm:function(){var t=this;this.isMask=!1,this.deleteBlog({blogId:this.deleteBlogId}).then(function(e){t.showToast("success",e.msg),t.indexBlogs=t.indexBlogs.filter(function(e){return e.id!==t.deleteBlogId})}).catch(function(){})},pre:function(){0!==this.currentIndex&&(this.currentIndex-=1,this.updateIndexBlogs(this.currentIndex))},next:function(){this.currentIndex!==this.totalPage-1&&(this.currentIndex+=1,this.updateIndexBlogs(this.currentIndex))},onClickIndex:function(t){this.currentIndex=t,this.updateIndexBlogs(t)},watchCurrentIndex:function(){var t=this.start+Math.floor((this.pageSize-1)/2);if(this.currentIndex<=this.pageSize/2)this.start=0;else{if(this.currentIndex>=this.totalPage-Math.floor((this.pageSize-1)/2))return;this.start=this.start+this.currentIndex-t}},showToast:function(t,e){var s=document.createElement("div");document.body.appendChild(s);new this.ToastConstructor({propsData:{autoClose:3,type:t,info:e,closeButton:!1}}).$mount(s)}})},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"my"}},[s("x-layout",{attrs:{"x-min-height":"100vh"}},[s("x-header"),t._v(" "),s("x-content",[s("div",{staticClass:"content-inner"},[s("div",{staticClass:"user"},[s("div",{staticClass:"avatar-wrapper"},[s("router-link",{attrs:{to:"/user/"+t.user.id}},[s("img",{attrs:{src:t.user.avatar}})])],1),t._v(" "),s("p",{staticClass:"username"},[s("router-link",{attrs:{to:"/user/"+t.user.id}},[t._v(t._s(t.user.username))])],1)]),t._v(" "),t._l(t.indexBlogs,function(e,n){return s("div",{staticClass:"blog-info"},[s("div",{staticClass:"time"},[s("h2",[t._v(t._s(t.friendlyDate(e.createdAt,"full").date))]),t._v(" "),s("p",[t._v(t._s(t.friendlyDate(e.createdAt,"full").month)+"月")]),t._v(" "),s("span",[t._v(t._s(t.friendlyDate(e.createdAt,"full").year))])]),t._v(" "),s("div",{staticClass:"blog-content"},[s("h3",[s("router-link",{attrs:{to:"/detail/"+e.id}},[t._v(t._s(e.title))])],1),t._v(" "),s("p",[s("router-link",{attrs:{to:"/detail/"+e.id}},[t._v(t._s(e.description))])],1),t._v(" "),s("div",{staticClass:"btns"},[s("router-link",{attrs:{to:"/detail/"+e.id}},[s("x-button",{staticClass:"my-btn"},[t._v("查看")])],1),t._v(" "),s("router-link",{attrs:{to:"/edit/"+e.id}},[s("x-button",{staticClass:"my-btn"},[t._v("编辑")])],1),t._v(" "),s("x-button",{staticClass:"my-btn",on:{click:function(s){t.onClickDelte(e.id)}}},[t._v("删除")])],1)])])}),t._v(" "),s("ul",{staticClass:"page-index-bar"},[s("li",{on:{click:function(e){t.goPageIndex(0)}}},[t._v("首页")]),t._v(" "),s("li",{on:{click:t.pre}},[t._v("上一页")]),t._v(" "),t._l(t.totalPage,function(e,n){return n>=t.start&&n<=t.end?s("li",{class:{active:t.currentIndex===n},attrs:{"data-index":n},on:{click:function(e){t.onClickIndex(n)}}},[t._v(t._s(e))]):t._e()}),t._v(" "),s("li",{on:{click:t.next}},[t._v("下一页")]),t._v(" "),s("li",{on:{click:function(e){t.goPageIndex(1)}}},[t._v("尾页")]),t._v(" "),s("span",[t._v("第 "+t._s(t.currentIndex+1)+" / "+t._s(t.totalPage)+" 页")])],2)],2),t._v(" "),t.isMask?s("div",{staticClass:"mask"},[s("div",{staticClass:"delete-confirm"},[s("h3",[t._v("提示")]),t._v(" "),s("p",[s("x-icon",{attrs:{name:"warning"}}),t._v(" "),s("span",[t._v("此操作将永久删除该文章，是否继续？")])],1),t._v(" "),s("div",{staticClass:"confirm-btns"},[s("x-button",{staticClass:"confirm-btn",on:{click:t.deleteCancle}},[t._v("取消删除")]),t._v(" "),s("x-button",{staticClass:"confirm-btn",on:{click:t.deleteConfirm}},[t._v("确认删除")])],1)])]):t._e()]),t._v(" "),s("x-footer")],1)],1)},staticRenderFns:[]};var h=s("VU/8")(l,u,!1,function(t){s("ItZM")},"data-v-c4abf64c",null);e.default=h.exports}});
//# sourceMappingURL=4.589641a41f2c164e1552.js.map