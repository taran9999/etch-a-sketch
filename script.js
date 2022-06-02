const gridContainer = document.getElementById('grid-container');

for(let i = 0; i < 16; i++) {
    let r = document.createElement('div');
    r.classList.add("grid-rows");
    gridContainer.appendChild(r);
    for(let j = 0; j < 16; j++) {
        let g = document.createElement('div');
        g.classList.add("grid");
        g.onmouseover = () => {g.setAttribute('style', 'background-color: black; width: calc(75vh / 16); height: calc(75vh / 16); border: solid black;')};
        r.appendChild(g);
    }
}

document.getElementById("reset").onclick = () => {
    let gridSquares = document.querySelectorAll(".grid");
    for(let i = 0; i < gridSquares.length; i++) {
        gridSquares[i].setAttribute('style', 'background-color: ; width: calc(75vh / 16); height: calc(75vh / 16); border: solid black;');
    }
}