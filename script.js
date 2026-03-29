//DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");
const highScoreSpan = document.getElementById("high-score");

const quizQuestions = [
  {
    question: "When was the first World War (WWI) fought?",
    answers: [
      { text: "1956-1960", isCorrect: false },
      { text: "1945-1949", isCorrect: false },
      { text: "1914-1918", isCorrect: true },
      { text: "1953-1957", isCorrect: false },
    ],
  },
  {
    question:
      "What is the most beginner-friendly programming language out of the following?",
    answers: [
      { text: "C++", isCorrect: false },
      { text: "JavaScript", isCorrect: false },
      { text: "Rust", isCorrect: false },
      { text: "Python", isCorrect: true },
    ],
  },
  {
    question:
      "Which one of the following programming languages is considered a styling language for front-end web development?",
    answers: [
      { text: "CSS", isCorrect: true },
      { text: "Python", isCorrect: false },
      { text: "HTML", isCorrect: false },
      { text: "Java", isCorrect: false },
    ],
  },
  {
    question: "Which symbol is used for a bitwise AND operation?",
    answers: [
      { text: "&&", isCorrect: false },
      { text: "&", isCorrect: true },
      { text: "|", isCorrect: false },
      { text: "^", isCorrect: false },
    ],
  },
  {
    question: "Which operator represents logical AND?",
    answers: [
      { text: "&&", isCorrect: true },
      { text: "&", isCorrect: false },
      { text: "|", isCorrect: false },
      { text: "^", isCorrect: false },
    ],
  },
  {
    question: "What is a variable in programming?",
    answers: [
      { text: "A mathematical equation", isCorrect: false },
      { text: "A container for storing data values", isCorrect: true },
      { text: "A type of computer hardware", isCorrect: false },
      { text: "An error in the code", isCorrect: false },
    ],
  },
  {
    question:
      "What is the process of finding and fixing errors in code called?",
    answers: [
      { text: "Compiling", isCorrect: false },
      { text: "Executing", isCorrect: false },
      { text: "Debugging", isCorrect: true },
      { text: "Deploying", isCorrect: false },
    ],
  },
  {
    question: "In programming, what is a boolean?",
    answers: [
      { text: "A data type that can only be true or false", isCorrect: true },
      { text: "A list of text strings", isCorrect: false },
      { text: "A whole number", isCorrect: false },
      { text: "A function that returns a decimal", isCorrect: false },
    ],
  },
  {
    question: "What is an algorithm?",
    answers: [
      { text: "A physical component of a computer", isCorrect: false },
      { text: "A specific programming language", isCorrect: false },
      {
        text: "A set of step-by-step instructions to solve a problem",
        isCorrect: true,
      },
      { text: "A type of web browser", isCorrect: false },
    ],
  },
  {
    question: "What is a 'bug' in software development?",
    answers: [
      { text: "A virus that attacks the computer", isCorrect: false },
      { text: "A new feature requested by a user", isCorrect: false },
      {
        text: "An error, flaw, or fault in a computer program",
        isCorrect: true,
      },
      { text: "A tool used to write code", isCorrect: false },
    ],
  },
  {
    question: "Which of the following is considered a 'frontend' technology?",
    answers: [
      { text: "JavaScript", isCorrect: true },
      { text: "SQL", isCorrect: false },
      { text: "Python", isCorrect: false },
      { text: "Java", isCorrect: false },
    ],
  },
  {
    question: "Which HTTP status code typically means 'Not Found'?",
    answers: [
      { text: "301", isCorrect: false },
      { text: "404", isCorrect: true },
      { text: "200", isCorrect: false },
      { text: "104", isCorrect: false },
    ],
  },
  {
    question: "What does UI stand for?",
    answers: [
      { text: "Universal Integration", isCorrect: false },
      { text: "Unified Intelligence", isCorrect: false },
      { text: "User Identification", isCorrect: false },
      { text: "User Interface", isCorrect: true },
    ],
  },
  {
    question:
      "Which of the following is the most widely used version control system?",
    answers: [
      { text: "SVN", isCorrect: false },
      { text: "Mercurial", isCorrect: false },
      { text: "Git", isCorrect: true },
      { text: "Docker", isCorrect: false },
    ],
  },
  {
    question: "What does API stand for?",
    answers: [
      { text: "Application Programming Interface", isCorrect: true },
      { text: "Advanced Program Integration", isCorrect: false },
      { text: "Application Process Indicator", isCorrect: false },
      { text: "Automated Protocol Interface", isCorrect: false },
    ],
  },
  {
    question: "What does 'deployment' mean in software development?",
    answers: [
      { text: "Planning the architecture of the software", isCorrect: false },
      {
        text: "Pushing the finished code to a live environment for users to access",
        isCorrect: true,
      },
      { text: "Writing the initial lines of code", isCorrect: false },
      { text: "Deleting old files from a database", isCorrect: false },
    ],
  },
  {
    question: "What is a server?",
    answers: [
      { text: "The screen where the user views a website", isCorrect: false },
      {
        text: "A computer or system that provides resources, data, or services to other computers",
        isCorrect: true,
      },
      {
        text: "The cable that connects a computer to the internet",
        isCorrect: false,
      },
      { text: "A type of keyboard used by developers", isCorrect: false },
    ],
  },
  {
    question: "What does 'open-source' mean in software?",
    answers: [
      { text: "The software is free but cannot be changed", isCorrect: false },
      {
        text: "The source code is publicly available and can be modified",
        isCorrect: true,
      },
      {
        text: "The software can only be used on open networks",
        isCorrect: false,
      },
      { text: "The code is locked and hidden from users", isCorrect: false },
    ],
  },
  {
    question: "What is the primary purpose of a database?",
    answers: [
      { text: "To design the visual layout of a website", isCorrect: false },
      { text: "To store, organize, and manage data", isCorrect: true },
      { text: "To compile code into an executable file", isCorrect: false },
      { text: "To protect a computer from malware", isCorrect: false },
    ],
  },
  {
    question:
      "In a software repository, what is the primary purpose of a 'README.md' file?",
    answers: [
      { text: "To execute the main application code", isCorrect: false },
      {
        text: "To define the visual styling and layout of a web page",
        isCorrect: false,
      },
      {
        text: "To provide essential information, instructions, & documentation about the project",
        isCorrect: true,
      },
      {
        text: "To securely store encrypted user passwords and database keys",
        isCorrect: false,
      },
    ],
  },
];

