const quizDB = [{
    question: "Q1: What is the full form of HTML?",
    a: "Hello To My Land",
    b: "Hey Text Markup Language",
    c: "HyperText Makeup Language",
    d: "Hypertext Markup Language",
    ans: "ans4"
},
{
    question: "Q2: What is the full form of CSS?",
    a: "Cascading Style Sheets",
    b: "Cascading Style Sheep",
    c: "Cartoon Style Sheets",
    d: "Cascading Super Sheets",
    ans: "ans1"
},
{

    question: "Q3: What is the full form of HTTP?",
    a: "HyperText Transform Product",
    b: "Hypertext Test Protocol",
    c: "Hey Transfer protocol",
    d: "HyperText transform Protocol",
    ans: "ans4"
},
{

    question: "Q4: What is the full form of JS?",
    a: "JavaSuper",
    b: "JavaScript",
    c: "JustScript",
    d: "JordenShoes",
    ans: "ans2"
}
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answer");

let showScore= document.querySelector("#showScore");

let questionCount = 0;
let score=0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnswerElem) => {
         if(curAnswerElem.checked){
             answer=curAnswerElem.id;
         }
      
    });
    return answer;
};

const deselectAll=()=>{
    answers.forEach((curAnswerElem)=> curAnswerElem.checked=false);
}


submit.addEventListener("click", () => {
    const checedkAnswer = getCheckAnswer();
    console.log(checedkAnswer);

    if(checedkAnswer===quizDB[questionCount].ans){
        score++;
    };
    questionCount++;
    deselectAll();
    if(questionCount<quizDB.length){
        loadQuestion();
    }
    else{
            showScore.innerHTML = `
            <h3>You Scored ${score}/${quizDB.length}✌</h3>
            <button class="btn" onclick="location.reload()">Play Again</button>
            `;
            showScore.classList.remove("scoreArea");
    }
});










