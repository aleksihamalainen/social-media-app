(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{112:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),i=a(19),o=a(26),s=a(11),u=a(21),m=a.n(u),p=a(28),f=a(146),g=a(149),d=a(161),v=a(152),h=a(114),E=a(158),b=a(153),O=a(154),w=a(155),C=a(159),j=a(51),x=a.n(j),y={login:function(){var e=Object(p.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post("/api/login",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),register:function(){var e=Object(p.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post("/api/users",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k=Object(f.a)({container:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"8em"},button:{marginTop:"1em"},grid:{marginTop:"1em"}}),N=function(e){var t=e.username,a=e.password,c=e.setUsername,l=e.setPassword,o=e.setUser,u=Object(n.useState)(!1),f=Object(i.a)(u,2),j=f[0],x=f[1],N=Object(s.f)(),S=k(),T=function(){var e=Object(p.a)(m.a.mark((function e(n){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n.preventDefault(),e.next=4,y.login({username:t,password:a});case 4:r=e.sent,localStorage.setItem("user",JSON.stringify(r)),N.push("/"),o(r),c(""),l(""),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),x(!0),setTimeout((function(){x(!1)}),3e3);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(g.a,{maxWidth:"xs"},r.a.createElement(d.a,{open:j,anchorOrigin:{horizontal:"center",vertical:"top"}},r.a.createElement(C.a,{severity:"error",variant:"filled"},"Invalid username or password")),r.a.createElement(v.a,null),r.a.createElement("div",{className:S.container},r.a.createElement(h.a,{component:"h1",variant:"h4"},"Log in"),r.a.createElement("form",{className:S.form,onSubmit:T},r.a.createElement(E.a,{onChange:function(e){var t=e.target;return c(t.value)},label:"Username",variant:"outlined",margin:"normal",fullWidth:!0,required:!0}),r.a.createElement(E.a,{onChange:function(e){var t=e.target;return l(t.value)},label:"Password",variant:"outlined",type:"password",margin:"normal",fullWidth:!0,required:!0}),r.a.createElement(b.a,{type:"submit",color:"primary",fullWidth:!0,variant:"contained",className:S.button},"Log in"),r.a.createElement(O.a,{container:!0,className:S.grid},r.a.createElement(O.a,{item:!0},r.a.createElement(w.a,{href:"/register"},"Don't have an account? Register"))))))},S=Object(f.a)({container:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"8em"},button:{marginTop:"1em"},grid:{marginTop:"1em"}}),T=function(e){var t=e.username,a=e.password,c=e.confirm,l=e.setUsername,o=e.setPassword,u=e.setConfirm,f=Object(n.useState)(!1),j=Object(i.a)(f,2),x=j[0],k=j[1],N=Object(n.useState)(""),T=Object(i.a)(N,2),L=T[0],W=T[1],I=Object(s.f)(),U=S(),D=function(){var e=Object(p.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n.preventDefault(),a!==c){e.next=11;break}return e.next=5,y.register({username:t,password:a});case 5:I.push("/login"),l(""),o(""),u(""),e.next=14;break;case 11:k(!0),W("Passwords must match"),setTimeout((function(){k(!1)}),3e3);case 14:e.next=21;break;case 16:e.prev=16,e.t0=e.catch(0),k(!0),W("This username is already taken"),setTimeout((function(){k(!1)}),3e3);case 21:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(g.a,{maxWidth:"xs"},r.a.createElement(d.a,{open:x,anchorOrigin:{horizontal:"center",vertical:"top"}},r.a.createElement(C.a,{severity:"error",variant:"filled"},L)),r.a.createElement(v.a,null),r.a.createElement("div",{className:U.container},r.a.createElement(h.a,{component:"h1",variant:"h4"},"Register"),r.a.createElement("form",{onSubmit:D},r.a.createElement(E.a,{onChange:function(e){var t=e.target;return l(t.value)},label:"Username",variant:"outlined",margin:"normal",fullWidth:!0,required:!0}),r.a.createElement(E.a,{onChange:function(e){var t=e.target;return o(t.value)},label:"Password",variant:"outlined",type:"password",margin:"normal",fullWidth:!0,required:!0}),r.a.createElement(E.a,{onChange:function(e){var t=e.target;return u(t.value)},label:"Confirm password",variant:"outlined",type:"password",margin:"normal",fullWidth:!0,required:!0}),r.a.createElement(b.a,{type:"submit",color:"primary",fullWidth:!0,variant:"contained",className:U.button},"Register"),r.a.createElement(O.a,{container:!0,className:U.grid},r.a.createElement(O.a,{item:!0},r.a.createElement(w.a,{href:"/login"},"Already have an account? Log in"))))))},L=Object(f.a)({container:{height:"100vh",backgroundColor:"#3f51b5"},elementContainer:{display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"white"},buttonContainer:{marginTop:"3em",marginBottom:"5em"},login:{marginRight:"1em"},register:{marginLeft:"1em"},title:{marginTop:"2em"}}),W=function(){var e=Object(s.f)(),t=L();return r.a.createElement("div",{className:t.container},r.a.createElement("div",{className:t.elementContainer},r.a.createElement(v.a,null),r.a.createElement(h.a,{component:"h1",variant:"h2",className:t.title},"Homepage"),r.a.createElement("div",{className:t.buttonContainer},r.a.createElement(b.a,{color:"primary",variant:"contained",onClick:function(){return e.push("/login")},className:t.login},"Log in"),r.a.createElement(b.a,{variant:"contained",onClick:function(){return e.push("/register")},className:t.register},"Register")),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",className:t.image},r.a.createElement("path",{fill:"#3f51b5",fillOpacity:"1",d:"M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"}))))},I=a(156),U=a(157),D=a(151),P=a(74),q=a(162),R=a(72),z=a.n(R),B=a(73),J=a.n(B),A=Object(f.a)({navbar:{display:"flex",justifyContent:"space-between"}}),M=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Boolean(a),o=Object(s.f)(),u=A(),m=JSON.parse(localStorage.getItem("user"));return r.a.createElement(I.a,{position:"sticky"},r.a.createElement(U.a,{className:u.navbar},r.a.createElement(D.a,{color:"inherit",onClick:function(){return o.push("/")}},r.a.createElement(z.a,null)),r.a.createElement(D.a,{color:"inherit",onClick:function(e){c(e.currentTarget)}},r.a.createElement(J.a,null)),r.a.createElement(P.a,{anchorEl:a,onClose:function(){return c(null)},open:l,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement(q.a,{onClick:function(){return o.push("/".concat(m.username))}},"My profile"),r.a.createElement(q.a,{onClick:function(){localStorage.clear(),o.push("/"),window.location.reload()}},"Log out"))))},H=Object(f.a)({container:{display:"flex",flexDirection:"column",alignItems:"center"}}),Z=function(){var e=H();return r.a.createElement("div",null,r.a.createElement(M,null),r.a.createElement(g.a,{maxWidth:"md",className:e.container},r.a.createElement(v.a,null),"post"))},F=function(){var e=Object(s.g)().username;return r.a.createElement("div",null,r.a.createElement(M,null),e)},G=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),u=Object(i.a)(l,2),m=u[0],p=u[1],f=Object(n.useState)(""),g=Object(i.a)(f,2),d=g[0],v=g[1],h=Object(n.useState)(""),E=Object(i.a)(h,2),b=E[0],O=E[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("user");e&&c(e)}),[]),r.a.createElement(o.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/login"},r.a.createElement(N,{username:m,password:d,setUsername:p,setPassword:v,setUser:c})),r.a.createElement(s.a,{path:"/register"},r.a.createElement(T,{username:m,password:d,confirm:b,setUsername:p,setPassword:v,setConfirm:O})),r.a.createElement(s.a,{path:"/:username"},r.a.createElement(F,null)),r.a.createElement(s.a,{path:"/"},a?r.a.createElement(Z,null):r.a.createElement(W,null))))};l.a.render(r.a.createElement(G,null),document.getElementById("root"))},83:function(e,t,a){e.exports=a(112)}},[[83,1,2]]]);
//# sourceMappingURL=main.9140a5bb.chunk.js.map