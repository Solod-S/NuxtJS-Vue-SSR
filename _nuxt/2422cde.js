(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{328:function(r,t,n){"use strict";n.r(t);n(42);var c=n(10),o=(n(47),n(23),{validate:function(e){var r=e.params;return/^\d+$/.test(r.id)},asyncData:function(r){return Object(c.a)(regeneratorRuntime.mark((function t(){var n,c,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.params,r.error,c=r.$axios,t.prev=1,t.next=4,c.$get("https://jsonplaceholder.typicode.com/users/".concat(n.id));case 4:return o=t.sent,t.abrupt("return",{user:o});case 8:t.prev=8,t.t0=t.catch(1),t.t0(e);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))()}}),l=n(26),component=Object(l.a)(o,(function(){var e=this,r=e._self._c;return r("div",{staticClass:"container"},[r("h1",[e._v(e._s(e.user.name))]),e._v(" "),r("hr"),e._v(" "),r("p",[e._v(e._s(e.user.email))]),e._v(" "),r("p")])}),[],!1,null,null,null);t.default=component.exports}}]);