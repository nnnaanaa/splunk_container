import{a as n}from"../chunks/chunk-3JCN5ZBG.js";import"../chunks/chunk-RVBF4OJC.js";import"../chunks/chunk-4KCRXN4A.js";import"../chunks/chunk-HXVBTB46.js";import"../chunks/chunk-YCDSEQ2I.js";import"../chunks/chunk-5OMD3MTC.js";import"../chunks/chunk-ITAS4PYU.js";import"../chunks/chunk-7QOS4MOO.js";import"../chunks/chunk-DEAOBGB4.js";import{a as i}from"../chunks/chunk-ED4ZNTSN.js";import"../chunks/chunk-ILWOP6EW.js";import"../chunks/chunk-3IJ7CW3D.js";import{b as r}from"../chunks/chunk-IJIU7GDE.js";import{i as o}from"../chunks/chunk-VV54FNKQ.js";var a=o(r()),e=o(i());var t={visualizations:{viz_3NUrAfkt:{type:"splunk.markdown",options:{markdown:`## Overview

Tables can help you compare and aggregate field values. Use a table to visualize patterns for one or more metrics across a dataset. Tables are also very useful for debugging a dashboard. If you feel a visualization isn't displaying data the way you expect, create a table with the same search to see exactly what data is being returned. 

The following examples cover ways to color your tables, both statically and dynamically depending on your data. Coloring can be used to provide context for certain fields, and emphasize data. `}},viz_gezCclRK:{type:"splunk.table",dataSources:{primary:"ds_search1"},title:"Table Coloring",options:{columnFormat:{count:{data:'> table | seriesByName("count") | formatByType(countColumnFormatEditorConfig)',rowColors:"> table | seriesByName('count') | pick(countRowColorsEditorConfig)",rowBackgroundColors:'> table | seriesByName("count") | gradient(countRowBackgroundColorsEditorConfig)'}}},context:{countColumnFormatEditorConfig:{number:{thousandSeparated:!1,unitPosition:"after"}},countRowColorsEditorConfig:["#ffffff"],countRowBackgroundColorsEditorConfig:{colors:["#602CA1","#333022","#277C52"],stops:[-10,50,200]}},description:"Gradient Coloring for Specified Column"},viz_Zy9SbUug:{type:"splunk.table",dataSources:{primary:"ds_search1"},title:"Table Coloring",options:{columnFormat:{Tags:{data:'> table | seriesByName("Tags") | formatByType(TagsColumnFormatEditorConfig)',rowBackgroundColors:"> table | seriesByName('Tags') | matchValue(tagsRowBackgroundColorsEditorConfig)"},count:{data:'> table | seriesByName("count") | formatByType(countColumnFormatEditorConfig)',rowColors:"> table | seriesByName('count') | rangeValue(countRowColorsEditorConfig)"}}},context:{countColumnFormatEditorConfig:{number:{thousandSeparated:!1,unitPosition:"after"}},countRowColorsEditorConfig:[{to:20,value:"#D41F1F"},{from:20,to:60,value:"#D94E17"},{from:60,to:90,value:"#CBA700"},{from:90,to:140,value:"#669922"},{from:140,value:"#118832"}],tagsColumnFormatEditorConfig:{string:{unitPosition:"after"}},tagsRowBackgroundColorsEditorConfig:[{match:"vandalism",value:"#1F4D5B"},{match:"severe weather, thunderstorm",value:"#D81E5B"}]},description:'Dynamic matchValue for "Tags", rangeValue for "count"'},viz_RVNSVBHv:{type:"splunk.markdown",options:{markdown:`
### Source Definition
\`\`\`
{
    "type": "splunk.table",
    "dataSources": {
        "primary": "ds_search1"
    },
    "options": {
        "columnFormat": {
            "count": {
                "data": "> table | seriesByName(\\"count\\") | formatByType(countColumnFormatEditorConfig)",
                "rowColors": "> table | seriesByName('count') | pick(countRowColorsEditorConfig)",
                "rowBackgroundColors": "> table | seriesByName(\\"count\\") | gradient(countRowBackgroundColorsEditorConfig)"
            }
        }
    },
    "context": {
        "countColumnFormatEditorConfig": {
            "number": {
                "thousandSeparated": false,
                "unitPosition": "after"
            }
        },
        "countRowColorsEditorConfig": [
            "#ffffff"
        ],
        "countRowBackgroundColorsEditorConfig": {
            "colors": [
                "#602CA1",
                "#333022",
                "#277C52"
            ],
            "stops": [
                -1000,
                0,
                1000
            ]
        }
    }
}
\`\`\``}},viz_Hb2gqYLi:{type:"splunk.markdown",options:{markdown:`### SPL For Table Coloring
\`\`\`
| inputlookup outages_example.csv
| top Tags limit=15
\`\`\`
### Source Definition
\`\`\`
{
    "type": "splunk.table",
    "dataSources": {
        "primary": "ds_search1"
    },
    "title": "Table Coloring",
    "description": "Static Background Coloring",
    "options": {
        "backgroundColor": "transparent",
        "tableFormat": {
            "rowBackgroundColors": "> table | seriesByIndex(0) | pick(tableAltRowBackgroundColorsByBackgroundColor)",
            "headerBackgroundColor": "> backgroundColor | setColorChannel(tableHeaderBackgroundColorConfig)",
            "rowColors": "> rowBackgroundColors | maxContrast(tableRowColorMaxContrast)",
            "headerColor": "> headerBackgroundColor | maxContrast(tableRowColorMaxContrast)"
        }
    },
    "context": {}
}
\`\`\``}},viz_n67ApED4:{type:"splunk.markdown",options:{markdown:`
### Source Definition
\`\`\`
{
    "type": "splunk.table",
    "dataSources": {
        "primary": "ds_search1"
    },
    "title": "Table Coloring",
    "options": {
        "columnFormat": {
            "Tags": {
                "data": "> table | seriesByName(\\"Tags\\") | formatByType(tagsColumnFormatEditorConfig)",
                "rowBackgroundColors": "> table | seriesByName('Tags') | matchValue(tagsRowBackgroundColorsEditorConfig)"
            },
            "count": {
                "data": "> table | seriesByName(\\"count\\") | formatByType(countColumnFormatEditorConfig)",
                "rowColors": "> table | seriesByName('count') | rangeValue(countRowColorsEditorConfig)"
            }
        }
    },
    "context": {
        "tagsColumnFormatEditorConfig": {
            "string": {
                "unitPosition": "after"
            }
        },
        "countColumnFormatEditorConfig": {
            "number": {
                "thousandSeparated": false,
                "unitPosition": "after"
            }
        },
        "countRowColorsEditorConfig": [
            {
                "to": 20,
                "value": "#D41F1F"
            },
            {
                "from": 20,
                "to": 60,
                "value": "#D94E17"
            },
            {
                "from": 60,
                "to": 90,
                "value": "#CBA700"
            },
            {
                "from": 90,
                "to": 140,
                "value": "#669922"
            },
            {
                "from": 140,
                "value": "#118832"
            }
        ],
        "tagsRowBackgroundColorsEditorConfig": [
            {
                "match": "vandalism",
                "value": "#1F4D5B"
            },
            {
                "match": "severe weather, thunderstorm",
                "value": "#D81E5B"
            }
        ]
    },
    "description": "Dynamic matchValue for \\"Tags\\", rangeValue for \\"count\\""
}
\`\`\``}},viz_FiYpf6Mn:{type:"splunk.table",dataSources:{primary:"ds_search1"},title:"Table Coloring",description:"Static Coloring - Transparent",options:{backgroundColor:"transparent",tableFormat:{rowBackgroundColors:"> table | seriesByIndex(0) | pick(tableAltRowBackgroundColorsByBackgroundColor)",headerBackgroundColor:"> backgroundColor | setColorChannel(tableHeaderBackgroundColorConfig)",rowColors:"> rowBackgroundColors | maxContrast(tableRowColorMaxContrast)",headerColor:"> headerBackgroundColor | maxContrast(tableRowColorMaxContrast)"}}},viz_XtItghXA:{type:"splunk.table",dataSources:{primary:"ds_search1"},title:"Table Coloring",description:"Static Coloring - Header and Row",options:{backgroundColor:"> themes.defaultBackgroundColor",tableFormat:{rowColors:"> table | pick(tableRowColor)",headerColor:"#45D4BA"}},context:{tableRowColor:["#A870EF"]}},viz_HTSf6UQ5:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.table",
    "dataSources": {
        "primary": "ds_search1"
    },
    "title": "Table Coloring",
    "description": "Static Coloring - Header and Row",
    "options": {
        "backgroundColor": "> themes.defaultBackgroundColor",
        "tableFormat": {
            "rowColors": "> table | pick(tableRowColor)",
            "headerColor": "#45D4BA"
        }
    },
    "context": {
        "tableRowColor": [
            "#A870EF"
        ]
    }
}
\`\`\``}}},dataSources:{ds_search1:{type:"ds.search",options:{query:`| inputlookup outages_example.csv
| top Tags limit=15`,queryParameters:{earliest:"-4h@m",latest:"now"}},name:"Search_1"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{},layout:{type:"grid",options:{},structure:[{item:"viz_3NUrAfkt",type:"block",position:{x:0,y:0,w:1440,h:178}},{item:"viz_FiYpf6Mn",type:"block",position:{x:0,y:178,w:618,h:450}},{item:"viz_XtItghXA",type:"block",position:{x:0,y:628,w:618,h:457}},{item:"viz_gezCclRK",type:"block",position:{x:0,y:1085,w:618,h:457}},{item:"viz_Zy9SbUug",type:"block",position:{x:0,y:1542,w:618,h:466}},{item:"viz_Hb2gqYLi",type:"block",position:{x:618,y:178,w:582,h:450}},{item:"viz_HTSf6UQ5",type:"block",position:{x:618,y:628,w:582,h:457}},{item:"viz_RVNSVBHv",type:"block",position:{x:618,y:1085,w:582,h:457}},{item:"viz_n67ApED4",type:"block",position:{x:618,y:1542,w:582,h:466}}],globalInputs:[]},description:"Dynamically color table elements to contextualize and emphasize data",title:"Table Coloring"};(0,e.default)(a.default.createElement(n,{definition:t}),{pageTitle:"Table Coloring",hideFooter:!0,layout:"fixed"});
