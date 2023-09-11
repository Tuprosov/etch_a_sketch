const mainbox = document.createElement('div');
mainbox.setAttribute('class', 'main')
const container = document.querySelector('.container');
container.appendChild(mainbox)



function createGrid(elem) {
    for (let i = 0; i < 16 * 16; i++) {
        const div = document.createElement('div')
        div.classList.add('square');
        elem.appendChild(div);
    }
}

createGrid(mainbox);