// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
  let table = document.getElementById("grid");
  let col = table.rows[0].cells.length;
  let newRow = table.insertRow(-1);
  for (let i = 0; i < col; i++) {
    newRow.insertCell(i);
  }
}

// Add a column
function addC() {
  // let table = document.getElementById("grid"); // Get the table
  // table.insertBefore(table.rows[0].insertCell(-1), table.rows[0].cells[0]); // Insert a cell at the end of the first row
}

// Remove a row
function removeR() {
  // let table = document.getElementById("grid");
  // let row_remove = table.rows.length - 1;
  // table.deleteRow(row_remove);

}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}