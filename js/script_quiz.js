const quizQuestions = [
    { q: "Which of the Big Five is the fastest?", a: "Leopard" },
    { q: "What is a group of lions called?", a: "Pride" },
    { q: "Where is the Great Migration primarily seen in Kenya?", a: "Maasai Mara" }
];

let currentQuestion = 0;

function checkAnswer(userAnswer) {
    const correct = quizQuestions[currentQuestion].a;
    if (userAnswer === correct) {
        alert("Correct! 🎉");
    } else {
        alert(`Incorrect. The correct answer is: ${correct}`);
    }
    
    // Move to the next question
    currentQuestion = (currentQuestion + 1) % quizQuestions.length;
    loadQuizContent();
}

function loadQuizContent() {
    const area = document.getElementById('dynamic-area');
    const question = quizQuestions[currentQuestion];
    
    area.innerHTML = `<h3>Kenya Wildlife Quiz (Quiz Mode)</h3>
                      <p><strong>Question ${currentQuestion + 1}/${quizQuestions.length}:</strong> ${question.q}</p>
                      <input type="text" id="quiz-answer" placeholder="Your Answer">
                      <button onclick="checkAnswer(document.getElementById('quiz-answer').value)">Submit Answer</button>
                      <p><small>Type your answer in the box and click submit.</small></p>`;
}

// Call the function immediately upon script execution
loadQuizContent();