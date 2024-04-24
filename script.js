const container = document.querySelector(".container");
const sketchPad = document.createElement("div");
container.appendChild(sketchPad);

let blockNum = 0;
let btn = document.createElement("button");
btn.classList.add("btn")
btn.textContent = "Number of Square"
sketchPad.appendChild(btn);
square(20);

function square(size) {
  const squares = document.createElement("div");
  squares.classList.add("squares");
  sketchPad.appendChild(squares);
  for (let i = 0; i < size; i++) {
    const column = document.createElement("div");
    column.classList.add("column");
    for (let j = 0; j < size; j++) {
      blockNum++;
      const block = document.createElement("div");
      block.classList.add("block", `number${blockNum}`);
      column.appendChild(block);
    }
    squares.appendChild(column);
  }
  changeColor(blockNum);
}

function changeColor(color) {
  for (let i = 1; i <= color; i++) {
    let colorChange = "." + "number" + i;
    let boxhover = document.querySelector(colorChange);
    boxhover.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "white";
    });
  }
}
