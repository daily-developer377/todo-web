// html elements

let kitchenInput = document.getElementById("kitchen-input");
let addBtn = document.getElementById("add-btn");
let kitchenItemsList = document.getElementById("kitchen-items-list");

let kitchenInputData;
let kitchenInputDataArray = [];

function setLocalStorage() {
    localStorage.setItem("kitchenInput", JSON.stringify(kitchenInputDataArray));        // in local storage the datas should be converted in strig thats why "json.stringfy" is used.
}
function getLocalStorage() {
    if(localStorage.getItem("kitchenInput")){
        kitchenInputDataArray = JSON.parse(localStorage.getItem("kitchenInput"));       // the converted sring data should be convert back when calling back to dom so "json.parse" tag is used.
        buildUI();
    }

}

function buildUI() {

    kitchenItemsList.textContent = "";
    kitchenInputDataArray.forEach((item) => {           // "=>"("it is called arrow function") it is the another type that represent the function . we can also written it as"function". "=>" it is a shortcut for calling function.

    let li = document.createElement("li");                   //creating the li

    let spanEl = document.createElement("span");
    li.appendChild(spanEl);
    spanEl.innerText = item;

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
    })

}
// step 2
// add kitchenitems

function addKitchenItems(event) {
    kitchenInputData = kitchenInput.value;

    kitchenInputDataArray.push(kitchenInputData);
    //set to local storage

    setLocalStorage();

    getLocalStorage();

    //create dom elements now

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

getLocalStorage();