import{a as e}from"../chunks/chunk-3JCN5ZBG.js";import"../chunks/chunk-RVBF4OJC.js";import"../chunks/chunk-4KCRXN4A.js";import"../chunks/chunk-HXVBTB46.js";import"../chunks/chunk-YCDSEQ2I.js";import"../chunks/chunk-5OMD3MTC.js";import"../chunks/chunk-ITAS4PYU.js";import"../chunks/chunk-7QOS4MOO.js";import"../chunks/chunk-DEAOBGB4.js";import{a as i}from"../chunks/chunk-ED4ZNTSN.js";import"../chunks/chunk-ILWOP6EW.js";import"../chunks/chunk-3IJ7CW3D.js";import{b as r}from"../chunks/chunk-IJIU7GDE.js";import{i as o}from"../chunks/chunk-VV54FNKQ.js";var t=o(r()),a=o(i());var n={visualizations:{viz_OPQATCGl:{type:"splunk.fillergauge",dataSources:{primary:"ds_search1"},options:{gaugeColor:"> value | rangeValue(gaugeColorEditorConfig)"},title:"Filler Gauge",description:"Conditional coloring",context:{gaugeColorEditorConfig:[{value:"#252214",to:9},{value:"#253223",from:9,to:29},{value:"#244333",from:29,to:60},{value:"#245442",from:60,to:70},{value:"#246451",from:70,to:80},{value:"#237561",from:80,to:90},{value:"#238570",from:90}]},showProgressBar:!1,showLastUpdated:!1},viz_omCpZ2ww:{type:"splunk.markdown",options:{markdown:`## Overview
A Filler gauges shows value ranges and colors with a Filler that moves to indicate the current value. This page shows available coloring options for filler gauges.

The following examples use this makeresults query
### SPL
\`\`\`
| makeresults
| eval count= random()%100
| fields count
\`\`\``}},viz_02J4knli:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.fillergauge",
    "dataSources": {
        "primary": "ds_search1"
    },
    "options": {
        "gaugeColor": "> value | rangeValue(gaugeColorEditorConfig)"
    },
    "context": {
        "gaugeColorEditorConfig": [
            {
                "value": "#252214",
                "to": 9
            },
            {
                "value": "#253223",
                "from": 9,
                "to": 29
            },
            {
                "value": "#244333",
                "from": 29,
                "to": 60
            },
            {
                "value": "#245442",
                "from": 60,
                "to": 70
            },
            {
                "value": "#246451",
                "from": 70,
                "to": 80
            },
            {
                "value": "#237561",
                "from": 80,
                "to": 90
            },
            {
                "value": "#238570",
                "from": 90
            }
        ]
    }
}
\`\`\``}},viz_8DHPZzts:{type:"splunk.fillergauge",options:{orientation:"horizontal",backgroundColor:"#5a4575"},dataSources:{primary:"ds_search1"},title:"Filler Gauge",description:"Horizontal, Background Purple",showProgressBar:!1,showLastUpdated:!1},viz_wTp98CwR:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.fillergauge",
    "options": {
        "orientation": "horizontal",
        "backgroundColor": "#5a4575"
    },
    "dataSources": {
        "primary": "ds_search1"
    },
    "context": {}
}
\`\`\``}}},dataSources:{ds_search1:{type:"ds.search",options:{query:`| makeresults
| eval count=random()%100
| fields count`,queryParameters:{earliest:"-15m",latest:"now"}},name:"Search_1"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{},layout:{type:"grid",options:{},structure:[{item:"viz_omCpZ2ww",type:"block",position:{x:0,y:0,w:1440,h:268}},{item:"viz_OPQATCGl",type:"block",position:{x:0,y:268,w:300,h:462}},{item:"viz_02J4knli",type:"block",position:{x:300,y:268,w:300,h:462}},{item:"viz_8DHPZzts",type:"block",position:{x:600,y:268,w:294,h:462}},{item:"viz_wTp98CwR",type:"block",position:{x:894,y:268,w:306,h:462}}],globalInputs:[]},description:"Adjust Coloring for Filler Gauges",title:"Filler Gauge Coloring"};(0,a.default)(t.default.createElement(e,{definition:n}),{pageTitle:"Filler Gauge Coloring",hideFooter:!0,layout:"fixed"});
