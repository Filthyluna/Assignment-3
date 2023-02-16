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
    alert("Clicked Remove Row"); // Replace this line with your code.
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