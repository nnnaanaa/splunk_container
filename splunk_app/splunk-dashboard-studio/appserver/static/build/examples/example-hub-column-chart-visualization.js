import{a as t}from"../chunks/chunk-3JCN5ZBG.js";import"../chunks/chunk-RVBF4OJC.js";import"../chunks/chunk-4KCRXN4A.js";import"../chunks/chunk-HXVBTB46.js";import"../chunks/chunk-YCDSEQ2I.js";import"../chunks/chunk-5OMD3MTC.js";import"../chunks/chunk-ITAS4PYU.js";import"../chunks/chunk-7QOS4MOO.js";import"../chunks/chunk-DEAOBGB4.js";import{a as r}from"../chunks/chunk-ED4ZNTSN.js";import"../chunks/chunk-ILWOP6EW.js";import"../chunks/chunk-3IJ7CW3D.js";import{b as a}from"../chunks/chunk-IJIU7GDE.js";import{i as e}from"../chunks/chunk-VV54FNKQ.js";var i=e(a()),n=e(r());var o={visualizations:{viz_3NUrAfkt:{type:"splunk.markdown",options:{markdown:"## Overview\n\nA column chart is primarily used to compare and track the development of quantitative values over a period of time. Compared to area and line charts, column charts are suitable for discrete data points. Column charts can also compare non time series data, however a bar chart or another comparison chart might be better suited for that purpose. \n\nColumn charts get their x-axis from the first column of a statistics table, and their y-axis values from the next columns. The first column returned can be `_time` with the `timechart` command. Note that in this example, since we are using a lookup file, we use the `chart` command and use the `over` clause to chart over the `myTime` field which is the time each event in the lookup took place.\n\n`| timechart count by <category_of_interest>`"}},viz_gezCclRK:{type:"splunk.column",dataSources:{primary:"ds_search1"},title:"Column Chart",description:"Single Series"},viz_Zy9SbUug:{type:"splunk.column",dataSources:{primary:"ds_search2"},title:"Column Chart",description:"Multiple Series"},viz_04NOvPv8:{type:"splunk.column",dataSources:{primary:"ds_search2"},options:{stackMode:"stacked"},title:"Column Chart",description:"Multiple Series - Stacked"},viz_IT7zpNRd:{type:"splunk.column",dataSources:{primary:"ds_search2"},options:{stackMode:"stacked100"},title:"Column Chart",description:"Multiple Series - Stacked Mode 100%"},viz_RVNSVBHv:{type:"splunk.markdown",options:{markdown:`### SPL For Single Series
\`\`\`
| inputlookup firewall_example.csv
| eval myTime=strftime(timestamp,"%H:%M")
| chart count over myTime
\`\`\`
### Source Definition
\`\`\`
{
    "type": "splunk.column",
    "dataSources": {
        "primary": "ds_search1"
    },
    "options": {},
    "context": {}
}
\`\`\``}},viz_Hb2gqYLi:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.column",
    "dataSources": {
        "primary": "ds_search2"
    },
    "options": {
        "stackMode": "stacked"
    },
    "context": {}
}
\`\`\``}},viz_n67ApED4:{type:"splunk.markdown",options:{markdown:`### SPL For Multiple Series
\`\`\`
| inputlookup firewall_example.csv
| search host IN (host18, host8)
| eval myTime=strftime(timestamp,"%H:%M")
| chart count over myTime by host
\`\`\`
### Source Definition
\`\`\`
{
    "type": "splunk.column",
    "dataSources": {
        "primary": "ds_search2"
    },
    "options": {},
    "context": {},
}
\`\`\``}},viz_udik1cuo:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.column",
    "dataSources": {
        "primary": "ds_search2"
    },
    "options": {
        "stackMode": "stacked100"
    },
    "context": {}
}
\`\`\``}}},dataSources:{ds_search1:{type:"ds.search",options:{query:'| inputlookup firewall_example.csv| eval myTime=strftime(timestamp,"%H:%M")| chart count over myTime',queryParameters:{earliest:"-4h@m",latest:"now"}},name:"Search_1"},ds_search2:{type:"ds.search",options:{query:`| inputlookup firewall_example.csv
| search host IN (host18, host8)
| eval myTime=strftime(timestamp,"%H:%M")
| chart count over myTime by host`,queryParameters:{earliest:"-4h@m",latest:"now"}},name:"Search_2"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{},layout:{type:"grid",options:{},structure:[{item:"viz_3NUrAfkt",type:"block",position:{x:0,y:0,w:1440,h:236}},{item:"viz_gezCclRK",type:"block",position:{x:0,y:236,w:618,h:364}},{item:"viz_Zy9SbUug",type:"block",position:{x:0,y:600,w:618,h:381}},{item:"viz_04NOvPv8",type:"block",position:{x:0,y:981,w:618,h:308}},{item:"viz_IT7zpNRd",type:"block",position:{x:0,y:1289,w:618,h:316}},{item:"viz_RVNSVBHv",type:"block",position:{x:618,y:236,w:582,h:364}},{item:"viz_n67ApED4",type:"block",position:{x:618,y:600,w:582,h:381}},{item:"viz_Hb2gqYLi",type:"block",position:{x:618,y:981,w:582,h:308}},{item:"viz_udik1cuo",type:"block",position:{x:618,y:1289,w:582,h:316}}],globalInputs:[]},description:"Column charts can be used for time series data when comparing magnitudes over time.",title:"Column Chart"};(0,n.default)(i.default.createElement(t,{definition:o}),{pageTitle:"Column Chart",hideFooter:!0,layout:"fixed"});
