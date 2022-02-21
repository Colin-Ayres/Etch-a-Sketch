const container = document.querySelector('#container');
let cols = document.getElementsByClassName("gridColumn");
let square = document.getElementsByClassName("square");

makeGrid(16,16); 

function makeGrid(columnDepth, numRows) {
    populateColumn(columnDepth); //Specifies number of elements per column
    populateRow(numRows); //Specifies number of elements per row
}

function populateColumn(ColSize) {
    for (r = 0; r < ColSize; r++) {
        let col = document.createElement("div");
        container.appendChild(col).className = "gridColumn";
    };
};

function populateRow(rowSize) {
    for (i = 0; i < rowSize; i++) {
        for (j = 0; j < cols.length; j++) {
            let newCell = document.createElement("div");
            cols[j].appendChild(newCell).className = "square";
        };

    };
};
