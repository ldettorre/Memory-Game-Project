
// Below is a list of all card elements stored in a const
var cards = document.querySelectorAll('.card');

function flipTheCard(){
    console.log('I will be flipped!');
    console.log(this);
}
// An event listener has been added to each card (click) and it executes a function when performed (flipTheCard)
cards.forEach(card => card.addEventListener('click', flipTheCard));

