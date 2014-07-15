
function projectData(dataset, place_id){

  var width = 50,
      height = 100;

  var barWidth = width / dataset.length;

  var y = d3.scale.linear()
    // input domain
    .domain([0, d3.max(dataset, function(d){ return 30000 } )])
    // set return to 15000 to see a relatively ok representation...30000 to see hotel chantelle
    // output range
    .range([0, height-10]);

  // querySelector does not like leading digits for an ID
  // If the first character of an identifier is numeric, you’ll need to escape it based on its Unicode code point like #\300 but you can also just string concatenate a letter in front
  var svg = d3.select("#place"+ place_id +"")
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

    // svg.selectAll("text")
    //   .data(dataset)
    //   .enter()
    //   .append("text")
    //   .text(function(d) { return d.name })
    //     .attr("x", function(d, i) { return i * barWidth + 25 } )
    //     .attr("y", height - 10)
    //     // .attr("y", function(d) { return height - y(d.checkins) })
    //     // .attr("dy", "1em")
    //       .style('font-size', "15px")

}
// .ease("elastic", 1, 0.15)
// .ease("elastic", a, p) where a is the amplitude (default 1) p is elasticity (bounciness) measure (default 0.45).