(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d63041d"],{"1dbb":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"page"},[s("Header",{attrs:{title:"注册"}}),s("div",{staticClass:"register2-box"},[1==t.step?[s("div",{staticClass:"cell"},[s("div",{staticClass:"cell-label"},[t._v("机构名称")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.params.organizationName,expression:"params.organizationName"}],staticClass:"cell-input",attrs:{type:"text",placeholder:"请输入机构名称"},domProps:{value:t.params.organizationName},on:{input:function(a){a.target.composing||t.$set(t.params,"organizationName",a.target.value)}}})]),s("div",{staticClass:"cell",on:{click:t.showIndustrySheet}},[s("div",{staticClass:"cell-label"},[t._v("所属行业")]),s("div",{staticClass:"cell-value"},[t._v(t._s(t.industry?t.industry:"请选择"))]),s("img",{staticClass:"cell-right-icon",attrs:{src:e("5463"),alt:"",srcset:""}})]),s("div",{staticClass:"cell",on:{click:t.showAddressPicker}},[s("div",{staticClass:"cell-label"},[t._v("所属区域")]),s("div",{staticClass:"cell-value"},[t._v(t._s(t.areatext?t.areatext:"请选择"))]),s("img",{staticClass:"cell-right-icon",attrs:{src:e("5463"),alt:"",srcset:""}})]),s("div",{staticClass:"cell"},[s("div",{staticClass:"cell-label"},[t._v("联系地址")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.params.address,expression:"params.address"}],staticClass:"cell-input",attrs:{type:"text",placeholder:"请输入你的联系地址"},domProps:{value:t.params.address},on:{input:function(a){a.target.composing||t.$set(t.params,"address",a.target.value)}}})]),s("div",{staticClass:"block"},[s("div",{staticStyle:{"font-size":"15px"}},[t._v("机构简介")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.params.organizationMsg,expression:"params.organizationMsg"}],staticClass:"textarea",attrs:{placeholder:"请输入机构简介",maxlength:"140",rows:"6",id:""},domProps:{value:t.params.organizationMsg},on:{input:function(a){a.target.composing||t.$set(t.params,"organizationMsg",a.target.value)}}})]),s("div",{staticClass:"cell"},[s("div",{staticClass:"cell-label"},[t._v("联 系 人:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.params.organizationPerson,expression:"params.organizationPerson"}],staticClass:"cell-input",attrs:{type:"text",placeholder:"请输入联系人姓名"},domProps:{value:t.params.organizationPerson},on:{input:function(a){a.target.composing||t.$set(t.params,"organizationPerson",a.target.value)}}})]),s("div",{staticClass:"cell"},[s("div",{staticClass:"cell-label"},[t._v("手 机 号")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.params.phone,expression:"params.phone"}],staticClass:"cell-input",attrs:{type:"text",placeholder:"请输入你的手机号"},domProps:{value:t.params.phone},on:{input:function(a){a.target.composing||t.$set(t.params,"phone",a.target.value)}}})]),s("div",{staticClass:"cell"},[s("div",{staticClass:"cell-label"},[t._v("验 证 码")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.params.phoneCode,expression:"params.phoneCode"}],staticClass:"cell-input",attrs:{type:"text",placeholder:"请输入验证码"},domProps:{value:t.params.phoneCode},on:{input:function(a){a.target.composing||t.$set(t.params,"phoneCode",a.target.value)}}}),s("cube-button",{staticStyle:{position:"absolute",right:"0"},attrs:{inline:!0,disabled:t.disable,primary:!0},on:{click:t.getCode}},[t._v(t._s(t.validtext))])],1),s("cube-button",{staticClass:"form-primary-btn",attrs:{primary:!0},on:{click:t.nextStep}},[t._v("下一步")])]:[s("img",{staticClass:"login-logo",attrs:{src:e("fbae"),alt:"",srcset:""}}),s("cube-input",{staticClass:"login-input",attrs:{maxlength:20,placeholder:"请设置密码（6-20位数字或字母）"},model:{value:t.params.password,callback:function(a){t.$set(t.params,"password",a)},expression:"params.password"}}),s("cube-input",{staticClass:"login-input",attrs:{maxlength:20,eye:!0,placeholder:"请再次输入密码"},model:{value:t.passwordv,callback:function(a){t.passwordv=a},expression:"passwordv"}}),s("cube-button",{staticClass:"form-primary-btn",attrs:{primary:!0},on:{click:t.viewRegister}},[t._v(" 注册")])]],2)],1)},i=[],o=e("cebc"),r=e("0418"),n=e("092e"),l={name:"Register2",components:{Header:r["a"]},data:function(){return{step:1,areatext:"",industry:"",passwordv:"",validtext:"获取验证码",wait:60,disable:!1,params:{organizationName:"",industryId:"",provinceId:"",cityId:"",areaId:"",organizationMsg:"",organizationPerson:"",address:"",phone:"",password:"",phoneCode:""}}},mounted:function(){console.log(n["a"]),this.addressPicker=this.$createCascadePicker({title:"选择地区",data:n["a"],onSelect:this.selectHandle,onCancel:this.cancelHandle})},methods:{showAddressPicker:function(){this.addressPicker.show()},selectHandle:function(t,a,e){this.areatext=e.join("/"),this.params.provinceId=t[0],this.params.cityId=t[1],this.params.areaId=t[2]},cancelHandle:function(){this.$createToast({type:"correct",txt:"Picker canceled",time:1e3}).show()},showIndustrySheet:function(){var t=this;this.$http("/api/otherInfo/getIndustryList","get",{},"").then(function(a){if(100==a.data.code){var e=a.data.data.map(function(t){return{id:t.id,content:t.industryName}});t.$createActionSheet({title:"所属行业",data:e,onSelect:function(a,e){t.params.industryId=a.id,t.industry=a.content}}).show()}else t.$createToast({txt:a.data.msg,type:"txt"}).show()})},startTimer:function(){var t=this;0==this.wait?(this.disable=!1,this.validtext="获取验证码",this.wait=60):(this.disable=!0,this.validtext="重新发送("+this.wait+")",this.wait--,setTimeout(function(){t.startTimer()},1e3))},validPhone:function(t){var a=/^(13[0-9]|14[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/;return a.test(t)},getCode:function(){var t=this;if(this.validPhone(this.params.phone)){this.startTimer();this.$http("/api/otherInfo/sendSmsCode","post",this.$qs.stringify({phone:this.params.phone,type:"1"}),"").then(function(a){100==a.data.code?t.params.phoneCode=a.data.data:t.$createToast({txt:a.data.msg,type:"txt"}).show()})}else this.$createToast({txt:"手机号码不合法",type:"txt"}).show()},nextStep:function(){var t=this,a=this.areatext,e=this.params,s=e.address,i=e.industryId,o=e.organizationMsg,r=e.organizationName,n=e.organizationPerson,l=(e.password,e.phone),c=e.phoneCode;""!=r?""!=i?""!=s?""!=a?""!=o?""!=n?""!=this.params.password?""!=this.passwordv?""!=l?""!=c?this.$http("/api/otherInfo/checkSmsCode","post",this.$qs.stringify({phone:this.params.phone,type:"1",code:this.params.phoneCode}),"").then(function(a){100==a.data.code?t.step=2:t.$createToast({txt:a.data.msg,type:"txt"}).show()}):this.$createToast({txt:"验证码不能为空",type:"txt"}).show():this.$createToast({txt:"手机号不能为空",type:"txt"}).show():this.$createToast({txt:"确认密码不能为空",type:"txt"}).show():this.$createToast({txt:"密码不能为空",type:"txt"}).show():this.$createToast({txt:"机构联系人不能为空",type:"txt"}).show():this.$createToast({txt:"机构简介不能为空",type:"txt"}).show():this.$createToast({txt:"所属区域不能为空",type:"txt"}).show():this.$createToast({txt:"地址不能为空",type:"txt"}).show():this.$createToast({txt:"所属行业不能为空",type:"txt"}).show():this.$createToast({txt:"机构名称不能为空",type:"txt"}).show()},viewRegister:function(){var t=this,a=this.$store.state.token;this.$http("/api/app/commonUser/registBroker","post",this.$qs.stringify(Object(o["a"])({},this.params)),a).then(function(a){100==a.data.code?t.$router.back():t.$createToast({txt:a.data.msg,type:"txt"}).show()})}}},c=l,p=(e("7203"),e("2877")),d=Object(p["a"])(c,s,i,!1,null,"6c773ba1",null);a["default"]=d.exports},7203:function(t,a,e){"use strict";var s=e("a26d"),i=e.n(s);i.a},a26d:function(t,a,e){}}]);
//# sourceMappingURL=chunk-7d63041d.bd843ab2.js.map