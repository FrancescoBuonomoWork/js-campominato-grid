// console.log("funziona");

const gridDOMElement = document.querySelector(".grid");
// console.log(gridDOMElement);

const playButtonDOMElement = document.getElementById("btn-play");
// console.log(playButtonDOMElement);

const selectDOMElement = document.getElementById("difficolta");
console.log(selectDOMElement.value);
// const optFacileDOMElement = document.getElementById("facile");
// console.log(optFacileDOMElement);
// const optNormaleDOMElement = document.getElementById("normale");
// console.log(optNormaleDOMElement);
// const optDifficileDOMElement = document.getElementById("difficile");
// console.log(optDifficileDOMElement);



// for(i = 0 ;i < selectDOMElement.length; i++ ){
//     const selectOptionDOMElement = selectDOMElement[i];
//     console.log(selectOptionDOMElement);

// }
playButtonDOMElement.addEventListener("click", function () {
    // resettiamo la griglia 
    gridDOMElement.innerHTML = "";
    if (selectDOMElement.value === "facile") {

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
    } else if (selectDOMElement.value === "normale") {
        for (i = 0; i < (9 * 9); i++) {
            // console.log(i);
            const n = i + 1;
            // console.log(n);
            const cellHTML = `<div class="cell cell-normale">${n}</div>`;
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

    } else if (selectDOMElement.value === "difficile") {
        for (i = 0; i < (7 * 7); i++) {
            // console.log(i);
            const n = i + 1;
            // console.log(n);
            const cellHTML = `<div class="cell cell-difficile">${n}</div>`;
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
    }
})
