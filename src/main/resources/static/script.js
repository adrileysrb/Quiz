

const startButton = document.getElementById('start-btn')
const restartButton = document.getElementById('restart-button')
const againButton = document.getElementById('again-button')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const textVictory = document.getElementById('text-victory')
const textLose = document.getElementById('text-lose')

let shuffledQuestions, currentQuestionIndex, info, button, questions, points = 0, baseurl = "http://localhost:8080";
 

window.onload = function() {
	loadInterfaceData();
}

startButton.addEventListener('click', loadDoc)
restartButton.addEventListener('click', startGame)
againButton.addEventListener('click', startGame)

function nextQuestion() {
	currentQuestionIndex++
	setNextQuestion()
}

function startGame() {
	points = 0
	offLoseOverlay()
	offVictoryOverlay()												
	startButton.classList.add('hide')
	shuffledQuestions = questions.sort(() => Math.random() - .5) 
	currentQuestionIndex = 0
	questionContainerElement.classList.remove('hide')
	setNextQuestion()												
}


function setNextQuestion() {
	resetState()													
	showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
	questionElement.innerText = question.question
	question.answers.forEach(answer => {
		const button = document.createElement('button')
		button.innerText = answer.text
		button.classList.add('btn')
		if (answer.correct) {
			button.dataset.correct = answer.correct
		}
		button.addEventListener('click', selectAnswer)
		button.addEventListener('click', () => { if (button.dataset.correct) points++; else onLoseOverlay() })
		answerButtonsElement.appendChild(button)
	})
}

function resetState() {
	while (answerButtonsElement.firstChild) {
		answerButtonsElement.removeChild(answerButtonsElement.firstChild)
	}
}

function selectAnswer() {
	
	if (shuffledQuestions.length > currentQuestionIndex + 1) {
		nextQuestion()
	} else {
		startButton.innerText = info[0].restart
		if (points == 4){
			onVictoryOverlay()
			points = 0
		}	
	}
}

function loadDoc() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		var array= new Array(5)
		if (this.status == 200 && this.readyState == 4) {
			const res = JSON.parse(xhttp.responseText)
			
			questions =[
				{
					question: res[0].question,
					answers: [
						{ text: res[0].answer_01, correct: res[0].answer_01_value },
						{ text: res[0].answer_02, correct: res[0].answer_02_value },
						{ text: res[0].answer_03, correct: res[0].answer_03_value },
						{ text: res[0].answer_04, correct: res[0].answer_04_value }
					]
				},
				{
					question: res[1].question,
					answers: [
						{ text: res[1].answer_01, correct: res[1].answer_01_value },
						{ text: res[1].answer_02, correct: res[1].answer_02_value },
						{ text: res[1].answer_03, correct: res[1].answer_03_value },
						{ text: res[1].answer_04, correct: res[1].answer_04_value }
					]
				},
				{
					question: res[2].question,
					answers: [
						{ text: res[2].answer_01, correct: res[2].answer_01_value },
						{ text: res[2].answer_02, correct: res[2].answer_02_value },
						{ text: res[2].answer_03, correct: res[2].answer_03_value },
						{ text: res[2].answer_04, correct: res[2].answer_04_value }
					]
				},
				{
					question: res[3].question,
					answers: [
						{ text: res[3].answer_01, correct: res[3].answer_01_value },
						{ text: res[3].answer_02, correct: res[3].answer_02_value },
						{ text: res[3].answer_03, correct: res[3].answer_03_value },
						{ text: res[3].answer_04, correct: res[3].answer_04_value }
					]
				},
				{
					question: res[4].question,
					answers: [
						{ text: res[4].answer_01, correct: res[4].answer_01_value },
						{ text: res[4].answer_02, correct: res[4].answer_02_value },
						{ text: res[4].answer_03, correct: res[4].answer_03_value },
						{ text: res[4].answer_04, correct: res[4].answer_04_value }
					]
				},
			]
		startGame()
		}
	};
	xhttp.open("GET", "ajax_info.txt", true);
	xhttp.send();

}

function loadInterfaceData() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", baseurl + "/info", true);
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
			info = JSON.parse(xmlhttp.responseText)
			startButton.innerText = info[0].start
			restartButton.innerText = info[0].restart
			againButton.innerText = info[0].again
			textVictory.innerHTML = info[0].victory
			textLose.innerHTML = info[0].lose
			
		}
	};
	xmlhttp.send();
}

function onLoseOverlay() {
	document.getElementById("overlay-lose").style.display = "block";
	document.getElementById("overlay-victory").style.display = "none";
}
function offLoseOverlay() {
	document.getElementById("overlay-lose").style.display = "none";
}

function onVictoryOverlay() {
	document.getElementById("overlay-victory").style.display = "block";
}
function offVictoryOverlay() {
	document.getElementById("overlay-victory").style.display = "none";
}