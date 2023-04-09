let addToDoButton = document.getElementById("add");
let listContainer = document.getElementById("list-container");
let inputField = document.getElementById("inputField");



//how to make the text you type to stay on the screen
addToDoButton.addEventListener('click', function(){
   var paragraph = document.createElement('p')
   paragraph.innerText = inputField.value;
   listContainer.appendChild(paragraph);
})


