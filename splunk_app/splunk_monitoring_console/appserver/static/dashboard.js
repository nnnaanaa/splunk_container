require(["jquery","underscore","splunk.util","splunkjs/mvc/sharedmodels","splunkjs/mvc/utils","splunkjs/mvc/simplexml"],(function(e,n,t,o,r,i){return function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s="splunk_monitoring_console-extensions/dashboard")}({0:function(n,t){n.exports=e},1:function(e,t){e.exports=n},13:function(e,n){e.exports=r},16:function(e,n){e.exports=i},5:function(e,n){e.exports=t},8:function(e,n){e.exports=o},"splunk_monitoring_console-extensions/dashboard":function(e,n,t){var o,r;window.__splunkjs_router_disabled__=!0,o=[t(1),t(0),t(8),t(16),t(13),t(5)],void 0===(r=function(e,n,t,o,r,i){var s=r.getPageInfo().page,a=t.get("app").get("app"),d=t.get("appLocal"),u=(encodeURIComponent(a),function(){n(".dashboard-header .edit-dashboard-menu").css("display","none"),n(".empty-dashboard").css("visibility","hidden")});e.contains(["index_detail_deployment","indexes_and_volumes_deployment","indexing_performance_deployment","kv_store_deployment","resource_usage_deployment","search_activity_deployment","shc_app_deployment","shc_artifact_replication","shc_conf_rep","shc_scheduler_delegation_statistics","shc_status_and_conf","volume_detail_deployment"],s)&&(n(".dashboard-body > :not(.dashboard-header)").css("visibility","hidden"),d.dfd.then((function(){d.entry.content.get("configured")?n(".dashboard-body > :not(.dashboard-header)").css("visibility","visible"):(n(".dashboard-header").append("<p>"+e("This dashboard is not available, because the Monitoring Console is in standalone mode.").t()+"</p>"),u())}))),"standalone"===s&&u()}.apply(n,o))||(e.exports=r)}})}));