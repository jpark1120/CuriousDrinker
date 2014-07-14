function mapInitialize() {
  var mapOptions = {
    center: new google.maps.LatLng(40.7160085,-73.9830292),
    zoom: 16,
    zoomControl: false,
    scrollwheel: false,
    streetViewControl: false
  };

  var map = new google.maps.Map(document.getElementById("map-canvas"),
      mapOptions);

  var placeLatLng = new google.maps.LatLng(40.71935601572622, -73.98493988647952);

  // places marker(symbol) on map
  var placeMarker = new google.maps.Marker({
      position: placeLatLng,
      map: map
      // icon: {
      //   path: google.maps.SymbolPath.CIRCLE,
      //   scale: 10
      // }
  });
}