// creating a container for square divs 
const mainbox = document.createElement('div');
mainbox.setAttribute('class', 'main')
const container = document.querySelector('.container');
container.appendChild(mainbox) 

// get all the buttons
const colorBtn = document.querySelector('.colorBtn');
const rainbowBtn = document.querySelector('.rainbowBtn');
const eraserBtn = document.querySelector('.eraserBtn');
const clearBtn = document.querySelector('.clearBtn');
const colorPicker = document.querySelector('.color-picker');
const gridSize = document.querySelector('.gridSizer');
const sizeText = document.querySelector('.size-text');
const btnArray = [colorBtn, rainbowBtn, eraserBtn]

// create variable to use in if conditons to determine the mode
let mode = ''

// Track the mouse state for event handling
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

// function to toggle the active class between buttons
function toggleButton(clickedBtn) {
    btnArray.forEach(btn => {
        btn.classList.remove('active');
    })
    clickedBtn.classList.add('active')
}
// Event handlers for switching modes
colorBtn.onclick = () => {
    mode = 'color'
    toggleButton(colorBtn)
}
rainbowBtn.onclick = () => {
    mode = 'rainbow'
    toggleButton(rainbowBtn)
}
eraserBtn.onclick = () => {
    mode = 'eraser'
    toggleButton(eraserBtn)
}

// Event handler for clearing the grid and creating a new one
clearBtn.onclick = () => {
    mainbox.innerHTML = ''
    createGrid(mainbox, gridSize.value);
}

// Event handler for changing the grid size based on user input
gridSize.onchange = () => {
    mainbox.innerHTML = ''
    createGrid(mainbox, gridSize.value)
}

// event handler for changing the text of grid sizer
gridSize.onmousemove = () => {
    sizeText.textContent = `${gridSize.value} X ${gridSize.value}`
}

// changing the color of divs depending on chosen mode
function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (mode === 'rainbow') {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (mode === 'color') {
        e.target.style.backgroundColor = colorPicker.value
    } else if (mode === 'eraser') {
        e.target.style.backgroundColor = 'white'
    } 
}
// creating the grid depending on the size
function createGrid(elem, size) {
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div')
        div.classList.add('square');
        div.style.width = `calc(100% / ${size})`
        div.style.height = `calc(100% / ${size})`
        div.addEventListener('mousedown', changeColor)
        div.addEventListener('mouseover', changeColor)
        elem.appendChild(div);
    }
}
 
// creates the first grid when page loads
createGrid(mainbox, gridSize.value);

