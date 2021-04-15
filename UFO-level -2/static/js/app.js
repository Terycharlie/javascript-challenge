// from data.js
var tableData = data;

// write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

//Declare Variable
var tbody = d3.select("tbody");

// Function to build table
function buildTable(arrayData){
    // clear existing data
    //tbody.html("");

// need to append each tr to the tb and then also append td to the tr
arrayData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
  });
}

var button = d3.select("#filter-btn");

button.on("click", filterTable);

function filterTable() {
 // Prevent the page from refreshing
    d3.event.preventDefault();

// Select the input element
    var inputTime = d3.select("#datetime").property("value");
    var inputCity = d3.select("#city").property("value").toLowerCase();
    var inputState = d3.select("#state").property("value").toLowerCase();
    var inputCountry = d3.select("#country").property("value").toLowerCase();
    var inputShape = d3.select("#shape").property("value").toLowerCase();

  // Filter the data by input element   
    var filters = {};

    if (inputTime){

        filters["datetime"]=inputTime
    } 
    else {
        delete filters["datetime"]
    }
    if (inputCity){

        filters["city"]=inputCity
    }
    else {
        delete filters["city"]
    }
    if (inputState){
        filters["state"]=inputState
    }
    else {
        delete filters["state"]
    }
    if (inputCountry){

        filters["country"]=inputCountry
    }
    else {
        delete filters["country"]
    }
    if (inputShape){
        filters["shape"]=inputShape
    }
    else {
        delete filters["shape"]
    };
    Object.entries(filters).forEach(([key, value]) => {

        filteredData = tableData.filter(ufo => ufo[key] === value); 
    });
    console.log(filteredData);       

// Reset the previous filtered data
tbody.html("")
    buildTable(filteredData);
}


buildTable(tableData);
