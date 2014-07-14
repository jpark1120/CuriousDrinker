function mapInitialize() {
  var mapOptions = {
    center: new google.maps.LatLng(40.7160085,-73.9830292),
    zoom: 15,
    scrollwheel: false,
    streetViewControl: false
  };

  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

}

function addMarker(lat, lng){
  var placeLatLng = new google.maps.LatLng(lat, lng);

  // places marker(symbol) on map
  var placeMarker = new google.maps.Marker({
      position: placeLatLng,
      map: map,
      title: "Hello World!",
      animation: google.maps.Animation.DROP,
      // icon: {
      //   path: google.maps.SymbolPath.CIRCLE,
      //   scale: 10
      // }
  });

  map.panTo(placeLatLng);

}
