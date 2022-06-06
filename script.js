const gridContainer = document.getElementById('grid-container');

for(let i = 0; i < 16; i++) {
    let r = document.createElement('div');
    r.classList.add("grid-rows");
    gridContainer.appendChild(r);
    for(let j = 0; j < 16; j++) {
        let g = document.createElement('div');
        g.classList.add("grid");

        if(j == 15) {
            g.classList.add("grid-right-col");
        }
        
        g.onmouseover = () => {g.style.backgroundColor = "black"};
        r.appendChild(g);
    }
}

document.getElementById("reset").onclick = () => {
    let gridSquares = document.querySelectorAll(".grid");
    for(let i = 0; i < gridSquares.length; i++) {
        gridSquares[i].style.backgroundColor = "";
    }
}