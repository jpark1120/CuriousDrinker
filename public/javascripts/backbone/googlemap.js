function mapInitialize() {
  var mapOptions = {
    center: new google.maps.LatLng(40.7160085,-73.9830292),
    zoom: 18,
    scrollwheel: false,
    streetViewControl: false
  };

  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

}

function addMarker(lat, lng, info, data){
  var placeLatLng = new google.maps.LatLng(lat, lng);

  // places marker(symbol) on map
  var placeMarker = new google.maps.Marker({
      position: placeLatLng,
      map: map,
      animation: google.maps.Animation.DROP,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 10
      }
  });

  map.panTo(placeLatLng);

  var contentString = "<div class='infowindow'><p class='place_graph'>" + info +"</p></div>"

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

  infowindow.open(map, placeMarker);

  google.maps.event.addListener(infowindow,'domready',function(){
    console.log("yay");
    projectData(data);
    $('.infowindow').parent().parent().siblings().css('opacity', '1');
    $('.infowindow').parent().parent().siblings().css('text-align', 'center');
    $('.gm-style-iw').css('width', '100%');
    $('.gm-style-iw').css('left', '0px');
  });


}


