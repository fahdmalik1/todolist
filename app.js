var taskInput = document.getElementById("new-task");
var inputButton = document.getElementById("add-task");
var divContainer = document.getElementById("list-container");

inputButton.addEventListner("click", function(){
	addNewTask();
})

var inputArray = [];

function addNewTask() {
	
	var date = new Date();
	
	var task = taskInput.value;
	
	var todo = {
		id : inputArray.length + 1,
		task : task,
		date : date.toUTCString(),
		done : false
	};
	
	inputArray.push(todo.task);
	inputArray.forEach(function(item){
		list-container.appendChild("<p>" + item + "</p>");
	})
	taskInput.value = "";
	
	
}