var tableData = data;
  var table = d3.select("#ufo-table");
  var tbody = table.select("tbody");
  var trow;

tableData.forEach(x => {

    trow = tbody.append("tr");
    trow.append("td").text(x.datetime);
    trow.append("td").text(x.city);
    trow.append("td").text(x.state);
    trow.append("td").text(x.country);
    trow.append("td").text(x.shape);
    trow.append("td").text(x.DurationMinutes);
    trow.append("td").text(x.comments);
  
})


let search = function (input) {
 

  var inputElement = d3.select("#datetime");

  var inputValue = inputElement.property("value");

  searchResults = tableData.filter(i => i.datetime === inputValue)

  console.log(searchResults);

  tbody.html("");

  searchResults.forEach(x => {

    trow = tbody.append("tr");
    trow.append("td").text(x.datetime);
    trow.append("td").text(x.city);
    trow.append("td").text(x.state);
    trow.append("td").text(x.country);
    trow.append("td").text(x.shape);
    trow.append("td").text(x.DurationMinutes);
    trow.append("td").text(x.comments);
  
})

}

let button = d3.select("#filter-btn");
button.on("click", search);

// //alternative path to input  on html
// let button = d3.select("#datetime");

// //Input activate function section
// button.on("change", search);

// d3.selectAll(input, function (input){

//   console.log(input.node());

  // if (input === tableData.datetime)
  // {
    
  //    console.log(tableData)
    
  // }
// })

// let search = function(event) {
// // return tableData[]
//    var inputText = d3.event.target.value;
//    if (tableData.datetime === inputText){
//    console.log(tableData[inputText])
//    }



// tableData.forEach(event => {
//   if (tableData.datetime = event)
//   console.log(tableData)