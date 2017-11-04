var data = [];
d3.text("data/location.csv", function(unParsed) {
  data = d3.csvParse(unParsed);
  function logNeighbourhoods(element, index, array){
    console.log(array[index]);
  }
  console.log("neighbourhoods:");
  data.forEach(logNeighbourhoods);
});

function inputLat{
var x = document.getElementById('lat');
}

function inputLong{
var x = document.getElementById('long');
}
