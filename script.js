const container = document.querySelector(".grid-screen");
const gamePad = document.querySelector(".game-pad");
const resetButton = document.createElement("button");
resetButton.classList.add('resetButton');
resetButton.innerHTML = "Reset!";
resetButton.type = "submit";
resetButton.name = "formBtn";
gamePad.insertBefore(resetButton, container)
//gamePad.appendChild(resetButton);


//Initialize grid-items with default size
let size = 100;
for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.setAttribute('class', 'grid-item');
    div.setAttribute('id', 'div' + (i+1));
    container.appendChild(div);
}
function resetGrid() {
    gridItem.forEach((item) => {
        document.getElementById(item.id).style.backgroundColor = "rgba(139, 194, 184, 0.952)";
    });
}

resetButton.onclick = function () {
    resetGrid();
}



function randomColor (){
     let color = '#' + Math.floor(Math.random()*16777215).toString(16);
     return color;
    }

const gridItem=document.querySelectorAll(".grid-item");
gridItem.forEach((item) => {
    item.addEventListener('mouseover', function() {
       
            document.getElementById(item.id).style.backgroundColor = "black";
        
            
        })
})
