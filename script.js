const container = document.querySelector(".container");
const input = document.querySelector("#numberInput");


const countBtn = document.querySelector(".squareCountBtn")

let currentColor = 'black';
let useRandomColor = false;

const randomColorBtn = document.querySelector('.randomColor')
randomColorBtn.addEventListener('click', ()=>{
    isErasing = false;
    useRandomColor = !useRandomColor;
})

function getRandomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}

const colorPicker = document.querySelector('.colorPicker');
colorPicker.addEventListener('input', (e) => {
  currentColor = e.target.value;
  useRandomColor = false;
});


function buildGrid(count) {
    container.innerHTML = '';
    for (let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {
            const squareDiv = document.createElement('div');
            squareDiv.classList.add('square');
            squareDiv.style.width = `${45/count}rem`;
            squareDiv.style.height = `${45/count}rem`;
            container.appendChild(squareDiv);
        }
    }
    addHoverEffect();
}

function addHoverEffect() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
    square.addEventListener('mouseover', ()=>{

        if(isErasing){
            square.style.backgroundColor = 'white';
        }else{
            const color = useRandomColor ? getRandomColor() : currentColor;
            square.style.backgroundColor = color;
        }
        
    })
})
}

//erasing
let isErasing = false;

const drawBtn = document.querySelector('.drawBtn');
const eraseBtn = document.querySelector('.eraseBtn');

drawBtn.addEventListener('click', () => {
    isErasing = false;
})

eraseBtn.addEventListener('click', () => {
    isErasing = true;
})

document.addEventListener('keydown', (e) => {
  if (e.key === 'e') isErasing = true;
});

document.addEventListener('keyup', (e) => {
  if (e.key === 'e') isErasing = false;
});

buildGrid(16);

countBtn.addEventListener('click', () => {
    const rawInput = input.value.replace(/\s+/g, '');
    const count = Number(rawInput);
    console.log(`you entered ${count}` )

    if(count == 0){
        alert('Enter a number, any number.. less than or 99.. and not a zero')
    }else if(isNaN(count)){
        alert('a number DUDE. Less than or 99')
    }else if(count > 99){
        alert(`LESS THAN or 99, how is ${count} less than or 99? there is a difference of ${count - 99} between them.`);
    }else{
        buildGrid(count);
    }
});