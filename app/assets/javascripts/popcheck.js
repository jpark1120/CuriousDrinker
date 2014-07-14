var Popcheckapp = Popcheckapp || { Models: {}, Collections: {}, Views: {} };


var data = [ 
  { name: "visitors", checkins: "1517", color: "#78DBE2" },
  { name: "checkins", checkins: "1978", color: "#FFA474"}
];


Popcheckapp.initialize = function(){
  var collection = new Popcheckapp.Collections.PlaceCollection();


  collection.fetch();

}


$(function(){

  d3.select("button")
    .on("click", function(){
      projectData(data)
    });

  mapInitialize();
  Popcheckapp.initialize();

});



