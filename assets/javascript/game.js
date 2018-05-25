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
    },
    {
        questions : 'What part of the cinnamon tree becomes the spice?',
        answers : {
            a: 'The Leaves',
            b: 'The Bark',
            c: 'The Roots'
        },
        correctAnswer : 'b'
    },
    {
        questions : 'What does a coleopterist study?',
        answers : {
            a: 'Birds',
            b: 'Subterranean Termites',
            c: 'Beetles'
        },
        correctAnswer : 'c'
    },
    {
        questions : 'The world’s fastest growing plant is a species of what?',
        answers : {
            a: 'Bamboo',
            b: 'Algae',
            c: 'Weed'
        },
        correctAnswer : 'a'
    },
    {
        questions : 'What is the common term for a list of things a person would like to do before they die?',
        answers : {
            a: 'To-Do-List',
            b: 'Bucket List',
            c: 'Death List'
        },
        correctAnswer : 'b'
    },
    {
        questions : 'Stratus, Cirrus and Cumulus are types of what?',
        answers : {
            a: 'Clouds',
            b: 'Planes',
            c: 'Planetary Structures'
        },
        correctAnswer : 'a'
    },
    {
        questions : 'Jamón ibérico is a type of cured ham that is traditionally produced by which two neighboring countries?',
        answers : {
            a:'Spain & Portugal',
            b:'Venezuela',
            c:'Brazil'
        },
        correctAnswer : 'a'
    },
    {
        questions : 'Dendrophobia is the fear of what?',
        answers : {
            a: 'Dandruff',
            b: 'Trees',
            c: 'Dendrites'
        },
        correctAnswer : 'b' 
    }
];

var intervalId;
var correct = 0; //keep track of questions answered correctly;
var incorrect = 0;
var unanswered = 0;
var currentQuestion = 0; //track index of array Q's & A's
var timer = 10;
// var ranOutOfTime = false;
// var answeredCorrectly = false;

$(document).ready(function() {
    $('#start-button').on('click', function () {
        $('#start-button').remove();
        displayQuestion(); // displays first question when clicked
        displayAnswerOptions(); //displays first set of answer options
        //removes start button after being clicked
        displayTimer();
        run(); //runs timer as soon as start is clicked
    });
    
    $('.button').on('click', function () {
        var buttonClicked = $(this).val(); 
        
        if (buttonClicked === questionList[currentQuestion].correctAnswer) {
            stop();
            $('#countdown-timer').empty();
            displayCongratulations();
        } else if (buttonClicked !== questionList[currentQuestion].correctAnswer){
            stop();
            $('#countdown-timer').empty();            
            displayCorrectAnswer();
        }
    });

    function displayQuestion() {
        $('#question').html('<h1>' +questionList[currentQuestion].questions + '</h1>');
    };

    function displayCongratulations() { // run on correct answer selection
        $('#question').html('<h1> Noice, you got it right! </h1>')
        correct++;
        setTimeout(interim, 5000);
    };

    function displayCorrectAnswer() { //run on incorrect answer selection
        $('#question').html('NOPE.The correct answer was ' + questionList[currentQuestion].correctAnswer.toUpperCase() + '.');
        incorrect++;
        setTimeout(interim, 5000);
        
    };

    function ranOutOfTime() { //run on time out
        $('#question').html('You ran out of time! The correct answer was ' + questionList[currentQuestion].correctAnswer.toUpperCase() + '.');
        unanswered++;
        setTimeout(interim, 5000);
    };

    function displayAnswerOptions() {
        $('#option1').html('<h3>A. ' +questionList[currentQuestion].answers.a + '</h3>');
        $('#option2').html('<h3>B. ' +questionList[currentQuestion].answers.b + '</h3>');
        $('#option3').html('<h3>C. ' +questionList[currentQuestion].answers.c + '</h3>');
    };

    function nextQuestionAnswer() {

        if (currentQuestion >= questionList.length){
            $('#question').html('You answered ' + correct + ' questions correctly  and '  + incorrect + ' incorrectly. You left ' + unanswered + ' questions unanswered.');
            $('#quiz').empty();
            $('#countdown-timer').empty();
            stop(); 
            //add restart button 
        } else if (currentQuestion <= questionList.length && timer > 0) {
            timer = 10;
            stop();
            run();  
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
        intervalId = setInterval(tenSecondTimer, 1000);
        function tenSecondTimer() {
            if (timer === 0) {
                clearInterval(intervalId);
                stop();
                $('#countdown-timer').empty();
                ranOutOfTime();
            } else if (timer > 0) {
                timer--;
                $('#countdown-timer').html(timer);  
            }
        }
    };  

    function stop() { //stop function for when timer === 0
        clearInterval(intervalId)
    };

    function interim() {
        if (currentQuestion < questionList.length) {
            currentQuestion++;
            timer = 5;
            nextQuestionAnswer();  
        } 
    };
});






    