
// Below is a list of all card elements stored in a const
var cards = document.querySelectorAll('.card');

let flippedCard = false;
let firstCard, secondCard;

// Using 'classList' allows easy access to an elements list of classes. 'toggle' then switches when the desired class is applied and removed.
function flipTheCard(){
    this.classList.toggle('flipped');
    // This is the players first choice  
    if (!flippedCard){
        flippedCard = true;
        firstCard = this;   //'this' is the card that triggered the event 
    } else {
        // This is the players second choice
        flippedCard = false;
        secondCard = this;
        // If they match, we will remove the event listener that would flip them back to default position.
        
        checkIFMatching();
    }
}
function checkIFMatching(){
    if (firstCard.dataset.make === secondCard.dataset.make){
        disableCards();
    } else {
        resetCards();
    }
}

//The below function keeps the cards flipped 'face up' as they matched in the previous step.
function disableCards(){
    firstCard.removeEventListener('click',flipTheCard);
    secondCard.removeEventListener('click',flipTheCard);
}

//Should the cards not match, they will return to the default position.
function resetCards(){
    setTimeout(() => {
        firstCard.classList.toggle('flipped');
        secondCard.classList.toggle('flipped');
        }, 1000);
}
// An event listener has been added to each card (click) and it executes a function when performed (flipTheCard)
cards.forEach(card => card.addEventListener('click', flipTheCard));

