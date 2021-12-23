import "./index.css";

import myImage from "./image/wolf-logo.jpg";

import Data from "./component";

let root = document.getElementById("root");

root.innerHTML = Data;

if(localStorage.getItem("note") === null){
    localStorage.setItem("note", JSON.stringify([]));
}

let logo = document.getElementById("logo");

logo.src = myImage;

let save_btn = document.getElementById("save_btn");

save_btn.addEventListener("click", saveData);

let textArea = document.getElementById("note_box");
textArea.placeholder = "Enter note content here";

let title_box = document.getElementById("title_box");
title_box.placeholder = "Enter title here";


function saveData(){

    let local = JSON.parse(localStorage.getItem("note"));

    let obj = {
        title: title_box.value,
        mytext: textArea.value
    }

    if(title_box.value !== "" && textArea.value !== ""){
        local.push(obj);

        title_box.value = "";

        textArea.value = "";
    }
    else{
        alert("Title and note content is required");
    }

    localStorage.setItem("note", JSON.stringify(local));

    location.reload();
}


let output_box = document.querySelector(".output_box");

let localData = JSON.parse(localStorage.getItem("note"));

function Appendto(localData) {

  localData.forEach((ele, index) => {

    let div = document.createElement("div");

    div.setAttribute("class", "showingTitle");

    let p = document.createElement("p");

    p.innerText = ele.mytext;

    let button = document.createElement("button");

    button.innerText = "Delete";

    button.onclick = function () {

      DeleteData(index, div);
    };

    div.append(p, button);


    output_box.append(div);
  });
}

Appendto(localData);

localStorage.setItem("note", JSON.stringify(localData));



// ====================================
// delete div from localstorage
// ====================================

function DeleteData(index, div) {

  let deleteLocal = JSON.parse(localStorage.getItem("note"));

//   console.log(index);

  deleteLocal.splice(index, 1);

  localStorage.setItem("note", JSON.stringify(deleteLocal));

  div.remove();
}