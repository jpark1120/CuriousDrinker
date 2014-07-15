var Popcheckapp = Popcheckapp || { Models: {}, Collections: {}, Views: {} };

Popcheckapp.initialize = function(){
  collection = new Popcheckapp.Collections.PlaceCollection();

  var listView = new Popcheckapp.Views.PlaceListView({
    collection: collection,
    el: $('.places_container')
  });

  collection.fetch();

}


// for testing purposes only, move back into initialize afterwards
var collection;
var map;


$(function(){

  mapInitialize();
  Popcheckapp.initialize();

});