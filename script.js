const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Rome", "Madrid", "Berlin"],
      answer: "Paris"
    },
    {
      question: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      answer: "JavaScript"
    },
    {
      question: "What does CSS stand for?",
      options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
      answer: "Cascading Style Sheets"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const answersEl = document.getElementById("answers");
  const feedbackEl = document.getElementById("feedback");
  const nextBtn = document.getElementById("next-btn");
  const scoreEl = document.getElementById("score");
  
  function showQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    answersEl.innerHTML = "";
    feedbackEl.textContent = "";
    nextBtn.style.display = "none";
  
    q.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.addEventListener("click", () => selectAnswer(option, q.answer));
      answersEl.appendChild(btn);
    });
  }
  
  function selectAnswer(selected, correct) {
    if (selected === correct) {
      feedbackEl.textContent = "✅ Correct!";
      feedbackEl.style.color = "green";
      score++;
    } else {
      feedbackEl.textContent = `❌ Wrong! The correct answer was "${correct}".`;
      feedbackEl.style.color = "red";
    }
    scoreEl.textContent = `Score: ${score} / ${questions.length}`;
    Array.from(answersEl.children).forEach(btn => btn.disabled = true);
    nextBtn.style.display = "inline-block";
  }
  
  nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      questionEl.textContent = "Quiz Completed!";
      answersEl.innerHTML = "";
      feedbackEl.textContent = "";
      nextBtn.textContent = "Restart";
      nextBtn.addEventListener("click", restartQuiz);
    }
  });
  
  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    nextBtn.textContent = "Next";
    scoreEl.textContent = "";
    showQuestion();
  }
  
  showQuestion();
  