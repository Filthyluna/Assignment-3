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
  let table = document.getElementById("grid");
  let row_remove = table.rows.length - 1;
  table.deleteRow(row_remove);
  numRows--;
}

// Remove a column
function removeC() {
  let table = document.getElementById("grid");
  for(let i = 0; i < table.rows.length; i++){
    table.rows[i].deleteCell(-1);
  }
  numCols--;
}

// Set global variable for selected color
function selectColor(){
  colorSelected = document.getElementById("selectedColorId").value;
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
  let table = document.getElementById("grid");
  for (let i = 0; i < table.rows.length; i++){
    for (let j = 0; j < table.rows[i].cells.length; j++){
      table.rows[i].cells[j].style.backgroundColor = colorSelected;
    }
  }
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}