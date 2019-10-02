$(document).ready(function () {

    //defining variables
    var timeLeft = 60;
    var countDown;
    var correct = 0;
    var wrong = 0;

    //questions object
    var questions = [{
            question: "Where in the human body would you find the medulla oblongata?",
            answers: [
                "The Brain",
                "The Heart",
                "The Soul",
                "The Big Toe",
            ],
            correct: "The Brain"
        },
        {
            question: "Les Fauves was a name given to a group of artists that included Matisse. What is its literal meaning?",
            answers: [
                "Smelly Shoes",
                "Strongest Men",
                "Wild Beasts",
                "Oldest Secrets",
            ],
            correct: "Wild Beasts"
        },
        {
            question: "How many legs does a lobster have?",
            answers: [
                "Eight",
                "Six",
                "Twelve",
                "Ten",
            ],
            correct: "Ten"
        },
        {
            question: "What is the family name of the ruling dynasty of Monaco?",
            answers: [
                "Sunni",
                "Trivani",
                "Grimaldi",
                "Vivaldi",
            ],
            correct: "Grimaldi"
        }
    ]

    var userChoice = [];

    // adds questions to headers with respective tags
    $("#question1").prepend(questions[0].question);
    $("#question2").prepend(questions[1].question);
    $("#question3").prepend(questions[2].question);
    $("#question4").prepend(questions[3].question);

    $("#question1-answers input").each(function (i) {

        $(this).next().html(questions[0].answers[i]);

    });

    $("#question2-answers input").each(function (i) {

        $(this).next().html(questions[1].answers[i]);

    });

    $("#question3-answers input").each(function (i) {

        $(this).next().html(questions[2].answers[i]);

    });

    $("#question4-answers input").each(function (i) {

        $(this).next().html(questions[3].answers[i]);

    });

    $("#questioncontainer").hide()
    $("#results").hide();
    $("#reset").hide();
    $("#submit").hide();

    $("#start").on("click", timer);
    $("#submit").on("click", finish);
    $("#reset").on("click", reset);

    function timer() {
        $("#start").hide();
        $("#submit").show();
        $("#questioncontainer").show();

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
        $("#timeRemaining").hide();
        $("#submit").hide();
        $("#questioncontainer").hide();
        $("#results").show();
        $("#reset").show();
        
        userChoice.push($('input[name="inlineRadioOptions1"]:checked').val());
        userChoice.push($('input[name="inlineRadioOptions2"]:checked').val());
        userChoice.push($('input[name="inlineRadioOptions3"]:checked').val());
        userChoice.push($('input[name="inlineRadioOptions4"]:checked').val());    
        
        for (i = 0; i < questions.length; i++) {
            if (userChoice[i] === questions[i].correct) {
                correct++;
            } else {
                wrong++;
            }
        }          
         
        $("#correct").html("<h2>Correct Guesses: " + correct + "</h2>");
        $("#wrong").html("<h2>Wrong Guesses: " + wrong + "</h2>");
        $("#score").html("<h2>Total Score: " + correct + " out of " + (wrong + correct) + "</h2>");
    }

    function finish() {

        $("#timeRemaining").hide();
        $("#submit").hide();
        $("#questioncontainer").hide();
        $("#results").show();
        $("#reset").show();
        
        userChoice.push($('input[name="inlineRadioOptions1"]:checked').val());
        userChoice.push($('input[name="inlineRadioOptions2"]:checked').val());
        userChoice.push($('input[name="inlineRadioOptions3"]:checked').val());
        userChoice.push($('input[name="inlineRadioOptions4"]:checked').val());

        for (i = 0; i < questions.length; i++) {
            if (userChoice[i] === questions[i].correct) {
                correct++;
            } else {
                wrong++;
            }
        }

        $("#correct").html("<h2>Correct Guesses: " + correct + "</h2>");
        $("#wrong").html("<h2>Wrong Guesses: " + wrong + "</h2>");
        $("#score").html("<h2>Total Score: " + correct + " out of " + (wrong + correct) + "</h2>");


    }

    function reset() {
        correct = 0;
        wrong = 0;
        userChoice = [];

        $("#timeRemaining").show();
        $("#start").hide();
        $("#results").hide();
        $("#reset").hide();
        $("#submit").show()
        $("#questioncontainer").show();
        
        
        timeLeft = 60;
        clearInterval(countDown);
        countDown = setInterval(decrement, 1000);
        $("#timeRemaining").html("<h2>Time Remaining: " + timeLeft + "</h2>");
        $("input").prop('checked', false);

    }








})