const container = document.querySelector(".container");
const sketchInput = document.createElement("div");
sketchInput.classList.add("sketchInput");
container.appendChild(sketchInput);

let blockNum = 0;

// let input = document.createElement("input");
// input.type = "text";
// sketchInput.appendChild(input);

let btn = document.createElement("button");
btn.textContent = "Change number of Squares";
sketchInput.appendChild(btn);
square(20);

function callPrompt() {
  let setNum = prompt("Enter Number of squares per side. No more than 100!");
  alert(setNum);
}

function square(size) {
  const squares = document.createElement("div");
  squares.classList.add("squares");
  container.appendChild(squares);
  for (let i = 0; i < size; i++) {
    let widthSize = squares.offsetWidth / size;
    const column = document.createElement("div");
    column.classList.add("column");
    for (let j = 0; j < size; j++) {
      blockNum++;
      const block = document.createElement("div");
      block.classList.add("block", `number${blockNum}`);
      block.style.height = `${widthSize}px`;
      block.style.width = `${widthSize}px`;
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
