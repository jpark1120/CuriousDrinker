
function projectData(dataset){

  var width = 250,
      height = 300;

  var barWidth = width / dataset.length;

  var y = d3.scale.linear()
    // input domain
    .domain([0, d3.max(dataset, function(d){ return d.checkins } )])
    // output range
    .range([0, height-10]);

  var svg = d3.select("#temp")
               .append("svg")
               .attr("width", width)
               .attr("height", height);

    svg.selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
        .attr("x", function(d, i) { return i * barWidth; })
        .attr("y", height)
        .attr("width", barWidth)
        .attr("height", 0)
        .style("fill", function(d){ return d.color; })
      .transition()
        // .delay(function(d, i) { return i * 100; })
        .duration(1000)
        .ease("circle")
        .attr("y", function(d) { return height - y(d.checkins) ; })
        .attr("height", function(d) { return y(d.checkins) ; });

    svg.selectAll("text")
      .data(dataset)
      .enter()
      .append("text")
      .text(function(d) { return d.name })
        .attr("x", function(d, i) { return i * barWidth + 25 } )
        .attr("y", height - 10)
        // .attr("y", function(d) { return height - y(d.checkins) })
        // .attr("dy", "1em")
          .style('font-size', "15px")

}
// .ease("elastic", 1, 0.15)
// .ease("elastic", a, p) where a is the amplitude (default 1) p is elasticity (bounciness) measure (default 0.45).

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
      map: map,
      // icon: {
      //   path: google.maps.SymbolPath.CIRCLE,
      //   scale: 10
      // }
  });
}

var data = [ 
  { name: "visitors", checkins: "1517", color: "#78DBE2" },
  { name: "checkins", checkins: "1978", color: "#FFA474"}
];


window.onload = function(){


  d3.select("button")
    .on("click", function(){
      projectData(data)
    });

}



