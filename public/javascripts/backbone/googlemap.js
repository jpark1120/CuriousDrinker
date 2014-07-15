function mapInitialize() {
  var mapOptions = {
    center: new google.maps.LatLng(40.7160085,-73.9830292),
    zoom: 17,
    scrollwheel: false,
    streetViewControl: false
  };

  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

}

function addMarker(placeObject, data){
  var lat = parseFloat(placeObject.latitude);
  var lng = parseFloat(placeObject.longitude);

  var placeLatLng = new google.maps.LatLng(lat, lng);

  // places marker(symbol) on map
  var placeMarker = new google.maps.Marker({
      position: placeLatLng,
      map: map,
      title: placeObject.name,
      animation: google.maps.Animation.DROP,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 10
      }
  });
// str.replace("Microsoft", "W3Schools");
  map.panTo(placeLatLng);

  var contentString = "<div class='infowindow'><p id='place"+ placeObject.id +"'>" + placeObject.name +"</p></div>"

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

  infowindow.open(map, placeMarker);

  google.maps.event.addListener(infowindow,'domready',function(){
    console.log("yay");
    projectData(data, placeObject.id);
    $('.infowindow').parent().parent().siblings().css('opacity', '1');
    $('.gm-style-iw').css('width', '100%');
    $('.gm-style-iw').css('left', '0px');
  });


}


