import{a as e}from"../chunks/chunk-3JCN5ZBG.js";import"../chunks/chunk-RVBF4OJC.js";import"../chunks/chunk-4KCRXN4A.js";import"../chunks/chunk-HXVBTB46.js";import"../chunks/chunk-YCDSEQ2I.js";import"../chunks/chunk-5OMD3MTC.js";import"../chunks/chunk-ITAS4PYU.js";import"../chunks/chunk-7QOS4MOO.js";import"../chunks/chunk-DEAOBGB4.js";import{a as i}from"../chunks/chunk-ED4ZNTSN.js";import"../chunks/chunk-ILWOP6EW.js";import"../chunks/chunk-3IJ7CW3D.js";import{b as t}from"../chunks/chunk-IJIU7GDE.js";import{i as n}from"../chunks/chunk-VV54FNKQ.js";var o=n(t()),r=n(i());var a={visualizations:{viz_NO70IXtY:{type:"viz.geojson.us",dataSources:{primary:"ds_search1"},encoding:{featureId:"primary.state",fill:{field:"primary.numb",value:"primary.numb",format:{type:"rangevalue",ranges:[{from:10,value:"#A870EF"},{from:5,to:10,value:"#A9F5E7"},{to:5,value:"#45D4BA"}]}}},title:"Range Value Coloring - Define Colors based on Returned Values",description:"",options:{name:"USA",source:"geo://default/us",projection:"mercator",sourceBounds:{lat:{min:24,max:50},long:{min:-130,max:-60}},logicalBounds:{x:{min:0,max:800},y:{min:0,max:600}},fillColor:"#EAEFF2",strokeColor:"#689C8D",selector:".feature",geoFeatureGroups:[{name:"lower48",featureMatcher:{property:"postal",regex:"^(?!(AK|HI))"},sourceBounds:{lat:{min:24,max:50},long:{min:-130,max:-60}}},{name:"Alaska",featureMatcher:{property:"postal",regex:"AK"},logicalBounds:{x:{min:100,max:200},y:{min:375,max:475}},sourceBounds:{lat:{min:45,max:72},long:{min:-180,max:-120}}},{name:"Hawaii",featureMatcher:{property:"postal",regex:"HI"},logicalBounds:{x:{min:250,max:350},y:{min:425,max:525}},sourceBounds:{lat:{min:18.665677,max:22.461292},long:{min:-160.921571,max:-154.242648}}}]}},viz_HiUiyhHB:{type:"splunk.markdown",options:{markdown:`### Source Definition 
\`\`\`
{
    "type": "viz.geojson.us",
    "dataSources": {
        "primary": "ds_search1"
    },
    "encoding": {
        "featureId": "primary.state",
        "fill": {
            "field": "primary.numb",
            "value": "primary.numb",
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
        }
    },
    "options": {
        "name": "USA",
        "source": "geo://default/us",
        "projection": "mercator",
        "sourceBounds": {
            "lat": {
                "min": 24,
                "max": 50
            },
            "long": {
                "min": -130,
                "max": -60
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
        "fillColor": "#EAEFF2",
        "strokeColor": "#689C8D",
        "selector": ".feature",
        "geoFeatureGroups": [
            {
                "name": "lower48",
                "featureMatcher": {
                    "property": "postal",
                    "regex": "^(?!(AK|HI))"
                },
                "sourceBounds": {
                    "lat": {
                        "min": 24,
                        "max": 50
                    },
                    "long": {
                        "min": -130,
                        "max": -60
                    }
                }
            },
            {
                "name": "Alaska",
                "featureMatcher": {
                    "property": "postal",
                    "regex": "AK"
                },
                "logicalBounds": {
                    "x": {
                        "min": 100,
                        "max": 200
                    },
                    "y": {
                        "min": 375,
                        "max": 475
                    }
                },
                "sourceBounds": {
                    "lat": {
                        "min": 45,
                        "max": 72
                    },
                    "long": {
                        "min": -180,
                        "max": -120
                    }
                }
            },
            {
                "name": "Hawaii",
                "featureMatcher": {
                    "property": "postal",
                    "regex": "HI"
                },
                "logicalBounds": {
                    "x": {
                        "min": 250,
                        "max": 350
                    },
                    "y": {
                        "min": 425,
                        "max": 525
                    }
                },
                "sourceBounds": {
                    "lat": {
                        "min": 18.665677,
                        "max": 22.461292
                    },
                    "long": {
                        "min": -160.921571,
                        "max": -154.242648
                    }
                }
            }
        ]
    },
    "context": {}
}
\`\`\``}},viz_jWqObBES:{type:"splunk.markdown",options:{markdown:`## Overview
Splunk Dashboards provides out of the box functionality to use a map of the United States of America with a lookupfile containing data for the map. These examples can allow you to adjust your data to make sure it matches the format we currently support for coloring US maps. 

### SPL For US Maps
\`\`\`
|  inputlookup geo_us_states
|  eval numb=len(featureId)
|  eval numb2=numb*2
|  rename featureId as state
|  fields - _featureIdField
|  fields state, numb

\`\`\``}},viz_9xL20GgN:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "viz.geojson.us",
    "options": {
        "name": "USA",
        "source": "geo://default/us",
        "projection": "mercator",
        "sourceBounds": {
            "lat": {
                "min": 24,
                "max": 50
            },
            "long": {
                "min": -130,
                "max": -60
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
        "geoFeatureGroups": [
            {
                "name": "lower48",
                "featureMatcher": {
                    "property": "postal",
                    "regex": "^(?!(AK|HI))"
                },
                "sourceBounds": {
                    "lat": {
                        "min": 24,
                        "max": 50
                    },
                    "long": {
                        "min": -130,
                        "max": -60
                    }
                }
            },
            {
                "name": "Alaska",
                "featureMatcher": {
                    "property": "postal",
                    "regex": "AK"
                },
                "logicalBounds": {
                    "x": {
                        "min": 100,
                        "max": 200
                    },
                    "y": {
                        "min": 375,
                        "max": 475
                    }
                },
                "sourceBounds": {
                    "lat": {
                        "min": 45,
                        "max": 72
                    },
                    "long": {
                        "min": -180,
                        "max": -120
                    }
                }
            },
            {
                "name": "Hawaii",
                "featureMatcher": {
                    "property": "postal",
                    "regex": "HI"
                },
                "logicalBounds": {
                    "x": {
                        "min": 250,
                        "max": 350
                    },
                    "y": {
                        "min": 425,
                        "max": 525
                    }
                },
                "sourceBounds": {
                    "lat": {
                        "min": 18.665677,
                        "max": 22.461292
                    },
                    "long": {
                        "min": -160.921571,
                        "max": -154.242648
                    }
                }
            }
        ]
    },
    "encoding": {
        "featureId": "primary.state",
        "fill": {
            "field": "primary.numb",
            "format": {
                "type": "gradient",
                "values": [
                    "#C093F9",
                    "#422879"
                ]
            }
        },
        "value": "primary.numb"
    },
    "dataSources": {
        "primary": "ds_search1"
    },
    "title": "Purple Gradient",
    "description": "",
    "context": {}
}
\`\`\`
`}},viz_RcSwvgmc:{type:"viz.geojson.us",dataSources:{primary:"ds_search1"},encoding:{featureId:"primary.state",fill:{field:"primary.numb",format:{type:"gradient"}},value:"primary.numb"},title:"Auto Linear Gradient - Splunk Default Coloring",description:"",options:{name:"USA",source:"geo://default/us",projection:"mercator",sourceBounds:{lat:{min:24,max:50},long:{min:-130,max:-60}},logicalBounds:{x:{min:0,max:800},y:{min:0,max:600}},fillColor:"transparent",strokeColor:"#689C8D",selector:".feature",geoFeatureGroups:[{name:"lower48",featureMatcher:{property:"postal",regex:"^(?!(AK|HI))"},sourceBounds:{lat:{min:24,max:50},long:{min:-130,max:-60}}},{name:"Alaska",featureMatcher:{property:"postal",regex:"AK"},logicalBounds:{x:{min:100,max:200},y:{min:375,max:475}},sourceBounds:{lat:{min:45,max:72},long:{min:-180,max:-120}}},{name:"Hawaii",featureMatcher:{property:"postal",regex:"HI"},logicalBounds:{x:{min:250,max:350},y:{min:425,max:525}},sourceBounds:{lat:{min:18.665677,max:22.461292},long:{min:-160.921571,max:-154.242648}}}]}},viz_5HMnR77g:{type:"splunk.markdown",options:{markdown:`### Source Definition 
\`\`\`
{
    "type": "viz.geojson.us",
    "dataSources": {
        "primary": "ds_search1"
    },
    "encoding": {
        "featureId": "primary.state",
        "fill": {
            "field": "primary.numb",
            "value": "primary.numb",
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
        }
    },
    "options": {
        "name": "USA",
        "source": "geo://default/us",
        "projection": "mercator",
        "sourceBounds": {
            "lat": {
                "min": 24,
                "max": 50
            },
            "long": {
                "min": -130,
                "max": -60
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
        "fillColor": "#EAEFF2",
        "strokeColor": "#689C8D",
        "selector": ".feature",
        "geoFeatureGroups": [
            {
                "name": "lower48",
                "featureMatcher": {
                    "property": "postal",
                    "regex": "^(?!(AK|HI))"
                },
                "sourceBounds": {
                    "lat": {
                        "min": 24,
                        "max": 50
                    },
                    "long": {
                        "min": -130,
                        "max": -60
                    }
                }
            },
            {
                "name": "Alaska",
                "featureMatcher": {
                    "property": "postal",
                    "regex": "AK"
                },
                "logicalBounds": {
                    "x": {
                        "min": 100,
                        "max": 200
                    },
                    "y": {
                        "min": 375,
                        "max": 475
                    }
                },
                "sourceBounds": {
                    "lat": {
                        "min": 45,
                        "max": 72
                    },
                    "long": {
                        "min": -180,
                        "max": -120
                    }
                }
            },
            {
                "name": "Hawaii",
                "featureMatcher": {
                    "property": "postal",
                    "regex": "HI"
                },
                "logicalBounds": {
                    "x": {
                        "min": 250,
                        "max": 350
                    },
                    "y": {
                        "min": 425,
                        "max": 525
                    }
                },
                "sourceBounds": {
                    "lat": {
                        "min": 18.665677,
                        "max": 22.461292
                    },
                    "long": {
                        "min": -160.921571,
                        "max": -154.242648
                    }
                }
            }
        ]
    },
    "context": {}
}
\`\`\``}},viz_yVAZGHP2:{type:"viz.geojson.us",options:{name:"USA",source:"geo://default/us",projection:"mercator",sourceBounds:{lat:{min:24,max:50},long:{min:-130,max:-60}},logicalBounds:{x:{min:0,max:800},y:{min:0,max:600}},fillColor:"transparent",strokeColor:"#689C8D",selector:".feature",geoFeatureGroups:[{name:"lower48",featureMatcher:{property:"postal",regex:"^(?!(AK|HI))"},sourceBounds:{lat:{min:24,max:50},long:{min:-130,max:-60}}},{name:"Alaska",featureMatcher:{property:"postal",regex:"AK"},logicalBounds:{x:{min:100,max:200},y:{min:375,max:475}},sourceBounds:{lat:{min:45,max:72},long:{min:-180,max:-120}}},{name:"Hawaii",featureMatcher:{property:"postal",regex:"HI"},logicalBounds:{x:{min:250,max:350},y:{min:425,max:525}},sourceBounds:{lat:{min:18.665677,max:22.461292},long:{min:-160.921571,max:-154.242648}}}]},encoding:{featureId:"primary.state",fill:{field:"primary.numb",format:{type:"gradient",values:["#C093F9","#422879"]}},value:"primary.numb"},dataSources:{primary:"ds_search1"},title:"Purple Gradient",description:""},viz_fPceEFFv:{type:"viz.geojson.us",options:{name:"USA",source:"geo://default/us",projection:"mercator",sourceBounds:{lat:{min:24,max:50},long:{min:-130,max:-60}},logicalBounds:{x:{min:0,max:800},y:{min:0,max:600}},fillColor:"transparent",strokeColor:"#689C8D",selector:".feature",geoFeatureGroups:[{name:"lower48",featureMatcher:{property:"postal",regex:"^(?!(AK|HI))"},sourceBounds:{lat:{min:24,max:50},long:{min:-130,max:-60}}},{name:"Alaska",featureMatcher:{property:"postal",regex:"AK"},logicalBounds:{x:{min:100,max:200},y:{min:375,max:475}},sourceBounds:{lat:{min:45,max:72},long:{min:-180,max:-120}}},{name:"Hawaii",featureMatcher:{property:"postal",regex:"HI"},logicalBounds:{x:{min:250,max:350},y:{min:425,max:525}},sourceBounds:{lat:{min:18.665677,max:22.461292},long:{min:-160.921571,max:-154.242648}}}]},encoding:{featureId:"primary.state",fill:{field:"primary.numb",format:{type:"gradient",values:["#422879","#BD3737","#A9F5E7"]}},value:"primary.numb"},dataSources:{primary:"ds_search1"},title:"Multicolor Gradient",description:""},viz_kI660Tcg:{type:"viz.geojson.us",options:{name:"USA",source:"geo://default/us",projection:"mercator",sourceBounds:{lat:{min:24,max:50},long:{min:-130,max:-60}},logicalBounds:{x:{min:0,max:800},y:{min:0,max:600}},fillColor:"#FDAF93",strokeColor:"#294e70",selector:".feature",geoFeatureGroups:[{name:"lower48",featureMatcher:{property:"postal",regex:"^(?!(AK|HI))"},sourceBounds:{lat:{min:24,max:50},long:{min:-130,max:-60}}},{name:"Alaska",featureMatcher:{property:"postal",regex:"AK"},logicalBounds:{x:{min:100,max:200},y:{min:375,max:475}},sourceBounds:{lat:{min:45,max:72},long:{min:-180,max:-120}}},{name:"Hawaii",featureMatcher:{property:"postal",regex:"HI"},logicalBounds:{x:{min:250,max:350},y:{min:425,max:525}},sourceBounds:{lat:{min:18.665677,max:22.461292},long:{min:-160.921571,max:-154.242648}}}]},encoding:{featureId:"primary[0]",fill:{field:"primary[1]",format:{type:"gradient",values:["#E85B79","#E9643A"]}},value:"primary[0]"},dataSources:{primary:"viz_Empty_US"},title:"Empty Region - Set the fill and border colors for regions with no data",description:""},viz_iF2YZmBq:{type:"viz.geojson.us",options:{name:"USA",source:"geo://default/us",projection:"mercator",backgroundColor:"#191D20",sourceBounds:{lat:{min:24,max:50},long:{min:-130,max:-60}},logicalBounds:{x:{min:0,max:800},y:{min:0,max:600}},fillColor:"#EAEFF2",strokeColor:"#689C8D",selector:".feature",geoFeatureGroups:[{name:"lower48",featureMatcher:{property:"postal",regex:"^(?!(AK|HI))"},sourceBounds:{lat:{min:24,max:50},long:{min:-130,max:-60}}},{name:"Alaska",featureMatcher:{property:"postal",regex:"AK"},logicalBounds:{x:{min:100,max:200},y:{min:375,max:475}},sourceBounds:{lat:{min:45,max:72},long:{min:-180,max:-120}}},{name:"Hawaii",featureMatcher:{property:"postal",regex:"HI"},logicalBounds:{x:{min:250,max:350},y:{min:425,max:525}},sourceBounds:{lat:{min:18.665677,max:22.461292},long:{min:-160.921571,max:-154.242648}}}]},encoding:{featureId:"primary.state",fill:{field:"primary.numb",value:"primary.numb",format:{type:"gradient",values:["#C093F9","#422879"]}}},dataSources:{primary:"ds_search1"},title:"Background Coloring",description:""},viz_cUrFuCA7:{type:"viz.geojson.us",options:{name:"USA",source:"geo://default/us",projection:"equirectangular",sourceBounds:{lat:{min:24,max:50},long:{min:-130,max:-60}},logicalBounds:{x:{min:0,max:800},y:{min:0,max:600}},fillColor:"#EAEFF2",strokeColor:"#689C8D",selector:".feature",geoFeatureGroups:[{name:"lower48",featureMatcher:{property:"postal",regex:"^(?!(AK|HI))"},sourceBounds:{lat:{min:24,max:50},long:{min:-130,max:-60}}},{name:"Alaska",featureMatcher:{property:"postal",regex:"AK"},logicalBounds:{x:{min:100,max:200},y:{min:375,max:475}},sourceBounds:{lat:{min:45,max:72},long:{min:-180,max:-120}}},{name:"Hawaii",featureMatcher:{property:"postal",regex:"HI"},logicalBounds:{x:{min:250,max:350},y:{min:425,max:525}},sourceBounds:{lat:{min:18.665677,max:22.461292},long:{min:-160.921571,max:-154.242648}}}]},encoding:{featureId:"primary.state",fill:{field:"primary.numb",value:"primary.numb",format:{type:"gradient"}}},dataSources:{primary:"ds_search1"},title:"Equirectangular Projection",description:""},viz_bHoqIDQp:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "viz.geojson.us",
    "options": {
        "name": "USA",
        "source": "geo://default/us",
        "projection": "mercator",
        "sourceBounds": {
            "lat": {
                "min": 24,
                "max": 50
            },
            "long": {
                "min": -130,
                "max": -60
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
        "geoFeatureGroups": [
            {
                "name": "lower48",
                "featureMatcher": {
                    "property": "postal",
                    "regex": "^(?!(AK|HI))"
                },
                "sourceBounds": {
                    "lat": {
                        "min": 24,
                        "max": 50
                    },
                    "long": {
                        "min": -130,
                        "max": -60
                    }
                }
            },
            {
                "name": "Alaska",
                "featureMatcher": {
                    "property": "postal",
                    "regex": "AK"
                },
                "logicalBounds": {
                    "x": {
                        "min": 100,
                        "max": 200
                    },
                    "y": {
                        "min": 375,
                        "max": 475
                    }
                },
                "sourceBounds": {
                    "lat": {
                        "min": 45,
                        "max": 72
                    },
                    "long": {
                        "min": -180,
                        "max": -120
                    }
                }
            },
            {
                "name": "Hawaii",
                "featureMatcher": {
                    "property": "postal",
                    "regex": "HI"
                },
                "logicalBounds": {
                    "x": {
                        "min": 250,
                        "max": 350
                    },
                    "y": {
                        "min": 425,
                        "max": 525
                    }
                },
                "sourceBounds": {
                    "lat": {
                        "min": 18.665677,
                        "max": 22.461292
                    },
                    "long": {
                        "min": -160.921571,
                        "max": -154.242648
                    }
                }
            }
        ]
    },
    "encoding": {
        "featureId": "primary.state",
        "fill": {
            "field": "primary.numb",
            "format": {
                "type": "gradient",
                "values": [
                    "#422879",
                    "#BD3737",
                    "#A9F5E7"
                ]
            }
        },
        "value": "primary.numb"
    },
    "dataSources": {
        "primary": "ds_search1"
    },
    "title": "Multicolor Gradient",
    "description": "",
    "context": {}
}
\`\`\``}},viz_KxrwVvi1:{type:"splunk.markdown",options:{markdown:`### Test Data Source Definition
\`\`\`
"viz_Empty_US": {
    "name": "viz_Empty_US",
    "options": {
        "data": {
            "columns": [
                [
                    "Alabama",
                    "Alaska",
                    "Arkansas",
                    "Arizona",
                    "California",
                    "Colorado",
                    "Connecticut",
                    "Delware",
                    "Florida",
                    "Georgia"
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
                    "name": "us_state"
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
    "type": "viz.geojson.us",
    "options": {
        "name": "USA",
        "source": "geo://default/us",
        "projection": "mercator",
        "sourceBounds": {
            "lat": {
                "min": 24,
                "max": 50
            },
            "long": {
                "min": -130,
                "max": -60
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
        "geoFeatureGroups": [
            {
                "name": "lower48",
                "featureMatcher": {
                    "property": "postal",
                    "regex": "^(?!(AK|HI))"
                },
                "sourceBounds": {
                    "lat": {
                        "min": 24,
                        "max": 50
                    },
                    "long": {
                        "min": -130,
                        "max": -60
                    }
                }
            },
            {
                "name": "Alaska",
                "featureMatcher": {
                    "property": "postal",
                    "regex": "AK"
                },
                "logicalBounds": {
                    "x": {
                        "min": 100,
                        "max": 200
                    },
                    "y": {
                        "min": 375,
                        "max": 475
                    }
                },
                "sourceBounds": {
                    "lat": {
                        "min": 45,
                        "max": 72
                    },
                    "long": {
                        "min": -180,
                        "max": -120
                    }
                }
            },
            {
                "name": "Hawaii",
                "featureMatcher": {
                    "property": "postal",
                    "regex": "HI"
                },
                "logicalBounds": {
                    "x": {
                        "min": 250,
                        "max": 350
                    },
                    "y": {
                        "min": 425,
                        "max": 525
                    }
                },
                "sourceBounds": {
                    "lat": {
                        "min": 18.665677,
                        "max": 22.461292
                    },
                    "long": {
                        "min": -160.921571,
                        "max": -154.242648
                    }
                }
            }
        ]
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
        "value": "primary[0]"
    },
    "dataSources": {
        "primary": "viz_Empty_US"
    },
    "title": "Empty Region - Set the fill and borders colors for regions with no data",
    "description": "",
    "context": {},
    "showProgressBar": false,
    "showLastUpdated": false
}
\`\`\``}},viz_GAzxDuic:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "viz.geojson.us",
    "options": {
        "name": "USA",
        "source": "geo://default/us",
        "projection": "mercator",
        "backgroundColor": "#191D20",
        "sourceBounds": {
            "lat": {
                "min": 24,
                "max": 50
            },
            "long": {
                "min": -130,
                "max": -60
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
        "fillColor": "#EAEFF2",
        "strokeColor": "#689C8D",
        "selector": ".feature",
        "geoFeatureGroups": [
            {
                "name": "lower48",
                "featureMatcher": {
                    "property": "postal",
                    "regex": "^(?!(AK|HI))"
                },
                "sourceBounds": {
                    "lat": {
                        "min": 24,
                        "max": 50
                    },
                    "long": {
                        "min": -130,
                        "max": -60
                    }
                }
            },
            {
                "name": "Alaska",
                "featureMatcher": {
                    "property": "postal",
                    "regex": "AK"
                },
                "logicalBounds": {
                    "x": {
                        "min": 100,
                        "max": 200
                    },
                    "y": {
                        "min": 375,
                        "max": 475
                    }
                },
                "sourceBounds": {
                    "lat": {
                        "min": 45,
                        "max": 72
                    },
                    "long": {
                        "min": -180,
                        "max": -120
                    }
                }
            },
            {
                "name": "Hawaii",
                "featureMatcher": {
                    "property": "postal",
                    "regex": "HI"
                },
                "logicalBounds": {
                    "x": {
                        "min": 250,
                        "max": 350
                    },
                    "y": {
                        "min": 425,
                        "max": 525
                    }
                },
                "sourceBounds": {
                    "lat": {
                        "min": 18.665677,
                        "max": 22.461292
                    },
                    "long": {
                        "min": -160.921571,
                        "max": -154.242648
                    }
                }
            }
        ]
    },
    "encoding": {
        "featureId": "primary.state",
        "fill": {
            "field": "primary.numb",
            "value": "primary.numb",
            "format": {
                "type": "gradient",
                "values": [
                    "#C093F9",
                    "#422879"
                ]
            }
        }
    },
    "dataSources": {
        "primary": "ds_search1"
    },
    "title": "Background Coloring",
    "description": "",
    "context": {}
}
\`\`\``}},viz_wusjziqx:{type:"splunk.markdown",options:{markdown:`### Source Definition

\`\`\`
{
    "type": "viz.geojson.us",
    "options": {
        "name": "USA",
        "source": "geo://default/us",
        "projection": "equirectangular",
        "sourceBounds": {
            "lat": {
                "min": 24,
                "max": 50
            },
            "long": {
                "min": -130,
                "max": -60
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
        "fillColor": "#EAEFF2",
        "strokeColor": "#689C8D",
        "selector": ".feature",
        "geoFeatureGroups": [
            {
                "name": "lower48",
                "featureMatcher": {
                    "property": "postal",
                    "regex": "^(?!(AK|HI))"
                },
                "sourceBounds": {
                    "lat": {
                        "min": 24,
                        "max": 50
                    },
                    "long": {
                        "min": -130,
                        "max": -60
                    }
                }
            },
            {
                "name": "Alaska",
                "featureMatcher": {
                    "property": "postal",
                    "regex": "AK"
                },
                "logicalBounds": {
                    "x": {
                        "min": 100,
                        "max": 200
                    },
                    "y": {
                        "min": 375,
                        "max": 475
                    }
                },
                "sourceBounds": {
                    "lat": {
                        "min": 45,
                        "max": 72
                    },
                    "long": {
                        "min": -180,
                        "max": -120
                    }
                }
            },
            {
                "name": "Hawaii",
                "featureMatcher": {
                    "property": "postal",
                    "regex": "HI"
                },
                "logicalBounds": {
                    "x": {
                        "min": 250,
                        "max": 350
                    },
                    "y": {
                        "min": 425,
                        "max": 525
                    }
                },
                "sourceBounds": {
                    "lat": {
                        "min": 18.665677,
                        "max": 22.461292
                    },
                    "long": {
                        "min": -160.921571,
                        "max": -154.242648
                    }
                }
            }
        ]
    },
    "encoding": {
        "featureId": "primary.state",
        "fill": {
            "field": "primary.numb",
            "value": "primary.numb",
            "format": {
                "type": "gradient"
            }
        }
    },
    "dataSources": {
        "primary": "ds_search1"
    },
    "title": "Equirectangular Projection",
    "description": "",
    "context": {}
}
\`\`\``}}},dataSources:{ds_search1:{type:"ds.search",options:{query:`|  inputlookup geo_us_states
|  eval numb=len(featureId)
|  eval numb2=numb*2
|  rename featureId as state
|  fields - _featureIdField
|  fields state, numb`,queryParameters:{earliest:"-15m",latest:"now"}},name:"Search_1"},viz_Empty_US:{name:"viz_Empty_US",options:{data:{columns:[["Alabama","Alaska","Arkansas","Arizona","California","Colorado","Connecticut","Delware","Florida","Georgia"],["117","287","31","65","385","69","289","9","142","23"]],fields:[{name:"us_state"},{name:"values"}]},meta:{}},type:"ds.test"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{},layout:{type:"grid",options:{display:"auto-scale"},structure:[{item:"viz_jWqObBES",type:"block",position:{x:0,y:0,w:1440,h:300}},{item:"viz_NO70IXtY",type:"block",position:{x:0,y:300,w:463,h:482}},{item:"viz_RcSwvgmc",type:"block",position:{x:0,y:782,w:463,h:473}},{item:"viz_yVAZGHP2",type:"block",position:{x:0,y:1255,w:463,h:446}},{item:"viz_fPceEFFv",type:"block",position:{x:0,y:1701,w:463,h:443}},{item:"viz_kI660Tcg",type:"block",position:{x:0,y:2144,w:463,h:478}},{item:"viz_iF2YZmBq",type:"block",position:{x:0,y:2622,w:463,h:400}},{item:"viz_cUrFuCA7",type:"block",position:{x:0,y:3022,w:463,h:422}},{item:"viz_HiUiyhHB",type:"block",position:{x:463,y:300,w:737,h:482}},{item:"viz_5HMnR77g",type:"block",position:{x:463,y:782,w:737,h:473}},{item:"viz_9xL20GgN",type:"block",position:{x:463,y:1255,w:737,h:446}},{item:"viz_bHoqIDQp",type:"block",position:{x:463,y:1701,w:737,h:443}},{item:"viz_KxrwVvi1",type:"block",position:{x:463,y:2144,w:737,h:478}},{item:"viz_GAzxDuic",type:"block",position:{x:463,y:2622,w:737,h:400}},{item:"viz_wusjziqx",type:"block",position:{x:463,y:3022,w:737,h:422}}],globalInputs:[]},description:"Color a map of the United States with geo data",title:"US Maps"};(0,r.default)(o.default.createElement(e,{definition:a}),{pageTitle:"US Maps",hideFooter:!0,layout:"fixed"});
