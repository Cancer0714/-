"use strict";

const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputMale = document.getElementById("male");
const inputFemale = document.getElementById("female");
const labelMale = document.getElementById("man");
const labelFemale = document.getElementById("fem");
const inputs = [inputName, inputEmail];
const gender =[inputMale, inputFemale];
const labelGender = [man,fem];

function checkForm(){
 let error = false;
 if (!gender[0].checked && !gender[1].checked) {
    labelMale.classList.add("error");
    labelFemale.classList.add("error");
    error = true;
 } else {
    error = false;
 }

 for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "" ) {
        inputs[i].classList.add("error");
         error = true;
    };

 }

 if(error){
    alert("全ての必須項目を入力してください");
    return false;
 } else {
    return confirm('入力内容で送信します。よろしいですか？');
 }
}

for (let i = 0; i < inputs.length; i++) {
   inputs[i].addEventListener("input", function () {
      inputs[i].classList.remove("error");
   });
}

for (let i = 0; i < gender.length; i++) {
   gender[i].addEventListener("change", function () {
      man.classList.remove("error");
      fem.classList.remove("error");
   });
}




