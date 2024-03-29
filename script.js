const gridContainer = document.getElementById('grid-container');
let currentSize = 16;

drawGrid(16);

document.getElementById("reset").onclick = function() {
    clearGrid();
    drawGrid(currentSize);
}
document.getElementById("size").onclick = () => {
    let s = prompt("Enter a grid size (max is 100).");
    if(s != null && !isNaN(s) && s <= 100 && s > 0) {
        clearGrid();
        drawGrid(s);
        currentSize = s;
    }
}

function clearGrid() {
    document.querySelectorAll(".grid-rows").forEach((r) => r.remove());
    document.querySelectorAll(".grid").forEach(function(g) {
        g.currentRed = g.red;
        g.currentGreen = g.green;
        g.currentBlue = g.blue;
        g.remove();
    });
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
            g.red = Math.floor(Math.random() * 256);
            g.green = Math.floor(Math.random() * 256);
            g.blue = Math.floor(Math.random() * 256);
            g.currentRed = g.red;
            g.currentGreen = g.green;
            g.currentBlue = g.blue;
            g.onmouseover = () => {
                document.querySelectorAll(".grid").forEach(function(gr) {
                    if(gr.style.backgroundColor != "") {
                        gr.currentRed -= 0.1 * gr.red;
                        gr.currentGreen -= 0.1 * gr.green;
                        gr.currentBlue -= 0.1 * gr.blue;
                        gr.style.backgroundColor = `rgb(${gr.currentRed}, ${gr.currentGreen}, ${gr.currentBlue})`;
                    }
                })
                g.style.backgroundColor = `rgb(${g.red}, ${g.green}, ${g.blue})`;
            };
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