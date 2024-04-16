const container = document.querySelector(".container");

function square() {
  for (let i = 0; i < 16; i++) {
    const squares = document.createElement("div");
    squares.classList.add("squares");
    container.appendChild(squares);
    for (let j = 0; j < 16; j++) {
      const row = document.createElement("div");
      row.classList.add("row");
      container.appendChild(row);
    }
  }
}
square();
