const container = document.querySelector(".container");
const content = document.createElement("div");
content.classList.add("content");
container.appendChild(content);
const row = document.createElement("div");
row.classList.add("oneRow");
content.appendChild(row);
// const second = document.createElement("div");
// second.classList.add("second");
// content.appendChild(second);

// function square() {}
// for (let i = 0; i < 10; i++) {
//     for (let i = 0; i < 1; i++) {
//       const divRow = document.createElement("div");
//       divRow.classList.add("row");
//       row.appendChild(divRow);
//     }
//     for (let i = 0; i < 1; i++) {
//       const divSecondRow = document.createElement("div");
//       divSecondRow.classList.add("secondRow");
//       second.appendChild(divSecondRow);
//     }
//   }

function squares() {
  for(let i = 0; i < 16; i++) {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("row");
    row.appendChild(squareDiv);
  }
}
