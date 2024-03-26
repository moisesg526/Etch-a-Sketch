const container = document.querySelector(".container");

const content = document.createElement("div");
content.classList.add("content");
content.style.border = "solid 1px #000000";
content.textContent = "HELLO"

container.appendChild(content);