import React, { useEffect, useRef, useState } from "react";
import { loadModules } from "esri-loader";
import { addMulPoints, createLayer, createLayerForPonit, fetchPoints, fetchPointsTime } from "../../Utils/Utils";

export const TimeHeatMap = () => {
  const mapRef = useRef();
  
  useEffect(() => {
    // lazy load the required ArcGIS API for JavaScript modules and CSS
    
    loadModules(
      [ "esri/config","esri/Map", 
      "esri/views/MapView", "esri/widgets/BasemapGallery" ,"esri/Graphic",
      "esri/layers/GraphicsLayer",    
      "esri/layers/VectorTileLayer",
      "esri/layers/FeatureLayer",],
      { css: true }
    ).then(([esriConfig,ArcGISMap, MapView, BasemapGallery, Graphic , GraphicsLayer,VectorTileLayer,
      FeatureLayer]) => {
      
      
      esriConfig.apiKey = "AAPK79e2c16a056f4275bb85e1585ff36a2bza9wGJmD3_1qBs-9gzDdUiWpRMW1T-x6ZQA23Ey57-VDAZwmj5Czoo4eShY7wt5U"
      
      const map = new ArcGISMap({
        basemap: "streets-vector"
      });
      // load the map view at the ref's DOM node
      const view = new MapView({
        container: mapRef.current,
        map: map,
        center: [38.763611, 9.005401],
        zoom: 12
      });
      
   






      var basemapGallery = new BasemapGallery({
        view: view
      });
      // const graphicsLayer = new GraphicsLayer({
      //   renderer:renderer
      // });
      // map.add(graphicsLayer);  

      var layer = createLayer(addMulPoints(fetchPointsTime(), Graphic),FeatureLayer)
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
