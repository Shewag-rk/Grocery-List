let addItem = document.getElementById('addItem');
let inputText = document.querySelector('input').value;
let groceryAppend = document.getElementById('groceryAppend');

addItem.addEventListener('click', function(){
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    // li.appendChild(inputText);
    groceryAppend.appendChild(ul);
    ul.appendChild(li);    
})
