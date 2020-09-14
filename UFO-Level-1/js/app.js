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