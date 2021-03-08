function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalBtnClose = document.querySelector(".close");
const checkBoxInput = document.querySelectorAll(".checkbox-input");
const btnSubmit = document.querySelector(".btn-submit");
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
modalBtnClose.addEventListener("click", function(){
  modalbg.style.display = "none";
});

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// verification of form

function isNotValid(){
    event.target.style.backgroundColor=('#DC143C')
    
    
}

function isValid(){
    event.target.style.backgroundColor=('green')
}

/*function emailTestValid(input){
  let MailRegexVerification = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(input.target.value.test(MailRegexVerification) ){
    isValid();
  }
  else{
    isNotValid();
  }
}*/

//name verification
formData[0].addEventListener('change', function(event){
  let value = event.target.value;
  if (value < 2){
   isNotValid() 
   alert( "champ non rempli")
  }
  else{
    isValid()
  }
})

//lastname verification
formData[1].addEventListener('input', function(event){
  let value = event.target.value;
  if (value.length < 2 || value.length == 0 && value === /^([a-z A-Z])$/ ){
   isNotValid()
   alert( "champ non rempli")
  } 
  else{
    isValid()
  }
});
//email verification
formData[2].addEventListener("change", function (event){
  let value =event.target.value;
  if (value != /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/){
    isNotValid()
  }else{
    isValid
  }

})

//participation in a competiton
formData[4].addEventListener("change", function (event){
  let value = event.target.value;
  if (value.length == 0){
    isNotValid()
    alert( "nombre de participation non rempli")
  }
  else{
    isValid()
  }
});


for (let i = 0; i < checkBoxInput.length; i++){
  console.log(checkBoxInput)
  checkBoxInput[i].addEventListener("click",function (e){
    console.log(checkBoxInput)
    if(!e.target.value){
      isNotValid
      alert('vous devez selectionner la ville')
    }
    else{
      isValid
    }
  })
}



btnSubmit.addEventListener('click', function(event){
  for(let i = 0 ; i < formData.length; i++){
    if(formData[i] == isNotValid){
      event.preventDefault()
      event.stopPropagation()
    }
  }
})