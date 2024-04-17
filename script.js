const container = document.querySelector(".container");
const sketchPad = document.createElement("div");
container.appendChild(sketchPad);

function square(size) {
  const squares = document.createElement("div");
  squares.classList.add("squares");
  sketchPad.appendChild(squares);
  for (let i = 0; i < size; i++) {
    const column = document.createElement("div");
    column.classList.add("column");
    for (let j = 0; j < 16; j++) {
      let row = document.createElement("div");
      row.classList.add("row");
      column.appendChild(row);
    }
    squares.appendChild(column);
  }
}
square(16);
