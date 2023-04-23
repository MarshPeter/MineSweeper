function createCells(tableSize) {
  const tableBody = document.getElementById("table-body");
  for (let i = 0; i < tableSize; i++) {
    let tableRow = document.createElement("tr");

    for (let j = 0; j < tableSize; j++) {
      let tableCell = document.createElement("td");
      tableCell.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        console.log(`${e.button} (${e.type})`);
        //TODO: get left click functionality working
        if (e.button === 1) {
          console.log("success");
          tableCell.classList.add("shown");
        } else if (e.button === 2) {
          tableCell.classList.add("flag");
        }
      });

      tableRow.appendChild(tableCell);
    }

    tableBody.appendChild(tableRow);
  }
}

createCells(6);
