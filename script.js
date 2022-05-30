const gridContainer = document.getElementById('grid-container');

for(let i = 0; i < 16; i++) {
    let r = document.createElement('div');
    r.classList.add("grid-rows");
    gridContainer.appendChild(r);
    for(let j = 0; j < 16; j++) {
        let g = document.createElement('div');
        g.classList.add("grid");
        r.appendChild(g);
    }
}