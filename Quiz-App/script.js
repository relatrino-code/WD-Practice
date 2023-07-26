const quizData = [
    {
        question: 'For some integer m, every odd integer is of the form:',
        a: 'm',
        b: 'm + 1',
        c: '2m',
        d: '2m + 1',
        correct: 'd'
    }, {
        question: 'The values of the remainder r, when a positive integer a is divided by 3 are:',
        a: '0, 1, 2, 3',
        b: '0, 1',
        c: '0, 1, 2',
        d: '2, 3, 4',
        correct: 'c'
    }, {
        question: 'The least number that is divisible by all the numbers from 1 to 10 (both inclusive) is:',
        a: '10',
        b: '100',
        c: '2060',
        d: '2520',
        correct: ''
    }, {
        question: 'The product of a non-zero number and an irrational number is:',
        a: 'always irrational',
        b: 'always rational',
        c: 'rational or irrational',
        d: 'one',
        correct: 'a'
    }, {
        question: 'The H.C.F of 441, 567 and 693 is:',
        a: '1',
        b: '441',
        c: '126',
        d: '63',
        correct: 'd'
    }
];

const questionEl = document.getElementById('question');
const a_text = document.getElementById('option_a');
const b_text = document.getElementById('option_b');
const c_text = document.getElementById('option_c');
const d_text = document.getElementById('option_d');
const submitBtn = document.getElementById('submit');


currentQuestionNo = 0;

loadQuiz();

function loadQuiz() {
    questionEl.innerText = quizData[currentQuestionNo].question;
    a_text.innerText = quizData[currentQuestionNo].a;
    b_text.innerText = quizData[currentQuestionNo].b;
    c_text.innerText = quizData[currentQuestionNo].c;
    d_text.innerText = quizData[currentQuestionNo].d;
    
}

submitBtn.addEventListener('click', () => {
    currentQuestionNo++;
    currentQuestionNo <= 4 ? loadQuiz() : exit();
})

function exit() {
    if(confirm('The quiz is over!!! Wanna Restart?')){
        currentQuestionNo = 0;
        loadQuiz();
    }
    else {
        document.body.innerHTML = '<h1>BYE!</h1>';
    }
}