
// Below is a list of all card elements stored in a const
var cards = document.querySelectorAll('.card');

let flippedCard = false;
let firstCard, secondCard;
let boardLocked = false

// Using 'classList' allows easy access to an elements list of classes. 'toggle' then switches when the desired class is applied and removed.
function flipTheCard(){
    if (boardLocked) return;
    if (this === firstCard) return;

    this.classList.toggle('flipped');
    // This is the players first choice  
    if (!flippedCard){
        flippedCard = true;
        firstCard = this;   //'this' is the card that triggered the event 
    } else {
        // This is the players second choice
        secondCard = this;
        // If they match, we will remove the event listener that would flip them back to default position.
        
        checkIFMatching();
    }
}

var carRevvingAudio = new Audio('static/audio/carRevvingAudio.m4a');

//If the cards match they will remain flipped up and the audio clip will play.
function checkIFMatching(){
    if (firstCard.dataset.make === secondCard.dataset.make){
        disableCards();
        carRevvingAudio.play();
    } else {
        resetCards();
    }
}

//The below function keeps the cards flipped 'face up' as they matched in the previous step.
function disableCards(){
    firstCard.removeEventListener('click',flipTheCard);
    secondCard.removeEventListener('click',flipTheCard);
    boardReset();
}

//Should the cards not match, they will return to the default position.
function resetCards(){
    boardLocked = true; 
    setTimeout(() => {
        firstCard.classList.toggle('flipped');
        secondCard.classList.toggle('flipped');
        boardReset();
        }, 1000);
}

function boardReset(){
    [flippedCard,boardLocked] = [false,false];
    [firstCard,secondCard] = [null,null];
}

// Below generates a random number and assigns it to each card. We use math.random to generate the random number and math.floor to create an integer.
(function shuffle(){
    cards.forEach(card => {
        let randomPosition = Math.floor(Math.random()*12);
        card.style.order = randomPosition;
    });
})();
// An event listener has been added to each card (click) and it executes a function when performed (flipTheCard)
cards.forEach(card => card.addEventListener('click', flipTheCard));

