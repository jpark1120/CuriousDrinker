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
      id: placeObject.id,
      animation: google.maps.Animation.DROP,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 10
      }
  });

  markers[placeObject.id] = placeMarker;
  map.panTo(placeLatLng);

  // invoke method to grab largest value for map
  var largestNumber = maxGetter(collection);

  var contentString = "<div class='infowindow' id='infowindow" + placeObject.id + "'style='height: " + 221 +"px;'><p>" + placeObject.name +"</p></div>"

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });
  infowindow.open(map, placeMarker);

  google.maps.event.addListener(infowindow, 'domready', function(){
    console.log("yay");
    projectData(data, placeObject.id, largestNumber);
    $('.infowindow').parent().parent().siblings().css('opacity', '0.7');
    $('.gm-style-iw').css('width', '100%');
    $('.gm-style-iw').css('left', '0px');
  });

  google.maps.event.addListener(placeMarker, 'click', function(){
    infowindow.open(map, placeMarker);
    projectData(data, placeObject.id, largestNumber);
  });
}

function removeMarker(placeId){
  var here = markers[placeId];
  here.setMap(null);
  delete markers[placeId];
}

