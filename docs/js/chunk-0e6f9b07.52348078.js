(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e6f9b07"],{"0f91":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=t.sendForm=t.send=t.init=void 0;var s=n("3245");Object.defineProperty(t,"EmailJSResponseStatus",{enumerable:!0,get:function(){return s.EmailJSResponseStatus}});var a=n("5129"),c=null,i="https://api.emailjs.com";function o(e,t,n){return void 0===n&&(n={}),new Promise((function(a,c){var i=new XMLHttpRequest;for(var o in i.addEventListener("load",(function(e){var t=new s.EmailJSResponseStatus(e.target);200===t.status||"OK"===t.text?a(t):c(t)})),i.addEventListener("error",(function(e){c(new s.EmailJSResponseStatus(e.target))})),i.open("POST",e,!0),n)i.setRequestHeader(o,n[o]);i.send(t)}))}function r(e){var t=document&&document.getElementById("g-recaptcha-response");return t&&t.value&&(e["g-recaptcha-response"]=t.value),t=null,e}function u(e){return"#"!==e[0]?"#"+e:e}function l(e,t){c=e,i=t||"https://api.emailjs.com"}function b(e,t,n,s){var a={lib_version:"2.6.3",user_id:s||c,service_id:e,template_id:t,template_params:r(n)};return o(i+"/api/v1.0/email/send",JSON.stringify(a),{"Content-type":"application/json"})}function f(e,t,n,s){if("string"===typeof n&&(n=document.querySelector(u(n))),!n||"FORM"!==n.nodeName)throw"Expected the HTML form element or the style selector of form";a.UI.progressState(n);var r=new FormData(n);return r.append("lib_version","2.6.3"),r.append("service_id",e),r.append("template_id",t),r.append("user_id",s||c),o(i+"/api/v1.0/email/send-form",r).then((function(e){return a.UI.successState(n),e}),(function(e){return a.UI.errorState(n),Promise.reject(e)}))}t.init=l,t.send=b,t.sendForm=f,t.default={init:l,send:b,sendForm:f}},3245:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=void 0;var s=function(){function e(e){this.status=e.status,this.text=e.responseText}return e}();t.EmailJSResponseStatus=s},5091:function(e,t,n){},5129:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UI=void 0;var s=function(){function e(){}return e.clearAll=function(e){e.classList.remove(this.PROGRESS),e.classList.remove(this.DONE),e.classList.remove(this.ERROR)},e.progressState=function(e){this.clearAll(e),e.classList.add(this.PROGRESS)},e.successState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.DONE)},e.errorState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.ERROR)},e.PROGRESS="emailjs-sending",e.DONE="emailjs-success",e.ERROR="emailjs-error",e}();t.UI=s},"53c9":function(e,t,n){"use strict";var s=n("7a23"),a={class:"horiz-nav"},c={key:0},i=Object(s["e"])("Home"),o=Object(s["e"])(" | "),r={key:2},u=Object(s["e"])("About Me"),l=Object(s["e"])(" | "),b={key:4},f=Object(s["e"])("Services"),m=Object(s["e"])(" | "),d={key:6},j=Object(s["e"])("Testimonials"),O=Object(s["e"])(" | "),p={key:8},v=Object(s["e"])("Contact");function h(e,t,n,h,S,g){var y=Object(s["u"])("router-link");return Object(s["o"])(),Object(s["c"])("span",a,[g.atHome?(Object(s["o"])(),Object(s["c"])("b",c,"Home")):(Object(s["o"])(),Object(s["c"])(y,{key:1,to:"/home.html"},{default:Object(s["z"])((function(){return[i]})),_:1})),o,g.atAbout?(Object(s["o"])(),Object(s["c"])("b",r,"About Me")):(Object(s["o"])(),Object(s["c"])(y,{key:3,to:"/about.html"},{default:Object(s["z"])((function(){return[u]})),_:1})),l,g.atServices?(Object(s["o"])(),Object(s["c"])("b",b,"Services")):(Object(s["o"])(),Object(s["c"])(y,{key:5,to:"/services.html"},{default:Object(s["z"])((function(){return[f]})),_:1})),m,g.atTestimonials?(Object(s["o"])(),Object(s["c"])("b",d,"Testimonials")):(Object(s["o"])(),Object(s["c"])(y,{key:7,to:"/testimonials.html"},{default:Object(s["z"])((function(){return[j]})),_:1})),O,g.atContact?(Object(s["o"])(),Object(s["c"])("b",p,"Contact")):(Object(s["o"])(),Object(s["c"])(y,{key:9,to:"/contact.html"},{default:Object(s["z"])((function(){return[v]})),_:1}))])}var S={computed:{atHome:function(){return"/home.html"===this.$router.currentRoute.value.path},atAbout:function(){return"/about.html"===this.$router.currentRoute.value.path},atTestimonials:function(){return"/testimonials.html"===this.$router.currentRoute.value.path},atServices:function(){return"/services.html"===this.$router.currentRoute.value.path},atContact:function(){return"/contact.html"===this.$router.currentRoute.value.path}}};S.render=h;t["a"]=S},c3df:function(e,t,n){"use strict";n.r(t);var s=n("7a23"),a=Object(s["B"])("data-v-4ce78ff2");Object(s["r"])("data-v-4ce78ff2");var c=Object(s["f"])("h1",null,"Contact",-1),i={class:"sidebyside"},o=Object(s["f"])("h2",null,"Send me a message",-1),r=Object(s["f"])("label",null,"First Name",-1),u=Object(s["f"])("label",null,"Last Name",-1),l=Object(s["f"])("label",null,"Email Address",-1),b=Object(s["f"])("span",{class:"message"},"Please be sure to provide a correct email address or I will have no way to get back to you. Thanks!",-1),f=Object(s["f"])("label",null,"Subject",-1),m=Object(s["f"])("label",null,"Message",-1),d={key:1,class:"sending"},j={key:2,class:"sent"},O=Object(s["f"])("div",{class:"sidebyside"},[Object(s["f"])("h2",null,"Contact me directly"),Object(s["f"])("p",null,[Object(s["e"])(" Basia Garratt"),Object(s["f"])("br"),Object(s["e"])(" Hamilton, New Zealand"),Object(s["f"])("br"),Object(s["e"])(" Email: "),Object(s["f"])("a",{href:"mailto:basgarratt@gmail.com"},"basgarratt@gmail.com"),Object(s["f"])("br"),Object(s["e"])(" Phone: +64 22 415 2822 / 022 415 2822 ")])],-1);Object(s["p"])();var p=a((function(e,t,n,a,p,v){var h=Object(s["u"])("HorizNav");return Object(s["o"])(),Object(s["c"])("main",null,[Object(s["f"])(h),c,Object(s["f"])("div",i,[o,Object(s["f"])("form",null,[Object(s["f"])("fieldset",null,[r,Object(s["A"])(Object(s["f"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return p.firstName=e})},null,512),[[s["x"],p.firstName]])]),Object(s["f"])("fieldset",null,[u,Object(s["A"])(Object(s["f"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(e){return p.lastName=e})},null,512),[[s["x"],p.lastName]])]),Object(s["f"])("fieldset",null,[l,Object(s["A"])(Object(s["f"])("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=function(e){return p.email=e})},null,512),[[s["x"],p.email]]),b]),Object(s["f"])("fieldset",null,[f,Object(s["A"])(Object(s["f"])("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=function(e){return p.subject=e})},null,512),[[s["x"],p.subject]])]),Object(s["f"])("fieldset",null,[m,Object(s["A"])(Object(s["f"])("textarea",{"onUpdate:modelValue":t[5]||(t[5]=function(e){return p.message=e})},null,512),[[s["x"],p.message]])]),p.sent?!0===p.sending?(Object(s["o"])(),Object(s["c"])("div",d,"Sending...")):(Object(s["o"])(),Object(s["c"])("div",j,"Message sent!")):(Object(s["o"])(),Object(s["c"])("button",{key:0,onClick:t[6]||(t[6]=function(){return v.sendEmail.apply(v,arguments)})},"Send"))])]),O])})),v=n("53c9"),h=n("0f91"),S=n.n(h),g="user_YNEDOy8h8taR8LpvwfehX",y="service_b8nn3jm",R="template_1gnjo7d",_="metal.carratt@gmail.com",E={components:{HorizNav:v["a"]},data:function(){return{firstName:"",lastName:"",subject:"",email:"",message:"",sent:!1,sending:!1}},methods:{sendEmail:function(){var e=this;this.sending=!0;var t={first_name:this.firstName,last_name:this.lastName,subject:this.subject,email:this.email,message:this.message,reply_to:_};window.console.log("sending email"),window.console.log(t),S.a.init(g),S.a.send(y,R,t).then((function(){e.sent=!0,e.sending=!1,e.firstName="",e.lastName="",e.subject="",e.message=""})),window.console.log("sent")}}};n("e2f7");E.render=p,E.__scopeId="data-v-4ce78ff2";t["default"]=E},e2f7:function(e,t,n){"use strict";n("5091")}}]);
//# sourceMappingURL=chunk-0e6f9b07.52348078.js.map