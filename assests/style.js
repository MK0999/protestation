var questions = [ 
    {
    
    question:  "which of the following is not javascript data types?",
    answer: [
        {text:"Null type", correct:false},
    {text:"Undefined type" ,correct:false},
    {text: "Number type" ,correct:false},
    {text:"All of the mentioned" ,correct:true},
],
},
{
question: "Which of the following can be used to call a javaScript code Snippet",
answer: [
    {text:"Function/Method", correct:true},
    {text:"Preprocessor", correct:false},
    {text:"Triggering event", correct:false},
    {text:"RMI", correct:false},
],
},
{
    
    question : "Javascript is an _______ language?",
    answer :
    [
        {text:"Object-orientsd", correct:true},
        {text:"Object-based", correct:false},
        {text:"Procedural", correct:false},
        {text:"None of above", correct:false}, 
],
    } ,       
 {

    question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
    answer: [
        {text: "Throws an error", correct:false},
        {text:"Ignores the statement", correct:true},
        {text:"Gives a warning", correct:false},
        {text:"None of above", correct:false},
    ],
    },
 {
    question : "  What keyword is used to check whether a given property is valid or not?",
    answer:[
        {text:"in", correct:true},
        {text:"is in", correct:false},
        {text:"exists", correct:false},
        {text:"lies", correct:false},
    ],
    },
]  
var QuestionEl = document.getElementById("question");
var Answerbuttons= document.getElementById("answer-buttons");
var QuizEl= document.getElementById("quiz");
var StartBtn = document.getElementById("Start");
var firstEl = document.getElementById("First-page");
var timeEl = document.getElementById("time")
var RestartEl = document.getElementById("Restart");
var feedbackEl = document.getElementById("feedback")
var feedbackEl1 = document.getElementById("feedback1")
var feedbackEl2 = document.getElementById("feedback2")
  
    // QuestionEl.style.display = "none";
    // Answerbuttons.style.display = "none";
var currentQuestionIndex = 0;
var score = 0;
var timerInterval;
var time = 60
console.log("started")
RestartEl.classList.add("hide")
StartBtn.addEventListener("click", FirstPage);
function FirstPage(){
  console.log("started")
  
  QuizEl.classList.remove("hide");
  firstEl.classList.add("hide");
   showQuestion();

   timerInterval = setInterval(function(){
    time--;
    timeEl.textContent = time;
    if (time == 0) {
      clearInterval(timerInterval);
      ShowScore();
    
    
    }
   }, 1000)
console.log("time")
}

// Start Quiz

  function startQuiz(){
 currentQuestionIndex = 0;
  score = 0;
 time = 60;
 
 showQuestion();
  }

  // To enter question
  function showQuestion(){
    resetState();
    RestartEl.classList.add("hide")
    var currentQuestion = questions[currentQuestionIndex];
    var questionNo = currentQuestionIndex + 1;
    QuestionEl.innerHTML = questionNo + '.'+ currentQuestion.question;
    
    currentQuestion.answer.forEach(answer => {
    var button = document.createElement("button");
    button.innerHTML= answer.text;
    button.classList.add("btn");
    Answerbuttons.appendChild(button);
    if(answer.correct){
      button.dataset.correct= answer.correct;
    }
    button.addEventListener("click" , selectAnswer);
    });
  }

  // to remove already exixting answers
function resetState(){
  RestartEl.classList.remove("hide")
  while(Answerbuttons.firstChild){
    Answerbuttons.removeChild(Answerbuttons.firstChild);
  }
}

// Select answer from options
    function selectAnswer(e) {
      var selectedbtn = e.target;
      var isCorrect = selectedbtn.dataset.correct === "true";
    console.log("check")
      if (isCorrect) {
        selectedbtn.classList.add("correct");
        score++;

      } else {
        selectedbtn.classList.add("incorrect");
        time -= 2;
      }
      
    }
Answerbuttons.addEventListener("click", selectAnswer);

    
function ShowScore(){
resetState();
 var QuestRes= QuestionEl.innerHTML= "Enter Initials to get Result";
 var AnsBtn= Answerbuttons.innerHTML = `You scored ${score} out of ${questions.length}!`;
}


// next button for next question
function handleNextButton(){
  currentQuestionIndex++ ;
  if(currentQuestionIndex < questions.length){
  showQuestion();
}
else{
   ShowScore()
}
}

//to get next question after clicking nxt
Answerbuttons.addEventListener("click" , ()=>{
      if(currentQuestionIndex < questions.length){
      handleNextButton()
    }
    else
    {
      startQuiz();
    }
    });


  RestartEl.addEventListener("click", startQuiz);