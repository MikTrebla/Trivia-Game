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

var intervalId;
var correct = 0; //keep track of questions answered correctly;
var incorrect = 0;
var currentQuestion = 0; //track index of array Q's & A's
var timer = 10;

    // $('#question').text(questionList[0].questions)
    // console.log(questionList[0].questions);

    //Need code to go to next question after submit button is clicked
    
    // var key = event.key;
// var isQuizDone = false;


$(document).ready(function() {


    $('.button').on('click', function () {
        currentQuestion++;
        var buttonClicked = $(this).val(); 
        if (currentQuestion >= questionList.length) {
            $('#question').html('You answered ' + correct + ' questions out of ' + questionList.length + ' correctly.');  //display # of correctly answered questions out of max possible correct
            $('#quiz').empty();
            $('#countdown-timer').empty();
            stop(); //stop timer
        }else if (buttonClicked === questionList.answers) {
            correct++;
            nextQuestionAnswer();
        } else {
            incorrect++;
            nextQuestionAnswer();
        }
        console.log($(this))
        });

    function displayQuestion() {
        $('#question').html('<h1>' +questionList[currentQuestion].questions + '</h1>');
        // console.log(questionList[currentQuestion].questions)
    };

    function displayAnswerOptions() {
        $('#option1').html('<h3>' +questionList[currentQuestion].answers.a + '</h3>');
        $('#option2').html('<h3>' +questionList[currentQuestion].answers.b + '</h3>');
        $('#option3').html('<h3>' +questionList[currentQuestion].answers.c + '</h3>');
        // console.log(questionList[currentQuestion].answers)
    };

    function nextQuestionAnswer() {
        
        timer = 10;
        if (currentQuestion <= questionList.length) {
            $('#countdown-timer').html(timer);
            $('#question').html('<h1>' +questionList[currentQuestion].questions + '</h1>' );
            $('#option1').html('<h3>' + questionList[currentQuestion].answers.a + '</h3>');
            $('#option2').html('<h3>' + questionList[currentQuestion].answers.b + '</h3>');
            $('#option3').html('<h3>' + questionList[currentQuestion].answers.c + '</h3>'); 
        } else {
            allQuestionsAnswered();
        }
        
    };
    
    // function allQuestionsAnswered() {
    //         $('#question').html('You answered ' + correct + ' questions out of ' + questionList.length + ' correctly.');  //display # of correctly answered questions out of max possible correct
    //         $('#quiz').empty();
    //         $('#countdown-timer').empty();
    //         stop(); //stop timer
        
    // };

   

    function run() { // this will countdown my number every 1s
        intervalId = setInterval(countdown, 1000);
    }

    function countdown() { // this is my timer decrement function
        timer--;
        $('#countdown-timer').html(timer);

        if (timer === 0) { 
        stop();
        nextQuestionAnswer(); 
        run();
        }      
    };
    run(); //runs timer as soon as page loads up

    function stop() { //stop function for when timer === 0
        clearInterval(intervalId)
    };

displayQuestion(); // displays first question when page loads
displayAnswerOptions(); //displays first set of answer options
});






    // user submits answers and run a function to check if answers correct. if answers match correct ++ then display score. If not, display current score.
    // $('#submit').click(function (){
    // score++;

    // })

    // var number = 10;//this is my initial timer value

    // function run() { // this will countdown my number every 1s
    //     intervalId = setInterval(countdown, 1000);
    // }

    // function countdown() { // this is my decrement function
    //     number--;
    //     $('#countdown-timer').html(number);

    // if (number === 0) { //runs when timer === 0 ; clears forms and stops user from answering any more questions
    //     stop();
    //     $('#quiz').html('You ran out of time!');
    //     $('#question').empty();
    //     }      
    // }
    // run(); //runs timer as soon as page loads up

    // function stop() { //stop function for when timer === 0
    //     clearInterval(intervalId)
    // }



    


    //I need a function to disable other answer choices after one option is clicked;


   
   

// }); 

