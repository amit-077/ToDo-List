// STEP 1: Create a todo list.
// STEP 2: Store the items in the local storage array.
// STEP 3: Use JSON.Stringify() and JSON.parse() to perform task.
// STEP 4: Make sure that even if you quit browser, items in todoList persist.
// STEP 5: ENJOY Using the ToDo list with localStorage.
if(localStorage.getItem("itemArr")!= null){
  displayItems();
}
//------------------------------------ CODE ---------------------------------------
document.getElementById('add').addEventListener("click",function(event){
  let item = document.getElementById("input").value;
  document.getElementById("input").value = '';
// --------------------------Setting Local Storage------------------------------
  if(localStorage.getItem("itemArr") == null){
    localStorage.setItem("itemArr","[]");
    let arr = JSON.parse(localStorage.getItem("itemArr"));
    arr.push(item);
    let arrStr = JSON.stringify(arr);
    localStorage.setItem("itemArr",arrStr);
    displayItems();
    window.scrollTo(0, 1000);
  }else{
    let arr = JSON.parse(localStorage.getItem("itemArr"));
    arr.push(item);
    let arrStr = JSON.stringify(arr);
    localStorage.setItem("itemArr",arrStr);
    displayItems();
    window.scrollTo(0, 1000);
  }
})

// When enter Key is pressed, the form will be submitted.
document.getElementById('input').addEventListener("keypress",function(evt){
  if(evt.key == "Enter"){
    document.getElementById("add").click();
  }
})

// Function that Displays the Items in todoList

function displayItems(){
  let items = JSON.parse(localStorage.getItem("itemArr"));
  let html = "";
  let count=-1;
  items.forEach(function(item){
    count+=1;
    html += `<div class="todoDiv"><p class = "todoItem"><input type="checkbox" name=box${count}>&nbsp&nbsp<label for="box${count}">${item}</label></p><div id="btnDiv"><button id="btn" onclick="deleteItem(${count})"><i class="fa-solid fa-trash"></i></button></div></div>`;
  });
  document.getElementById("itemDiv").innerHTML = html;
  console.log(html);
}

// EVENT LISTENER TO DELETE AN ITEM.
function deleteItem(x){
  let arrs = JSON.parse(localStorage.getItem("itemArr"));
  console.log(arrs);
  arrs.splice(x,1);
  let arrString = JSON.stringify(arrs);
  localStorage.setItem("itemArr",arrString);
  displayItems();
}
