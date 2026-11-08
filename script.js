let ToDoCollection = JSON.parse(localStorage.getItem('myToDoList')) || [
// {
//   item : 'open the app',
//   dueDate : '8/11/2026'
// },
];

showToDos();
function addToDo(){
  let inputTyped = document.querySelector('#idInput');
  let inputToDo = inputTyped.value;
  let inputDate = document.querySelector('#dateType');
  let inputDateValue = inputDate.value;
    if( inputToDo == "" || inputDateValue == "" ){
    alert('Please enter both task and date!');
    return;
  }
  ToDoCollection.push({item : inputToDo, dueDate : inputDateValue});
  inputTyped.value = '';
  inputDate.value = '';
  saveToStorage();
  showToDos();
}

function showToDos(){

 containerElement = document.querySelector('.toDoContainer');
 newHtml = '';
 for(let i=0; i<ToDoCollection.length;i++){
  let{item, dueDate} = ToDoCollection[i];
  
  newHtml += `
   <span> ${item}</span>
   <span> ${dueDate}</span>
   <button class= "deleteButton" onclick = "deleteToDo(${i})"> Delete </button>
   `;
 }

  containerElement.innerHTML = newHtml;
}

function deleteToDo(index) {
   ToDoCollection.splice(index,1);
   saveToStorage();
    showToDos();
}

function saveToStorage() {
  localStorage.setItem('myToDoList' , JSON.stringify(ToDoCollection));
}