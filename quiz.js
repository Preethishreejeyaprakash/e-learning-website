const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Tool Markup Language",
    ],
    correctAnswer: "Hyper Text Markup Language",
  },
  {
    question: "Which of the following is used to style web pages?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    correctAnswer: "CSS",
  },
  {
    question: "Which language is used for web development interactivity?",
    options: ["CSS", "JavaScript", "HTML", "SQL"],
    correctAnswer: "JavaScript",
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const nextButton = document.getElementById("next-btn");
const resultDisplay = document.getElementById("result");

function loadQuestion() {
  const questionData = questions[currentQuestionIndex];
  questionContainer.innerHTML = `
        <div class="question">${questionData.question}</div>
        <div class="options">
            ${questionData.options
              .map((option) => `<div class="option">${option}</div>`)
              .join("")}
        </div>
    `;

  const optionElements = document.querySelectorAll(".option");
  optionElements.forEach((option) => {
    option.addEventListener("click", selectAnswer);
  });

  nextButton.style.display = "none";
  resultDisplay.textContent = "";
}

function selectAnswer(event) {
  const selectedOption = event.target;
  const correctAnswer = questions[currentQuestionIndex].correctAnswer;

  if (selectedOption.textContent === correctAnswer) {
    selectedOption.classList.add("correct");
    score++;
  } else {
    selectedOption.classList.add("incorrect");
    // Highlight the correct answer as well
    document.querySelectorAll(".option").forEach((option) => {
      if (option.textContent === correctAnswer) {
        option.classList.add("correct");
      }
    });
  }

  // Disable further clicks on options
  document.querySelectorAll(".option").forEach((option) => {
    option.removeEventListener("click", selectAnswer);
  });

  nextButton.style.display = "block";
}

function showResult() {
  resultDisplay.textContent = `You scored ${score} out of ${questions.length}.`;
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    questionContainer.innerHTML = "";
    nextButton.style.display = "none";
    showResult();
  }
}

nextButton.addEventListener("click", nextQuestion);

// Load the first question
loadQuestion();
