var data = [];
var x, y, lat, long;
function inputLat(){
  x = +document.getElementById('lat');
  lat = x.elements= "lat";
}

function inputLong(){
  y = +document.getElementById('long');
  long = y.elements = "long";
}
d3.text("data/location.csv", function(unParsed) {
  data = d3.csvParse(unParsed);
  data.forEach(function(d){
    d.min_lat = +d.min_lat;
    d.max_lat = +d.max_lat;
    d.min_long = +d.min_long;
    d.max_long = +d.max_long;
  })
  function logNeighbourhoods(element, index, array){
    console.log(array[index]);
  }
});

var s = function arraySearch(arr,lat, long) {
    for (var i=0; i<arr.length; i++){
        if (lat >= arr[i].min_lat && lat <=arr[i].max_lat
          && long >= arr[i].min_long && long <= arr[i].max_long){
          var loc = arr[i].neighbourhood;
        }
    }
    return loc
  }

function varCheck(x, y){
  var s;
  if (x>y){
    s = "test";
  }
  console.log(s);
}

console.log(s(data, lat, long));
