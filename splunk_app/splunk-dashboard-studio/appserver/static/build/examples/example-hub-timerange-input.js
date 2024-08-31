import{a as t}from"../chunks/chunk-3JCN5ZBG.js";import"../chunks/chunk-RVBF4OJC.js";import"../chunks/chunk-4KCRXN4A.js";import"../chunks/chunk-HXVBTB46.js";import"../chunks/chunk-YCDSEQ2I.js";import"../chunks/chunk-5OMD3MTC.js";import"../chunks/chunk-ITAS4PYU.js";import"../chunks/chunk-7QOS4MOO.js";import"../chunks/chunk-DEAOBGB4.js";import{a as l}from"../chunks/chunk-ED4ZNTSN.js";import"../chunks/chunk-ILWOP6EW.js";import"../chunks/chunk-3IJ7CW3D.js";import{b as o}from"../chunks/chunk-IJIU7GDE.js";import{i as e}from"../chunks/chunk-VV54FNKQ.js";var n=e(o()),i=e(l());var a={visualizations:{viz_eywUFugw:{type:"splunk.markdown",options:{markdown:`## Overview
By default, a new dashboard comes with a global time range input. A global time range affects every datasource on the dashboard by default.

You can also add another time range, and make it specific to a certain datasource, so that the datasource no longer depends on the default time range picker.  

Lastly, you can also configure a datasource to use a **static** time range, which makes it not dependent on any input and will always stay to what was selected in the datasource's configuration. 

In the following example, the top chart uses the global time range, the middle chart uses the local time range, and the bottom uses "real time" as the static time range selection. All charts use an internal index search (so it may be blocked to some users) however the example source code below can be applied when searching through any index.

### Source for Global Time Range
\`\`\`
{
    "type": "input.timerange",
    "options": {
       "token": "global",
       "defaultValue": "-15m,now"
    },
    "title": "Global Time Range"
}
\`\`\`
### Source for Local Time Range
\`\`\`
{
    "options": {
        "defaultValue": "-5m@m,now",
        "token": "local_time"
    },
    "title": "Local Time",
    "type": "input.timerange"
}
\`\`\``}},viz_vB26gQSP:{type:"splunk.line",dataSources:{primary:"ds_xRZBjW3q"},title:"Global Time"},viz_6tGDmtX1:{type:"splunk.line",dataSources:{primary:"ds_AQGDZTdz"},title:"Local Time"},viz_UQ6JDrTB:{type:"splunk.line",dataSources:{primary:"ds_qOfkgqY1"},title:"Static Time"}},dataSources:{ds_qOfkgqY1:{type:"ds.search",options:{query:`index=_internal
| timechart count by sourcetype`,queryParameters:{earliest:"rt-30s",latest:"rt"}},name:"Search_1"},ds_xRZBjW3q:{type:"ds.search",options:{query:`index=_internal
| timechart count by sourcetype`},name:"Search_2"},ds_AQGDZTdz:{type:"ds.search",options:{query:`index=_internal
| timechart count by sourcetype`,queryParameters:{earliest:"$local_time.earliest$",latest:"$local_time.latest$"}},name:"Search_3"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{input_global_trp:{type:"input.timerange",options:{token:"global_time",defaultValue:"-15m,now"},title:"Global Time Range"},input_94Exx6lW:{options:{defaultValue:"-5m@m,now",token:"local_time"},title:"Local Time",type:"input.timerange"}},layout:{type:"grid",options:{},structure:[{item:"viz_eywUFugw",type:"block",position:{x:0,y:0,w:600,h:741}},{item:"viz_UQ6JDrTB",type:"block",position:{x:600,y:481,w:600,h:260}},{item:"viz_vB26gQSP",type:"block",position:{x:600,y:0,w:600,h:234}},{item:"viz_6tGDmtX1",type:"block",position:{x:600,y:234,w:600,h:247}}],globalInputs:["input_global_trp","input_94Exx6lW"]},description:"Select the time range used by data sources powering your visualizations",title:"Time Range Input"};(0,i.default)(n.default.createElement(t,{definition:a}),{pageTitle:"Time Range Input",hideFooter:!0,layout:"fixed"});
