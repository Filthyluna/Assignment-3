// Declare global variables
let numRows = 2;
let numCols = 4;
let colorSelected; 
let table = document.getElementById("grid"); // Get the table

// Add a row
function addR() {
  let col = table.rows[0].cells.length;  // Get the number of columns
  if (numCols === 0) {
    addC();
  }
  else {
    let newRow = table.insertRow(-1); // Insert a row at the end of the table
    for (let i = 0; i < col; i++) { // Loop through the number of columns
      newRow.insertCell(i); // Insert a cell at the end of the row and the length of the number of columns
    }
    numRows++;
  }
}

// Add a column
function addC() {
  let row = table.rows.length; // Get the number of rows
  if (numRows === 0) {
    addR()
  }
  else {
    for (let i = 0; i < row; i++) { // Loop through the number of rows
      table.rows[i].insertCell(-1); // Insert a cell at the end of the columns and the length of the number of rows 
      //Can have -1 or i for the second parameter of insertCell() to insert a cell at the beginning of the row but it relies on length of the rows
    }
    numCols++;
  }
}


// Remove a row
function removeR() {
  let row_remove = table.rows.length - 1;
  table.deleteRow(row_remove);
  numRows--;
}

// Remove a column
function removeC() {
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
  for (let i = 0; i < table.rows.length; i++){
    for (let j = 0; j < table.rows[i].cells.length; j++){
      table.rows[i].cells[j].style.backgroundColor = colorSelected;
    }
  }
}

function fillOne(){
  for (let i = 0; i < table.rows.length; i++){
    for (let j = 0; j < table.rows[i].cells.length; j++){
      table.rows[i].cells[j].addEventListener('click', function (e) {
        e.target.style.backgroundColor = colorSelected;
      });
    }
  }
}

// Clear all cells
function clearAll(){
  for (let i = 0; i < table.rows.length; i++){ 
    for (let j = 0; j < table.rows[i].cells.length; j++){
      table.rows[i].cells[j].style.backgroundColor = "White";
    }
  }
}