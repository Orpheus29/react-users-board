(this.webpackJsonpusers_board_client=this.webpackJsonpusers_board_client||[]).push([[0],{101:function(e,t,n){},104:function(e,t,n){},111:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(26),o=n.n(c),i=(n(101),n(17)),s=n(41),u=n(80),l=n(10),d=n(67),j=n.n(d),b=(n(104),n(168)),f=n(156),O=n(158),h=n(86),p=n.n(h),v=n(2),m=a.a.memo((function(e){var t=e.users;return Object(v.jsx)(v.Fragment,{children:t.map((function(e){var t;return Object(v.jsxs)(b.a,{children:[Object(v.jsx)(f.a,{children:Object(v.jsx)(p.a,{fontSize:"large",style:{color:(null===e||void 0===e||null===(t=e.carColor)||void 0===t?void 0:t.name)||"black"}})}),Object(v.jsx)(O.a,{primary:e.name})]},e.id)}))})})),x=n(159),g=n(162),y=n(161),C=n(171),w=n(164),S=a.a.memo((function(e){var t=e.colors,n=e.addUser,a=Object(r.useState)(""),c=Object(l.a)(a,2),o=c[0],i=c[1],s=Object(r.useState)(0),u=Object(l.a)(s,2),d=u[0],j=u[1],b=Object(r.useState)(!1),f=Object(l.a)(b,2),O=f[0],h=f[1],p=Object(r.useState)(!1),m=Object(l.a)(p,2),S=m[0],E=m[1],T=t.find((function(e){return e.id===d}));return Object(v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(){if(!o||!d)return h(!o),void E(!d);n(o,d),i(""),j(0)}()},children:[Object(v.jsx)(x.a,{}),Object(v.jsxs)("div",{style:{padding:"16px 0 16px",display:"flex",alignItems:"end",justifyContent:"space-between"},children:[Object(v.jsx)(g.a,{variant:"standard",label:"Name",style:{width:"45%"},value:o,onChange:function(e){i(e.target.value),h(!1)},error:O}),Object(v.jsxs)(y.a,{label:"Car color",style:{width:"45%",color:(null===T||void 0===T?void 0:T.name)||"currentColor"},variant:"standard",value:d,onChange:function(e){E(!1),j(+e.target.value)},error:S,children:[Object(v.jsx)(C.a,{value:0,disabled:!0,children:"Color"}),t.map((function(e){return Object(v.jsx)(C.a,{style:{color:e.name},value:e.id,children:e.name},e.id)}))]})]}),Object(v.jsx)(w.a,{type:"submit",variant:"outlined",style:{width:"100%"},children:"Add new player"})]})})),E=n(167),T=n(60),I=a.a.memo((function(e){var t=e.children;return Object(v.jsxs)(E.a,{elevation:10,style:{padding:"20px",width:"30%",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:[Object(v.jsx)(T.a,{variant:"h2",style:{textAlign:"center",marginBottom:"16px"},children:"Users` board"}),t,Object(v.jsx)(x.a,{})]})})),k="https://users-board-app-api-qo09.onrender.com";function P(e){var t,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r={method:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET"};return n&&(r.body=JSON.stringify(n),r.headers={"Content-Type":"application/json; charset=UTF-8"}),(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(k+e,r)})).then((function(e){if(!e.ok)throw new Error;return e.json()}))}var U={get:function(e){return P(e)},post:function(e,t){return P(e,"POST",t)},patch:function(e,t){return P(e,"PATCH",t)},delete:function(e){return P(e,"DELETE")}};function _(e){var t=e.name,n=e.carColorId;return U.post("/users",{name:t,carColorId:n})}var A=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)([]),o=Object(l.a)(c,2),d=o[0],b=o[1];Object(r.useEffect)((function(){Promise.all([U.get("/users"),U.get("/colors")]).then((function(e){var t=Object(l.a)(e,2),n=t[0],r=t[1],c=function(e,t){return e.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{carColor:t.find((function(t){return t.id===e.carColorId}))})}))}(n,r);a(c),b(r)}))}),[]);var f=function(){var e=Object(u.a)(j.a.mark((function e(t,n){var r,c,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_({name:t,carColorId:n});case 2:r=e.sent,c=d.find((function(e){return e.id===n})),o=Object(s.a)(Object(s.a)({},r),{},{carColor:c}),a((function(e){return[].concat(Object(i.a)(e),[o])}));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(v.jsxs)(I,{children:[Object(v.jsx)(m,{users:n}),Object(v.jsx)(S,{colors:d,addUser:f})]})};o.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(A,{})}),document.getElementById("root"))}},[[111,1,2]]]);
//# sourceMappingURL=main.446ee4ee.chunk.js.map