import{a as t}from"../chunks/chunk-3JCN5ZBG.js";import"../chunks/chunk-RVBF4OJC.js";import"../chunks/chunk-4KCRXN4A.js";import"../chunks/chunk-HXVBTB46.js";import"../chunks/chunk-YCDSEQ2I.js";import"../chunks/chunk-5OMD3MTC.js";import"../chunks/chunk-ITAS4PYU.js";import"../chunks/chunk-7QOS4MOO.js";import"../chunks/chunk-DEAOBGB4.js";import{a as s}from"../chunks/chunk-ED4ZNTSN.js";import"../chunks/chunk-ILWOP6EW.js";import"../chunks/chunk-3IJ7CW3D.js";import{b as i}from"../chunks/chunk-IJIU7GDE.js";import{i as e}from"../chunks/chunk-VV54FNKQ.js";var a=e(i()),o=e(s());var n={visualizations:{viz_RBdQ2qQ5:{type:"splunk.markdown",options:{markdown:`## Overview
Multiselect inputs allow users to select multiple options from a list to set a token. The list can be manually defined, known as **static**, or it can be populated with the results of a search, known as **dynamic**. These two configurations can be edited using the UI editor for the inputs. By default the input uses a comma as a delimiter for multiple entries.

### SPL for Dynamic Input
\`\`\`
| inputlookup firewall_example.csv
| stats count by host
\`\`\`
### Source  for Dynamic Input
\`\`\`
{
    "type": "input.multiselect",
    "options": {
        "items": ">frame(label, value) | prepend(formattedStatics) | objects()",
        "token": "token1",
        "defaultValue": "*"
    },
    "dataSources": {
        "primary": "ds_search1"
    },
    "title": "Dynamic Input - Select Host",
    "context": {
        "formattedConfig": {
            "number": {
                "prefix": ""
            }
        },
        "formattedStatics": ">statics | formatByType(formattedConfig)",
        "statics": [
            [
                "All"
            ],
            [
                "*"
            ]
        ],
        "label": ">primary | seriesByName(\\"host\\") | renameSeries(\\"label\\") | formatByType(formattedConfig)",
        "value": ">primary | seriesByName(\\"host\\") | renameSeries(\\"value\\") | formatByType(formattedConfig)"
    }
}
\`\`\``}},viz_gMr0oNmO:{type:"splunk.line",title:"Line Chart with Dynamic Input",dataSources:{primary:"ds_2A3Efw25"},description:'| inputlookup firewall_example.csv | eval myTime=strftime(timestamp,"%H:%M") | search host IN ($token1$) | chart count over myTime by host'},viz_dObiuubP:{type:"splunk.table",title:"Line Chart with Static Input",dataSources:{primary:"ds_quzxE8AQ"},description:'| inputlookup outages_example.csv | search "Geographic Areas" IN ($dd2$) | stats count by Respondent',options:{},context:{},showProgressBar:!1,showLastUpdated:!1},viz_l9R6qtNj:{type:"splunk.markdown",options:{markdown:`### Source  for Static Input
\`\`\`
{
    "type": "input.multiselect",
    "options": {
        "items": [
            {
                "label": "All",
                "value": "*"
            },
            {
                "label": "Illinois",
                "value": "Illinois"
            },
            {
                "label": "New York",
                "value": "\\"New York\\""
            },
            {
                "label": "Washington",
                "value": "Washington"
            }
        ],
        "token": "dd2",
        "defaultValue": "*"
    },
    "dataSources": {},
    "title": "Static Input - Select Region"
}
\`\`\``}},viz_CzMsyOVW:{type:"splunk.rectangle",options:{fillColor:"transparent",strokeColor:"transparent"}}},dataSources:{ds_search1:{type:"ds.search",options:{query:`| inputlookup firewall_example.csv
| stats count by host`,queryParameters:{earliest:"-60m@m",latest:"now"}},name:"Search_1"},ds_2A3Efw25:{type:"ds.search",options:{query:`| inputlookup firewall_example.csv
| eval myTime=strftime(timestamp,"%H:%M")
| search host IN ($dd1$)
| chart count over myTime by host`,queryParameters:{earliest:"-60m@m",latest:"now"}},name:"Search_2"},ds_quzxE8AQ:{type:"ds.search",options:{query:`| inputlookup outages_example.csv
| search "Geographic Areas" IN ($dd2$)
| stats count by Respondent`,queryParameters:{earliest:"-60m@m",latest:"now"}},name:"Search_3"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{input_ovnr6KpF:{type:"input.multiselect",options:{items:">frame(label, value) | prepend(formattedStatics) | objects()",token:"dd1",defaultValue:"*"},dataSources:{primary:"ds_search1"},title:"Dynamic Input - Select Host",context:{formattedConfig:{number:{prefix:""}},formattedStatics:">statics | formatByType(formattedConfig)",statics:[["All"],["*"]],label:'>primary | seriesByName("host") | renameSeries("label") | formatByType(formattedConfig)',value:'>primary | seriesByName("host") | renameSeries("value") | formatByType(formattedConfig)'}},input_9MxBqEwU:{type:"input.multiselect",options:{items:[{label:"All",value:"*"},{label:"Illinois",value:"Illinois"},{label:"New York",value:'"New York"'},{label:"Washington",value:"Washington"}],token:"dd2",defaultValue:"*"},dataSources:{},title:"Static Input - Select Region"}},layout:{type:"grid",options:{},structure:[{item:"viz_RBdQ2qQ5",type:"block",position:{x:0,y:0,w:588,h:524}},{item:"input_9MxBqEwU",type:"input",position:{x:0,y:524,w:171,h:90}},{item:"viz_l9R6qtNj",type:"block",position:{x:0,y:614,w:588,h:572}},{item:"viz_CzMsyOVW",type:"block",position:{x:171,y:524,w:1029,h:90}},{item:"viz_dObiuubP",type:"block",position:{x:588,y:614,w:612,h:572}},{item:"viz_gMr0oNmO",type:"block",position:{x:588,y:0,w:612,h:524}}],globalInputs:["input_ovnr6KpF"]},description:"Set a token to multiple values by using a form populated with static or dynamic options",title:"Multiselect Input"};(0,o.default)(a.default.createElement(t,{definition:n}),{pageTitle:"Multiselect",hideFooter:!0,layout:"fixed"});
