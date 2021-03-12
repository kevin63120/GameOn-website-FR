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
const checkBoxInputs = document.querySelectorAll(".checkbox-input");
const btnSubmit = document.querySelector(".btn-submit");
const inputs = document.querySelectorAll("form_container");


//regex 
const mailRegexVerification = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
const birthdayRegexVerification= /^[0-9]{2}[\/]{1}[0-9]{2}[\/]{1}[0-9]{4}$/g;

//validator
let validations = 
[ 
  nameValide = false,
  lastNameValide = false,
  birthdayValide = false,
  emailValide = false,
  participationValide = false,
  cityValide = false,

] ;



//add element for array validator

 //récupérartion de chaque element du formulaire

 for (let input of inputs){
   input.addEventListener("click", pushvalidationOnArrayValidator)
 }



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
modalBtnClose.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal(){
  modalbg.style.display = "none";
}

//

// verification of form

function isNotValid(event){
    event.target.style.backgroundColor=('#DC143C')
   
    
    
}

function isValid(event){
    event.target.style.backgroundColor=('green')
    
}



//name verification
formData[0].addEventListener('change', function(event){
  let value = event.target.value;
  if (value.length < 2 || value.length === 0 ){
   isNotValid(event) 
   
  }
  else{
    isValid(event)
    validations.nameValide = true;
  }
})

//lastname verification
formData[1].addEventListener('change', function(event){
  let value = event.target.value;
  if (value.length < 2 || value.length === 0){
   isNotValid(event)
   
  } 
  else{
    isValid(event)
    validations.lastNameValide = true;
  }
});
//email verification
formData[2].addEventListener("change", function (event){
  let value =event.target.value;
  if (value === mailRegexVerification ){
    isValid(event)
    validations.emailValide = true;
  }else{
    isNotValid(event)
  }

})

//birthday
formData[4].addEventListener("change", function(event){
  let value = event.target.value;
  if(value === birthdayRegexVerification){
    isValid(event);
    validations.birthdayValide = true;
  }else{
    isNotValid(event)
  }
})

//participation in a competiton
formData[4].addEventListener("change", function (event){
  let value = event.target.value;
  if (value.length === 0){
    isNotValid(event)
   
  }
  else{
    isValid(event)
    validations.participationValide = true;
  }
});

// select city
for (let i = 0; i < checkBoxInputs.length; i++){
  console.log(checkBoxInputs[i])
  checkBoxInputs[i].addEventListener("click",function (event){
    console.log(checkBoxInput)
    if(!event.target.value){
      isNotValid(event)
      alert('vous devez selectionner la ville')
    }
    else{
      isValid(event)
      validations.cityValide =true;
    }
  })
}



/*btnSubmit.addEventListener('click', function(event){
  for(let i = 0 ; i < formData.length; i++){
    event.preventDefault()
    if(formData[i] == isNotValid){
      event.preventDefault()
      event.stopPropagation()
    }
  }
})*/


  
  for (let validation of validations){
    btnSubmit.addEventListener('click', function(event){
      if (validations.validation === true){
        event.preventDefault()

      }
    })
     

  }

    
  
