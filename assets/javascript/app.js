$(document).ready(function(){

//defining variables
var timeLeft = 60;
var countDown;
var correct = 0;
var wrong = 0;
var finalScore = 0;

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
    ("#results").show();
}



































})