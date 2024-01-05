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
    return pixels;
}

function normalMode(){
    const dimension = prompt("Enter dimension of canvas: ", "");
    const pixels = generateCanvas(dimension); 
    pixels.forEach(pixel => {
        pixel.addEventListener("mouseover", () => pixel.style.backgroundColor = "black");
    });
}

//Multilayer mode
function multilayerMode(){
    const dimension = prompt("Enter the no. of pixels in the grid eg: 10 = 10X10 grid", "");
    const pixels = generateCanvas(dimension);
    pixels.forEach(pixel => {
        pixel.addEventListener("mouseover", () => {
            const classArray = Array.from(pixel.classList);
            const digit = 10 - classArray.length.toString();
            if(digit >= 0){
                const hexcode = '#'.concat(digit, digit, digit, digit, digit, digit);
                pixel.classList.add(digit);
                console.log(hexcode);
                pixel.style.backgroundColor = hexcode;
            }

        });
    });
}

//Rainbow mode
function rainbowMode(){
    const dimension = prompt("Enter the no. of pixels in the grid eg: 10 = 10X10 grid", "");
    const pixels = generateCanvas(dimension);
    pixels.forEach(pixel => {
        pixel.addEventListener("mouseover", () => {
            const blueval = Math.floor(Math.random() * 256);
            const greenval = Math.floor(Math.random() * 256);
            const redval = Math.floor(Math.random() * 256);
            pixel.style.backgroundColor = 'rgb(' + [redval, greenval, blueval].join(',') + ')'; 
        });
    });
}

//Event listener for "Create New Canvas"
createNewCanvasButton = document.querySelector(".canvasGenerator");
createNewCanvasButton.addEventListener("click", () => normalMode());

//Event listener for "Multilayer mode"
multilayerModeButton = document.querySelector(".progressiveOpaque");
multilayerModeButton.addEventListener("click", () => multilayerMode());

//Event listener for "Rainbow mode" 
rainbowModeButton = document.querySelector(".rainbow");
rainbowModeButton.addEventListener("click", () => rainbowMode());

//Generate a defalut 16x16 canvas initially
normalMode();
