var taskInput = document.getElementById("new-task");
var addButton = document.getElementById("new-task-button");
var listArea = document.getElementById("list-container");

addButton.addEventListener("click", function(){
	addNewTask();
	console.log("eventadded");
})

var todoArray = [];

function addNewTask() {
	
	var date = new Date();
	
	var task = taskInput.value;
	console.log(task);
	
	var todo = {
		id : todoArray.length + 1,
		task : task,
		date : date.toUTCString(),
		done : false
	};
	
	var todoElement = formatTodo(todo);
	
	todoArray.push(todoElement);
	
	updateTodosView();
	
	taskInput.value = "";
	
	
}

function formatTodo(item) {
	var listItem = document.createElement('li');
	var itemContent = document.createElement('span');
	var taskContent = document.createTextNode(item.task);
	
	itemContent.appendChild(taskContent);
	listItem.appendChild(itemContent);
	listItem.setAttribute('id', item.id);
	
	return listItem;
}

function updateTodosView() {
	var list= document.createElement("ul");
	
	todoArray.forEach(function(item) {
		list.appendChild(item );
		
	})
	listArea.replaceChild(list, listArea.firstChild);
}