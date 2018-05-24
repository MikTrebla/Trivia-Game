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
            a:'Bamboo',
            b: 'Dandelion',
            c:'Grass'
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
console.log(questionList[0].correctAnswer)

var intervalId;
var correct = 0; //keep track of questions answered correctly;
var incorrect = 0;
var currentQuestion = 0; //track index of array Q's & A's
var timer = 10;
// var ranOutOfTime = false;
var answeredCorrectly = false;


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
                //add restart button
            } else if (buttonClicked === questionList[currentQuestion].correctAnswer) {
                correct++
                currentQuestion++
                nextQuestionAnswer();
                alert ('You got it right!');
            } else if (buttonClicked !== questionList[currentQuestion].correctAnswer){
                incorrect++ 
                alert('Correct answer was ' + questionList[currentQuestion].correctAnswer)
                currentQuestion++
                nextQuestionAnswer();
                //add displayCorrectAnswer() with timer to stop and go to nextQuestionAnswer();
            }
    });

    function displayQuestion() {
        $('#question').html('<h1>' +questionList[currentQuestion].questions + '</h1>');
        // console.log(questionList[currentQuestion].questions)
    };

    function displayCongratulations() {
        timer = 5;
        timer --;
        correct++;
        currentQuestion++
        $('#question').html('<h1> Congratulations, you got it right! </h1>')
        if (timer = 0){
            stop();
            nextQuestionAnswer();
        }
    };

    function displayCorrectAnswer() {
        //need timer for incorrectanswer message
        timer = 5;
        timer --;
        $('#question').html('The correct answer was ' + questionList[currentQuestion].correctAnswer.toUpperCase() + '.')
        if (timer = 0){
            stop();
            nextQuestionAnswer();
        }
    };

    function displayAnswerOptions() {
        $('#option1').html('<h3>A. ' +questionList[currentQuestion].answers.a + '</h3>');
        $('#option2').html('<h3>B. ' +questionList[currentQuestion].answers.b + '</h3>');
        $('#option3').html('<h3>C. ' +questionList[currentQuestion].answers.c + '</h3>');
    };

    function nextQuestionAnswer() {

        if (currentQuestion >= questionList.length){
            $('#question').html('You answered ' + correct + ' questions correctly  and '  + incorrect + ' incorrectly.');
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
        stop();
        run();
    };        
    
    function displayTimer() {
        $('#countdown-timer').html(10);
    }    

    function run() { 
        if (currentQuestion >= questionList.length) {
            $('#countdown-timer').empty();
        } else {
            displayTimer();
            timer = 10;
            intervalId = setInterval(countdown, 1000);
        }
    };    

    function countdown() {
        timer--;
        console.log(timer)
        $('#countdown-timer').html(timer);
        if (timer <= 0) { 
            incorrect++;
            stop();
            currentQuestion++;
            nextQuestionAnswer(); 
        }      
    };

    function stop() { //stop function for when timer === 0
        clearInterval(intervalId)
    };

    function clearTimer() {
        clearTimeout(intervalId)
    }
    function restart() {
        currentQuestion = 0;
        correct = 0;
        incorrect = 0;
        timer = 10;
        displayQuestion();
        displayAnswerOptions();
    };
});






    