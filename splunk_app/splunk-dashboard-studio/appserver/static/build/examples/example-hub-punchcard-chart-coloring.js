import{a as n}from"../chunks/chunk-3JCN5ZBG.js";import"../chunks/chunk-RVBF4OJC.js";import"../chunks/chunk-4KCRXN4A.js";import"../chunks/chunk-HXVBTB46.js";import"../chunks/chunk-YCDSEQ2I.js";import"../chunks/chunk-5OMD3MTC.js";import"../chunks/chunk-ITAS4PYU.js";import"../chunks/chunk-7QOS4MOO.js";import"../chunks/chunk-DEAOBGB4.js";import{a}from"../chunks/chunk-ED4ZNTSN.js";import"../chunks/chunk-ILWOP6EW.js";import"../chunks/chunk-3IJ7CW3D.js";import{b as i}from"../chunks/chunk-IJIU7GDE.js";import{i as o}from"../chunks/chunk-VV54FNKQ.js";var t=o(i()),r=o(a());var e={visualizations:{viz_ex9bx0og:{type:"splunk.markdown",options:{markdown:`## Overview

Punchcards can visualize cyclical trends in your data. Using a punchcard, you can see relative values for a metric where the dimensions intersect.

A punchcard can be used with any data using some sort of timestamp and a metric you want to track. You can also use a query that returns a second field indicating color to visually separate categories. This example shows different coloring options for the Punchcard chart.`}},viz_U1QozhCt:{type:"splunk.punchcard",dataSources:{primary:"ds_LdgLHW2l"},title:"Punchcard Coloring",description:"Dynamic coloring, Transparent background, bubble color - green",showProgressBar:!1,showLastUpdated:!1,options:{backgroundColor:"transparent",bubbleColor:"#46D4BA"}},viz_g1eVJOyU:{type:"splunk.markdown",options:{markdown:`### SPL Query
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
    "options": {
        "backgroundColor": "transparent",
        "bubbleColor": "#46D4BA"
    },
    "context": {}
}

\`\`\``}},viz_EdD4tUJI:{type:"splunk.punchcard",dataSources:{primary:"ds_LdgLHW2l"},title:"Punchcard Coloring",description:"Categorical color mode without Legend",showProgressBar:!1,showLastUpdated:!1,options:{colorMode:"categorical",legendDisplay:"off"}},viz_whIwQh9E:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.punchcard",
    "dataSources": {
        "primary": "ds_search1"
    },
    "options": {
        "colorMode": "categorical",
        "legendDisplay": "off"
    },
    "context": {}
}

\`\`\``}},viz_vfZZQhO2:{type:"splunk.punchcard",dataSources:{primary:"ds_LdgLHW2l"},title:"Punchcard Coloring",description:"Series Color with Legend",showProgressBar:!1,showLastUpdated:!1,options:{seriesColors:["#A86FEF","#A8F5E7","#46D4BA"],colorMode:"categorical"}},viz_kUufQvMu:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.punchcard",
    "dataSources": {
        "primary": "ds_search1"
    },
    "options": {
        "seriesColors": [
            "#A86FEF",
            "#A8F5E7",
            "#46D4BA"
        ],
        "colorMode": "categorical"
    },
    "context": {}
}
\`\`\``}}},dataSources:{ds_LdgLHW2l:{type:"ds.search",options:{query:`| inputlookup examples.csv
| fields punch_hour punch_day punch_count punch_region`,queryParameters:{earliest:"-24h@h",latest:"now"}},name:"Search_1"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{},layout:{type:"grid",options:{},structure:[{item:"viz_ex9bx0og",type:"block",position:{x:0,y:0,w:1440,h:145}},{item:"viz_U1QozhCt",type:"block",position:{x:0,y:145,w:748,h:400}},{item:"viz_EdD4tUJI",type:"block",position:{x:0,y:545,w:748,h:400}},{item:"viz_vfZZQhO2",type:"block",position:{x:0,y:945,w:748,h:400}},{item:"viz_g1eVJOyU",type:"block",position:{x:748,y:145,w:452,h:400}},{item:"viz_whIwQh9E",type:"block",position:{x:748,y:545,w:452,h:400}},{item:"viz_kUufQvMu",type:"block",position:{x:748,y:945,w:452,h:400}}],globalInputs:[]},description:"Adjust coloring for punchcard visualizations",title:"Punchcards Coloring"};(0,r.default)(t.default.createElement(n,{definition:e}),{pageTitle:"Punchcard Coloring",hideFooter:!0,layout:"fixed"});
