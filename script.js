const mainbox = document.createElement('div');
mainbox.setAttribute('class', 'main')
const container = document.querySelector('.container');
container.appendChild(mainbox)


let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function changeColor(e) {
    if(e.type === 'mouseover' && mouseDown){
        e.target.style.backgroundColor = 'red';
    } 
    
}


function createGrid(elem) {
    for (let i = 0; i < 16 * 16; i++) {
        const div = document.createElement('div')
        div.classList.add('square');
        div.addEventListener('mousedown', changeColor)
        div.addEventListener('mouseover', changeColor)
        elem.appendChild(div);
    }
}

createGrid(mainbox);

