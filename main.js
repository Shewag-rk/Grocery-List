let addItem = document.getElementById('addItem');
let groceryAppend = document.getElementById('groceryAppend');

addItem.addEventListener('click', function(){
    let ulList = document.createElement("ul");
    let liList = document.createElement("li");
    document.getElementById('grocery').v.append(liList);

    ulList.append(liList);
    groceryAppend.append(ulList);
})