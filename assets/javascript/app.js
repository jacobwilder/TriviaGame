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

$("#questions").hide();
$("#results").hide();

$("#start").on("click", timer);
$("#submit").on("click", finish);

function timer() {
    clearInterval(countDown);
    $("#start").hide();
    $("#questions").show();
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

function stop () {
    clearInterval(countDown);
}

function finish() {
    $("#results").show();
    $("#correct").html("<h2>Correct Guesses: " + correct + "</h2>");
    $("#wrong").html("<h2>Wrong Guesses: " + wrong + "</h2>");
    $("#score").html("<h2>Total Score: " + correct + " out of " + wrong + "</h2>");

}



































})