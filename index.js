var randomNumber1 = Math.floor(Math.random() * 6) + 1;
/*randomNumber1 = Math.floor(randomNumber1) + 1;*/

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
/*randomNumber2 = Math.floor(randomNumber2) + 1;*/

var randomDiceImage = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage);

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2);


/*if (randomNumber1 === 1){
  document.querySelector(".img1").setAttribute("src", "E:\\Web Dewvleopment\\Dicee Game\\images\\dice1.png");
}
else if (randomNumber1 === 2){
  document.querySelector(".img1").setAttribute("src", "E:\\Web Dewvleopment\\Dicee Game\\images\\dice2.png");
}
else if (randomNumber1 === 3){
  document.querySelector(".img1").setAttribute("src", "E:\\Web Dewvleopment\\Dicee Game\\images\\dice3.png");
}
else if (randomNumber1 === 4){
  document.querySelector(".img1").setAttribute("src", "E:\\Web Dewvleopment\\Dicee Game\\images\\dice4.png");
}
else if (randomNumber1 === 5){
  document.querySelector(".img1").setAttribute("src", "E:\\Web Dewvleopment\\Dicee Game\\images\\dice5.png");
}

if (randomNumber2 === 1){
  document.querySelector(".img2").setAttribute("src", "E:\\Web Dewvleopment\\Dicee Game\\images\\dice1.png");
}
else if (randomNumber2 === 2){
  document.querySelector(".img2").setAttribute("src", "E:\\Web Dewvleopment\\Dicee Game\\images\\dice2.png");
}
else if (randomNumber2 === 3){
  document.querySelector(".img2").setAttribute("src", "E:\\Web Dewvleopment\\Dicee Game\\images\\dice3.png");
}
else if (randomNumber2 === 4){
  document.querySelector(".img2").setAttribute("src", "E:\\Web Dewvleopment\\Dicee Game\\images\\dice4.png");
}
else if (randomNumber2 === 5){
  document.querySelector(".img2").setAttribute("src", "E:\\Web Dewvleopment\\Dicee Game\\images\\dice5.png");
}*/


if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}else {
  document.querySelector("h1").innerHTML = "Draw!";
}
