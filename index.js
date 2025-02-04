const container = document.querySelector(".container");

let rows = 16;
let columns = 16;

for (let i = 0; i < rows; i++) {
  const rowElement = document.createElement("div");
  for (let j = 0; j < columns; j++) {
    const columnElement = document.createElement("div");
    rowElement.appendChild(columnElement);
  }
  container.appendChild(rowElement);
}
