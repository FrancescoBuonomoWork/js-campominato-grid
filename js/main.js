// console.log("funziona");

const gridDOMElement = document.querySelector(".grid");
// console.log(gridDOMElement);

const playButtonDOMElement = document.getElementById("btn-play");
// console.log(playButtonDOMElement);


playButtonDOMElement.addEventListener("click", function () {
    // resettiamo la griglia 
    gridDOMElement.innerHTML = "";

    for (i = 0; i < 100; i++) {
        // console.log(i);
        const n = i + 1;
        // console.log(n);
        const cellHTML = `<div class="cell">${n}</div>`;
        // console.log(cellHTML);
        gridDOMElement.innerHTML += cellHTML;
        // console.log(cellHTML);
    }

    const cellDOMElements = document.querySelectorAll(".cell");
    // console.log(cellDOMElements);
    // console.log(cellDOMElements.length);
    for (i = 0; i < cellDOMElements.length; i++) {
        const currentCellDOMElement = cellDOMElements[i];
        // console.log(currentCellDOMElement);

        currentCellDOMElement.addEventListener("click", function () {
            currentCellDOMElement.classList.add("bg-lightblue");
            console.log(currentCellDOMElement);


        })
    }

})
