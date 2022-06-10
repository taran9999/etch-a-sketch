const gridContainer = document.getElementById('grid-container');

drawGrid(16);

document.getElementById("reset").onclick = () => {document.querySelectorAll(".grid").forEach((gridSquare) => gridSquare.style.backgroundColor = "");}
document.getElementById("size").onclick = () => {
    let s = prompt("Enter a grid size (max is 100).");
    if(s != null && !isNaN(s) && s <= 100 && s > 0) {
        clearGrid();
        drawGrid(s);
    }
}

function clearGrid() {
    document.querySelectorAll(".grid-rows").forEach((r) => r.remove());
    document.querySelectorAll(".grid").forEach((g) => g.remove());
}

function drawGrid(n) {
    //create n grid rows, and add n squares in each row, making a n x n grid.
    for(let i = 0; i < n; i++) {
        let r = document.createElement('div');
        r.classList.add("grid-rows");
        gridContainer.appendChild(r);
        for(let j = 0; j < n; j++) {
            let g = document.createElement('div');
            g.classList.add("grid");
            
            //create a random colour for this grid square
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
            g.onmouseover = () => {g.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`};
            r.appendChild(g);
        }
    }

    //change the size of each grid row and grid square, based on the number of squares.
    document.querySelectorAll(".grid-rows").forEach((r) => r.setAttribute('style', 
    `display: flex;
    width: 75vh;
    height: calc(75vh / ${n});`));

    document.querySelectorAll(".grid").forEach((g) => g.setAttribute('style', 
    `width: calc(75vh / ${n});
    height: calc(75vh / ${n});
    border-right: solid black;
    border-bottom: solid black;
    box-sizing: border-box`));
}