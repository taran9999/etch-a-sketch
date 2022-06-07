const gridContainer = document.getElementById('grid-container');

drawGrid(16);

document.getElementById("reset").onclick = () => {document.querySelectorAll(".grid").forEach((gridSquare) => gridSquare.style.backgroundColor = "");}

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
    
            if(j == n - 1) {
                g.classList.add("grid-right-col");
            }
            
            g.onmouseover = () => {g.style.backgroundColor = "black"};
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
    border-bottom: solid black;`));

    //prevent overlap of borders on the right side
    document.querySelectorAll(".grid-right-col").forEach((g) => g.setAttribute('style', 
    `width: calc(75vh / ${n});
    height: calc(75vh / ${n});
    border-bottom: solid black;`));
}