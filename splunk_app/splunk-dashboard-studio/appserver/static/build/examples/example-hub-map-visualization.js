import{a as t}from"../chunks/chunk-3JCN5ZBG.js";import"../chunks/chunk-RVBF4OJC.js";import"../chunks/chunk-4KCRXN4A.js";import"../chunks/chunk-HXVBTB46.js";import"../chunks/chunk-YCDSEQ2I.js";import"../chunks/chunk-5OMD3MTC.js";import"../chunks/chunk-ITAS4PYU.js";import"../chunks/chunk-7QOS4MOO.js";import"../chunks/chunk-DEAOBGB4.js";import{a as r}from"../chunks/chunk-ED4ZNTSN.js";import"../chunks/chunk-ILWOP6EW.js";import"../chunks/chunk-3IJ7CW3D.js";import{b as i}from"../chunks/chunk-IJIU7GDE.js";import{i as e}from"../chunks/chunk-VV54FNKQ.js";var o=e(i()),n=e(r());var a={visualizations:{viz_NO70IXtY:{type:"splunk.map",options:{center:[37.7749,-122.4195],zoom:0,scaleUnit:"imperial",layers:[{type:"marker",latitude:'> primary | seriesByName("lat")',longitude:'> primary | seriesByName("lon")',resultLimit:1e3}]},dataSources:{primary:"ds_search_table"},title:"Marker Layer with Base Configurations",description:"Center, zoom, imperial scale unit, result limit"},viz_HiUiyhHB:{type:"splunk.markdown",options:{markdown:`### Source Definition 
\`\`\`
{
    "type": "splunk.map",
    "options": {
        "center": [37.7749,-122.4195],
        "zoom": 0,
        "scaleUnit": "imperial",
        "layers": [
            {
                "type": "marker",
                "latitude": "> primary | seriesByName(\\"lat\\")",
                "longitude": "> primary | seriesByName(\\"lon\\")",
                "resultLimit": 1000
            }
        ]
    },
    "dataSources": {
        "primary": "ds_search_table"
    }
}
\`\`\``}},viz_jWqObBES:{type:"splunk.markdown",options:{markdown:`## Overview
Splunk Dashboards provides out of the box functionality to visualize geospatial data on a map area of your choice. These examples can allow you to adjust your data and configurations to make sure it matches the visualization you're looking for. 

### SPL for Marker Layers
\`\`\`
| inputlookup geomaps_data.csv
| iplocation device_ip
| table bytes device_ip lat lon
\`\`\``}},viz_9xL20GgN:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.map",
    "options": {
        "center": [37.7749,-122.4195],
        "zoom": 0,
        "layers": [
            {
                "type": "bubble",
                "latitude": "> primary | seriesByName(\\"lat\\")",
                "longitude": "> primary | seriesByName(\\"lon\\")",
                "bubbleSize": "> primary | frameWithoutSeriesNames(\\"geobin\\", \\"latitude\\", \\"longitude\\") | frameBySeriesTypes(\\"number\\")"
            }
        ]
    },
    "dataSources": {
        "primary": "ds_search_geostats_by"
    }
}
\`\`\``}},viz_yVAZGHP2:{type:"splunk.map",options:{center:[12.897491671831347,-122.41949999999997],zoom:0,layers:[{type:"bubble",latitude:"> primary | seriesByName('latitude')",longitude:"> primary | seriesByName('longitude')",bubbleSize:'> primary | frameWithoutSeriesNames("geobin", "latitude", "longitude") | frameBySeriesTypes("number")'}]},dataSources:{primary:"ds_search_geostats_by"},title:"Bubble Layer with Multiple Series"},viz_fPceEFFv:{type:"splunk.map",options:{center:[28.30438293026387,-122.41949999999997],zoom:0,layers:[{type:"marker",latitude:'> primary | seriesByName("lat")',longitude:'> primary | seriesByName("lon")',dataColors:'> primary | seriesByName("bytes") | rangeValue(colorRangeConfig)'}]},dataSources:{primary:"ds_search_table"},title:"Marker Layer with Dynamic Coloring",context:{colorRangeConfig:[{from:3e3,value:"#d41f1f"},{from:2e3,to:3e3,value:"#d97a0d"},{from:100,to:2e3,value:"#9d9f0d"},{to:1e3,value:"#118832"}]}},viz_kI660Tcg:{type:"splunk.map",options:{center:[31.35363912124076,-122.41949999999997],zoom:0,layers:[{type:"bubble",latitude:'> primary | seriesByName("latitude")',longitude:'> primary | seriesByName("longitude")',bubbleSize:"> primary | seriesByName('count')"}]},dataSources:{primary:"ds_search_geostats"},title:"Bubble Layer with Single Series",showProgressBar:!1,showLastUpdated:!1},viz_bHoqIDQp:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.map",
    "options": {
        "center": [37.7749,-122.4195],
        "zoom": 0,
        "layers": [
            {
                "type": "marker",
                "latitude": "> primary | seriesByName(\\"lat\\")",
                "longitude": "> primary | seriesByName(\\"lon\\")",
                "dataColors": "> primary | seriesByName(\\"bytes\\") | rangeValue(colorRangeConfig)"
            }
        ]
    },
    "context": {
        "colorRangeConfig": [
            {
                "from": 3000,
                "value": "#d41f1f"
            },
            {
                "from": 2000,
                "to": 3000,
                "value": "#d97a0d"
            },
            {
                "from": 100,
                "to": 2000,
                "value": "#9d9f0d"
            },
            {
                "to": 1000,
                "value": "#118832"
            }
        ]
    },
    "dataSources": {
        "primary": "ds_search_table"
    }
}
\`\`\``}},viz_KxrwVvi1:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.map",
    "options": {
        "center": [37.7749,-122.4195],
        "zoom": 0,
        "layers": [
            {
                "type": "bubble",
                "latitude": "> primary | seriesByName(\\"latitude\\")",
                "longitude": "> primary | seriesByName(\\"longitude\\")",
                "bubbleSize": "> primary | frameWithoutSeriesNames(\\"geobin\\", \\"latitude\\", \\"longitude\\") | frameBySeriesTypes(\\"number\\")"
            }
        ]
    },
    "dataSources": {
        "primary": "ds_search_geostats"
    }
}
\`\`\``}},viz_NIzTFa8m:{type:"splunk.markdown",options:{markdown:"### SPL for Bubble Layers with Geostats (single-series)\n```\n| inputlookup geomaps_data.csv\n| iplocation device_ip\n| geostats latfield=lat longfield=lon count\n```"}},viz_kYBM8BgO:{type:"splunk.markdown",options:{markdown:"### SPL for Bubble Layers with Geostats (multi-series)\n```\n| inputlookup geomaps_data.csv\n| iplocation device_ip\n| geostats latfield=lat longfield=lon count by method\n```"}},viz_HqNuMadG:{type:"splunk.map",options:{center:[2842170943040401e-29,-122.41949999999997],zoom:.022367792570463528,layers:[{type:"choropleth",areaIds:"> primary | seriesByName('country')",areaValues:"> primary | seriesByName('count')"}]},dataSources:{primary:"ds_search_geom"},title:"Choropleth Layer"},viz_OcKFTY8Z:{type:"splunk.markdown",options:{markdown:`### SPL for Choropleth Layerrs with Geom
\`\`\`
| inputlookup geomaps_data.csv
| iplocation device_ip
| lookup geo_countries latitude AS lat longitude AS lon OUTPUT featureId AS country
| stats count by country
| geom geo_countries featureIdField=country

\`\`\``},showProgressBar:!1,showLastUpdated:!1},viz_TGGfIlS8:{type:"splunk.markdown",options:{markdown:`### Source Defintion
\`\`\`
{
    "type": "splunk.map",
    "options": {
        "center": [37.7749,-122.4195],
        "zoom": 0,
        "layers": [
            {
                "type": "choropleth",
                "areaIds": "> primary | seriesByName('country')",
                "areaValues": "> primary | seriesByName('count')"
            }
        ]
    },
    "dataSources": {
        "primary": "ds_search_geom"
    }
}
\`\`\``},showProgressBar:!1,showLastUpdated:!1}},dataSources:{ds_search_geostats_by:{type:"ds.search",options:{query:`| inputlookup geomaps_data.csv
| iplocation device_ip
| geostats latfield=lat longfield=lon count by method`,queryParameters:{earliest:"-15m",latest:"now"}},name:"Search_Geostats_By"},ds_search_table:{type:"ds.search",options:{query:`| inputlookup geomaps_data.csv
| iplocation device_ip
| table bytes device_ip lat lon`,queryParameters:{earliest:"-15m",latest:"now"}},name:"Search_Table"},ds_search_geostats:{type:"ds.search",options:{query:`| inputlookup geomaps_data.csv
| iplocation device_ip
| geostats latfield=lat longfield=lon count`,queryParameters:{earliest:"-15m",latest:"now"}},name:"Search_Geostats"},ds_search_geom:{type:"ds.search",options:{query:`| inputlookup geomaps_data.csv
| iplocation device_ip
| lookup geo_countries latitude AS lat longitude AS lon OUTPUT featureId AS country
| stats count by country
| geom geo_countries featureIdField=country
`,queryParameters:{earliest:"-24h@h",latest:"now"}},name:"Search_Geom"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{},layout:{type:"grid",options:{display:"auto-scale"},structure:[{item:"viz_jWqObBES",type:"block",position:{x:0,y:0,w:1440,h:210}},{item:"viz_NO70IXtY",type:"block",position:{x:0,y:210,w:463,h:399}},{item:"viz_fPceEFFv",type:"block",position:{x:0,y:609,w:463,h:468}},{item:"viz_kI660Tcg",type:"block",position:{x:0,y:1077,w:463,h:458}},{item:"viz_yVAZGHP2",type:"block",position:{x:0,y:1535,w:463,h:515}},{item:"viz_HqNuMadG",type:"block",position:{x:0,y:2050,w:463,h:528}},{item:"viz_HiUiyhHB",type:"block",position:{x:463,y:210,w:737,h:399}},{item:"viz_bHoqIDQp",type:"block",position:{x:463,y:609,w:737,h:468}},{item:"viz_KxrwVvi1",type:"block",position:{x:463,y:1202,w:737,h:333}},{item:"viz_NIzTFa8m",type:"block",position:{x:463,y:1077,w:737,h:125}},{item:"viz_9xL20GgN",type:"block",position:{x:463,y:1660,w:737,h:390}},{item:"viz_kYBM8BgO",type:"block",position:{x:463,y:1535,w:737,h:125}},{item:"viz_TGGfIlS8",type:"block",position:{x:463,y:2233,w:737,h:345}},{item:"viz_OcKFTY8Z",type:"block",position:{x:463,y:2050,w:737,h:183}}],globalInputs:[]},description:"Visualize geospatial data on an interactive map area",title:"Interactive Maps"};(0,n.default)(o.default.createElement(t,{definition:a}),{pageTitle:"Cluster Maps",hideFooter:!0,layout:"fixed"});
