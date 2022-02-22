const container = document.querySelector(".grid-screen"); //Set .grid-screen class as container const
const gamePad = document.querySelector(".game-pad"); //Set .game-pad class as gamePad const
const options = document.querySelector(".options"); //Set .options class as options const
const resetButton = document.createElement("button"); // Create button as resetButton const
const sliderTool = document.querySelector(".slider-container") //Set .slider-container class as sliderTool const
resetButton.classList.add('resetButton'); //Add resetButton class to resetButton const
resetButton.innerHTML = "Reset!"; //Add text on button
resetButton.type = "submit"; //Add button type
options.append(resetButton); //Adds button in the options class (DOM Manipulation)

let size = 100; //Initial size
for (let i = 0; i < size * size; i++) { //Run through the for loop [size*size] number of times to create a square grid
    const div = document.createElement("div"); //Create div as div const
    div.setAttribute('class', 'grid-item'); //Set class for each grid-item
    div.setAttribute('id', 'div' + (i+1)); //Set ID for each grid-item, to be used with mouseover functionality
    container.appendChild(div); //Adds div to container class (DOM Manipulation)
}

const slider = document.getElementById('grid-size-range'); //Set grid-size-range ID as slider
slider.addEventListener("input", function() { //Slider event listener
    document.getElementById('grid-size-range').setAttribute('value', slider.value); //Get slider value
    size = slider.value; //Set slider value to size
    let sizeReformat = 'repeat(' + size + ', 1fr)'; //Setting up sizeReformat for CSS reformating
    container.style.gridTemplateColumns = sizeReformat; //Reformat style.gridTemplateColumns with new size   
    container.style.gridTemplateRows = sizeReformat;  //Reformat style.gridTemplateRows with new size 
    resetGrid(); //Calls reset grid function to clear grid
});

resetButton.onclick = function () { //When reset button is clicked, execute the following:
    resetGrid();  //Call the resetGrid function to clear the grid
}

const gridItem=document.querySelectorAll(".grid-item"); //Set .grid-item class as gridItem const
gridItem.forEach((item) => { //for each item in GridItem (each square in the grid), execute the following:
    item.addEventListener('mouseover', function() { //Add a listener for mouseover event
            document.getElementById(item.id).style.backgroundColor = "black"; //Set the color to black if the square has been moused over
        })
})

function resetGrid() { 
    gridItem.forEach((item) => { //For each item in gridItem:
        document.getElementById(item.id).style.backgroundColor = "rgba(139, 194, 184, 0.952)"; //Reset the color
    });
}