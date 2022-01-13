import React, { useEffect, useRef, useState } from "react";
import { loadModules } from "esri-loader";
import { addMulPoints, createLayer, createLayerForPonit, fetchPoints } from "../../Utils/Utils";

export const ByHotel = () => {
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
      const simpleMarkerSymbol = {
        type: "simple-marker",
        color:[226, 119, 0],  // Orange
        outline: {
            color: [255, 255, 255], // White
            width: 1
        }
     };
      const layer = new GeoJSONLayer({
        url: url,
        copyright: "USGS Earthquakes",
        renderer: {
            type: "simple",
            symbol:simpleMarkerSymbol
            
          },
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
