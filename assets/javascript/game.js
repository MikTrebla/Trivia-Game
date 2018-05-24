var questionList = [
    {
        questions : 'What color is the sky?',
        answers : {
            a : 'Brown',
            b : 'Lemonchiffon',
            c : 'Blue',
        },
        correctAnswer : 'c'
    },
    {
        questions : 'Which of the following is Clark\'s favorite?',
        answers : {
            a : 'Potato',
            b : 'Watermelon',
            c : 'Elton\'s jokes'
        },
        correctAnswer : 'a'
    }, 
    {
        questions : 'What is the room number of our classroom?',
        answers : {
            a: '304',
            b: '306',
            c: '305'
        },
        correctAnswer : 'b'
    }
];
console.log(questionList[0].correctAnswer)

var intervalId;
var correct = 0; //keep track of questions answered correctly;
var incorrect = 0;
var currentQuestion = 0; //track index of array Q's & A's
var timer = 10;
// var ranOutOfTime = false;


$(document).ready(function() {

    $('.start-button').on('click', function () {
        displayQuestion(); // displays first question when clicked
        displayAnswerOptions(); //displays first set of answer options
        $('.start-button').remove();//removes start button after being clicked
        displayTimer();
        run(); //runs timer as soon as start is clicked

    });


    $('.button').on('click', function () {
        var buttonClicked = $(this).val(); 
            if (currentQuestion >= questionList.length) {
                $('#countdown-timer').html();
                $('#quiz').empty();
                $('#question').html('You answered ' + correct + ' questions out of ' + questionList.length + ' correctly.');  //display # of correctly answered questions
                //add restart button
            } else if (buttonClicked === questionList[currentQuestion].correctAnswer) {
                // stop();
                correct++;
                currentQuestion++
                nextQuestionAnswer();
            } else if (buttonClicked !== questionList[currentQuestion].correctAnswer){
                // stop();
                //-------->displayCorrectAnswer();<-- need to fix this
                $('#countdown-timer').empty();
                incorrect++;
                currentQuestion++;
                nextQuestionAnswer();
                //add displayCorrectAnswer() with timer to stop and go to nextQuestionAnswer();
            }
    console.log($(this).val())
    console.log('you got this many correct:' + correct)
    });

    function displayQuestion() {
        $('#question').html('<h1>' +questionList[currentQuestion].questions + '</h1>');
        // console.log(questionList[currentQuestion].questions)
    };

    function displayCongratulations() {
        //need timer for congratulation message
    };

    function displayCorrectAnswer() {
        //need timer for incorrectanswer message
        $('#question').html('The correct answer was ' + questionList[currentQuestion].correctAnswer.toUpperCase() + '.')
        run2();
    };

    function displayAnswerOptions() {
        $('#option1').html('<h3>A. ' +questionList[currentQuestion].answers.a + '</h3>');
        $('#option2').html('<h3>B. ' +questionList[currentQuestion].answers.b + '</h3>');
        $('#option3').html('<h3>C. ' +questionList[currentQuestion].answers.c + '</h3>');
    };

    function nextQuestionAnswer() {

        if (currentQuestion >= questionList.length){
            $('#question').html('You answered ' + correct + ' questions out of ' + questionList.length + ' correctly.');
            $('#quiz').empty();
            $('#countdown-timer').empty();
            stop(); 
            //add restart button 
        } else if (currentQuestion <= questionList.length) {
            timer = 10;
            $('#countdown-timer').html(timer);
            $('#question').html('<h1>' +questionList[currentQuestion].questions + '</h1>' );
            $('#option1').html('<h3>A.' + questionList[currentQuestion].answers.a + '</h3>');
            $('#option2').html('<h3>B.' + questionList[currentQuestion].answers.b + '</h3>');
            $('#option3').html('<h3>C.' + questionList[currentQuestion].answers.c + '</h3>');
        }
    };        
    
    
    function displayTimer() {
        $('#countdown-timer').html(10);
    }    

    function run() { 
        displayTimer();
        timer = 10;
        intervalId = setInterval(countdown, 1000);
    };

    function countdown() {
        timer--;
        console.log(timer)
        $('#countdown-timer').html(timer);
        if (timer <= 0) { 
            stop();
            currentQuestion++;
            nextQuestionAnswer(); 
            run();
        }      
    };


    function stop() { //stop function for when timer === 0
        clearInterval(intervalId)
    };

    function clearTimer() {
        clearTimeout(intervalId)
    }
    function restart() {

    };
});






    