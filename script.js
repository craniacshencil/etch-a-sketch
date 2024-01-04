const container = document.querySelector(".canvasContainer");
//adding 16x16 grid in the container
for(let i = 0; i <= 15; i++){
    const gridRow = document.createElement("div");
    gridRow.setAttribute("class", "gridRow");
    container.appendChild(gridRow);
    for(let j = 0; j <= 15; j++){
        const gridElement = document.createElement("div");
        gridElement.setAttribute("class", "gridElement");
        gridRow.appendChild(gridElement);
    }
}

//HoverEventListener to add colors
