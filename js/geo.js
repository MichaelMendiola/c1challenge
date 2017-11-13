// Initialize variables as global and
// parse csv files
var data = [];
var prop =[];
var nbh = [];
var nbrh;
d3.text("data/location.csv", function(unParsed) {
  data = d3.csvParse(unParsed);
  data.forEach(function(d){
    d.latitude = +d.latitude;
    d.longitude = +d.longitude;
  })
});
d3.text("data/prop_type.csv", function(unparsed) {
  prop = d3.csvParse(unparsed);
  prop.forEach(function(d, i){
    type: d[0];
    number: +d[1];
  });
});
d3.text("data/neighbourhood.csv", function(unParsed) {
  nbh = d3.csvParse(unParsed);
  nbh.forEach(function(d){
    d.min_lat = +d.min_lat;
    d.max_lat = +d.max_lat;
    d.min_long = +d.min_long;
    d.max_long = +d.max_long;
  })
});
  // arraySearch is called on click
  // The neighbourhood is determined based on coordinates
  // The average price and estimated weekly revenue is the calculated
  // and passed to the table
  function arraySearch() {
    var x = parseFloat(document.getElementById('lat').value);
    var y = parseFloat(document.getElementById('long').value);
    var i = 0;
    while (i<nbh.length) {
        if (x >= nbh[i].min_lat && x <=nbh[i].max_lat
          && y >= nbh[i].min_long && y <= nbh[i].max_long){
          nbrh = nbh[i].neighbourhood;
        }
        i++;
    }

    var avg = 0;
    /* Calculate average price of each property type for each neighbourhood */
    for (var j=0; j<prop.length;j++){
        for (var k=0; k<data.length;k++){
          var a = data[k].neighbourhood;
          var b = data[k].type;
          var d = prop[j].type;
          if (data[k].neighbourhood == nbrh && data[k].type == prop[j].type){
            avg += +data[k].price;
            prop[j].number++;
          }
        }

      // set table values
      if (prop[j].number == 0){
        var pType = document.getElementById('prop' + (j+1));
        var price = document.getElementById('price' + (j+1));
        pType.innerText = prop[j].type;
        price.innerText = "N/A";

        pType = document.getElementById('prop2_' + (j+1));
        price = document.getElementById('price2_' + (j+1));
        pType.innerText = prop[j].type;
        price.innerText = "N/A";
      } else {
        avg /= prop[j].number;
        avg = avg.toFixed(2);
        var pType = document.getElementById('prop' + (j+1));
        var price = document.getElementById('price' + (j+1));
        pType.innerText = prop[j].type;
        price.innerText = '$' + avg;

        pType = document.getElementById('prop2_' + (j+1));
        price = document.getElementById('price2_' + (j+1));
        pType.innerText = prop[j].type;
        avg = (avg * 7).toFixed(2);
        price.innerText = '$' + avg;
      }
      avg = 0;
      prop[j].number = 0;
    }
  }
