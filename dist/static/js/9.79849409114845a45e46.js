webpackJsonp([9],{"8Mxy":function(t,a,e){"use strict";var s=e("AZ7y"),n=e("GKmE");a.a=function(){var t=Object(n.c)("Authorization");if(!t){var a=window.location.href.split("#")[1];Object(n.d)("beforeUrl",a);var e=encodeURIComponent("https://hospitals.touchealth.com/#/author?fullPath=aaa");s.a.getHref("wx14104f2209c39d79",e)}}},DxYF:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});e("AZ7y");var s=e("8Mxy"),n={name:"information",data:function(){return{reservationNo:"",name:"",gender:"",identityNo:"",mobilePhone:"",setMeal:"",date:"",stateName:"",state:"",token:"",code:"",reservation:"",disabled:!1,repeat:!1}},created:function(){Object(s.a)()},methods:{getInfo:function(t){var a=this;this.$http.get("/hospital/reservation/scan-qr-code?reservationNo="+t,{}).then(function(t){1005==t.data.rc&&a.$router.push("/whetherCheck/permissions"),1006==t.data.rc?(a.repeat=!0,a.disabled=!0):1==t.data.rc&&(a.$toast({type:"text",message:t.data.msg,duration:1e3}),a.disabled=!0),a.reservationNo=t.data.data.reservationNo,a.name=t.data.data.name,a.gender=t.data.data.gender,a.identityNo=t.data.data.identityNo,a.mobilePhone=t.data.data.mobilePhone,a.setMeal=t.data.data.setMeal,a.date=t.data.data.date,a.stateName=t.data.data.stateName})},confirmCheck:function(t){var a=this;this.$http.put("/hospital/reservation/"+this.reservationNo+"/confirm?reservationNo="+t,{}).then(function(t){0==t.data.rc?a.$router.push("/whetherCheck/guide"):1==t.data.rc&&(a.disabled=!0,a.$toast({type:"text",message:t.data.msg,duration:1e3}))})},confirm:function(){this.confirmCheck(this.reservationNo)}},mounted:function(){this.getInfo(this.$route.params.reservationNo)}},r={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"userWrapper"},[t.repeat?t._e():e("h3",{staticClass:"userMessage"},[t._v("以下是该用户的信息")]),t._v(" "),t.repeat?e("h3",{staticClass:"userMessage"},[t._v("该用户已确认到检，请勿重复操作！")]):t._e(),t._v(" "),e("div",{staticClass:"userBox"},[e("div",{staticClass:"card"},[t._m(0),t._v(" "),e("p",{staticClass:"result"},[e("span",[t._v(t._s(t.reservationNo))]),t._v(" "),e("span",[t._v(t._s(t.name))]),t._v(" "),e("span",[t._v(t._s(t.gender))]),t._v(" "),e("span",[t._v(t._s(t.identityNo))]),t._v(" "),e("span",[t._v(t._s(t.mobilePhone))]),t._v(" "),e("span",[t._v(t._s(t.setMeal))]),t._v(" "),e("span",[t._v(t._s(t.date))]),t._v(" "),e("span",[t._v(t._s(t.stateName))])])])]),t._v(" "),e("div",{staticClass:"confirm"},[e("button",{staticClass:"confirm-button",attrs:{disabled:t.disabled},on:{click:t.confirm}},[t._v("确认到检")])])])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",{staticClass:"mark"},[e("span",[t._v("预约编号：")]),t._v(" "),e("span",[t._v("姓名：")]),t._v(" "),e("span",[t._v("性别：")]),t._v(" "),e("span",[t._v("身份证：")]),t._v(" "),e("span",[t._v("手机号：")]),t._v(" "),e("span",[t._v("套餐：")]),t._v(" "),e("span",[t._v("体检日期：")]),t._v(" "),e("span",[t._v("状态：")])])}]};var i=e("Z0/y")(n,r,!1,function(t){e("jHzU")},"data-v-70026082",null);a.default=i.exports},jHzU:function(t,a){}});
//# sourceMappingURL=9.79849409114845a45e46.js.map