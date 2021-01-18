// from data.js
var tableData = data;
// YOUR CODE HERE!
var tbody = d3.select('#ufo-table>tbody');
console.log(tbody.node()); 
function buildTable(tableData){
    tableData.forEach(record => {
        var row = tbody.append('tr');
        // first way to have the columns 
        // row.append('td').text(record['datetime']);
        // row.append('td').text(record['city']);
        // row.append('td').text(record['state']);
        // row.append('td').text(record['country']);
        // row.append('td').text(record['shape']);
        // row.append('td').text(record['durationMinutes']);
        // row.append('td').text(record['comments']);
        // second way to have the columns
        Object.values(record).forEach(col => {
            row.append('td').text(col);
        });
    })
}
function filterTable(elem){
    console.log('filter table event');
    var dateElem = d3.select('#datetime');
    var filterDate = dateElem.property('value');
    filteredData = tableData.filter(rec => rec['datetime'] == filterDate);
    console.log(filteredData);
    tbody.html('');
    buildTable(filteredData);
}
btn = d3.select('#filter-btn');
datetimefield = d3.select('#datetime')
btn.on('click', filterTable);
datetimefield.on('change', filterTable);
/// call the function 
buildTable(tableData); 