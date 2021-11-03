//All Quiz Data
const quizData = [{
                question: "What religion is Hare Krishna?",
                a: "The Hare Krishna movement is a branch of Hinduism, formally known as Gaudiya Vaishnavism.",
                b: "The Hare Krishna movement is not branch of Hinduism.",
                c: "Hare Krishna Is a agent of USA.",
                d: "The Hare Krishna Movement is a diffrent religion.",
                correct: "a",
        },
        {
                question: "Can Hare Krishnas marry?",
                a: "No.",
                b: "Yes.",
                c: "Thay can live in.",
                d: "none of the above.",
                correct: "b",
        },
        {
                question: "Which religion is Iskcon?",
                a: "Hinduism.",
                b: "Iskcon have separate religion.",
                c: "Iskcon haven't any religion.",
                d: "Christianity",
                correct: "a",
        },
        {
                question: "Is ISKCON a business?",
                a: "Yes it is.",
                b: "ISKCON says it is not a commercial outfit. It is a not-for-profit organisation.",
                c: "ISKCON is part of business.",
                d: "none of the above",
                correct: "b",
        },
];


//Variabels Selector
const qna = document.getElementById("question");
const a = document.getElementById("a_text");
const b = document.getElementById("b_text");
const c = document.getElementById("c_text");
const d = document.getElementById("d_text");
const btnn = document.getElementById("btn");
const quiz = document.getElementById("quiz");
const len = quizData.length;

let ansEl = document.querySelectorAll('.answer');



//Updateable Values
let quizVal = 0;
let totalScore = 0;


//Function Called
loadQuiz();


//Load Quiz Function
function loadQuiz() {
        //Data Selector
        const currentQ = quizData[quizVal];

        //Change value of html
        qna.innerText = currentQ.question;
        a.innerText = currentQ.a;
        b.innerText = currentQ.b;
        c.innerText = currentQ.c;
        d.innerText = currentQ.d;

        //Clear Function Called
        desSelected();
};


//Selection Function
function isSelected() {
        let answer = undefined;

        //Foreach into all over answer and pass selected item
        ansEl.forEach((val) => {
                if (val.checked) {
                        answer = val.id;
                }
        });

        return answer;
};


//Clear Selection After Submit
function desSelected() {
        ansEl.forEach((val) => {
                val.checked = false;
        });
};


//Add a eventListner into Button
btnn.addEventListener("click", () => {
        const answer = isSelected();
        if (answer) {
                if (answer === quizData[quizVal].correct) {
                        totalScore++;
                }
                isSelected()
                quizVal++;
                if (quizVal < len) {
                        loadQuiz();
                } else {
                        quiz.innerHTML = `<h3>Your correct answer is ${totalScore}/${len}</h3> <br> <button onClick="location.reload()">Reload</button>`
                        quiz.style.height = "auto";
                }
        }
});