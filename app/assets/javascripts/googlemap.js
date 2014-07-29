function mapInitialize() {
  var mapOptions = {
    center: new google.maps.LatLng(40.7160085,-73.9830292),
    zoom: 17,
    scrollwheel: false,
    streetViewControl: false
  };

  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

}

function addMarker(placeObject){
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
  // data object to pass into graph generate
  var data = [
    { name: "males", checkins: placeObject.males, color: "rgb(116, 106, 125)" },
    { name: "females", checkins: placeObject.females, color: "rgb(250, 136, 42)" }
  ];

  var contentString = "<div class='infowindow' id='infowindow" + placeObject.id + "'style='height: " + 221 +"px;'><p>" + placeObject.name +"</p></div>"


  var infowindow = new google.maps.InfoWindow({
      content: contentString,
      // pixelOffset: new google.maps.Size(0, 10)
      // uncomment to reposition position of infowindow
  });
  infowindow.open(map, placeMarker);

  // Bring latest infowindow to top
  // var zIndexNew = 9999 + Object.keys(markers).length
  // the latest window comes up on top if z-index is the same so dont need to have incrementing z-index value.
  infowindow.setZIndex(9999);

  google.maps.event.addListener(infowindow, 'domready', function(){
    console.log("yay");
    projectData(data, placeObject.id, largestNumber);

    console.log(Object.keys(markers).length);
    // CSS being set with jquery to override googles inline style
    // css for infowindow on generation
    $('.infowindow').parent().parent().siblings().css('opacity', '0.7');
    $('.gm-style-iw').css('width', '100%');
    $('.gm-style-iw').css('left', '0px');

  });


  google.maps.event.addListener(placeMarker, 'click', function(){
    // user can open window by clicking on marker as well
    infowindow.open(map, placeMarker);
    $('.info_container').empty();
    projectDataWindow(placeObject);
    projectData(data, placeObject.id, largestNumber);
  });
}

function removeMarker(placeId){
  var here = markers[placeId];
  here.setMap(null);
  // not being deleted for the z-index of infowindows
  // delete markers[placeId];
}

