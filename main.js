// html elements

let kitchenInput = document.getElementById("kitchen-input");
let addBtn = document.getElementById("add-btn");
let kitchenItemsList = document.getElementById("kitchen-items-list");

// step 2
// add kitchenitems

function addKitchenItems() {
    let kitchenInputData = kitchenInput.value;

    //create dom elements now
    let li = document.createElement("li");                   //creating the li
    li.innerText = kitchenInputData;                        //giving values to the li
    li.style.cssText = 'animation-name: slideIn';           // we can create the css styles using js
    kitchenItemsList.appendChild(li);
    kitchenInput.value = '';                                //to reset the value in enter kitchen items list textbox
    kitchenInput.focus();
    // console.log(li);

    //create trash button

    let trashBtn = document.createElement('i');
    trashBtn.classList.add("fas","fa-trash")
    console.log(trashBtn);
}

// step 1
// add an  event listener to the button

addBtn.addEventListener('click', addKitchenItems);