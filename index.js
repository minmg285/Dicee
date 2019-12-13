//jshint esversion : 6 
console.log("Connected");

let randomNumber1 = Math.floor(Math.random() * 6) +1;
let randomNumber2 = Math.floor(Math.random() * 6) +1;

const player1 = document.querySelector(".img1");
const player2 = document.querySelector(".img2");
const h1 = document.querySelector("h1");

player1.setAttribute('src','./images/dice'+randomNumber1+'.png');
player2.setAttribute('src','./images/dice'+randomNumber2+'.png');

if(randomNumber1>randomNumber2){
    h1.innerHTML = "🚩Player1 Wins!";
}else if (randomNumber1===randomNumber2){
    h1.innerHTML ="Tie!";
}else{
    h1.innerHTML = "Player2 Wins!🚩";
}

const button = document.querySelector(".btn-play");
button.addEventListener("click", e=> {
    location.reload();
});