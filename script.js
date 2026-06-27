let currentQuestion = 0;
let selectedAnswers = [];
let flaggedQuestions = [];

function loadQuestion() {
    document.getElementById("progress").innerHTML =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    document.getElementById("question").innerHTML =
        questions[currentQuestion].question;

    const buttons = document.getElementsByClassName("answer");

    buttons[0].innerHTML = "A. " + questions[currentQuestion].answers[0];
    buttons[1].innerHTML = "B. " + questions[currentQuestion].answers[1];
    buttons[2].innerHTML = "C. " + questions[currentQuestion].answers[2];
    buttons[3].innerHTML = "D. " + questions[currentQuestion].answers[3];
}

function selectAnswer(letter) {
    selectedAnswers[currentQuestion] = letter;

    const buttons = document.getElementsByClassName("answer");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.background = "#2d2d2d";
        buttons[i].style.color = "white";
    }

    const index = ["A","B","C","D"].indexOf(letter);

    buttons[index].style.background = "#00d084";
    buttons[index].style.color = "black";
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        finishExam();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function flagQuestion() {
    if (!flaggedQuestions.includes(currentQuestion)) {
        flaggedQuestions.push(currentQuestion);
        alert("Question flagged.");
    }
}

function finishExam() {

    let score = 0;

    for (let i = 0; i < questions.length; i++) {
        if (selectedAnswers[i] === questions[i].correct) {
            score++;
        }
    }

    alert(
        "Exam Complete!\n\n" +
        "Score: " + score + " / " + questions.length +
        "\n\nPercentage: " +
        Math.round(score / questions.length * 100) + "%"
    );
}

loadQuestion();