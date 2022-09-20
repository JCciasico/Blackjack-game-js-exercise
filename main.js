let cards = [];
let sumCard = 0;
let blackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById('message-el');
let sumEl = document.querySelector('#sum-el');
let cardsEl = document.querySelector('#card-el');
const resbutton = document.querySelector('#ncard-button');
const startBtn = document.querySelector('#start-button');


function getRandomCard(){
    let randomNum = Math.floor(Math.random()*13)+1;

    if(randomNum > 10){
        return 10;
    }else if (randomNum === 1){
        return 11;
    }else{
        return randomNum;
    }
}

function startGame(){
    isAlive = true;

    if(isAlive === true){
        resbutton.disabled = false;

        let firstCard = getRandomCard();
        let secondCard = getRandomCard();
        cards = [firstCard,secondCard]
        sumCard = firstCard + secondCard;
        renderGame();
    }
}

function renderGame(){
    sumEl.textContent = "Sum: " +sumCard;
    cardsEl.textContent = "Cards: ";

    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i]+" "; 
    }

    if(sumCard <= 20){
        message = "Do you want to draw a new card?";
    }else if(sumCard === 21){
        message = "Nice you've got blackjack!";
        blackJack = true;
    }else{
        message = "You are out of the game.";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard(){

    if(isAlive === true && blackJack === false){
        let card = getRandomCard();
        sumCard += card;
        cards.push(card);
        renderGame();
        resbutton.disabled = false;
    }else{
        resbutton.disabled = true;
        startBtn.disabled = true;
    }
}

function reset(){
    isAlive = false;
    cards = [];
    sumCard = "";
    sumEl.textContent = "Sum: " +sumCard;
    cardsEl.textContent = "Cards: ";
    message = "Want to play a round?";
    messageEl.textContent = message;

    if(isAlive === false){
        resbutton.disabled = true;
        startBtn.disabled = false;
    }
}


