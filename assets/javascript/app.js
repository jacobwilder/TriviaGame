$(document).ready(function(){

//defining variables
var timeLeft = 60;
var countDown;
var correct = 0;
var wrong = 0;

//questions object
var questions = [
    {question: "Where in the human body would you find the medulla oblongata?",
     answers: {
         a: "The Brain",
         b: "The Heart",
         c: "The Soul",
         d: "The Big Toe",
     },
    correct: "a"},
    {question: "Les Fauves was a name given to a group of artists that included Matisse. What is its literal meaning?",
     answers: {
         a: "The Smelly Shoes",
         b: "The Strongest Men",
         c: "The Wild Beasts",
         d: "The Oldest Secrets",
     },
    correct: "b"},
    {question: "How many legs does a lobster have?",
     answers: {
         a: "Eight",
         b: "Six",
         c: "Twelve",
         d: "Ten",
     },
    correct: "d"},
    {question: "What is the family name of the ruling dynasty of Monaco?",
     answers: {
         a: "Sunni",
         b: "Trivani",
         c: "Grimaldi",
         d: "Vivaldi",
     },
    correct: "c"}   
]
//PLACEHOLDER REMEMBER TO FIX
$("#question1").hide();
$("#question2").hide();
$("#question3").hide();
$("#question4").hide();

$("#results").hide();
$("#reset").hide();

$("#start").on("click", timer);
$("#submit").on("click", finish);

//CREATE RESET FUNCTION LINKING TO RETRY BUTTON
$("#reset").on("click", reset);

function timer() {
    $("#start").hide();
    

    $("#question1").show();
    $("#question2").show();
    $("#question3").show();
    $("#question4").show();
    
    //$("#questions").show();
    
    $("#results").hide();
    $("#timeRemaining").show();
    clearInterval(countDown);    
    countDown = setInterval(decrement, 1000);
    $("#timeRemaining").html("<h2>Time Remaining: " + timeLeft + "</h2>")
}

function decrement() {
    timeLeft--;
    
    $("#timeRemaining").html("<h2>Time Remaining: " + timeLeft + "</h2>");

    if (timeLeft === 0) {
        alert("You ran out of time!");

        stop();
    }
}

function stop() {
    clearInterval(countDown);
}

function finish() {
    $("#timeRemaining").hide();
    $("#submit").hide();
    
    $("#question1").hide();
    $("#question2").hide();
    $("#question3").hide();
    $("#question4").hide();
    
    
    //$("#questions").hide();
    $("#results").show();
    $("#reset").show();
    $("#correct").html("<h2>Correct Guesses: " + correct + "</h2>");
    $("#wrong").html("<h2>Wrong Guesses: " + wrong + "</h2>");
    $("#score").html("<h2>Total Score: " + correct + " out of " + wrong + "</h2>");

}

function reset() {
    $("#timeRemaining").show();
    $("#start").hide();
    $("#results").hide();
    $("#reset").hide();
    $("#submit").show()
    $("#question1").show();
    $("#question2").show();
    $("#question3").show();
    $("#question4").show();
    timeLeft = 60;
    clearInterval(countDown);
    countDown = setInterval(decrement, 1000);
    $("#timeRemaining").html("<h2>Time Remaining: " + timeLeft + "</h2>");


}








})