function checkAnswers() {
  const answers = document.querySelectorAll('input[type="radio"]:checked');
  let score = 0;

  answers.forEach((answer) => {
    if (answer.value === "correct") {
      score++;
    }
  });

  const result = document.getElementById("result");
  result.textContent = `You scored ${score} out of ${answers.length}`;
}
