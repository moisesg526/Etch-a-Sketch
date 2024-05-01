const container = document.querySelector(".container");
const sketchInput = document.createElement("div");
sketchInput.classList.add("sketchInput");
sketchInput.appendChild(btn);
container.appendChild(sketchInput);

const squares = document.createElement("div");
squares.classList.add("squares");
container.appendChild(squares);

let btn = document.createElement("button");
btn.textContent = "Change number of Squares";
btn.addEventListener("click", () => {
  resetSquares();
});

function resetSquares() {
  let number = prompt("Pick a size between 1 and 100");
  container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
  square(number);
}

function square(size) {
  squares.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  squares.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = "black";
    container.appendChild(square);

    square.addEventListener("mouseover", (e) => {
      square.style.backgroundColor = "white";
    });

    function clearGrid() {
      clear.addEventListener("click", (e) => {
        square.style.backgroundColor = "black";
      });
    }

    clearGrid();
  }
}
square(16);
// function changeColor(color) {
//   for (let i = 1; i <= color; i++) {
//     let colorChange = "." + "number" + i;
//     let boxhover = document.querySelector(colorChange);
//     boxhover.addEventListener("mouseover", (e) => {
//       e.target.style.backgroundColor = "white";
//     });
//   }
// }
