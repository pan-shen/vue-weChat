webpackJsonp([22],{ZiZ2:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={components:{captchaBox:a("Wuyz").a},data:function(){return{vCode:"",currentNumber:"",timeOut:!1,leftTime:60,timer:null,captchaToken:"",showCaptcha:!1}},methods:{next:function(){this.verifyCode()},regetCode:function(){var t=this;this.getCode(function(){t.timeOut=!0,t.timer=setInterval(function(){t.leftTime-=1},1e3)})},handleNumber:function(t){return t.slice(0,3)+"****"+t.slice(7)},verifyCode:function(){var t=this,e=this.$toast({type:"loading",shadow:!0,duration:0,message:"正在验证"});this.$http.post("/hospital/login/verify-sms-code",{mobilePhone:this.currentNumber,code:this.vCode,type:"register"}).then(function(a){console.log(a),e.close(),0===a.data.rc?t.$router.push({path:"/user/register/setting-pwd/"+t.currentNumber+"/"+a.data.data}):t.$toast({message:a.data.msg})}).catch(function(t){e.close()})},verifySuccess:function(t){console.log("验证成功")},hideCaptcha:function(t){this.showCaptcha=!t},getCode:function(t){var e=this;this.$http.post("/hospital/login/get-verification-code",{mobilePhone:this.currentNumber}).then(function(a){0===a.data.rc?a.data.data.isHaveCaptcha&&(e.captchaToken=a.data.data.captchaToken,e.showCaptcha=!0):e.$toast({type:"text",message:a.data.msg}),t&&t()})}},watch:{leftTime:function(t,e){t<=0&&(clearInterval(this.timer),this.timeOut=!1,this.leftTime=60)}},mounted:function(){var t=this;this.currentNumber=this.$route.params.number,this.timeOut=!0,this.timer=setInterval(function(){t.leftTime-=1},1e3)}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"register-container"},[a("h2",[t._v("手机号验证")]),t._v(" "),a("p",{staticStyle:{color:"#00bd93"}},[t._v("验证码已发送至\n    "),a("a",{attrs:{href:"javascript:;"}},[t._v(t._s(t.handleNumber(t.currentNumber)))])]),t._v(" "),a("div",{staticClass:"input-box"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.vCode,expression:"vCode"}],attrs:{type:"email",placeholder:"请输入验证码"},domProps:{value:t.vCode},on:{input:function(e){e.target.composing||(t.vCode=e.target.value)}}}),t._v(" "),t.timeOut?a("span",{staticStyle:{color:"#00bd93"}},[t._v("已发送（"+t._s(t.leftTime)+"s）")]):t._e(),t._v(" "),t.timeOut?t._e():a("span",{staticClass:"reget",on:{click:t.regetCode}},[t._v("重新获取")])]),t._v(" "),a("button",{staticClass:"next-button",attrs:{disabled:t.vCode.length<=0},on:{click:t.next}},[t._v("下一步")]),t._v(" "),t.showCaptcha?a("captcha-box",{attrs:{captchaToken:t.captchaToken},on:{verifySuccess:t.verifySuccess,hideCaptcha:t.hideCaptcha}}):t._e()],1)},staticRenderFns:[]};var s=a("Z0/y")(i,n,!1,function(t){a("vMXT")},null,null);e.default=s.exports},vMXT:function(t,e){}});
//# sourceMappingURL=22.b81961dd307cf799129d.js.map