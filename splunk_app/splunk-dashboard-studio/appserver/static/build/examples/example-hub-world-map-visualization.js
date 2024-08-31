import{a as o}from"../chunks/chunk-3JCN5ZBG.js";import"../chunks/chunk-RVBF4OJC.js";import"../chunks/chunk-4KCRXN4A.js";import"../chunks/chunk-HXVBTB46.js";import"../chunks/chunk-YCDSEQ2I.js";import"../chunks/chunk-5OMD3MTC.js";import"../chunks/chunk-ITAS4PYU.js";import"../chunks/chunk-7QOS4MOO.js";import"../chunks/chunk-DEAOBGB4.js";import{a}from"../chunks/chunk-ED4ZNTSN.js";import"../chunks/chunk-ILWOP6EW.js";import"../chunks/chunk-3IJ7CW3D.js";import{b as t}from"../chunks/chunk-IJIU7GDE.js";import{i as n}from"../chunks/chunk-VV54FNKQ.js";var r=n(t()),i=n(a());var e={visualizations:{viz_NO70IXtY:{type:"viz.geojson.world",dataSources:{primary:"ds_search1"},encoding:{featureId:"primary[0]",fill:{field:"primary[1]",format:{type:"rangevalue",ranges:[{from:10,value:"#A870EF"},{from:5,to:10,value:"#A9F5E7"},{to:5,value:"#45D4BA"}]}},value:"primary[1]"},title:"Range Value Coloring - Define Colors based on returned values",description:"",options:{name:"WORLD",source:"geo://default/world",projection:"mercator",sourceBounds:{lat:{min:-60,max:85},long:{min:-180,max:180}},logicalBounds:{x:{min:0,max:800},y:{min:0,max:600}},fillColor:"transparent",strokeColor:"#689C8D",selector:".feature",strokeHighlightColor:"#000000"}},viz_HiUiyhHB:{type:"splunk.markdown",options:{markdown:`### Source Definition 
\`\`\`
{
    "type": "viz.geojson.world",
    "dataSources": {
        "primary": "ds_search1"
    },
    "encoding": {
        "featureId": "primary[0]",
        "fill": {
            "field": "primary[1]",
            "format": {
                "type": "rangevalue",
                "ranges": [
                    {
                        "from": 10,
                        "value": "#A870EF"
                    },
                    {
                        "from": 5,
                        "to": 10,
                        "value": "#A9F5E7"
                    },
                    {
                        "to": 5,
                        "value": "#45D4BA"
                    }
                ]
            }
        },
        "value": "primary[1]"
    },
    "title": "Range Value Coloring - Define Colors based on returned values",
    "description": "",
    "options": {
        "name": "WORLD",
        "source": "geo://default/world",
        "projection": "mercator",
        "sourceBounds": {
            "lat": {
                "min": -60,
                "max": 85
            },
            "long": {
                "min": -180,
                "max": 180
            }
        },
        "logicalBounds": {
            "x": {
                "min": 0,
                "max": 800
            },
            "y": {
                "min": 0,
                "max": 600
            }
        },
        "fillColor": "transparent",
        "strokeColor": "#689C8D",
        "selector": ".feature",
        "strokeHighlightColor": "#000000"
    },
    "context": {}
}
\`\`\``}},viz_jWqObBES:{type:"splunk.markdown",options:{markdown:`## Overview
Splunk Dashboards provides out of the box functionality to use a map of the world with a lookupfile containing data for the map. These examples can allow you to adjust your data to make sure it matches the format we currently support for coloring world maps. 

### SPL For World Maps
\`\`\`
|  inputlookup geo_attr_countries
|  eval numb=len(country)
|  eval numby=numb*3
|  fields country, numb
\`\`\``}},viz_9xL20GgN:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "viz.geojson.world",
    "options": {
        "name": "WORLD",
        "source": "geo://default/world",
        "projection": "mercator",
        "sourceBounds": {
            "lat": {
                "min": -60,
                "max": 85
            },
            "long": {
                "min": -180,
                "max": 180
            }
        },
        "logicalBounds": {
            "x": {
                "min": 0,
                "max": 800
            },
            "y": {
                "min": 0,
                "max": 600
            }
        },
        "fillColor": "transparent",
        "strokeColor": "#689C8D",
        "selector": ".feature",
        "strokeHighlightColor": "#000000"
    },
    "encoding": {
        "featureId": "primary[0]",
        "fill": {
            "field": "primary[1]",
            "format": {
                "type": "gradient",
                "values": [
                    "#C093F9",
                    "#422879"
                ]
            }
        },
        "value": "primary[1]"
    },
    "dataSources": {
        "primary": "ds_search1"
    },
    "title": "",
    "description": "",
    "context": {}
}
\`\`\`
`}},viz_RcSwvgmc:{type:"viz.geojson.world",dataSources:{primary:"ds_search1"},encoding:{featureId:"primary[0]",fill:{field:"primary[1]",format:{type:"gradient"}},value:"primary[1]"},title:"Auto Linear Gradient - Splunk Default Coloring",description:"",options:{name:"WORLD",source:"geo://default/world",projection:"mercator",sourceBounds:{lat:{min:-60,max:85},long:{min:-180,max:180}},logicalBounds:{x:{min:0,max:800},y:{min:0,max:600}},fillColor:"transparent",strokeColor:"#689C8D",selector:".feature",strokeHighlightColor:"#000000"}},viz_5HMnR77g:{type:"splunk.markdown",options:{markdown:`### Source Definition 
\`\`\`
{
    "type": "viz.geojson.world",
    "dataSources": {
        "primary": "ds_search1"
    },
    "encoding": {
        "featureId": "primary[0]",
        "fill": {
            "field": "primary[1]",
            "format": {
                "type": "gradient"
            }
        },
        "value": "primary[1]"
    },
    "title": "",
    "description": "",
    "options": {
        "name": "WORLD",
        "source": "geo://default/world",
        "projection": "mercator",
        "sourceBounds": {
            "lat": {
                "min": -60,
                "max": 85
            },
            "long": {
                "min": -180,
                "max": 180
            }
        },
        "logicalBounds": {
            "x": {
                "min": 0,
                "max": 800
            },
            "y": {
                "min": 0,
                "max": 600
            }
        },
        "fillColor": "transparent",
        "strokeColor": "#689C8D",
        "selector": ".feature",
        "strokeHighlightColor": "#000000"
    },
    "context": {}
}
\`\`\``}},viz_yVAZGHP2:{type:"viz.geojson.world",options:{name:"WORLD",source:"geo://default/world",projection:"mercator",sourceBounds:{lat:{min:-60,max:85},long:{min:-180,max:180}},logicalBounds:{x:{min:0,max:800},y:{min:0,max:600}},fillColor:"transparent",strokeColor:"#689C8D",selector:".feature",strokeHighlightColor:"#000000"},encoding:{featureId:"primary[0]",fill:{field:"primary[1]",format:{type:"gradient",values:["#C093F9","#422879"]}},value:"primary[1]"},dataSources:{primary:"ds_search1"},title:"Purple Gradient",description:""},viz_fPceEFFv:{type:"viz.geojson.world",options:{name:"WORLD",source:"geo://default/world",projection:"mercator",sourceBounds:{lat:{min:-60,max:85},long:{min:-180,max:180}},logicalBounds:{x:{min:0,max:800},y:{min:0,max:600}},fillColor:"transparent",strokeColor:"#689C8D",selector:".feature",strokeHighlightColor:"#000000"},encoding:{featureId:"primary[0]",fill:{field:"primary[1]",format:{type:"gradient",values:["#422879","#BD3737","#A9F5E7"]}},value:"primary[1]"},dataSources:{primary:"ds_search1"},title:"Multicolor Gradient",description:""},viz_kI660Tcg:{type:"viz.geojson.world",options:{name:"WORLD",source:"geo://default/world",projection:"mercator",sourceBounds:{lat:{min:-60,max:85},long:{min:-180,max:180}},logicalBounds:{x:{min:0,max:800},y:{min:0,max:600}},fillColor:"#FDAF93",strokeColor:"#294e70",selector:".feature",strokeHighlightColor:"#000000"},encoding:{featureId:"primary[0]",fill:{field:"primary[1]",format:{type:"gradient",values:["#E85B79","#E9643A"]}},value:"primary[1]"},dataSources:{primary:"ds_empty_World"},title:"Empty Region -Set the fill and border colors for regions with no data",description:""},viz_iF2YZmBq:{type:"viz.geojson.world",options:{name:"WORLD",source:"geo://default/world",projection:"mercator",sourceBounds:{lat:{min:-60,max:85},long:{min:-180,max:180}},logicalBounds:{x:{min:0,max:800},y:{min:0,max:600}},fillColor:"transparent",strokeColor:"#689C8D",selector:".feature",strokeHighlightColor:"#000000",backgroundColor:"#191D20"},encoding:{featureId:"primary[0]",fill:{field:"primary[1]",format:{type:"gradient",values:["#C093F9","#422879"]}},value:"primary[1]"},dataSources:{primary:"ds_search1"},title:"Background Coloring",description:""},viz_cUrFuCA7:{type:"viz.geojson.world",options:{name:"WORLD",source:"geo://default/world",projection:"equirectangular",sourceBounds:{lat:{min:-60,max:85},long:{min:-180,max:180}},logicalBounds:{x:{min:0,max:800},y:{min:0,max:600}},fillColor:"transparent",strokeColor:"#689C8D",selector:".feature",strokeHighlightColor:"#000000"},encoding:{featureId:"primary[0]",fill:{field:"primary[1]",format:{type:"gradient"}},value:"primary[1]"},dataSources:{primary:"ds_search1"},title:"Equirectangular Projection",description:""},viz_bHoqIDQp:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "viz.geojson.world",
    "options": {
        "name": "WORLD",
        "source": "geo://default/world",
        "projection": "mercator",
        "sourceBounds": {
            "lat": {
                "min": -60,
                "max": 85
            },
            "long": {
                "min": -180,
                "max": 180
            }
        },
        "logicalBounds": {
            "x": {
                "min": 0,
                "max": 800
            },
            "y": {
                "min": 0,
                "max": 600
            }
        },
        "fillColor": "transparent",
        "strokeColor": "#689C8D",
        "selector": ".feature",
        "strokeHighlightColor": "#000000"
    },
    "encoding": {
        "featureId": "primary[0]",
        "fill": {
            "field": "primary[1]",
            "format": {
                "type": "gradient",
                "values": [
                    "#422879",
                    "#BD3737",
                    "#A9F5E7"
                ]
            }
        },
        "value": "primary[1]"
    },
    "dataSources": {
        "primary": "ds_search1"
    },
    "title": "",
    "description": "",
    "context": {}
}
\`\`\``}},viz_KxrwVvi1:{type:"splunk.markdown",options:{markdown:`### Test Data Source Definition
\`\`\`
"ds_empty_World": {
    "name": "ds_empty_World",
    "options": {
        "data": {
            "columns": [
                [
                    "Canada",
                    "Russia",
                    "China",
                    "India",
                    "Pakistan",
                    "Nepal",
                    "Kenya",
                    "Nigeria",
                    "Mexico",
                    "Brazil"
                ],
                [
                    "117",
                    "287",
                    "31",
                    "65",
                    "385",
                    "69",
                    "289",
                    "9",
                    "142",
                    "23"
                ]
            ],
            "fields": [
                {
                    "name": "country"
                },
                {
                    "name": "values"
                }
            ]
        },
        "meta": {}
    },
    "type": "ds.test"
}
\`\`\`

### Source Definition
\`\`\`
{
    "type": "viz.geojson.world",
    "options": {
        "name": "WORLD",
        "source": "geo://default/world",
        "projection": "mercator",
        "sourceBounds": {
            "lat": {
                "min": -60,
                "max": 85
            },
            "long": {
                "min": -180,
                "max": 180
            }
        },
        "logicalBounds": {
            "x": {
                "min": 0,
                "max": 800
            },
            "y": {
                "min": 0,
                "max": 600
            }
        },
        "fillColor": "#FDAF93",
        "strokeColor": "#294e70",
        "selector": ".feature",
        "strokeHighlightColor": "#000000"
    },
    "encoding": {
        "featureId": "primary[0]",
        "fill": {
            "field": "primary[1]",
            "format": {
                "type": "gradient",
                "values": [
                    "#E85B79",
                    "#E9643A"
                ]
            }
        },
        "value": "primary[1]"
    },
    "dataSources": {
        "primary": "ds_empty_World"
    },
    "title": "",
    "description": "",
    "context": {},
    "showProgressBar": false,
    "showLastUpdated": false
}
\`\`\``}},viz_GAzxDuic:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "viz.geojson.world",
    "options": {
        "name": "WORLD",
        "source": "geo://default/world",
        "projection": "mercator",
        "sourceBounds": {
            "lat": {
                "min": -60,
                "max": 85
            },
            "long": {
                "min": -180,
                "max": 180
            }
        },
        "logicalBounds": {
            "x": {
                "min": 0,
                "max": 800
            },
            "y": {
                "min": 0,
                "max": 600
            }
        },
        "fillColor": "transparent",
        "strokeColor": "#689C8D",
        "selector": ".feature",
        "strokeHighlightColor": "#000000",
        "backgroundColor": "#191D20"
    },
    "encoding": {
        "featureId": "primary[0]",
        "fill": {
            "field": "primary[1]",
            "format": {
                "type": "gradient",
                "values": [
                    "#C093F9",
                    "#422879"
                ]
            }
        },
        "value": "primary[1]"
    },
    "dataSources": {
        "primary": "ds_search1"
    },
    "title": "",
    "description": "",
    "context": {}
}
\`\`\``}},viz_wusjziqx:{type:"splunk.markdown",options:{markdown:`### Source Definition

\`\`\`
{
    "type": "viz.geojson.world",
    "options": {
        "name": "WORLD",
        "source": "geo://default/world",
        "projection": "equirectangular",
        "sourceBounds": {
            "lat": {
                "min": -60,
                "max": 85
            },
            "long": {
                "min": -180,
                "max": 180
            }
        },
        "logicalBounds": {
            "x": {
                "min": 0,
                "max": 800
            },
            "y": {
                "min": 0,
                "max": 600
            }
        },
        "fillColor": "transparent",
        "strokeColor": "#689C8D",
        "selector": ".feature",
        "strokeHighlightColor": "#000000"
    },
    "encoding": {
        "featureId": "primary[0]",
        "fill": {
            "field": "primary[1]",
            "format": {
                "type": "gradient"
            }
        },
        "value": "primary[1]"
    },
    "dataSources": {
        "primary": "ds_search1"
    },
    "title": "",
    "description": "",
    "context": {},
    "showProgressBar": false,
    "showLastUpdated": false
}
\`\`\``}}},dataSources:{ds_search1:{type:"ds.search",options:{query:`|  inputlookup geo_attr_countries
|  eval numb=len(country)
|  eval numby=numb*3
|  fields country, numb`,queryParameters:{earliest:"-15m",latest:"now"}},name:"Search_1"},ds_empty_World:{name:"ds_empty_World",options:{data:{columns:[["Canada","Russia","China","India","Pakistan","Nepal","Kenya","Nigeria","Mexico","Brazil"],["117","287","31","65","385","69","289","9","142","23"]],fields:[{name:"country"},{name:"values"}]},meta:{}},type:"ds.test"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{},layout:{type:"grid",options:{display:"auto-scale"},structure:[{item:"viz_jWqObBES",type:"block",position:{x:0,y:0,w:1440,h:271}},{item:"viz_NO70IXtY",type:"block",position:{x:0,y:271,w:489,h:482}},{item:"viz_RcSwvgmc",type:"block",position:{x:0,y:753,w:489,h:473}},{item:"viz_yVAZGHP2",type:"block",position:{x:0,y:1226,w:489,h:446}},{item:"viz_fPceEFFv",type:"block",position:{x:0,y:1672,w:489,h:443}},{item:"viz_kI660Tcg",type:"block",position:{x:0,y:2115,w:489,h:478}},{item:"viz_iF2YZmBq",type:"block",position:{x:0,y:2593,w:489,h:458}},{item:"viz_cUrFuCA7",type:"block",position:{x:0,y:3051,w:489,h:432}},{item:"viz_HiUiyhHB",type:"block",position:{x:489,y:271,w:711,h:482}},{item:"viz_5HMnR77g",type:"block",position:{x:489,y:753,w:711,h:473}},{item:"viz_9xL20GgN",type:"block",position:{x:489,y:1226,w:711,h:446}},{item:"viz_bHoqIDQp",type:"block",position:{x:489,y:1672,w:711,h:443}},{item:"viz_KxrwVvi1",type:"block",position:{x:489,y:2115,w:711,h:478}},{item:"viz_GAzxDuic",type:"block",position:{x:489,y:2593,w:711,h:458}},{item:"viz_wusjziqx",type:"block",position:{x:489,y:3051,w:711,h:432}}],globalInputs:[]},description:"Color a map of the world with geo data",title:"World Maps"};(0,i.default)(r.default.createElement(o,{definition:e}),{pageTitle:"World Maps",hideFooter:!0,layout:"fixed"});
