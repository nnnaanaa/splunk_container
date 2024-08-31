import{a as e}from"../chunks/chunk-3JCN5ZBG.js";import"../chunks/chunk-RVBF4OJC.js";import"../chunks/chunk-4KCRXN4A.js";import"../chunks/chunk-HXVBTB46.js";import"../chunks/chunk-YCDSEQ2I.js";import"../chunks/chunk-5OMD3MTC.js";import"../chunks/chunk-ITAS4PYU.js";import"../chunks/chunk-7QOS4MOO.js";import"../chunks/chunk-DEAOBGB4.js";import{a}from"../chunks/chunk-ED4ZNTSN.js";import"../chunks/chunk-ILWOP6EW.js";import"../chunks/chunk-3IJ7CW3D.js";import{b as s}from"../chunks/chunk-IJIU7GDE.js";import{i as n}from"../chunks/chunk-VV54FNKQ.js";var o=n(s()),t=n(a());var i={dataSources:{ds_link:{type:"ds.search",options:{queryParameters:{earliest:"-24h@h",latest:"now"},query:"| inputlookup examples.csv| fields link*| search link_ip_address!=null"},name:"Search_1"}},inputs:{},layout:{type:"grid",options:{},structure:[{item:"viz_oiBQgD6v",type:"block",position:{x:0,y:0,w:1440,h:300}},{item:"viz_lvFt7DS6",type:"block",position:{x:0,y:300,w:752,h:461}},{item:"viz_pt7pepDM",type:"block",position:{x:0,y:761,w:752,h:559}},{item:"viz_bHf2plmY",type:"block",position:{x:752,y:300,w:448,h:461}},{item:"viz_rfj0B7PE",type:"block",position:{x:752,y:761,w:448,h:559}}],globalInputs:[]},title:"Link Graph",description:"Visualize links between fields",visualizations:{viz_lvFt7DS6:{type:"splunk.linkgraph",dataSources:{primary:"ds_link"},title:"Link Graph",showProgressBar:!1,showLastUpdated:!1,description:"Default configuration",options:{nodeHeight:30,nodeSpacingX:70,nodeSpacingY:20,linkWidth:2}},viz_bHf2plmY:{type:"splunk.markdown",options:{markdown:`### Source Definition

\`\`\`
{
    "type": "splunk.linkgraph",
    "dataSources": {
        "primary": "ds_link"
    },
    "options": {},
    "context": {}
}
\`\`\``}},viz_oiBQgD6v:{type:"splunk.markdown",options:{markdown:`## Overview

The link graph shows the connections between distinct values in various fields. It highlights relationships between entities, where nodes are the entities and lines are the links between them. Values within a specific field are displayed in a column. The aggregated node values allow users to quickly visualize highly connected data points that may be otherwise overlooked.

The following examples use this query:

### SPL Query
\`\`\`
| inputlookup examples.csv
| fields link*
| search link_ip_address!=null
\`\`\`


`}},viz_pt7pepDM:{type:"splunk.linkgraph",dataSources:{primary:"ds_link"},title:"Link Graph",description:"Color, Layout and Display Options",options:{nodeHighlightColor:"#5a4575",linkColor:"#5a4575",backgroundColor:"transparent",nodeColor:"transparent",nodeWidth:200,nodeHeight:40,linkWidth:3,showNodeCounts:!1,showValueCounts:!1}},viz_rfj0B7PE:{type:"splunk.markdown",options:{markdown:`### Source Definition

\`\`\`
{
    "type": "splunk.linkgraph",
    "dataSources": {
        "primary": "ds_link"
    },
    "options": {
        "nodeHighlightColor": "#5a4575",
        "linkColor": "#5a4575",
        "backgroundColor": "transparent",
        "nodeColor": "transparent",
        "nodeWidth": 200,
        "nodeHeight": 40,
        "linkWidth": 3,
        "showNodeCounts": false,
        "showValueCounts": false
    },
    "context": {}
}
\`\`\``}}}};(0,t.default)(o.default.createElement(e,{definition:i}),{pageTitle:"Link Graph",hideFooter:!0,layout:"fixed"});
