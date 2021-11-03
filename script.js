const quizData = [{
                question: "What is the most used programming language in 2019?",
                a: "Java",
                b: "C",
                c: "Python",
                d: "JavaScript",
                correct: "d",
        },
        {
                question: "Who is the President of US?",
                a: "Florin Pop",
                b: "Donald Trump",
                c: "Ivan Saldano",
                d: "Mihai Andrei",
                correct: "b",
        },
        {
                question: "What does HTML stand for?",
                a: "Hypertext Markup Language",
                b: "Cascading Style Sheet",
                c: "Jason Object Notation",
                d: "Helicopters Terminals Motorboats Lamborginis",
                correct: "a",
        },
        {
                question: "What year was JavaScript launched?",
                a: "1996",
                b: "1995",
                c: "1994",
                d: "none of the above",
                correct: "b",
        },
];

const qna = document.getElementById("question");
const a = document.getElementById("a_text");
const b = document.getElementById("b_text");
const c = document.getElementById("c_text");
const d = document.getElementById("d_text");
const bttn = document.getElementById("btn");
const quiz = document.getElementById("quiz");
let answerEl = document.querySelectorAll(".answer");


let currentVal = 0;
let scoreVal = 0;
loadQuiz();

function loadQuiz() {
        const currentQ = quizData[currentVal];
        qna.innerText = currentQ.question;
        a.innerText = currentQ.a;
        b.innerText = currentQ.b;
        c.innerText = currentQ.c;
        d.innerText = currentQ.d;
        desSelected();
}


function getSelected() {
        let answer = undefined;
        answerEl.forEach((val) => {
                if (val.checked) {
                        answer = val.id;
                }
        });
        return answer;
}


function desSelected() {
        answerEl.forEach((val) => {
                val.checked = false;
        })
}

bttn.addEventListener("click", () => {
        const answer = getSelected();

        if (answer) {
                if (answer === quizData[currentVal].correct) {
                        scoreVal++;
                }
                getSelected();
                currentVal++;
                if (currentVal < quizData.length) {
                        loadQuiz();
                } else {
                        quiz.innerHTML = `<h3>Your Correct Answer Is: ${currentVal}/${quizData.length}</h3> </br> <button onClick="location.reload()">Reload</button>`
                        quiz.style.height = "auto";
                }
        }
});