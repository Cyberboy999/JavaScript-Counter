var CurrentNumberWrapper = document.getElementById('currentNumber')
var CurrentNumber = 0
var Tarefa = document.getElementById('inputtarefa')

//Alteracao de cores

function RedText()  {
    document.getElementById("currentNumber").style.color = "#f07f7f"
}

function GreenText()    {
    document.getElementById("currentNumber").style.color = "#008000";
}

//Estruturas para mudanca de cores 

function TrocarCor() {
    if (CurrentNumber > 0) {
        GreenText();
    } else if (CurrentNumber < 0) {
        RedText();
    } else {
        document.getElementById("currentNumber").style.color = "#000000";
    }
}

//Aumentanto e diminuindo numeros

function increment()    {
    CurrentNumber = CurrentNumber + 1;
    CurrentNumberWrapper.innerHTML  = CurrentNumber;
    TrocarCor()
}

function increment10()    {
    CurrentNumber = CurrentNumber + 10;
    CurrentNumberWrapper.innerHTML  = CurrentNumber;
    TrocarCor()
}

function increment100()    {
    CurrentNumber = CurrentNumber + 100;
    CurrentNumberWrapper.innerHTML  = CurrentNumber;
    TrocarCor()
}

function decrement()    {
    CurrentNumber = CurrentNumber - 1;
    CurrentNumberWrapper.innerHTML  = CurrentNumber;
    TrocarCor()
}

function decrement10()    {
    CurrentNumber = CurrentNumber - 10;
    CurrentNumberWrapper.innerHTML  = CurrentNumber;
    TrocarCor()
}

function decrement100()    {
    CurrentNumber = CurrentNumber - 100;
    CurrentNumberWrapper.innerHTML  = CurrentNumber;
    TrocarCor()
}

// To-do list

const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');

form.onsubmit = function (e) {
	e.preventDefault();
	const inputField = document.getElementById('task-input');
	addTask(inputField.value);
	form.reset();
};

function addTask(description) {
	const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(description);

	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', description);
	newTask.setAttribute('id', description);

	taskLabel.setAttribute('for', description);
	taskLabel.appendChild(taskDescriptionNode);

	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

	taskList.appendChild(taskContainer);
}












