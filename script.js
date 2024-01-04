function generateCanvas(dimension){
    const container = document.querySelector(".canvasContainer");
    container.replaceChildren();
    //adding 16x16 grid in the container
    for(let i = 0; i <= dimension; i++){
        const gridRow = document.createElement("div");
        gridRow.setAttribute("class", "gridRow");
        container.appendChild(gridRow);
        for(let j = 0; j <= dimension; j++){
            const gridElement = document.createElement("div");
            gridElement.setAttribute("class", "gridElement");
            gridRow.appendChild(gridElement);
        }
    }
    const pixels = document.querySelectorAll(".gridElement");
    pixels.forEach(pixel => {
        pixel.addEventListener("mouseover", () => pixel.style.backgroundColor = "black");
    });
}

const newCanvasGeneratorButton = document.querySelector(".canvasGenerator");
newCanvasGeneratorButton.addEventListener("click", () => {
    const dimension = prompt("Enter the no. of pixels in the grid eg: 10 = 10X10 grid", "");
    generateCanvas(dimension);
});

generateCanvas(16);
