function createCanvas(rows, columns) {
  container.innerHTML = "";
  for (let i = 0; i < rows; i++) {
    const rowElement = document.createElement("div");
    for (let j = 0; j < columns; j++) {
      const columnElement = document.createElement("div");
      columnElement.classList.add("pixel");
      rowElement.appendChild(columnElement);
    }
    rowElement.classList.add("row");
    container.appendChild(rowElement);
  }
}

function setSize(event) {
  const size = parseInt(prompt("The pixels size that you want less than 100"));
  if (isNaN(size) || size > 100) return setSize(event);
  createCanvas(size, size);
}

const container = document.querySelector(".container");
const setSizeButton = document.querySelector(".canvas-size");

setSizeButton.addEventListener("click", (e) => {
  setSize(e);
});

const rows = 16;
const columns = 16;
createCanvas(rows, columns);
