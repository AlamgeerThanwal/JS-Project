var num =  Math.floor(Math.random() * 6) +1;
console.log(num);
var diceImage = "dice"+num+".png"; //  dice1.png
console.log(diceImage);
var diceSourceImage = "assets/"+diceImage; //  assets/dice6.png
console.log(diceSourceImage);
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",diceSourceImage);


var num2 =  Math.floor(Math.random() * 6) +1;
console.log(num2);
var diceImage2 = "dice"+num2+".png"; //  dice1.png
console.log(diceImage2);
var diceSourceImage2 = "assets/"+diceImage2; //  assets/dice6.png
console.log(diceSourceImage2);
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",diceSourceImage2);

if(num > num2)
{
    document.querySelector("h1").innerHTML ="Player 1 Win!!!";
}
else if(num2 > num)
{
    document.querySelector("h1").innerHTML ="Player 2 Win!!!";
}
else
{
    document.querySelector("h1").innerHTML ="Drow!!!";
}