(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{192:function(e,t,n){},193:function(e,t,n){},318:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(55),s=n.n(c),i=(n(192),n(334)),o=n(336),u=n(354),l=n(66),j=n(10),b=(n(193),n(7)),d=n.n(b),f=n(16),h=n(4),p=n(8),O=function(e,t){var n=Object(r.useMemo)((function(){var n=t;try{localStorage.getItem(e)?n=JSON.parse(localStorage.getItem(e)):localStorage.setItem(e,JSON.stringify(t))}catch(r){localStorage.setItem(e,JSON.stringify(t))}return n}),[]),a=Object(r.useState)({isInitialized:!0,value:n}),c=Object(h.a)(a,2),s=c[0],i=c[1];return[s.value,function(t){Object.is(s.value,t)||(t="function"===typeof t?t(s.value):t,localStorage.setItem(e,JSON.stringify(t)),i(Object(p.a)(Object(p.a)({},s),{},{value:t})))}]},m=n(168),x=n.n(m);function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=Object(r.useContext)(w),a=Object(r.useMemo)((function(){var r=function(){var e=Object(f.a)(d.a.mark((function e(r,a,c,s){var i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x()({method:c,url:r,data:a,headers:t||(null===n||void 0===n?void 0:n.jwt)?Object(p.a)({Authorization:"Bearer "+(t||(null===n||void 0===n?void 0:n.jwt))},s):Object(p.a)({},s)});case 3:return i=e.sent,e.abrupt("return",i.data);case 7:if(e.prev=7,e.t0=e.catch(0),"401"===e.t0.code&&n.logout(),!e.t0.response||!e.t0.response.data||"object"!==typeof e.t0.response.data){e.next=12;break}throw new Error(e.t0.response.data.message);case 12:throw new Error("Server is not available.");case 13:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,r,a){return e.apply(this,arguments)}}();return{list:function(){var t=Object(f.a)(d.a.mark((function t(){var n,a=arguments;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:null,t.abrupt("return",r(e+(n?"?page=".concat(n):""),null,"GET"));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),get:function(){var t=Object(f.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",r(e+"/"+n,null,"GET"));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),create:function(){var t=Object(f.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",r(e,n,"POST"));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),update:function(){var t=Object(f.a)(d.a.mark((function t(n){var a,c=arguments;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=c.length>1&&void 0!==c[1]?c[1]:null,t.abrupt("return",r(e+"/"+(null==a?n.id:a),n,"PUT"));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),delete:function(){var t=Object(f.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",r(e+"/"+("object"===typeof n?n.id:n),null,"DELETE"));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),send:function(){var t=Object(f.a)(d.a.mark((function t(n,a){var c,s,i=arguments;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=i.length>2&&void 0!==i[2]?i[2]:"GET",s=i.length>3&&void 0!==i[3]?i[3]:{},t.abrupt("return",r(e+"/"+n,a,c,s));case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}),[e,n,t]);return a}var g=n(2),w=a.a.createContext({});function y(e){var t=e.children,n=O("auth-state",{user:null,jwt:null}),a=Object(h.a)(n,2),c=a[0],s=a[1],i=v("/api/auth",c.jwt),o=Object(r.useCallback)((function(){s({user:null,jwt:null})}),[s]),u=function(){var e=Object(f.a)(d.a.mark((function e(t,n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(),e.next=3,i.send("login",{username:t,password:n},"POST");case 3:r=e.sent,s({user:r.user,jwt:r.jwt});case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),l=function(){var e=Object(f.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(),e.next=3,i.send("register",{username:t.username,password:t.password,name:t.name,email:t.email},"POST");case 3:n=e.sent,s({user:n.user,jwt:n.jwt});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)(w.Provider,{value:{user:c.user,jwt:c.jwt,login:u,logout:o,register:l},children:t})}var k=n(352),S=n(333),C=n(343),E=n(357),L=n(180),T=n(24),P=n(50);function z(e){var t=Object(r.useState)(e),n=Object(h.a)(t,2),a=n[0],c=n[1],s=Object(r.useRef)(!1),i=Object(r.useCallback)((function(e){s.current&&c(e)}),[c,s]);return Object(r.useEffect)((function(){return s.current=!0,function(){s.current=!1}}),[s]),[a,i]}function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=z({error:null,result:t,isLoading:!1,isSuccess:!1}),a=Object(h.a)(n,2),c=a[0],s=a[1],i=Object(r.useCallback)(Object(f.a)(d.a.mark((function e(){var t,n=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.length>0&&void 0!==n[0]?n[0]:null,e.prev=1,"function"!==typeof t){e.next=6;break}return e.next=5,t();case 5:t=e.sent;case 6:if(!(t instanceof Promise)){e.next=10;break}return e.next=9,t;case 9:t=e.sent;case 10:return console.log("error",t),e.abrupt("return",t);case 14:return e.prev=14,e.t0=e.catch(1),s((function(t){return Object(p.a)(Object(p.a)({},t),{},{error:e.t0.message})})),e.abrupt("return",null);case 18:case"end":return e.stop()}}),e,null,[[1,14]])}))),[s]),o=Object(r.useCallback)(Object(f.a)(d.a.mark((function e(){var t,n,r=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.length>0&&void 0!==r[0]?r[0]:null,e.prev=1,n=null,"function"!==typeof t){e.next=9;break}return e.next=6,t();case 6:n=e.sent,e.next=12;break;case 9:return e.next=11,t;case 11:n=e.sent;case 12:return s((function(e){return Object(p.a)(Object(p.a)({},e),{},{result:n})})),e.abrupt("return",n);case 16:throw e.prev=16,e.t0=e.catch(1),e.t0;case 19:case"end":return e.stop()}}),e,null,[[1,16]])}))),[s]),u=Object(r.useRef)(null),l=Object(r.useCallback)(function(){var e=Object(f.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),n=t instanceof Promise?t:Object(f.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))(),u.current=n,e.prev=3,s((function(e){return Object(p.a)(Object(p.a)({},e),{},{isLoading:!0,isSuccess:!1})})),e.next=7,n;case 7:return r=e.sent,s((function(e){return Object(p.a)(Object(p.a)({},e),{},{isLoading:!1,isSuccess:!0})})),console.log("error",r),e.abrupt("return",r);case 13:throw e.prev=13,e.t0=e.catch(3),u.current===n&&(u.current=null),s((function(e){return Object(p.a)(Object(p.a)({},e),{},{isLoading:!1,isSuccess:!1})})),e.t0;case 18:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t){return e.apply(this,arguments)}}(),[s,u]),j=Object(r.useCallback)(Object(f.a)(d.a.mark((function t(){var n,r=arguments;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return null==(n=r.length>0&&void 0!==r[0]?r[0]:null)&&(n=e),t.abrupt("return",i((function(){return l((function(){return o(n)}))})));case 3:case"end":return t.stop()}}),t)}))),[e,o,i,l]);return{isLoading:c.isLoading,result:c.result,error:c.error,isSuccess:c.isSuccess,isDisplayable:!c.isLoading&&!c.error,run:j,runError:i,runResult:o,runStatus:l,setError:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return s((function(t){return Object(p.a)(Object(p.a)({},t),{},{error:e instanceof Error?e.message:e})}))},setResult:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return s((function(t){return Object(p.a)(Object(p.a)({},t),{},{result:e})}))}}}var _=n(338),F=n(63),A=n(75),D=n(341),M=n(342),q=n(356),B=n(340),H=n(351),J=n(337),N=n(332),R=n(335);function V(e){var t=e.name,n=e.value,a=e.onChange,c=Object(r.useState)(!1),s=Object(h.a)(c,2),u=s[0],l=s[1],j=v("/api/file-upload"),b=I();Object(r.useEffect)((function(){var e=n&&"object"==typeof n?n.id:n;e&&b.run(j.get(e))}),[n]);var p=Object(r.useCallback)(function(){var e=Object(f.a)(d.a.mark((function e(n){var r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(n),n.preventDefault(),l(!1),!n.dataTransfer.items||1!==n.dataTransfer.items.length||"file"!==n.dataTransfer.items[0].kind){e.next=10;break}return(r=new FormData).append("file",n.dataTransfer.files[0]),e.next=8,b.run(j.send("upload",r,"POST",{"Content-Type":"multipart/form-data"}));case 8:c=e.sent,a&&a({target:{value:c.id,name:t}});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[l]);return Object(g.jsx)(N.a,{bg:"gray.800",borderRadius:4,overflow:"hidden",borderColor:"gray.500",ratio:16/9,children:Object(g.jsxs)(S.a,{children:[b.result&&b.result.filename&&Object(g.jsx)(i.a,{position:"absolute",h:"100%",w:"100%",children:Object(g.jsx)(R.a,{src:b.result.filename})}),Object(g.jsx)(T.a,{name:t,children:function(e){return Object(g.jsx)(S.a,{w:"100%",h:"100%",bg:"red.800",color:"white",p:4,children:e,position:"absolute"})}}),b.isLoading&&Object(g.jsx)(i.a,{position:"absolute",h:"100%",w:"100%",children:Object(g.jsx)(o.a,{size:"lg",color:"white"})}),u&&Object(g.jsx)(i.a,{position:"absolute",h:"100%",w:"100%",bg:u?"#88888866":null,children:Object(g.jsx)(J.a,{color:"white",fontSize:100})}),Object(g.jsx)(S.a,{w:"100%",h:"100%",onDragOver:function(e){e.preventDefault(),l(!0)},onDragLeave:function(){return l(!1)},onDrop:p,position:"absolute",zIndex:1e3})]})})}var U=Object(T.f)((function(e){var t=e.formik,n=e.schema,r=(e.onChange,n.key);console.log(t);var a=t.values[r];return a=Array.isArray(a)?a:[],Object(g.jsx)(_.b,{colSpan:4,children:Object(g.jsx)(A.a,{minW:"20%",children:Object(g.jsx)(H.a,{allowMultiple:!0,children:Object(g.jsxs)(H.d,{children:[Object(g.jsx)("h2",{children:Object(g.jsxs)(H.b,{children:[Object(g.jsx)(S.a,{flex:"1",textAlign:"left",children:n.name}),Object(g.jsx)(H.c,{})]})}),Object(g.jsxs)(H.e,{pb:4,children:[Object(g.jsx)(_.a,{templateColumns:{sm:"repeat(1, 1fr)",lg:"repeat(2, 1fr)","2xl":"repeat(3, 1fr)"},flex:1,gap:6,mb:6,children:a.map((function(e,n){return Object(g.jsx)(V,{value:e,name:"".concat(r,"[").concat(n,"]"),onChange:function(e){return t.setFieldValue(e.target.name,e.target.value)}},n)}))}),Object(g.jsx)(L.a,{onClick:function(){return t.setFieldValue("".concat(r,"[").concat(a.length,"]"),null)},children:"New"})]})]})})})})})),W=n(353);function G(e){return Object(T.f)((function(t){var n=t.schema,r=t.isCreating,a=Object(F.a)(t,["schema","isCreating"]),c=r?n.auto:n.readonly;return n.auto&&n.readonly?null:e&&Object(g.jsxs)(A.a,{minW:"20%",children:[Object(g.jsx)(D.a,{children:n.name}),Object(g.jsx)(T.b,Object(p.a)({as:e,name:n.key,placeholder:n.name,disabled:c,schema:n,required:!c&&n.required&&(!n.private||r)},a))]})}))}var K={default:G(M.a),password:G((function(e){var t=e.name,n=e.formik,r=Object(F.a)(e,["name","formik"]);return Object(g.jsx)(M.a,Object(p.a)({type:"password",name:t,value:n.values[t]},r))})),bool:G((function(e){var t=e.formik,n=e.name,r=Object(F.a)(e,["formik","name"]);return Object(g.jsx)(q.a,Object(p.a)(Object(p.a)({size:"lg",colorScheme:"red"},r),{},{log:console.log(t),isChecked:t.values&&t.values[n],onChange:function(){return t.setFieldValue(n,!(t.values&&t.values[n]))}}))})),enum:G((function(e){var t=e.schema,n=(e.placeholder,Object(F.a)(e,["schema","placeholder"]));return Object(g.jsx)(B.a,Object(p.a)(Object(p.a)({},n),{},{children:t.values.map((function(e){return Object(g.jsx)("option",{value:e,children:e})}))}))})),relation_one:G((function(e){var t=e.schema,n=(e.placeholder,e.value),a=Object(F.a)(e,["schema","placeholder","value"]),c=Object(r.useContext)(fe),s=Object(r.useMemo)((function(){return c(t.model)}),[c,t]),i=I(v("/admin/content-manager/".concat(t.model).concat(n?"?".concat(s.primary,"_sort=").concat(n):"")).list);Object(r.useEffect)(i.run,[t]),n&&"object"===typeof n&&(n=n[t.primary]);var o=i.result,u=Object(r.useMemo)((function(){return s&&o&&o.map((function(e){return Object(g.jsx)("option",{value:e[s.primary],children:e[s.display]},e[s.primary])}))}),[s,o]);return i.isLoading?Object(g.jsx)(W.a,{h:8}):Object(g.jsxs)(B.a,Object(p.a)(Object(p.a)({value:n||""},a),{},{children:[Object(g.jsx)("option",{value:"",children:"-"}),u]}))})),relation_many:!1,email:G((function(e){return Object(g.jsx)(M.a,Object(p.a)({type:"email"},e))})),display_info:Object(T.f)((function(e){var t=e.name,n=e.formik,r=e.schema,a=Object(F.a)(e,["name","formik","schema"]),c=n.values&&n.values[t];return Object(g.jsxs)(C.a,Object(p.a)(Object(p.a)({},a),{},{children:[c&&"object"===typeof c?c[r.model_display]:c,!c&&"-"]}))})),file:G(V),file_multi:U};function Q(e){var t=e.schema,n=e.isCreating,r=e.contentHandler,a=e.contentApi,c=e.id,s=Object(j.g)();return Object(g.jsxs)(S.a,{p:4,bg:"white",flex:1,children:[Object(g.jsx)(_.a,{templateColumns:{sm:"repeat(1, 1fr)",lg:"repeat(2, 1fr)","2xl":"repeat(3, 1fr)"},flex:1,gap:6,mb:6,children:Object.keys(t.fields).map((function(e){return Object(g.jsx)(X,{schema:t.fields[e],isCreating:n},e)}))}),Object(g.jsxs)(E.a,{w:"100%",justifyContent:"space-between",children:[!n&&Object(g.jsx)(L.a,{type:"button",colorScheme:"red",onClick:Object(f.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.run(a.delete(c));case 2:s.goBack();case 3:case"end":return e.stop()}}),e)}))),children:"Delete"}),Object(g.jsx)(L.a,{type:"submit",colorScheme:"green",children:"Save"})]})]})}function X(e){var t,n=null!==(t=K[e.schema.type])&&void 0!==t?t:K.default;return n?Object(g.jsx)(n,Object(p.a)({},e)):null}function Y(e){var t=e.schema;return Object(g.jsxs)(S.a,{minW:"350px",p:4,bg:"white",children:[Object(g.jsx)(C.a,{fontWeight:"bold",fontSize:20,children:"Information"}),Object.keys(t.fields).map((function(e){return Object(g.jsx)(Z,{schema:t.fields[e]},e)}))]})}function Z(e){var t=e.schema,n=K.display_info;return t.auto&&t.readonly?n&&Object(g.jsxs)(A.a,{children:[Object(g.jsx)(D.a,{children:t.name}),Object(g.jsx)(n,{as:C.a,name:t.key,disabled:!0,schema:t,color:"gray.800",fontSize:"14",ml:4})]}):null}function $(e){var t=e.isCreating,n=e.schema,a=Object(j.h)(),c=a.model,s=a.id,i=Object(j.g)(),o=v("/admin/content-manager/".concat(c)),u=Object(k.a)(),l=I((function(){return o.get(s)}),[]);Object(r.useEffect)((function(){l.error&&(u({title:"Server error",description:l.error,status:"error",duration:9e3,isClosable:!0}),l.setError(null))}),[l.error,l.resetError,u]),Object(r.useEffect)((function(){t||l.run()}),[t,s]);var b={isCreating:t,history:i,schema:n,id:s,contentHandler:l,contentApi:o};return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(S.a,{children:[Object(g.jsx)(C.a,{fontSize:40,mb:4,children:l.result&&!t?"".concat(l.result[n.display]," (").concat(n.name,")"):n.name}),Object(g.jsxs)(ee,Object(p.a)(Object(p.a)({},b),{},{children:[Object(g.jsx)(E.a,{mb:6,children:Object(g.jsx)(L.a,{colorScheme:"red",onClick:function(){return i.goBack()},variant:"link",children:"Back"})}),Object(g.jsxs)(E.b,{flex:1,direction:{sm:"column",xl:"row"},alignItems:{sm:"stretch",xl:"flex-start"},children:[Object(g.jsx)(Q,Object(p.a)({},b)),!t&&Object(g.jsx)(Y,Object(p.a)({},b))]})]}))]})})}function ee(e){var t=e.children,n=e.isCreating,a=e.schema,c=e.id,s=e.contentHandler,i=e.contentApi,o=Object(j.g)(),u=Object(r.useMemo)((function(){var e={};return Object.values(a.fields).forEach((function(t){null==t.default||t.auto||(e[t.key]=t.default)})),e}),[a]),l=function(e){if(!e)return null;var t={};return Object.keys(e.fields).forEach((function(n){var r=null;switch(e.fields[n].type){case"file_multi":r=P.a(P.b((function(e){switch(typeof e){case"object":return P.d({id:P.c().required()});default:return P.c().required()}})))}r&&(t[n]=r)})),P.d(t)}(a);return(n||!s.isLoading)&&Object(g.jsx)(T.d,{initialValues:n?u:s.result,validationSchema:l,onSubmit:function(){var e=Object(f.a)(d.a.mark((function e(t){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,s.run(n?i.create(t):i.update(t,c));case 3:if(r=e.sent){e.next=6;break}return e.abrupt("return");case 6:n&&o.replace("./"+r[a.primary]);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:Object(g.jsx)(T.c,{children:t})})}var te=n(347),ne=n(345),re=n(346),ae=n(344);function ce(e){var t=e.page,n=e.max,r=e.onSelect,a=e.colorScheme;t=parseInt(t);var c=n<10?n:10,s=t-c/2<0?0:t+c/2>n?n-c:t-c/2;return 1===n&&1===t?null:Object(g.jsxs)(E.a,{mx:"auto",justifyContent:"center",w:"100%",children:[Object(g.jsx)(ae.a,{colorScheme:a,icon:Object(g.jsx)(ne.a,{}),variant:"ghost",onClick:function(){return r(1)},disabled:t<=1}),Array.apply(null,Array(c)).map((function(e,n){return Object(g.jsx)(L.a,{colorScheme:a,variant:n+s+1===t?"solid":"ghost",onClick:function(){return r(n+s+1)},children:n+s+1},n)})),Object(g.jsx)(ae.a,{colorScheme:a,icon:Object(g.jsx)(re.a,{}),variant:"ghost",onClick:function(){return r(n)},disabled:t>=n})]})}function se(e){var t=e.schema,n=Object(j.h)().model,a=Object(j.g)(),c=new URLSearchParams(a.location.search).get("page")||1,s=v("/admin/content-manager/".concat(n)),i=Object(r.useState)(0),o=Object(h.a)(i,2),u=o[0],l=o[1],b=I(s.list,[]);Object(r.useEffect)((function(){Object(f.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.runError(b.runStatus(s.get("count")));case 2:if(null!=(t=e.sent)){e.next=5;break}return e.abrupt("return");case 5:l(t),b.run(s.send("?_limit=100&_start=".concat(100*(c-1))));case 7:case"end":return e.stop()}}),e)})))()}),[c,t]);var p={password:!1,relation_one:!1,relation_many:!1,file:!1,json:!1,bool:function(e){return e?"true":"false"},default:function(e){return String(e)},file_multi:!1},O=t&&Object.keys(t.fields).filter((function(e){return!1!==p[t.fields[e].type]&&!t.fields[e].private}));return Object(g.jsxs)(S.a,{children:[Object(g.jsx)(C.a,{fontSize:40,mb:4,children:t.name}),Object(g.jsxs)(W.a,{isLoaded:!b.isLoading,children:[Object(g.jsx)(ce,{page:c,max:Math.ceil(u/100)||1,colorScheme:"red",onSelect:function(e){return a.push("?page="+e)}}),Object(g.jsx)(E.a,{mb:6,children:t.editable&&Object(g.jsx)(L.a,{colorScheme:"red","aria-label":"Search database",onClick:function(){return a.push(a.location.pathname+"/create")},variant:"link",children:"New"})}),Object(g.jsxs)(te.a,{mb:6,children:[Object(g.jsx)(te.e,{children:Object(g.jsx)(te.f,{children:O.map((function(e){return Object(g.jsx)(te.d,{children:e},e)}))})}),Object(g.jsx)(te.b,{children:b.result&&b.result.map((function(e,n){return Object(g.jsx)(te.f,{onClick:function(){return t.editable&&a.push(a.location.pathname+"/"+e[t.primary])},children:O.map((function(n){return Object(g.jsx)(te.c,{children:(p[t.fields[n].type]||p.default)(e[n])},n)}))},e[t.primary]||n)}))})]}),Object(g.jsx)(ce,{page:c,max:Math.ceil(u/100)||1,colorScheme:"red",onSelect:function(e){return a.push("?page="+e)}})]})]})}function ie(e){var t=e.match,n=Object(j.h)().model,a=Object(r.useContext)(fe),c=Object(r.useMemo)((function(){return a(n)}),[a,n]);return c&&Object(g.jsxs)(j.d,{children:[Object(g.jsx)(j.b,{path:"".concat(t.path,"/create"),children:Object(g.jsx)($,{isCreating:!0,schema:c},c.key)}),Object(g.jsx)(j.b,{path:"".concat(t.path,"/:id"),children:Object(g.jsx)($,{isCreating:!1,schema:c},c.key)}),Object(g.jsx)(j.b,{path:t.path,exact:!0,children:Object(g.jsx)(se,{schema:c},c.key)})]})}var oe=n(348);function ue(e){var t,n=e.children,a=I(v("/admin/content-schema/models").list),c=Object(r.useContext)(w);return Object(r.useEffect)(a.run,[c.user]),Object(g.jsxs)(g.Fragment,{children:[a.isLoading&&Object(g.jsx)(i.a,{w:"100vw",h:"100vh",children:Object(g.jsx)(o.a,{})}),Object(g.jsxs)(S.a,{bg:"gray.100",minH:"100vh",w:"100%",overflow:"visible",children:[Object(g.jsxs)(S.a,{position:"fixed",left:0,px:3,w:"250px",top:0,minH:"100%",bg:"red.600",color:"white",children:[Object(g.jsx)(S.a,{fontSize:40,mb:6,w:"100%",textAlign:"center",children:Object(g.jsx)(l.b,{to:"/",children:"Phroper"})}),c.user&&Object(g.jsxs)(E.a,{mb:6,children:[Object(g.jsx)(oe.a,{mr:4}),Object(g.jsxs)(E.c,{flex:1,alignItems:"flex-start",children:[Object(g.jsx)(C.a,{fontSize:20,children:c.user.username}),Object(g.jsx)(L.a,{variant:"link",colorScheme:"white",onClick:c.logout,children:"logout"})]})]}),a.isSuccess&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(C.a,{fontSize:24,mb:2,children:"Content types"}),Object(g.jsx)(E.c,{pl:4,alignItems:"flex-start",children:null===(t=a.result)||void 0===t?void 0:t.filter((function(e){return e.visible})).map((function(e){return Object(g.jsx)(l.b,{to:"/content-type/".concat(e.key),children:e.name},e.key)}))})]})]}),Object(g.jsx)(S.a,{ml:250,px:4,children:n})]})]})}var le=n(349),je=n(358);function be(){return Object(g.jsxs)(le.a,{minH:10,p:0,bgColor:"gray.200",mt:"10vh",children:[Object(g.jsx)(C.a,{fontSize:32,p:2,bg:"red.500",color:"white",mb:4,children:"Login"}),Object(g.jsx)(S.a,{p:4,children:Object(g.jsx)(de,{})})]})}function de(){var e=Object(r.useContext)(w),t=Object(j.g)();return Object(g.jsx)(T.d,{validationSchema:P.d().shape({username:P.e().required("Username is required"),password:P.e().required("Password is required")}),initialValues:{username:"",password:""},onSubmit:function(){var n=Object(f.a)(d.a.mark((function n(r,a){var c,s;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=a.setErrors,n.prev=1,n.next=4,e.login(r.username,r.password);case 4:for(s=t.location.state;s&&s.redirect&&"/login"===s.redirect.pathname;)s=s.redirect.state;s&&s.redirect?t.push(s.redirect.pathname,s.redirect.state):t.push("/"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),c({password:n.t0.message});case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e,t){return n.apply(this,arguments)}}(),children:Object(g.jsx)(T.c,{children:Object(g.jsxs)(E.b,{spacing:4,children:[t.location.state&&t.location.state.error&&Object(g.jsxs)(je.a,{status:"error",children:[Object(g.jsx)(je.c,{}),Object(g.jsx)(je.b,{children:t.location.state.error})]}),Object(g.jsxs)(A.a,{children:[Object(g.jsx)(D.a,{children:"Username"}),Object(g.jsx)(T.b,{as:M.a,bgColor:"white",type:"text",name:"username"}),Object(g.jsx)(T.a,{name:"username",component:C.a,color:"red"})]}),Object(g.jsxs)(A.a,{children:[Object(g.jsx)(D.a,{children:"Password"}),Object(g.jsx)(T.b,{as:M.a,bgColor:"white",type:"password",name:"password"}),Object(g.jsx)(T.a,{name:"password",component:C.a,color:"red"})]}),Object(g.jsx)(S.a,{textAlign:"right",pt:2,children:Object(g.jsx)(T.e,{children:function(e){var t=e.isSubmitting;return Object(g.jsx)(L.a,{isLoading:t,type:"submit",variant:"solid",colorScheme:"red",children:"Log in"})}})})]})})})}var fe=a.a.createContext();function he(e){var t=e.children,n=I(v("/admin/content-schema/models").list,null),a=Object(r.useContext)(w);return Object(r.useEffect)(n.run,[a.user]),Object(g.jsxs)(g.Fragment,{children:[n.isLoading&&Object(g.jsx)(i.a,{w:"100vw",h:"100vh",children:Object(g.jsx)(o.a,{})}),!n.isLoading&&Object(g.jsx)(fe.Provider,{value:function(e){return n.result&&n.result.find((function(t){return t.key===e}))},children:t})]})}var pe=function(){return Object(g.jsx)(u.a,{children:Object(g.jsx)(l.a,{basename:"/admin",children:Object(g.jsxs)(y,{children:[Object(g.jsx)(w.Consumer,{children:function(e){return!e.user&&Object(g.jsx)(j.a,{to:"/login"})}}),Object(g.jsx)(he,{children:Object(g.jsx)(ue,{children:Object(g.jsxs)(j.d,{children:[Object(g.jsx)(j.b,{path:"/login",component:be}),Object(g.jsx)(j.b,{path:"/content-type/:model",component:ie})]})})})]})})})},Oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,359)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(pe,{})}),document.getElementById("root")),Oe()}},[[318,1,2]]]);
//# sourceMappingURL=main.7459a46d.chunk.js.map