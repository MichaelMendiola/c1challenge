var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 1000 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var x = d3.scaleBand()
        .rangeRound([0, width])
        .padding(.5);

var y = d3.scaleLinear().range([height, 0]);

var xAxis = d3.axisBottom()
    .scale(x)
    .ticks(15);

var yAxis = d3.axisLeft()
    .scale(y)
    .ticks(15);

var div = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

var svg = d3.select("#center")
    .append("g")
      .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
var data =[];
d3.text("data/num_prop.csv", function(unParsed) {
  data = d3.csvParse(unParsed);

  x.domain(data.map(function(d) { return d.neighbourhood; }));
  y.domain([0, 1000]);

  svg = d3.select("#center")
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("listings ($)");

  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .style("fill", "#FF5A60")
      .attr("x", function(d) { return x(d.persons); })
      .attr("width", x.bandwidth())
      .attr("y", function(d) { return y(d.listings); })
      .attr("height", function(d) { return height - y(d.listings); })
      .on("mouseover", function(d) {
                  div.transition()
                      .duration(200)
                      .style("opacity", .9);
                  div	.html(d.listings)
                      .style("left", (d3.event.pageX) + "px")
                      .style("top", (d3.event.pageY - 28) + "px");
                  })
              .on("mouseout", function(d) {
                  div.transition()
                      .duration(500)
                      .style("opacity", 0);
              });

});
