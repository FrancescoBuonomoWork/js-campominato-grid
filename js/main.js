// console.log("funziona");

const gridDOMElement = document.querySelector(".grid");
console.log(gridDOMElement);

const playButtonDOMElement = document.getElementById("btn-play");
console.log(playButtonDOMElement);



for (i = 0; i < 100; i++ ) {
// console.log(i);
const n = i + 1;
// console.log(n);
const cellHTML = `<div class="cell">${n}</div>`;
// console.log(cellHTML);
gridDOMElement.innerHTML += cellHTML;
console.log(cellHTML);


}