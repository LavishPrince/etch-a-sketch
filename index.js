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

function randomNumber(limit) {
  return Math.floor(Math.random() * limit) + 1;
}
function handleHover(target) {
  const red = randomNumber(255);
  const blue = randomNumber(255);
  const green = randomNumber(255);
  opacity += 0.1;
  target.style.cssText = `background-color: rgba(${red}, ${blue}, ${green}, ${opacity})`;
}

const container = document.querySelector(".container");
const setSizeButton = document.querySelector(".canvas-size");

setSizeButton.addEventListener("click", (e) => {
  setSize(e);
});

container.addEventListener("mouseover", (event) => {
  if (event.target.classList.contains("container")) {
    return;
  }

  handleHover(event.target);
});

const rows = 16;
const columns = 16;
let opacity = 0;
createCanvas(rows, columns);
