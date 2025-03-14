var groceryList = [];
/* Form function while submit btn is clicked */
document.getElementById('addItem').addEventListener('click', (e)=>{

    e.preventDefault(); /*prevent refresh of form */

    let inputText = document.getElementById('grocery');  /* input-Box button added */
    var inputField = inputText.value;

    // console.log(inputField);

    let groceryAppend = document.getElementById('groceryAppend'); /* Appending div added */
    let clearBtn = document.getElementById('clearBtn'); /* clear button added */
    var alertBox = document.getElementById('alert');  /* alert div added */

    var inputRegex = /^[A-Za-z]+$/; /* regex for validate input */

    /* if condition for validate input-value */
    if(inputText.value.trim() === ""){ 
        alertBox.innerHTML = "Enter any item, Don't leave blank spce?";  /* appear when error occurs */
        alertBox.className = "alert alert-danger";  /* error class-name */
        alertBox.style.backgroundColor = "#ff0505";  /* background color */
        alertBox.style.color = "#fff";  /* font color */
        alertBox.style.borderRadius = "10px";  /* radius style for error message */
        return;
    }
    else if(!inputRegex.test(inputText.value)){
        alertBox.innerHTML = "Don't enter special character!";
        alertBox.className = "alert alert-danger";
        alertBox.style.backgroundColor = "#ff0505";
        alertBox.style.color = "#fff";
        alertBox.style.borderRadius = "10px";
        return;
    }

    let para = document.createElement("p"); /* creating an para tag */
    para.innerText = inputField;   /* Assign value of input */
    para.className = "grocery-item"; /* adding class name */
    alertBox.textContent = ' Item added success ';
    alertBox.className = "alert-success alert";
    alertBox.style.color = "#000000"
        setTimeout(() => {
            alertBox.textContent = "";
            alertBox.className = "";
            alertBox.style.color = ""
        }, 2000);


    let iconSection = document.createElement('div'); /* creating an div tag */
    

    let edit=document.createElement('i'); /* creating an i tag */
    edit.className="fa-solid fa-pen-to-square edit-btn"; /* adding class name */


    let trash = document.createElement('i'); /* creating an i tag */
    trash.className = "fa-solid fa-trash delete-btn"; /* adding class name */
    trash.style.padding = "5px" /* adding padding style */


    /* trash btn function */
    trash.addEventListener('click', ()=>{
        para.remove(trash);
        alertBox.textContent = ' Item Deleted Successfully ';
        alertBox.className = "alert-danger alert";
        alertBox.style.color = "#000000"
            setTimeout(() => {
                alertBox.textContent = "";
                alertBox.className = "";
                alertBox.style.color = ""
            }, 3000);
    })


    /* clear btn function */
    clearBtn.addEventListener('click', ()=>{
        para.remove(clearBtn); /* clear all item */
        alertBox.textContent = ' Item Cleared Successfully ';
        alertBox.className = "alert-danger alert";
        alertBox.style.color = "#000000"
            setTimeout(() => {
                alertBox.textContent = "";
                alertBox.className = "";
                alertBox.style.color = ""
            }, 3000);
    })

    para.append(iconSection);   /* icon-div appending */
    iconSection.append(edit);   /* edit-btn  appending */
    iconSection.append(trash);  /* trash-btn appending */
    groceryAppend.append(para); /* para  appending */ 
    inputText.value = "";       /* input box empty after appending */

    /* Local stroage */

    var shopItem = JSON.parse(localStorage.getItem("groceryItem")) || [];  /* creating variable for JSON */
    let groceryItemList = {  /* creating objects */
        itemName: inputField  
    };
    shopItem.push(groceryItemList); /* pushing item in objects */
    localStorage.setItem("groceryItem", JSON.stringify(shopItem)); /* getting local values */
    clearBtn.addEventListener("click", ()=>{ /* clear in localstorages */
       localStorage.clear();
    });   

    trash.addEventListener('click', ()=>{
        let localStoarageData = JSON.parse(localStorage.getItem("groceryItem")) || [];
        let updateLocalStorage = localStoarageData.filter(f=> f.itemName !== para.textContent);
            localStoarageData.setItem("groceryItem", JSON.stringify(updateLocalStorage));
            para.remove();
            alertBox.textContent = ' Item Deleted Successfully ';
            alertBox.className = "alert-danger alert";
            alertBox.style.color = "#000000"
            setTimeout(() => {
                alertBox.textContent = "";
                alertBox.className = "";
                alertBox.style.color = ""
            }, 3000);
    })

})