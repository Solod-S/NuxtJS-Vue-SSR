(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{309:function(e,t,r){var content=r(316);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(116).default)("58732a55",content,!0,{sourceMap:!1})},315:function(e,t,r){"use strict";r(309)},316:function(e,t,r){var n=r(115)((function(i){return i[1]}));n.push([e.i,".centered{margin-bottom:40px}.centered,.userList{text-align:center}",""]),n.locals={},e.exports=n},328:function(e,t,r){"use strict";r.r(t);r(42);var n=r(9),c=(r(47),{data:function(){return{pageTitle:"Users Page"}},methods:{goTo:function(e){this.$router.push("/users/"+e.id)}},fetch:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.store,n=e.error,t.prev=1,0!==r.getters["users/users"].length){t.next=5;break}return t.next=5,r.dispatch("users/fetchAllUser");case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),n(t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})))()},computed:{users:function(){return this.$store.getters["users/users"]}}}),o=(r(315),r(26)),component=Object(o.a)(c,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"container centered"},[t("h1",[e._v(e._s(e.pageTitle))])]),e._v(" "),t("div",{staticClass:"container"},[t("ul",{staticClass:"userList"},e._l(e.users,(function(r){return t("li",{key:r.phone},[t("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.goTo(r)}}},[e._v("\n          "+e._s(r.name)+" => "+e._s(r.email))])])})),0)])])}),[],!1,null,null,null);t.default=component.exports}}]);