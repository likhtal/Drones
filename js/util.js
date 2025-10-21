function haversineDistance(lat1, lon1, lat2, lon2) {
 R = 6371;
 toRad = deg => deg * Math.PI / 180;
 
 lon1_rad = toRad(lon1);
 lat1_rad = toRad(lat1);
 lon2_rad = toRad(lon2);
 lat2_rad = toRad(lat2);
 
 dlon = lon1_rad - lon2_rad;
 dlat = lat1_rad - lat2_rad;
 
 a = Math.sin(dlat / 2)**2 + Math.cos(lat1_rad)*Math.cos(lat2_rad)*Math.sin(dlon / 2)**2;
 c = 2*Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
 return R*c;
}  

function routeDistance(points) {   
  let t = 0;

  for (let i = 0; i < points.length - 1; i++) {
     const {lat: lat1, lng: lng1} = points[i];
     const {lat: lat2, lng: lng2} = points[i+1];
     t += haversineDistance(lat1, lng1, lat2, lng2);
  }

  return t;
}

function delay(timeInMs) {
  return new Promise(resolve => setTimeout(resolve, timeInMs));
}
