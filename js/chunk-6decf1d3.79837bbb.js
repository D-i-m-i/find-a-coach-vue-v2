(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6decf1d3"],{"466a":function(e,t,a){},"76a5":function(e,t,a){"use strict";a("466a")},a980:function(e,t,a){"use strict";a.r(t);var s=a("7a23");const i=e=>(Object(s["z"])("data-v-2587237c"),e=e(),Object(s["x"])(),e),c={class:"form-control"},o=i(()=>Object(s["i"])("label",{for:"email"},"Your E-Mail",-1)),l={class:"form-control"},r=i(()=>Object(s["i"])("label",{for:"message"},"Message",-1)),m={key:0,class:"errors"},n={class:"actions"};function d(e,t,a,i,d,b){const u=Object(s["E"])("base-button");return Object(s["w"])(),Object(s["h"])("form",{onSubmit:t[2]||(t[2]=Object(s["P"])((...e)=>b.submitForm&&b.submitForm(...e),["prevent"]))},[Object(s["i"])("div",c,[o,Object(s["O"])(Object(s["i"])("input",{type:"email",id:"email","onUpdate:modelValue":t[0]||(t[0]=e=>d.email=e)},null,512),[[s["L"],d.email,void 0,{trim:!0}]])]),Object(s["i"])("div",l,[r,Object(s["O"])(Object(s["i"])("textarea",{rows:"5",id:"message","onUpdate:modelValue":t[1]||(t[1]=e=>d.message=e)},null,512),[[s["L"],d.message,void 0,{trim:!0}]])]),d.formIsValid?Object(s["g"])("",!0):(Object(s["w"])(),Object(s["h"])("p",m,"Please enter a valid email and non-empty message.")),Object(s["i"])("div",n,[Object(s["k"])(u,null,{default:Object(s["N"])(()=>[Object(s["j"])("Send Message")]),_:1})])],32)}var b={data(){return{email:"",message:"",formIsValid:!0}},methods:{submitForm(){this.formIsValid=!0,""!==this.email&&this.email.includes("@")&&""!==this.message?(this.$store.dispatch("requests/contactCoach",{email:this.email,message:this.message,coachId:this.$route.params.id}),this.$router.replace("/coaches")):this.formIsValid=!1}}},u=(a("76a5"),a("6b0d")),O=a.n(u);const j=O()(b,[["render",d],["__scopeId","data-v-2587237c"]]);t["default"]=j}}]);
//# sourceMappingURL=chunk-6decf1d3.79837bbb.js.map