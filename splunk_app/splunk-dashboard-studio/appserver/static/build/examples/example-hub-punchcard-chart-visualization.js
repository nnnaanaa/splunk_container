import{a as n}from"../chunks/chunk-3JCN5ZBG.js";import"../chunks/chunk-RVBF4OJC.js";import"../chunks/chunk-4KCRXN4A.js";import"../chunks/chunk-HXVBTB46.js";import"../chunks/chunk-YCDSEQ2I.js";import"../chunks/chunk-5OMD3MTC.js";import"../chunks/chunk-ITAS4PYU.js";import"../chunks/chunk-7QOS4MOO.js";import"../chunks/chunk-DEAOBGB4.js";import{a as i}from"../chunks/chunk-ED4ZNTSN.js";import"../chunks/chunk-ILWOP6EW.js";import"../chunks/chunk-3IJ7CW3D.js";import{b as s}from"../chunks/chunk-IJIU7GDE.js";import{i as e}from"../chunks/chunk-VV54FNKQ.js";var a=e(s()),t=e(i());var o={visualizations:{viz_ex9bx0og:{type:"splunk.markdown",options:{markdown:`## Overview

Punchcards can visualize cyclical trends in your data. Using a punchcard, you can see relative values for a metric where the dimensions intersect.

A punchcard can be used with any data using some sort of timestamp and a metric you want to track. You can also use a query that returns a another field indicating color to visually separate categories, examples for coloring can be seen in the Punchcard Coloring page.`}},viz_U1QozhCt:{type:"splunk.punchcard",dataSources:{primary:"ds_search1"},title:"Punchcard",description:"Default Configuration, all labels, global row scale, bubble scale area",options:{},context:{},showProgressBar:!1,showLastUpdated:!1},viz_g1eVJOyU:{type:"splunk.markdown",options:{markdown:`### SPL Query
\`\`\`
| inputlookup examples.csv
| fields punch_hour punch_day punch_count punch_region
\`\`\`

### Source Definition
\`\`\`
{
    "type": "splunk.punchcard",
    "dataSources": {
        "primary": "ds_search1"
    },
    "options": {},
    "context": {}
}

\`\`\``}},viz_EdD4tUJI:{type:"splunk.punchcard",options:{bubbleLabelDisplay:"off",showDefaultSort:!0},dataSources:{primary:"ds_search1"},title:"Punchcard",description:"No Label on bubbles,  sort axis labels",showProgressBar:!1,showLastUpdated:!1},viz_whIwQh9E:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.punchcard",
    "options": {
        "bubbleLabelDisplay": "off",
	       "showDefaultSort":true
    },
    "dataSources": {
        "primary": "ds_search1"
    },
    "context": {}
}

\`\`\``}},viz_vfZZQhO2:{type:"splunk.punchcard",options:{bubbleRowScale:"row",bubbleLabelDisplay:"max"},dataSources:{primary:"ds_search1"},title:"Punchcard",description:"Bubble label on max value, bubble row scale per row, bubble scale radius",showProgressBar:!1,showLastUpdated:!1},viz_kUufQvMu:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.punchcard",
    "options": {
        "bubbleRowScale": "row",
        "bubbleLabelDisplay": "max"
    },
    "dataSources": {
        "primary": "ds_search1"
    },
    "context": {}
}

\`\`\``}}},dataSources:{ds_search1:{type:"ds.search",options:{query:`| inputlookup examples.csv
| fields punch_hour punch_day punch_count punch_region`,queryParameters:{earliest:"-24h@h",latest:"now"}},name:"Search_1"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{},layout:{type:"grid",options:{},structure:[{item:"viz_ex9bx0og",type:"block",position:{x:0,y:0,w:1440,h:180}},{item:"viz_U1QozhCt",type:"block",position:{x:0,y:180,w:748,h:400}},{item:"viz_EdD4tUJI",type:"block",position:{x:0,y:580,w:748,h:400}},{item:"viz_vfZZQhO2",type:"block",position:{x:0,y:980,w:748,h:400}},{item:"viz_g1eVJOyU",type:"block",position:{x:748,y:180,w:452,h:400}},{item:"viz_whIwQh9E",type:"block",position:{x:748,y:580,w:452,h:400}},{item:"viz_kUufQvMu",type:"block",position:{x:748,y:980,w:452,h:400}}],globalInputs:[]},description:"Aggregate metrics over two dimensions to visualize cyclical trends in your data",title:"Punchcards"};(0,t.default)(a.default.createElement(n,{definition:o}),{pageTitle:"Punchcard",hideFooter:!0,layout:"fixed"});
