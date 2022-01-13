import React, { useEffect, useRef, useState } from "react";
import { loadModules } from "esri-loader";
import { addMulPoints, createLayer, createLayerForPonit, fetchPoints } from "../../Utils/Utils";

export const HotelHeatMap = () => {
  const mapRef = useRef();
  
  useEffect(() => {
    // lazy load the required ArcGIS API for JavaScript modules and CSS
    
    loadModules(
      [ "esri/config","esri/Map", 
      "esri/views/MapView", "esri/widgets/BasemapGallery" ,"esri/Graphic",
      "esri/layers/GraphicsLayer",    
      "esri/layers/VectorTileLayer",
      "esri/layers/FeatureLayer","esri/layers/GeoJSONLayer"],
      { css: true }
    ).then(([esriConfig,ArcGISMap, MapView, BasemapGallery, Graphic , GraphicsLayer,VectorTileLayer,
      FeatureLayer,GeoJSONLayer]) => {
      
      
      esriConfig.apiKey = "AAPK79e2c16a056f4275bb85e1585ff36a2bza9wGJmD3_1qBs-9gzDdUiWpRMW1T-x6ZQA23Ey57-VDAZwmj5Czoo4eShY7wt5U"
      var url = "https://raw.githubusercontent.com/tewodros18/arcgis/main/abdi.geojson"
      const map = new ArcGISMap({
        basemap: "hybrid"
      });
      // load the map view at the ref's DOM node
      const view = new MapView({
        container: mapRef.current,
        map: map,
        center: [-76.98997945900216,
            38.888373396148666],
        zoom: 13
      });
      
     
      


      var basemapGallery = new BasemapGallery({
        view: view
      });
    
     const renderer = {
        type: "heatmap",
        colorStops: [
          { color: "rgba(63, 40, 102, 0)", ratio: 0 },
          { color: "#472b77", ratio: 0.083 },
          { color: "#4e2d87", ratio: 0.166 },
          { color: "#563098", ratio: 0.249 },
          { color: "#5d32a8", ratio: 0.332 },
          { color: "#6735be", ratio: 0.415 },
          { color: "#7139d4", ratio: 0.498 },
          { color: "#7b3ce9", ratio: 0.581 },
          { color: "#853fff", ratio: 0.664 },
          { color: "#a46fbf", ratio: 0.747 },
          { color: "#c29f80", ratio: 0.83 },
          { color: "#e0cf40", ratio: 0.913 },
          { color: "#ffff00", ratio: 1 }
        ],
        maxPixelIntensity: 25,
        minPixelIntensity: 0
      };
      
      const layer = new GeoJSONLayer({
        url: url,
        copyright: "USGS Earthquakes",
        renderer:renderer,
        orderBy: {
          field: "mag"
        }
      });
      map.add(layer)
      view.ui.add(basemapGallery, {
        position: "top-right"
      });

      return () => {
        if (view) {
          // destroy the map view
          view.container = null;
        }
      };
    });
  },[]);

  return <div style={{width : "100%" , height:700}} className="webmap" ref={mapRef} >
  </div>;
};
