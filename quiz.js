// Questions Array
const questions = [
    {
        question: "Who is the 47th president of USA?",
        options: ["Donald Trump", "Joe Biden", "Abraham lincoln", "Obama"],
        correctAnswer: 0
    },
    {
        question: "Who is the greatest batsman of this generation?",
        options: ["Virat Kohli", "Babar Azam", "quinton de kock", "Jos Butler"],
        correctAnswer: 0
    },
    {
        question: "Which is the most corrupted department of Pakistan?",
        options: ["Supreme Court", "Pakistan Army", "FBR", "All of them"],
        correctAnswer: 3
    }
];

// Initializing variables
let currentQuestionIndex = 0;
let score = 0;

// DOM Elements
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const resultContainer = document.getElementById("result");
const homepageContainer = document.getElementById("homepage");
const scoreText = document.getElementById("score");
const messageText = document.getElementById("message");
const restartBtn = document.getElementById("restartBtn");

// Start Quiz
startBtn.addEventListener("click", startQuiz);

// Next Question
nextBtn.addEventListener("click", nextQuestion);

// Restart Quiz
restartBtn.addEventListener("click", restartQuiz);

// Start the quiz
function startQuiz() {
    homepageContainer.style.display = "none";
    resultContainer.style.display = "none";
    document.getElementById("quiz").style.display = "block";
    loadQuestion();
}

// Load the current question
function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question").textContent = question.question;
    optionsContainer.innerHTML = "";

    question.options.forEach((option, index) => {
        const optionDiv = document.createElement("div");
        optionDiv.classList.add("option");
        optionDiv.textContent = option;
        optionDiv.addEventListener("click", () => checkAnswer(index));
        optionsContainer.appendChild(optionDiv);
    });

    nextBtn.style.display = "none";  // Hide next button until the user selects an option
}

// Check Answer and update score
function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    if (selectedIndex === question.correctAnswer) {
        score++;
    }

    // Disable options after selection
    const options = document.querySelectorAll(".option");
    options.forEach(option => option.style.pointerEvents = "none");

    nextBtn.style.display = "block";  // Show next button after answering
}

// Move to the next question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

// Show results after the quiz ends
function showResults() {
    document.getElementById("quiz").style.display = "none";
    resultContainer.style.display = "block";
    scoreText.textContent = `You scored ${score} out of ${questions.length}`;

    if (score === questions.length) {
        messageText.textContent = "Excellent job! You got every question right!";
    } else if (score >= questions.length / 2) {
        messageText.textContent = "Great job! Keep practicing.";
    } else {
        messageText.textContent = "Better luck next time! Keep learning.";
    }
}

// Restart the quiz
function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    homepageContainer.style.display = "block";
    resultContainer.style.display = "none";
}
