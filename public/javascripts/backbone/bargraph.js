
function projectData(dataset, place_id, highestSet){
  // var numberHolder = []
  
  // dataset.forEach(function(bar){
  //   numberHolder.push(bar.checkins)
  //   return numberHolder
  // });

  // var height = Math.max.apply(Math, numberHolder) / 100;
  // console.log(height) 
  var width = 75;
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
    
    // $('.infowindow').parent().parent().siblings().css("height", height+"px");


    // d3.select(".infowindow")
    //   .style("height", height+"px;");

}
// .ease("elastic", 1, 0.15)
// .ease("elastic", a, p) where a is the amplitude (default 1) p is elasticity (bounciness) measure (default 0.45).