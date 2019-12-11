
var map;
var place3;

var x = 0;
var y = 0;

function Place(latitude, longitude) {
  this.latitude = latitude;
  this.longitude = longitude;
}


document.addEventListener("DOMContentLoaded", event => {
  alert("sssssssssssssss");
  place3 = new Array();

  const app = firebase.app();

  const myPost = firebase.database().ref("Rider_locations");


  myPost.once("value").then(function (snapshot) {

    snapshot.forEach(function (childSnapshot) {

      var latitude = childSnapshot.child("location_lat").val();
      var longitude = childSnapshot.child("location_lng").val();
      var riderId = childSnapshot.child("rider_id").val();

      var place = { lat: latitude, lng: longitude };
      place3[x] = place;
      var marker = new google.maps.Marker({ position: place, map: map, animation: google.maps.Animation.BOUNCE, title: 'Hello World!' });
      x++;
    });
  });
});

// Initialize and add the map
function initMap() {

  var uluru = { lat: -25.344, lng: 131.036 };
  var place1 = { lat: 6.893097, lng: 79.978056 };

  map = new google.maps.Map(
    document.getElementById('map'), { zoom: 6, center: uluru });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru, map: map });
  var marker = new google.maps.Marker({ position: place1, map: map });
  // var marker = new google.maps.Marker({ position: place2, map: map });



  
}

function setFocusNewMarker() {
  if (y >= x) {
    y = 0;
  }
  alert("sssssssssssssss");
  map.setCenter(place3[y]);
  map.setZoom(12);

  y++;
 
}

function setPolyline(){
  // var myTrip = [place3[0],place3[1]];
  // var flightPath = new google.maps.Polyline({
  //   path:myTrip,
  //   strokeColor:"#0000FF",
  //   strokeOpacity:0.8,
  //   strokeWeight:2
  // });
//-------------------------------------------------------------------------
  // var flightPlanCoordinates = [
  //   {lat: 37.772, lng: -122.214},
  //   {lat: 21.291, lng: -157.821},
  //   {lat: -18.142, lng: 178.431},
  //   {lat: -27.467, lng: 153.027}
  // ];
  // var flightPath = new google.maps.Polyline({
  //   path: flightPlanCoordinates,
  //   geodesic: true,
  //   strokeColor: '#FF0000',
  //   strokeOpacity: 1.0,
  //   strokeWeight: 2
  // });

  // flightPath.setMap(map);
//-------------------------------------------------------------------------
alert("gfdgfdg");
  var place4 = {lat: 37.772, lng: -122.214};
  map.setCenter(place4);


}



