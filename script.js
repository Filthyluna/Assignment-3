// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
  numRows++;
  let table = document.getElementById("grid"); // Get the table
  let col = table.rows[0].cells.length;  // Get the number of columns
  let newRow = table.insertRow(-1); // Insert a row at the end of the table
  for (let i = 0; i < col; i++) { // Loop through the number of columns
    newRow.insertCell(i); // Insert a cell at the end of the row and the length of the number of columns
  }
}

// Add a column
function addC() {
  numCols++;
  let table = document.getElementById("grid"); // Get the table
  let row = table.rows.length; // Get the number of rows
  for (let i = 0; i < row; i++) { // Loop through the number of rows
    table.rows[i].insertCell(i); // Insert a cell at the end of the columns and the length of the number of rows 
    //Can have -1 or i for the second parameter of insertCell() to insert a cell at the beginning of the row but it relies on length of the rows
  }
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
  let table = document.getElementById("grid");
  for (let i = 0; i < table.rows.length; i++){
    for (let j = 0; j < table.rows[i].cells.length; j++){
      if (table.rows[i].cells[j].style.backgroundColor == ""){
        table.rows[i].cells[j].style.backgroundColor = colorSelected;
      }
    }
  }
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
  let table = document.getElementById("grid");
  for (let i = 0; i < table.rows.length; i++){ 
    for (let j = 0; j < table.rows[i].cells.length; j++){
      table.rows[i].cells[j].style.backgroundColor = "";
    }
  }
}