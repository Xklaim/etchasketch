const container = document.querySelector(".container");
const input = document.querySelector("#numberInput");


const countBtn = document.querySelector(".squareCountBtn")

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
        square.style.backgroundColor = 'black';
    })
})
}
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