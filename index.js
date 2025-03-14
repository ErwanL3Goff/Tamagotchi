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
        healt = Math.max(0, healt -2);
        hunger = Math.max(0, hunger +2);
        happiness = Math.max(0, happiness -2);

    if(healt===0 || hunger===100 || happiness===0) {
        document.body.classList.add('game-over');
        clearInterval(statDecreaseInterval);
    }
    updateStates();
}


const statDecreaseInterval = setInterval(decreaseStates, 3000);
petElement.addEventListener('click', changeAnimal);






//PAS DE PANIQUE !!//


document.querySelector('.Button:nth-child(1)').addEventListener('click', () => {
    hunger = Math.min(100, hunger - 20);
    updateStats();
});



/*A REVOIR SANS UTILISER ROBOT-BOY*/

document.querySelector('.Button:nth-child(2)').addEventListener('click', () => {
    const pet = document.getElementById('pet');
    
    happiness = Math.min(100, happiness + 20);
    updateStates();

    pet.classList.add('playing');

    setTimeout(() => {
        pet.classList.remove('playing');
    }, 3000);
});











let sLeepIng = false;


document.querySelector('.Button:nth-child(3)').addEventListener('click', () => {
        if (!sLeepIng){
        healt = Math.min(100, healt +20);
        sLeepIng = true;
        updateStates();
        document.getElementById('feed').disabled = true;
        document.getElementById('play').disabled = true;
        document.getElementById('Message').innerText = "Sommeil réparateur...";

        setTimeout(() => {
            sLeepIng = false;
            document.getElementById('feed').disabled = false;
            document.getElementById('play').disabled = false;
        }, 5888);

        alert("Chachun de nous a un jour fait le même rêve, celui de devenir l'homme le plus fort du monde et c'est le rêve de tous grapplers car le grappler vit pour combattre.");

    }else{
        alert("Sur ton chemin, tu trouveras toujours des ciseaux capables de découper des pierres. Ne l'oublie pas !");
    }

});