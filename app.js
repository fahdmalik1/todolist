var taskInput = document.getElementById("new-task");
var addButton = document.getElementById("new-task-button");
var listArea = document.getElementById("list-container");

addButton.addEventListener("click", function(){
	if (!taskInput.value) {
		return;
	}

		
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
	
	var itemOne = document.createElement('span');
	var itemTwo = document.createElement('span');
	
	var taskContent = document.createTextNode(item.task);
	var dateContent = document.createTextNode(item.date);
	
	
	itemOne.appendChild(taskContent);
	itemTwo.appendChild(dateContent);
	
	listItem.appendChild(itemOne);
	listItem.appendChild(itemTwo);
	listItem.setAttribute('id', item.id);
	
	var markButton = document.createElement('button');
	var buttonText = document.createTextNode('mark status');
	
	markButton.appendChild(buttonText);
	markButton.addEventListener('click', function(event) {
		markAsDone(event.target.parentElement.id)

	} )
	
	listItem.appendChild(markButton);
	
	return listItem;
}

function markAsDone(itemId) {
	var toMark = todoArray[itemId-1];
	toMark.done = !toMark.done;
	updateTodosView();
}

function updateTodosView() {
	var list= document.createElement("ul");
	
	todoArray.forEach(function(item) {
		if (item.done) {
			item.setAttribute('class', 'item-done');
		} else {
			item.setAttribute('class', 'item-todo');
		}
		list.appendChild(item );
	})
	listArea.replaceChild(list, listArea.firstChild);
}