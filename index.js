var randomnumber1 = Math.floor((Math.random()*6) + 1);
var randomDice = "dice" + randomnumber1 + ".png";
var randomimgsrc =  "images/" + randomDice;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomimgsrc);

var randomnumber2 = Math.floor(Math.random()*6) + 1;
var randomimgsrc2 = "images/dice" + randomnumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src" , randomimgsrc2);

if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if( randomnumber2 > randomnumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}