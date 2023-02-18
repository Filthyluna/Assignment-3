// Declare global variables
let numRows = 2;
let numCols = 3;
let colorSelected; 
let table = document.getElementById("grid"); // Get the table

// Add a row
function addR() {
  if (numCols === 0) {
    addC()
  }
  else {
    newRow = table.insertRow(-1);
    for (let i = 0; i < numCols; i++){
      newRow.insertCell(i);
    }
    grid.appendChild(newRow);
  }
}

// Add a column
function addC() {
  let tableRows = document.getElementById("grid").querySelectorAll("tr")// Get the number of rows
  if (numRows === 0) {
    addR()
  }
  else {
    tableRows.forEach(row => { // Loop through the number of rows
      let cell = document.createElement('td');
      row.appendChild(cell);
    });
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