(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{128:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),o=a.n(c),i=a(6),l=a(29),s=a(14),u=a(11),m=a.n(u),p=a(18),f=a(161),d=a(164),b=a(179),g=a(168),h=a(86),v=a(176),E=a(169),O=a(170),j=a(171),k=a(177),w=a(22),C=a.n(w),y=null,x={setToken:function(e){y="Bearer ".concat(e)},login:function(){var e=Object(p.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.post("/api/login",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),register:function(){var e=Object(p.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.post("/api/users",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),findByUsername:function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:y}},e.next=3,C.a.get("".concat("/api/users","/").concat(t),a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),follow:function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:y}},e.next=3,C.a.post("".concat("/api/users","/").concat(t,"/followers"),{},a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),unfollow:function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:y}},e.next=3,C.a.delete("".concat("/api/users","/").concat(t,"/followers"),a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},N=null,S={setToken:function(e){N="Bearer ".concat(e)},getAll:function(){var e=Object(p.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{Authorization:N}},e.next=3,C.a.get("/api/posts",t);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),findById:function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:N}},e.next=3,C.a.get("".concat("/api/posts","/").concat(t),a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),post:function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:N}},e.next=3,C.a.post("/api/posts",t,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),remove:function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:N}},e.next=3,C.a.delete("".concat("/api/posts","/").concat(t),a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),like:function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:N}},e.next=3,C.a.post("".concat("/api/posts","/").concat(t,"/likes"),{},a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),dislike:function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:N}},e.next=3,C.a.delete("".concat("/api/posts","/").concat(t,"/likes"),a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},T=Object(f.a)({container:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"8em"},button:{marginTop:"1em"},grid:{marginTop:"1em"}}),I=function(e){var t=e.setUser,a=Object(n.useState)(""),c=Object(i.a)(a,2),o=c[0],l=c[1],u=Object(n.useState)(""),f=Object(i.a)(u,2),w=f[0],C=f[1],y=Object(n.useState)(!1),N=Object(i.a)(y,2),I=N[0],L=N[1],_=Object(s.g)(),W=T(),A=function(){var e=Object(p.a)(m.a.mark((function e(a){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a.preventDefault(),e.next=4,x.login({username:o,password:w});case 4:n=e.sent,localStorage.setItem("user",JSON.stringify(n)),S.setToken(n.token),x.setToken(n.token),l(""),C(""),t(n),_.push("/"),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),L(!0),setTimeout((function(){L(!1)}),3e3);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(d.a,{maxWidth:"xs"},r.a.createElement(b.a,{open:I,anchorOrigin:{horizontal:"center",vertical:"top"}},r.a.createElement(k.a,{severity:"error",variant:"filled"},"Invalid username or password")),r.a.createElement(g.a,null),r.a.createElement("div",{className:W.container},r.a.createElement(h.a,{component:"h1",variant:"h4"},"Log in"),r.a.createElement("form",{className:W.form,onSubmit:A},r.a.createElement(v.a,{onChange:function(e){var t=e.target;return l(t.value)},label:"Username",variant:"outlined",margin:"normal",fullWidth:!0,required:!0}),r.a.createElement(v.a,{onChange:function(e){var t=e.target;return C(t.value)},label:"Password",variant:"outlined",type:"password",margin:"normal",fullWidth:!0,required:!0}),r.a.createElement(E.a,{type:"submit",color:"primary",fullWidth:!0,variant:"contained",className:W.button},"Log in"),r.a.createElement(O.a,{container:!0,className:W.grid},r.a.createElement(O.a,{item:!0},r.a.createElement(j.a,{href:"/register"},"Don't have an account? Register"))))))},L=Object(f.a)({container:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"8em"},button:{marginTop:"1em"},grid:{marginTop:"1em"}}),_=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),l=Object(i.a)(o,2),u=l[0],f=l[1],w=Object(n.useState)(""),C=Object(i.a)(w,2),y=C[0],N=C[1],S=Object(n.useState)(!1),T=Object(i.a)(S,2),I=T[0],_=T[1],W=Object(n.useState)(""),A=Object(i.a)(W,2),B=A[0],D=A[1],P=Object(s.g)(),z=L(),R=function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t.preventDefault(),u!==y){e.next=11;break}return e.next=5,x.register({username:a,password:u});case 5:c(""),f(""),N(""),P.push("/login"),e.next=14;break;case 11:_(!0),D("Passwords must match"),setTimeout((function(){_(!1)}),3e3);case 14:e.next=21;break;case 16:e.prev=16,e.t0=e.catch(0),_(!0),D("This username is already taken"),setTimeout((function(){_(!1)}),3e3);case 21:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(d.a,{maxWidth:"xs"},r.a.createElement(b.a,{open:I,anchorOrigin:{horizontal:"center",vertical:"top"}},r.a.createElement(k.a,{severity:"error",variant:"filled"},B)),r.a.createElement(g.a,null),r.a.createElement("div",{className:z.container},r.a.createElement(h.a,{component:"h1",variant:"h4"},"Register"),r.a.createElement("form",{onSubmit:R},r.a.createElement(v.a,{onChange:function(e){var t=e.target;return c(t.value)},label:"Username",variant:"outlined",margin:"normal",fullWidth:!0,required:!0}),r.a.createElement(v.a,{onChange:function(e){var t=e.target;return f(t.value)},label:"Password",variant:"outlined",type:"password",margin:"normal",fullWidth:!0,required:!0}),r.a.createElement(v.a,{onChange:function(e){var t=e.target;return N(t.value)},label:"Confirm password",variant:"outlined",type:"password",margin:"normal",fullWidth:!0,required:!0}),r.a.createElement(E.a,{type:"submit",color:"primary",fullWidth:!0,variant:"contained",className:z.button},"Register"),r.a.createElement(O.a,{container:!0,className:z.grid},r.a.createElement(O.a,{item:!0},r.a.createElement(j.a,{href:"/login"},"Already have an account? Log in"))))))},W=Object(f.a)({container:{height:"100vh",backgroundColor:"#3f51b5"},elementContainer:{display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"white"},buttonContainer:{marginTop:"3em",marginBottom:"5em"},login:{marginRight:"1em"},register:{marginLeft:"1em"},title:{marginTop:"2em"}}),A=function(){var e=Object(s.g)(),t=W();return r.a.createElement("div",{className:t.container},r.a.createElement("div",{className:t.elementContainer},r.a.createElement(g.a,null),r.a.createElement(h.a,{component:"h1",variant:"h2",className:t.title},"Homepage"),r.a.createElement("div",{className:t.buttonContainer},r.a.createElement(E.a,{color:"primary",variant:"contained",onClick:function(){return e.push("/login")},className:t.login},"Log in"),r.a.createElement(E.a,{variant:"contained",onClick:function(){return e.push("/register")},className:t.register},"Register")),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",className:t.image},r.a.createElement("path",{fill:"#3f51b5",fillOpacity:"1",d:"M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"}))))},B=a(180),D=a(172),P=a(173),z=a(167),R=a(58),J=a.n(R),U=a(59),V=a.n(U),q=function(e){var t=e.visible,a=e.setVisible,n=e.users;return r.a.createElement(d.a,null,r.a.createElement(g.a,null),r.a.createElement(B.a,{open:t,onClose:function(){a(!1)},fullWidth:!0},n.map((function(e){return r.a.createElement(h.a,{align:"center",variant:"h6",key:e},r.a.createElement(j.a,{href:"/users/".concat(e),color:"inherit"},e))}))))},F=Object(f.a)({container:{marginTop:"2em",padding:"1em",border:"solid black"},usernameLink:{fontWeight:"bold"},upper:{display:"flex",justifyContent:"space-between"},imageContainer:{display:"flex",justifyContent:"center"},image:{margin:"1em 0",maxHeight:"600px",maxWidth:"600px"},likeContainer:{display:"flex",flexDirection:"column",alignItems:"flex-start"},heart:{padding:"0"}}),H=function(e){var t=e.post,a=e.posts,c=e.setPosts,o=JSON.parse(localStorage.getItem("user")),l=t.likers.map((function(e){return e._id})),s=Object(n.useState)(!1),u=Object(i.a)(s,2),m=u[0],p=u[1],f=Object(n.useState)(!1),b=Object(i.a)(f,2),v=b[0],O=b[1],k=Object(n.useState)(t.likes),w=Object(i.a)(k,2),C=w[0],y=w[1],N=Object(n.useState)(t.likers.map((function(e){return e.username}))),T=Object(i.a)(N,2),I=T[0],L=T[1],_=Object(n.useState)(l.includes(o.id)),W=Object(i.a)(_,2),A=W[0],R=W[1],U=Object(n.useState)(t.user.followers.includes(o.id)),H=Object(i.a)(U,2),M=H[0],Z=H[1],G=F();return r.a.createElement(d.a,{maxWidth:"md",className:G.container},r.a.createElement(g.a,null),r.a.createElement(q,{visible:v,setVisible:O,users:I}),r.a.createElement(h.a,{component:"div",className:G.upper},r.a.createElement(h.a,{component:"h1",variant:"h6"},r.a.createElement(j.a,{href:"/users/".concat(t.user.username),color:"inherit"},t.user.username)),t.user.username===o.username?r.a.createElement(E.a,{variant:"contained",color:"secondary",onClick:function(){return p(!0)}},"Delete"):M?r.a.createElement(E.a,{variant:"contained",color:"default",onClick:function(){x.unfollow(t.user._id),Z(!1)}},"Unfollow"):r.a.createElement(E.a,{variant:"contained",color:"primary",onClick:function(){x.follow(t.user._id),Z(!0)}},"Follow"),r.a.createElement(B.a,{open:m,onClose:function(){return p(!1)}},r.a.createElement(D.a,null,"Are you sure you want to delete this post?"),r.a.createElement(P.a,null,r.a.createElement(E.a,{variant:"contained",onClick:function(){return p(!1)}},"Cancel"),r.a.createElement(E.a,{variant:"contained",color:"secondary",onClick:function(){S.remove(t._id),c(a.filter((function(e){return e!==t}))),p(!1)}},"Delete")))),r.a.createElement(h.a,{component:"div",className:G.imageContainer},r.a.createElement("img",{src:t.image,alt:"Post",width:"100%",height:"100%",className:G.image})),r.a.createElement(h.a,{component:"div",className:G.likeContainer},A?r.a.createElement(z.a,{className:G.heart,onClick:function(){S.dislike(t._id),R(!1),y(C-1),L(I.filter((function(e){return e!==o.username})))}},r.a.createElement(J.a,{color:"secondary"})):r.a.createElement(z.a,{className:G.heart,onClick:function(){S.like(t._id),R(!0),y(C+1),L(I.concat(o.username))}},r.a.createElement(V.a,{color:"secondary"})),r.a.createElement(j.a,{color:"inherit",href:"#",onClick:function(){return O(!0)}},C,"\xa0likes")),r.a.createElement(h.a,{component:"div",variant:"body2"},r.a.createElement(j.a,{href:"/users/".concat(t.user.username),color:"inherit",className:G.usernameLink},t.user.username),"\xa0",t.content))},M=a(5),Z=a.n(M),G=a(174),K=a(175),Q=a(84),X=a(181),Y=a(82),$=a.n(Y),ee=a(83),te=a.n(ee),ae=Object(f.a)({content:{margin:"1em"},input:{margin:"1em"}}),ne=function(e){var t=e.visible,a=e.setVisible,c=e.posts,o=e.setPosts,l=Object(n.useState)(""),s=Object(i.a)(l,2),u=s[0],m=s[1],p=Object(n.useState)(null),f=Object(i.a)(p,2),h=f[0],O=f[1],j=Object(n.useState)(!1),w=Object(i.a)(j,2),C=w[0],y=w[1],x=Object(n.useState)(!1),N=Object(i.a)(x,2),T=N[0],I=N[1],L=ae(),_=function(){a(!1)},W=function(){y(!0),setTimeout((function(){y(!1)}),3e3)};return r.a.createElement(d.a,null,r.a.createElement(b.a,{open:T,anchorOrigin:{horizontal:"center",vertical:"top"}},r.a.createElement(k.a,{severity:"success",variant:"filled"},"Post added successfully")),r.a.createElement(g.a,null),r.a.createElement(B.a,{open:t,onClose:_,fullWidth:!0},r.a.createElement(b.a,{open:C,anchorOrigin:{horizontal:"center",vertical:"top"}},r.a.createElement(k.a,{severity:"error",variant:"filled"},"Content or image missing")),r.a.createElement(D.a,null,"Add a new post"),r.a.createElement("input",{className:L.input,type:"file",onChange:function(e){var t=e.target;return O(t.files[0])}}),r.a.createElement(v.a,{label:"Content",variant:"outlined",required:!0,multiline:!0,onChange:function(e){var t=e.target;return m(t.value)},className:L.content}),r.a.createElement(P.a,null,r.a.createElement(E.a,{variant:"contained",onClick:_},"Cancel"),r.a.createElement(E.a,{variant:"contained",color:"primary",onClick:function(){try{if(""!==u&&null!==h){var e=new FormData;e.append("content",u),e.append("postImage",h),S.post(e).then((function(e){o(c.concat(e).reverse())})),I(!0),setTimeout((function(){I(!1)}),3e3),m(""),a(!1)}else W()}catch(t){W()}}},"Add post"))))},re=Object(f.a)({navbar:{display:"flex",justifyContent:"space-between"},postButton:{marginLeft:"5em"}});ne.propTypes={posts:Z.a.array,setPosts:Z.a.func};var ce=function(e){var t=e.posts,a=e.setPosts,c=Object(n.useState)(null),o=Object(i.a)(c,2),l=o[0],u=o[1],m=Object(n.useState)(!1),p=Object(i.a)(m,2),f=p[0],d=p[1],b=Boolean(l),g=Object(s.g)(),v=re(),O=JSON.parse(localStorage.getItem("user"));return r.a.createElement(G.a,{position:"sticky"},r.a.createElement(K.a,{className:v.navbar},r.a.createElement(h.a,{component:"div"},r.a.createElement(z.a,{color:"inherit",onClick:function(){return g.push("/")}},r.a.createElement($.a,null)),r.a.createElement(E.a,{className:v.postButton,onClick:function(){return d(!0)},variant:"contained"},"New post"),r.a.createElement(ne,{visible:f,setVisible:d,posts:t,setPosts:a})),r.a.createElement(z.a,{color:"inherit",onClick:function(e){u(e.currentTarget)}},r.a.createElement(te.a,null)),r.a.createElement(Q.a,{anchorEl:l,onClose:function(){return u(null)},open:b,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement(X.a,{onClick:function(){g.push("/users/".concat(O.username)),u(null)}},"My profile"),r.a.createElement(X.a,{onClick:function(){localStorage.clear(),u(null),g.push("/"),window.location.reload()}},"Log out"))))},oe=Object(f.a)({container:{display:"flex",flexDirection:"column",alignItems:"center"}}),ie=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],o=oe();return Object(n.useEffect)((function(){S.getAll().then((function(e){return c(e.reverse())}))}),[]),r.a.createElement("div",null,r.a.createElement(ce,{posts:a,setPosts:c}),r.a.createElement(d.a,{maxWidth:"md",className:o.container},r.a.createElement(g.a,null),a.map((function(e){return r.a.createElement(H,{key:e._id,post:e,posts:a,setPosts:c})}))))},le=Object(f.a)({container:{height:"100vh",backgroundColor:"#3f51b5"},elementContainer:{display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"white"},buttonContainer:{marginTop:"3em",marginBottom:"5em"},login:{marginRight:"1em"},register:{marginLeft:"1em"},title:{marginTop:"2em"}}),se=function(){var e=Object(s.g)(),t=le();return r.a.createElement("div",{className:t.container},r.a.createElement("div",{className:t.elementContainer},r.a.createElement(g.a,null),r.a.createElement(h.a,{component:"h1",variant:"h2",className:t.title},"Page not found"),r.a.createElement("div",{className:t.buttonContainer},r.a.createElement(E.a,{color:"primary",variant:"contained",onClick:function(){return e.push("/")},className:t.login},"Return home")),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",className:t.image},r.a.createElement("path",{fill:"#3f51b5",fillOpacity:"1",d:"M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"}))))},ue=Object(f.a)({info:{display:"flex",flexDirection:"column",alignItems:"center",borderBottom:"solid black"},followRow:{marginBottom:"1em",display:"flex"},titleRow:{display:"flex",margin:"1em 0"},images:{marginTop:"1em"},username:{marginRight:"0.5em"},button:{marginLeft:"0.5em"},following:{marginLeft:"0.5em"},followers:{margin:"0 0.5em"},posts:{marginRight:"0.5em"},image:{maxWidth:"225px",maxHeight:"225px",margin:"0.1em","&:hover":{opacity:"0.8"}}}),me=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),l=Object(i.a)(o,2),u=l[0],m=l[1],p=Object(n.useState)(0),f=Object(i.a)(p,2),b=f[0],v=f[1],O=Object(n.useState)(0),k=Object(i.a)(O,2),w=k[0],C=k[1],y=Object(n.useState)(!1),N=Object(i.a)(y,2),S=N[0],T=N[1],I=Object(n.useState)([]),L=Object(i.a)(I,2),_=L[0],W=L[1],A=Object(n.useState)([]),B=Object(i.a)(A,2),D=B[0],P=B[1],z=Object(n.useState)(!1),R=Object(i.a)(z,2),J=R[0],U=R[1],V=Object(n.useState)(!1),F=Object(i.a)(V,2),H=F[0],M=F[1],Z=ue(),G=Object(s.g)(),K=Object(s.h)().username,Q=JSON.parse(localStorage.getItem("user"));Q?x.setToken(Q.token):G.push("/login"),Object(n.useEffect)((function(){x.findByUsername(K).then((function(e){c(e),v(e.followers.length),C(e.following.length),W(e.posts)}))}),[K]),Object(n.useEffect)((function(){if(a){var e=a.followers.map((function(e){return e._id}));T(e.includes(JSON.parse(localStorage.getItem("user")).id));var t=a.followers.map((function(e){return e.username}));P(t)}}),[a]),setTimeout((function(){m(!0)}),500);return a||!0!==u?r.a.createElement("div",null,r.a.createElement(ce,{posts:_,setPosts:W}),r.a.createElement(g.a,null),a?r.a.createElement(d.a,{maxWidth:"md"},r.a.createElement(q,{visible:J,setVisible:U,users:a.following.map((function(e){return e.username}))}),r.a.createElement(q,{visible:H,setVisible:M,users:D}),r.a.createElement("div",{className:Z.info},r.a.createElement("div",{className:Z.titleRow},r.a.createElement(h.a,{component:"h1",variant:"h5",className:Z.username},a.username),a.username!==Q.username?r.a.createElement("div",{className:Z.button},S?r.a.createElement(E.a,{variant:"contained",color:"default",onClick:function(){x.unfollow(a._id),T(!1),v(b-1),P(D.filter((function(e){return e!==Q.username})))}},"Unfollow"):r.a.createElement(E.a,{variant:"contained",color:"primary",onClick:function(){x.follow(a._id),T(!0),v(b+1),P(D.concat(Q.username))}},"Follow")):null),r.a.createElement(h.a,{component:"div",variant:"body1"},r.a.createElement("div",{className:Z.followRow},r.a.createElement("div",{className:Z.posts},_.length,"\xa0 posts"),r.a.createElement(j.a,{color:"inherit",className:Z.followers,href:"#",onClick:function(){return M(!0)}},b,"\xa0 followers"),r.a.createElement(j.a,{color:"inherit",className:Z.following,href:"#",onClick:function(){return U(!0)}},w,"\xa0 following")))),r.a.createElement("div",{className:Z.images},_.map((function(e){if(e.user===a._id||e.user._id===a._id){var t="/".concat(e.image);return r.a.createElement(j.a,{href:"/posts/".concat(e._id),key:e._id},r.a.createElement("img",{src:t,alt:"Post",key:e._id,className:Z.image,width:"25%",height:"25%"}))}return null})))):null):r.a.createElement(se,null)},pe=Object(f.a)({container:{marginTop:"2em",marginBottom:"2em",padding:"1em",border:"solid black"},usernameLink:{fontWeight:"bold"},upper:{display:"flex",justifyContent:"space-between"},imageContainer:{display:"flex",justifyContent:"center"},image:{margin:"1em 0",maxHeight:"600px",maxWidth:"600px"},likeContainer:{display:"flex",flexDirection:"column",alignItems:"flex-start"},heart:{padding:"0"}}),fe=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),l=Object(i.a)(o,2),u=l[0],m=l[1],p=Object(n.useState)(!1),f=Object(i.a)(p,2),b=f[0],v=f[1],O=Object(n.useState)(!1),k=Object(i.a)(O,2),w=k[0],C=k[1],y=Object(n.useState)(!1),N=Object(i.a)(y,2),T=N[0],I=N[1],L=Object(n.useState)(0),_=Object(i.a)(L,2),W=_[0],A=_[1],R=Object(n.useState)([]),U=Object(i.a)(R,2),F=U[0],H=U[1],M=Object(n.useState)(!1),Z=Object(i.a)(M,2),G=Z[0],K=Z[1],Q=Object(s.g)(),X=pe(),Y=Object(s.h)().postId,$=JSON.parse(localStorage.getItem("user"));$?S.setToken($.token):Q.push("/login");return Object(n.useEffect)((function(){S.findById(Y).then((function(e){c(e),A(e.likes),H(e.likers.map((function(e){return e.username}))),I(e.user.followers.includes(JSON.parse(localStorage.getItem("user")).id));var t=e.likers.map((function(e){return e._id}));K(t.includes(JSON.parse(localStorage.getItem("user")).id))}))}),[Y]),setTimeout((function(){m(!0)}),500),a||!0!==u?r.a.createElement("div",null,a?r.a.createElement(d.a,{maxWidth:"md",className:X.container},r.a.createElement(g.a,null),r.a.createElement(q,{visible:b,setVisible:v,users:F}),r.a.createElement(h.a,{component:"div",className:X.upper},r.a.createElement(h.a,{component:"h1",variant:"h6"},r.a.createElement(j.a,{href:"/users/".concat(a.user.username),color:"inherit"},a.user.username)),a.user.username===$.username?r.a.createElement(E.a,{variant:"contained",color:"secondary",onClick:function(){return C(!0)}},"Delete"):T?r.a.createElement(E.a,{variant:"contained",color:"default",onClick:function(){x.unfollow(a.user._id),I(!1)}},"Unfollow"):r.a.createElement(E.a,{variant:"contained",color:"primary",onClick:function(){x.follow(a.user._id),I(!0)}},"Follow"),r.a.createElement(B.a,{open:w,onClose:function(){return C(!1)}},r.a.createElement(D.a,null,"Are you sure you want to delete this post?"),r.a.createElement(P.a,null,r.a.createElement(E.a,{variant:"contained",onClick:function(){return C(!1)}},"Cancel"),r.a.createElement(E.a,{variant:"contained",color:"secondary",onClick:function(){S.remove(a._id),C(!1),Q.push("/")}},"Delete")))),r.a.createElement(h.a,{component:"div",className:X.imageContainer},r.a.createElement("img",{src:"/".concat(a.image),alt:"Post",width:"100%",height:"100%",className:X.image})),r.a.createElement(h.a,{component:"div",className:X.likeContainer},G?r.a.createElement(z.a,{className:X.heart,onClick:function(){S.dislike(a._id),K(!1),A(W-1),H(F.filter((function(e){return e!==$.username})))}},r.a.createElement(J.a,{color:"secondary"})):r.a.createElement(z.a,{className:X.heart,onClick:function(){S.like(a._id),K(!0),A(W+1),H(F.concat($.username))}},r.a.createElement(V.a,{color:"secondary"})),r.a.createElement(j.a,{color:"inherit",href:"#",onClick:function(){return v(!0)}},W,"\xa0likes")),r.a.createElement(h.a,{component:"div",variant:"body2"},r.a.createElement(j.a,{href:"/users/".concat(a.user.username),color:"inherit",className:X.usernameLink},a.user.username),"\xa0",a.content)):null):r.a.createElement(se,null)},de=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("user");if(e){var t=JSON.parse(e);c(t),S.setToken(t.token),x.setToken(t.token)}}),[]),r.a.createElement(l.a,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/login"},a?r.a.createElement(s.a,{to:"/"}):r.a.createElement(I,{setUser:c})),r.a.createElement(s.b,{path:"/register"},a?r.a.createElement(s.a,{to:"/"}):r.a.createElement(_,null)),r.a.createElement(s.b,{path:"/users/:username"},r.a.createElement(me,null)),r.a.createElement(s.b,{path:"/posts/:postId"},r.a.createElement(fe,null)),r.a.createElement(s.b,{exact:!0,path:"/"},a?r.a.createElement(ie,null):r.a.createElement(A,null)),r.a.createElement(s.b,{path:"*",component:se})))};o.a.render(r.a.createElement(de,null),document.getElementById("root"))},95:function(e,t,a){e.exports=a(128)}},[[95,1,2]]]);
//# sourceMappingURL=main.6fb2d6c1.chunk.js.map