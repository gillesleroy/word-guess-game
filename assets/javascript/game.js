var words = [
    "Hey Jude", 
    "A day in the life", 
    "Eleanor Rigby", 
    "Don't let me down", 
    "Here comes the sun", 
    "I am the Walrus", 
    "I want to hold your hand", 
    "Twist and Shout", 
    "We can work it out",
    "Black Bird",                   
   ];
var images = [
   "assets/images/beatles-2.jpeg",
   "assets/images/beatles-3.jpeg",
   "assets/images/beatles-4.jpeg",
   "assets/images/beatles-2.jpeg",
   "assets/images/beatles-3.jpeg",
   "assets/images/beatles-4.jpeg",
   "assets/images/beatles-2.jpeg",
   "assets/images/beatles-3.jpeg",
   "assets/images/beatles-4.jpeg",
   "assets/images/beatles-2.jpeg",
   "assets/images/beatles-3.jpeg",                                                    
   ];

var letters = [];

var user = "";
var totalScore = 0;
var numQ = 0;
var remain = 20;

var numQ = Math.floor(Math.random() * words.length);
//   var i=1;

var userScore = 0;
var numQuestions = 0;

// var questionText = document.getElementById("question-");
// var userText = document.getElementById("user-");  
// var answerText =  document.getElementById("answer-"); 

var wtg = $("#word-to-guess");
var imgWin = $("#imgWin");
var isEntered = false;
var success = 0;
//  var combinedLetters = "";
var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "assets/captainplanet24.mp3");

// $("#solved-img").attr("src",images[0]);    
$("#remaining").text(" "+remain); 

// questionText.textContent = + " " + numQ+ ": " +words[numQ]; 


// questionText.textContent = + " " + numQ+ ": " +words[numQ]; 
function initialize(){

    // audioElement.pause();
    wtg.html("");
    numQ = Math.floor(Math.random() * words.length);
    for (i=0; i<words[numQ].length; i++)
    {
    var newLetter = $("<span>");
    newLetter.addClass("newL");
    newLetter.attr("id","letter"+i);
    newLetter.text("_");  
    wtg.append(newLetter);   
    }
}

initialize();

document.onkeyup = function(event)
{
user = event.key.toLowerCase();
isEntered = false;
for (i=0; i<letters.length; i++)
{
if (user===letters[i].toLowerCase())
{
//  alert("Letter "+user+" Already entered");
isEntered = true;
}
}
if ( isEntered === false)
{
letters.push(user);
for (j=0; j<words[numQ].length; j++)
{
   if (user === words[numQ].charAt(j).toLowerCase())
   {
       // alert("word "+i+" = "+ words[numQ].charAt(i));
       $("#letter"+j).text(words[numQ].charAt(j));
       userScore++;
   }
//   alert("word "+j+" = "+ words[numQ]);
}
var combinedLetters = "";
for (j=0; j<letters.length; j++)
   {
   combinedLetters = combinedLetters + letters[j]+" ";
   }
$("#lettersEntered").text(combinedLetters);
remain--;
$("#remaining").text(" "+remain);              

if ( userScore === words[numQ].length)
 {
   $("#result").text("You Win!"); 
   // $("#solved-img").attr("src",images[numQ]);
   totalScore++;
   $("#wins").text(totalScore); 
   audioElement.play();
   var newImg = $("<img>");
   newImg.addClass("image");
   newImg.attr("src",images[numQ]);
//    newImg.attr("src",images[0]);
   
   imgWin.append(newImg); 
//    setTimeout(initialize(), 5000);
//    initialize();   
 }
else if (remain === 0)
    {
    $("#result").text("You Lost.");   
    // setTimeout(initialize(), 5000);   
    }
}
} 
