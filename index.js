const animals = ['🐱', '🐶', '🐰', '🦊', '🐼', '🐨', '🐸', '🐵', '🐷', '🐵', '🐬', '🐗', '🐲', '🐢', '🐥', '🐺', '🦁', '🦔', '🦜', '🦎', '🦩', '🦈', '🐪', '🐤'];

let currentAnimalIndex = 0;

const petElement = document.getElementById('pet');


const healtElement = document.getElementById('healt');
const hungerElement = document.getElementById('hunger');
const happinessElement = document.getElementById('happiness');


let healt = 100;
let hunger = 0;
let happiness = 100;



function changeAnimal(){
    currentAnimalIndex = (currentAnimalIndex + 1) % animals.length;
    petElement.innerText = animals[currentAnimalIndex];
}




function updateStates(){
    healtElement.innerText = healt;
    hungerElement.innerText = hunger;
    happinessElement.innerText = happiness;
}


function decreaseStates(){
        healt = Math.max(0, healt -4);
        hunger = Math.max(0, hunger +4);
        happiness = Math.max(0, happiness -4);

    if(healt===0 || hunger===100 || happiness===0) {
        document.body.classList.add('game-over');
        clearInterval(statDecreaseInterval);
    }
    updateStates();
}


const statDecreaseInterval = setInterval(decreaseStates, 1000);
petElement.addEventListener('click', changeAnimal);






//PAS DE PANIQUE !!//


document.querySelector('.Button:nth-child(1)').addEventListener('click', () => {
    hunger = Math.min(100, hunger - 8);
    updateStats();
});


document.querySelector('.Button:nth-child(2)').addEventListener('click', () => {
    happiness = Math.min(100, happiness + 8);
    updateStats();
});


document.querySelector('.Button:nth-child(3)').addEventListener('click', () => {
    healt = Math.min(100, healt + 8);
    updateStats();
});

