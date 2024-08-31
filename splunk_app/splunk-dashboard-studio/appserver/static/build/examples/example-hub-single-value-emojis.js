import{a as n}from"../chunks/chunk-3JCN5ZBG.js";import"../chunks/chunk-RVBF4OJC.js";import"../chunks/chunk-4KCRXN4A.js";import"../chunks/chunk-HXVBTB46.js";import"../chunks/chunk-YCDSEQ2I.js";import"../chunks/chunk-5OMD3MTC.js";import"../chunks/chunk-ITAS4PYU.js";import"../chunks/chunk-7QOS4MOO.js";import"../chunks/chunk-DEAOBGB4.js";import{a as s}from"../chunks/chunk-ED4ZNTSN.js";import"../chunks/chunk-ILWOP6EW.js";import"../chunks/chunk-3IJ7CW3D.js";import{b as i}from"../chunks/chunk-IJIU7GDE.js";import{i as e}from"../chunks/chunk-VV54FNKQ.js";var a=e(i()),o=e(s());var t={visualizations:{viz_YxUwAzLI:{type:"splunk.markdown",options:{markdown:`## Overview
A single value is used for showing a metric or KPI and its related context. Single value visualizations display results and context for searches returning a discrete number. A single value can be a count or other aggregation of specific events.

Any query returning aggregate data using the \`stats\` command is suitable for a Single Value. You can also use a \`timechart\` command to generate a sparkline and then use the visualization DSL to control the major and delta values.

This page covers how to use an emoji to represent a value using a case function in SPL, rather than displaying a number or string.`}},viz_U7wayoPl:{type:"splunk.markdown",options:{markdown:`### SPL
\`\`\`
| makeresults 
| eval n="\u{1F333}\u{1F44D}"
\`\`\`
### Source Definition
\`\`\`
{
    "type": "splunk.singlevalue",
    "options": {
        "sparklineDisplay": "off",
        "trendDisplay": "off"
    },
    "dataSources": {
        "primary": "ds_search1"
    },
    "context": {},
    "showProgressBar": false,
    "showLastUpdated": false
}
\`\`\``}},viz_xEWPDJdb:{type:"splunk.singlevalue",options:{sparklineDisplay:"off",trendDisplay:"off"},dataSources:{primary:"ds_search1"},context:{},title:"Basic Emoji"},viz_CJrQvPIi:{type:"splunk.singlevalue",options:{sparklineDisplay:"off",trendDisplay:"off"},dataSources:{primary:"ds_search2"},context:{},title:"Conditionally Chosen Emoji"},viz_LoduGjVj:{type:"splunk.markdown",options:{markdown:`### SPL
\`\`\`
| makeresults
| eval count = random()%1000
| eval output=case(count<400,"\u2600\uFE0F", count>400 AND count<600,"\u{1F324}", count >600,"\u{1F326}")
| table output
| head 1
\`\`\`
### Source Definition
\`\`\`
{
    "type": "splunk.singlevalue",
    "options": {
        "sparklineDisplay": "off",
        "trendDisplay": "off"
    },
    "dataSources": {
        "primary": "ds_search2"
    },
    "context": {}
}
\`\`\``}}},dataSources:{ds_search1:{type:"ds.search",options:{query:`| makeresults 
| eval n="\u{1F333}\u{1F44D}"`,queryParameters:{earliest:"-15m",latest:"now"}},name:"Search_1"},ds_search2:{type:"ds.search",options:{query:`| makeresults
| eval count = random()%1000
| eval output=case(count<400,"\u2600\uFE0F", count>400 AND count<600,"\u{1F324}", count >600,"\u{1F326}")
| table output
| head 1`,queryParameters:{earliest:"-15m",latest:"now"}},name:"Search_2"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{},layout:{type:"grid",options:{},structure:[{item:"viz_YxUwAzLI",type:"block",position:{x:0,y:0,w:1440,h:148}},{item:"viz_xEWPDJdb",type:"block",position:{x:0,y:148,w:297,h:457}},{item:"viz_U7wayoPl",type:"block",position:{x:297,y:148,w:303,h:457}},{item:"viz_CJrQvPIi",type:"block",position:{x:600,y:148,w:307,h:457}},{item:"viz_LoduGjVj",type:"block",position:{x:907,y:148,w:293,h:457}}],globalInputs:[]},description:"Display high level insight by using Emojis to represent values",title:"Single Value with Emoji"};(0,o.default)(a.default.createElement(n,{definition:t}),{pageTitle:"Single Value with Emoji",hideFooter:!0,layout:"fixed"});
