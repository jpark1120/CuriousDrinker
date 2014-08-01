var CuriousDrinker = CuriousDrinker || { Models: {}, Collections: {}, Views: {} };

CuriousDrinker.initialize = function(){
  collection = new CuriousDrinker.Collections.PlaceCollection();

  var listView = new CuriousDrinker.Views.PlaceListView({
    collection: collection,
    el: $('.places_container')
  });

  collection.fetch()

}


// for testing purposes only, move back into initialize afterwards
var collection;
var map;
var markers = {};

// function for iterating through the collections array and pulling out the max checkin count
function maxGetter(collection){
  var newArray = []
  
  collection.models.forEach(function(placeObject){
    newArray.push(placeObject.attributes.males);
    newArray.push(placeObject.attributes.females);
    return newArray;
  })

  var largest = Math.max.apply(Math, newArray);
  console.log(largest);
  return largest;
}

function enterSite(){

  $('#ignition').on('click', function(evt){
    evt.preventDefault();
    console.log("clicked");
    $('.landing_page').css("display", "none");
    // $('.pg_container').css("display", "block");
    $('.content').fadeIn('slow');
    // necessary for map to resize properly after fading in
    google.maps.event.trigger(map, "resize");
  });
}

$(function(){
  mapInitialize();
  CuriousDrinker.initialize();
  enterSite();
});



