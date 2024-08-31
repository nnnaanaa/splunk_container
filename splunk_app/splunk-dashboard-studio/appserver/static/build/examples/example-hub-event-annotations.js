import{a as t}from"../chunks/chunk-3JCN5ZBG.js";import"../chunks/chunk-RVBF4OJC.js";import"../chunks/chunk-4KCRXN4A.js";import"../chunks/chunk-HXVBTB46.js";import"../chunks/chunk-YCDSEQ2I.js";import"../chunks/chunk-5OMD3MTC.js";import"../chunks/chunk-ITAS4PYU.js";import"../chunks/chunk-7QOS4MOO.js";import"../chunks/chunk-DEAOBGB4.js";import{a as r}from"../chunks/chunk-ED4ZNTSN.js";import"../chunks/chunk-ILWOP6EW.js";import"../chunks/chunk-3IJ7CW3D.js";import{b as s}from"../chunks/chunk-IJIU7GDE.js";import{i as e}from"../chunks/chunk-VV54FNKQ.js";var a=e(s()),o=e(r());var n={visualizations:{viz_3X53kBj2:{type:"splunk.markdown",options:{markdown:`## Overview
When monitoring time-series data, certain events might contain crucial information that provides larger context to underlying mechanisms in your data. For these scenarios, such as monitoring alerts and failures, event annotations can be used. Event annotations allow you to see when a certain event of interest takes place in a larger stream of time-series data. The key to make event annotations work is to have the alerts and statuses of interest being on the same time span as the main data being plotted.

The below examples showcase event annotations for area and column charts. Note that for event annotations, two datasources are required, one for the chart itself, and one for the annotations. This example uses a makeresults query for both charts, with the difference between them being that for each chart's annotation data, the area uses different colors whereas the column uses the same color. 

### SPL Query for Charts
\`\`\`
| makeresults count=15
| streamstats count
| eval _time=_time-(count*86400)
| eval value=random()%100
| fields _time value
\`\`\`


`}},viz_jHj4nb3Y:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.area",
    "options": {
        "annotationX": "> annotations | seriesByIndex(0)",
        "annotationLabel": "> annotations | seriesByIndex(1)",
        "annotationColor": "> annotations | seriesByIndex(2)"
    },
    "dataSources": {
        "primary": "ds_chart",
        "annotations": "ds_markers"
    }
}
\`\`\`
### SPL Query for Annotations
\`\`\`
| makeresults count=3
| streamstats count
| eval _time=_time-(count*86400*3)
| eval score = random()%3 +1
| eval status = case(score=1,"server error detected", score=2, "unknown user access", score=3, "status cleared")
| eval color = case(score=1,"#f44271", score=2, "#f4a941", score=3, "#41f49a")
| table _time status color
\`\`\`
`}},viz_25GoP8BK:{type:"splunk.area",options:{annotationX:"> annotations | seriesByIndex(0)",annotationLabel:"> annotations | seriesByIndex(1)",annotationColor:"> annotations | seriesByIndex(2)"},dataSources:{primary:"ds_chart",annotations:"ds_markers"},title:"Area Chart with Annotations",description:"Color dynamically using match value"},viz_5jEsD8lR:{type:"splunk.column",dataSources:{primary:"ds_chart",annotations:"ds_markers_one_color"},title:"Column Chart with Annotations",description:"All Set to One Color",options:{annotationX:"> annotations | seriesByIndex(0)",annotationLabel:"> annotations | seriesByIndex(1)",annotationColor:"> annotations | seriesByIndex(2)"}},viz_wo3MmrZc:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.column",
    "dataSources": {
        "primary": "ds_chart",
        "annotations": "ds_markers_one_color"
    },
    "options": {
        "annotationX": "> annotations | seriesByIndex(0)",
        "annotationLabel": "> annotations | seriesByIndex(1)",
        "annotationColor": "> annotations | seriesByIndex(2)"
    }
}
\`\`\`
### SPL Query for Annotations
\`\`\`
| makeresults count=3
| streamstats count
| eval _time=_time-(count*86400*3)
| eval score = random()%3 +1
| eval status = case(score=1,"server error detected", score=2, "unknown user access", score=3, "status cleared")
| eval color = "#f44271"
| table _time status color
\`\`\`
`}}},dataSources:{ds_chart:{type:"ds.search",options:{query:`| makeresults count=15
| streamstats count
| eval _time=_time-(count*86400)
| eval value=random()%100
| fields _time value`,queryParameters:{earliest:"-24h@h",latest:"now"}},name:"Search_1"},ds_markers:{type:"ds.search",options:{query:`| makeresults count=3
| streamstats count
| eval _time=_time-(count*86400*3)
| eval score = random()%3 +1
| eval status = case(score=1,"server error detected", score=2, "unknown user access", score=3, "status cleared")
| eval color = case(score=1,"#f44271", score=2, "#f4a941", score=3, "#41f49a")
| table _time status color`,queryParameters:{earliest:"-24h@h",latest:"now"}},name:"Search_2"},ds_markers_one_color:{type:"ds.search",options:{query:`| makeresults count=3
| streamstats count
| eval _time=_time-(count*86400*3)
| eval score = random()%3 +1
| eval status = case(score=1,"server error detected", score=2, "unknown user access", score=3, "status cleared")
| eval color = "#f44271"
| table _time status color`,queryParameters:{earliest:"-24h@h",latest:"now"}},name:"Search_3"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{},layout:{type:"grid",options:{},structure:[{item:"viz_3X53kBj2",type:"block",position:{x:0,y:0,w:1440,h:358}},{item:"viz_25GoP8BK",type:"block",position:{x:0,y:358,w:663,h:551}},{item:"viz_5jEsD8lR",type:"block",position:{x:0,y:909,w:663,h:509}},{item:"viz_jHj4nb3Y",type:"block",position:{x:663,y:358,w:537,h:551}},{item:"viz_wo3MmrZc",type:"block",position:{x:663,y:909,w:537,h:509}}],globalInputs:[]},description:"Mark important discrete events on time-series charts to provide context ",title:"Chart Annotations"};(0,o.default)(a.default.createElement(t,{definition:n}),{pageTitle:"Chart Annotations",hideFooter:!0,layout:"fixed"});
