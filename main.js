// html elements

let kitchenInput = document.getElementById("kitchen-input");
let addBtn = document.getElementById("add-btn");
let kitchenItemsList = document.getElementById("kitchen-items-list");

// step 2
// add kitchenitems

function addKitchenItems(event) {
    let kitchenInputData = kitchenInput.value;

    //create dom elements now
    let li = document.createElement("li");                   //creating the li

    let spanEl = document.createElement("span");
    li.appendChild(spanEl);
    spanEl.innerText = kitchenInputData;

    // li.innerText = kitchenInputData;                        //giving values to the li   //disabling this code bcoz of creating a span
    li.style.cssText = 'animation-name: slideIn';           // we can create the css styles using js
    kitchenItemsList.appendChild(li);
    kitchenInput.value = '';                                //to reset the value in enter kitchen items list textbox
    kitchenInput.focus();
    // console.log(li);

    //create trash button

    let trashBtn = document.createElement('i');
    trashBtn.classList.add("fas","fa-trash");
    li.appendChild(trashBtn);
    console.log(trashBtn);

    //create a edit button

    let editBtn = document.createElement('i');
    editBtn.classList.add("fas","fa-edit");
    li.appendChild(editBtn);
}

// delete item from kitchenItemList

function deletekitchenItem(event){                                  // event shows the events in while clicking the delete button
    console.log(event.target.classList[0]);
    if(event.target.classList[1] ==="fa-trash"){                //fa-trash is a CLASS name  and  1 indicate the position of fa-trash
        let item = event.target.parentElement;
        console.log(item);
        item.classList.add('slideOut');
        item.addEventListener('transitionend',function(){
            // console.log("animation has been completed");
            item.remove();
        })
    }
}

// edit kitchen item

function editKitchenItem(event) {
    if (event.target.classList[1] === "fa-edit") {
        let editedValue = prompt("please add new text");
        let item = event.target.parentElement;

        let spanEl = item.querySelector("span");
        spanEl.innerText = editedValue;
    }

}

// step 1
// add an  event listener to the button

addBtn.addEventListener("click", addKitchenItems);

kitchenItemsList.addEventListener("click", deletekitchenItem);

kitchenItemsList.addEventListener("click", editKitchenItem);
