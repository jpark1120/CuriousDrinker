
function projectData(dataset, place_id, highestSet){
  // var numberHolder = []
  
  // dataset.forEach(function(bar){
  //   numberHolder.push(bar.checkins)
  //   return numberHolder
  // });

  // var height = Math.max.apply(Math, numberHolder) / 100;
  // console.log(height) 
  var width = 75,
      height = 200;
  // var highestValue = highestSet / 100;
  var barWidth = width / dataset.length;

  var y = d3.scale.linear()
    // input domain
    .domain([0, highestSet])
    // d3.max(dataset, function(d){ return d.checkins })
    // { return d.checkins }
    // set return to 15000 to see a relatively ok representation...33000 to see Beauty and Essex
    // output range
    .range([0, height]);

  // querySelector does not like leading digits for an ID
  // If the first character of an identifier is numeric, you’ll need to escape it based on its Unicode code point like #\300 but you can also just string concatenate a letter in front
  var svg = d3.select("#infowindow"+ place_id +"")
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
        .ease("elastic")
        .attr("y", function(d) { return height - y(d.checkins) ; })
        .attr("height", function(d) { return y(d.checkins) ; });
}
// .ease("elastic", 1, 0.15)
// .ease("elastic", a, p) where a is the amplitude (default 1) p is elasticity (bounciness) measure (default 0.45).


function projectDataWindow(placeObject){
  var width = 250,
      height = 250;
  var dataset = [
    { name: "males", checkins: placeObject.males, color: "rgb(116, 106, 125)" },
    { name: "females", checkins: placeObject.females, color: "rgb(250, 136, 42)" }
  ]
  var barWidth = width / dataset.length;
  // invoke method to grab largest value for map
  // var largestNumber = maxGetter(collection);
  var y = d3.scale.linear()
    // input domain
    .domain([0, d3.max(dataset, function(d){ return d.checkins })])
    // output range
    .range([0, height-30]);

  var svg = d3.select(".info_container")
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
    
  var texts = svg.selectAll("text")
              .data(dataset)
              .enter();

    texts.append("text")
    .text(function(d) { return d.checkins })
      .attr("x", function(d, i) { return i * barWidth + 45 } )
      .attr("y", function(d) { return height - y(d.checkins)+ 15 })
      // .attr("dy", "1em")
      .style('font-size', "15px")
      .style('font-weight', "bold");
    
    texts.append("text")
      .text(function(d) { return d.name })
        .attr("x", function(d, i) { return i * barWidth + 65 } )            
        .attr("y", height - 5)
        .attr("text-anchor", "middle")
        .style("font-weight", "bold")
        .style("font-size", "16px");

    texts.append("text")
      .text(placeObject.name)
        .attr("x", (barWidth))             
        .attr("y", 25)
        .attr("text-anchor", "middle")
        .style("font-weight", "bold")
        .style("font-size", "16px");


}
