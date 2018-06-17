

var squares = document.querySelectorAll(".square");
var colors = [];
var colorPicked ;
var num = 6;
var easyButtonHover = true; //hover dont work on flase
var hardButtonHover = true;
var displayMessage = document.getElementById("displayMessage")
var gameOver = false; // false means , NO, Not game over!
var h1 =document.getElementById("h1")
var resetButton = document.getElementById("reset");
var easyButton = document.getElementById("easy");
var hardButton = document.getElementById("hard");
var rgb =document.getElementById("rgb");
// Play again button
resetButton.addEventListener("mouseover", function(){
  resetButton.style.backgroundColor = "steelblue";
    resetButton.style.color = "white";
})
// Play again button
resetButton.addEventListener("mouseleave", function(){
  resetButton.style.backgroundColor = "white";
  resetButton.style.color = "steelblue";
})
//when the play again or new color button is clicked
resetButton.addEventListener("click", reset)

// Easy button functionality
easyButton.addEventListener("mouseover", function(){
if (easyButtonHover) {
 easyButton.style.backgroundColor = "steelblue";
  easyButton.style.color = "white";}
})
easyButton.addEventListener("mouseleave", function(){
  if (easyButtonHover) {
  easyButton.style.backgroundColor = "White";
  easyButton.style.color = "steelblue"; }
})

easyButton.addEventListener("click", function(){
  easyButtonHover = false;
  hardButtonHover = true;
  easyButton.style.backgroundColor = "steelblue";
  easyButton.style.color = "white";
  hardButton.style.backgroundColor = "White";
  hardButton.style.color = "steelblue";
  removeTheBottomSquares();
  num = 3;
  reset();
})
// Hard button functionality
hardButton.addEventListener("mouseover", function(){
if(hardButtonHover){
  hardButton.style.backgroundColor = "steelblue";
  hardButton.style.color = "white";
}
})
hardButton.addEventListener("mouseleave", function(){
  if(hardButtonHover){
  hardButton.style.backgroundColor = "White";
  hardButton.style.color = "steelblue";}
})
hardButton.addEventListener("click", function(){
  hardButtonHover = false ;
  easyButtonHover = true;
  easyButton.style.backgroundColor = "white";
  easyButton.style.color = "steelblue";
  hardButton.style.backgroundColor = "steelblue";
  hardButton.style.color = "white"
  num = 6;
  showTheBottomSquares();
  reset();
})
function reset()
{
  h1.style.backgroundColor = "steelblue";
  resetButton.textContent = "New Color";
  gameOver = false;
  displayMessage.textContent = "";
  generateColorForSquares(num);
}

function removeTheBottomSquares()
{
  for (var i = 3; i < squares.length; i++)
  {
    squares[i].style.visibility= "hidden";
  }
}
function showTheBottomSquares()
{
  for (var i = 3; i < squares.length; i++)
  {
    squares[i].style.visibility= "visible";
  }
}

function generateColorForSquares(num)
{ // first clear the array
  colors.splice(0,colors.length);
  for (var i = 0; i < num; i++)
  {
    colors.push(randomColor());
  }
  colorPicked =colors[Math.floor(Math.random()*num)] ;
  rgb.textContent = ""+ colorPicked ;
  colorTheSquares();
}

function colorTheSquares()
{
  for(i = 0; i < squares.length; i++)
  {
    //Provide color
    squares[i].style.backgroundColor= colors[i];
    squares[i].addEventListener("click",function()
    {
      // compare color on click
      // why is "this" working and not square[i] anything else
      if(this.style.backgroundColor === colorPicked)
        {
          displayMessage.textContent = "Correct!" ;
          gameOver = true;
          changeEverything();
          resetButton.textContent = "Play Again!"
        }
      else
      {
      if (!gameOver)
        {
        this.style.backgroundColor = "#232323" ;
        displayMessage.textContent = "Try Again!" ;
        resetButton.textContent = "New Color";
        }
      }
    })
  }
}

function changeEverything()
{
  for (var i = 0; i < squares.length; i++)
  {
    squares[i].style.backgroundColor = colorPicked ;
  }
  h1.style.backgroundColor = colorPicked;
}

function randomColor()
{
  var r = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  return "rgb(" + r + ", "+ g + ", "+ b + ")";
}

generateColorForSquares(6);
