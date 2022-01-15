import points from "../Components/point";

const addPoint = ({
    longtitude,
    latitude
}, Graphic, color) => {
    const point = { //Create a point
      type: "point",
      longitude: longtitude,
      latitude: latitude
   };
   const simpleMarkerSymbol = {
      type: "simple-marker",
      color:color,  // Orange
      outline: {
          color: [255, 255, 255], // White
          width: 1
      }
   };
  
   return new Graphic({
      geometry: point,
      symbol: simpleMarkerSymbol
   });
  }


 export const addMulPoints = (points , Graphic) => {
    var graphics = []
    points.forEach(element => {
      // console.log(element.startPoint)
      graphics.push(addPoint(element.startPoint, Graphic,  [226, 119, 0]))
    //   graphicsLayer.add(
    //     addPoint(element.endPoint, Graphic,  [226, 9, 0])
    //   )
        graphics.push(addPoint(element.endPoint, Graphic,  [226, 9, 0]))
    });
    return graphics
  }
  
  export const createLayer = (graphics,FeatureLayer) =>{
    const simpleMarkerSymbol = {
        type: "simple-marker",
        color: [226, 119, 0],  // Orange
        outline: {
            color: [255, 255, 255], // White
            width: 1
        }
     };

      var renderer = {
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
          { color: "#ffff00", ratio: 1 },
        
        ],
        maxPixelIntensity: 7,
        minPixelIntensity: 3
      };

    return new FeatureLayer({
      source: graphics,
      objectIdField: "OBJECTID",
      fields: [
        {
          name: "OBJECTID",
          type: "oid"
        },
        {
          name: "url",
          type: "string"
        }
      ],
      geometryType: "point",
      renderer: renderer
    });

    // {
    //     type: "simple",
    //     symbol:simpleMarkerSymbol
        
    //   }
}
  export const fetchPoints = () => {
    
      return points
  }


function getDifferenceInMinutes(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    var h =  diffInMs / (1000 * 60);
    console.log(h%24)
  return Math.trunc(h%24)
  

  }
  export const fetchPointsTime = () =>{
    console.log(points)
    var ret =  points.filter(p => {
      var val = getDifferenceInMinutes(new Date() , p.timestamp) 
      console.log(val)
    return val < 20})
    return ret
  }
  export const getDayes = () =>{
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
     var values =  [0,0,0,0,0,0,0]
    let data = new Map()
    days.forEach((e,ind) =>
     {
      data.set(e, ind)
    })
    points.forEach(point =>{
      var date = point.timestamp
      console.log(date.getHours())
      values[data.get(days[date.getDay()])] ++;
    })
    return [values , days]
  }

  export const getTimeCost = () => {
    var [labesls , data] = [[] , []]
    for(let i = 0 ; i < 24; i++){
        labesls.push(i)
        data.push(0)
    }
    points.forEach(el => {
      var h = el.timestamp.getHours()
      data[h] += el.cost
    })
    return [labesls , data]
  }
  export const getTime = () => {
    var [labesls , data] = [[] , []]
    for(let i = 0 ; i < 24; i++){
        labesls.push(i)
        data.push(0)
    }
    points.forEach(el => {
      var h = el.timestamp.getHours()
      data[h] += Math.floor(Math.random()*(100-10+1)+10)
    })
    return [labesls , data]
  }
export const getDaysCost = () => {
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
     var values =  [0,0,0,0,0,0,0]
    let data = new Map()
    days.forEach((e,ind) =>
     {
      data.set(e, ind)
    })
    points.forEach(point =>{
      var date = point.timestamp
      console.log(date.getHours())
      values[data.get(days[date.getDay()])] += point.cost;
    })
    return [values , days]
}
export const createLayerForPonit = (graphics,FeatureLayer) =>{
    const simpleMarkerSymbol = {
        type: "simple-marker",
        color: [226, 119, 0],  // Orange
        outline: {
            color: [255, 255, 255], // White
            width: 1
        }
     };
     
    return new FeatureLayer({
      source: graphics,
      objectIdField: "OBJECTID",
      fields: [
        {
          name: "OBJECTID",
          type: "oid"
        },
        {
          name: "url",
          type: "string"
        }
      ],
      geometryType: "point",
      renderer: {
        type: "simple",
        symbol:simpleMarkerSymbol
        
      }
    });

    // {
    //     type: "simple",
    //     symbol:simpleMarkerSymbol
        
    //   }
}

  export const getMap = (ArcGISMap, Graphic, FeatureLayer) => {
    var map =new ArcGISMap({
        basemap: "hybrid"
      });
      return map
  }




