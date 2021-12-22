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

// save_btn.onclick = "saveData()";

function saveData(){

    let local = JSON.parse(localStorage.getItem("note"));

    let textArea = document.getElementById("note_box");

    let title_box = document.getElementById("title_box");

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

    location.reload(true);
}


let output_box = document.querySelector(".output_box");

let getData = JSON.parse(localStorage.getItem("note"));

function Appendto(getData) {

  getData.forEach((ele, index) => {

    let div = document.createElement("div");

    div.setAttribute("class", "showingTitle");

    let p = document.createElement("p");

    p.innerText = ele.title;

    let button = document.createElement("button");

    button.innerText = "Delete || Update";

    button.onclick = function () {

      DeleteData(index, div);
    };

    div.append(p, button);

    div.onclick = function () {
      ShowThatData(ele);
    };


    output_box.append(div);
  });
}

Appendto(getData);

localStorage.setItem("notePad", JSON.stringify(getData));

function DeleteData(index, div) {
  let getDLocal = JSON.parse(localStorage.getItem("notePad"));

//   console.log(index);

  getDLocal.splice(index, 1);

  localStorage.setItem("notePad", JSON.stringify(getDLocal));

  div.remove();
}

function ShowThatData(ele) {

  let textArea = document.getElementById("note_box");

  let title_box = document.getElementById("title_box");

  textArea.value = ele.mytext;

  title_box.value = ele.title;
}