//QUIZ STATE VARS
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;
let highScore = 0;

let shuffledQuestions = [];

function shuffledArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

//event listeners
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
  //reset variables
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = score;

  shuffledQuestions = [...quizQuestions];
  shuffledArray(shuffledQuestions);
  shuffledQuestions = shuffledQuestions.slice(0, 10);

  startScreen.classList.remove("active");
  quizScreen.classList.add("active");

  const savedHighScore = localStorage.getItem("high-score");
  if (savedHighScore !== null) {
    highScore = parseInt(savedHighScore);
  }

  highScoreSpan.textContent = highScore;

  showQuestion();
}

function showQuestion() {
  //reset state
  answersDisabled = false;

  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const answers = [...currentQuestion.answers];
  shuffledArray(answers);
  currentQuestionSpan.textContent = currentQuestionIndex + 1;

  const progressPercent =
    (currentQuestionIndex / shuffledQuestions.length) * 100;
  progressBar.style.width = progressPercent + "%";

  questionText.textContent = currentQuestion.question;

  answersContainer.innerHTML = "";

  answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");

    button.dataset.isCorrect = answer.isCorrect;

    button.addEventListener("click", selectAnswer);

    answersContainer.appendChild(button);
  });
}

function selectAnswer(event) {
  if (answersDisabled) return;

  answersDisabled = true;

  const selectedButton = event.target;
  const correct = selectedButton.dataset.isCorrect === "true";

  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.isCorrect === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    }
  });

  if (correct) {
    score++;
    scoreSpan.textContent = score;
  }

  setTimeout(() => {
    currentQuestionIndex++;

    if (currentQuestionIndex < shuffledQuestions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }, 1000);
}

function showResult() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  finalScoreSpan.textContent = score;

  if (score > highScore) {
    highScore = score;
    localStorage.setItem("high-score", highScore);
  }
  highScoreSpan.textContent = highScore;

  const percentage = (score / shuffledQuestions.length) * 100;
  if (percentage === 100) {
    resultMessage.textContent = "Perfect! You're a genuis!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great Job! You know your stuff!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Good Effort! Keep Learning!";
  } else if (percentage >= 40) {
    resultMessage.textContent = "Not Bad! Try again to Improve!";
  } else {
    resultMessage.textContent = "Keep Studying! You'll get better!";
  }
}

function restartQuiz() {
  resultScreen.classList.remove("active");
  startQuiz();
}
