require(["jquery","underscore","splunkjs/mvc/simplexml/ready!","splunkjs/mvc","splunkjs/mvc/tableview"],(function(e,t,n,o,r){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="splunk_monitoring_console-extensions/scheduler_activity_extension")}({0:function(t,n){t.exports=e},1:function(e,n){e.exports=t},2:function(e,t){e.exports=n},6:function(e,t){e.exports=o},7:function(e,t){e.exports=r},"splunk_monitoring_console-extensions/scheduler_activity_extension":function(e,t,n){var o,r;window.__splunkjs_router_disabled__=!0,o=[n(0),n(1),n(6),n(7),n(2)],void 0===(r=function(e,t,n,o){var r=function(){n.Components.get("submitted").set(n.Components.get("default").toJSON())};n.Components.get("default").on("all",r),r();var u=["Interval Load Factor"],i="inherit",l="white",a="#d6563c",c="#f2b827",s=t.template('<div style="background-color: <%= backgroundColor %>; color: <%= textColor %>;"><%= data %></div>'),d=o.BaseCellRenderer.extend({canRender:function(e){return t.contains(u,e.field)},render:function(e,t){var n=parseFloat(t.value)||0,o=i,r=i;n>=100?(o=a,r=l):n>=90&&(o=c,r=l),e.html(s({backgroundColor:o,textColor:r,data:n}))}});t.forEach(["runtime_statistics"],(function(e){var t=n.Components.get(e);t&&t.getVisualization((function(e){e.table.addCellRenderer(new d),e.table.render()}))}))}.apply(t,o))||(e.exports=r)}})}));