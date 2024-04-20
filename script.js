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
      const block = document.createElement("div");
      block.classList.add("block");
      block.addEventListener("mouseenter", changeColor)
      column.appendChild(block);
    }
    squares.appendChild(column);
  }
}
square(16);

function changeColor() {
  block.target.style.backgroundcolor = "black"
}