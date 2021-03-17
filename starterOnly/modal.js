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
const formContainer = document.querySelector(".form_container"); 
const finishSendButton = document.querySelector("#btn-send");

//validator
class validation {
  constructor(title , valide , err){
    this.title = title;
    this.valide = valide;
    this.err = err;
  }
}
let nameValide = new validation("name",false,"veuillez entrez deux caractère minimum");
let lastNameValide = new validation("lastname",false,"veuillez entrez deux caractère minimum");
let emailValide = new validation("email",false,"entrez un email valide");
let birthdayValide = new validation("birthday",false,"entrez votre date de naissance");
let numberOfParticipationValide = new validation("nombre de participation",false,"inscrivez le nombre de vos participation");
let cityValide= new validation("ville de participation",false,"cochez une ville");
let cguValide = new validation("cgu",true , "acceptation obligatoire CGU");

const validations =  [nameValide, lastNameValide,  emailValide, birthdayValide, numberOfParticipationValide, /*cityValide*/, cguValide];



//add element for array validator

 //récupérartion de chaque element du formulaire

 //for (let input of inputs){
  // input.addEventListener("click", pushvalidationOnArrayValidator)
// }



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

const createP = document.createElement('p');
function createElement (elt) { 
  return document.createElement(elt)}


const regexLetter = /^[a-zA-Z]+$/;

function isLettertest (value) {
  return regexLetter.test(value)  };

//name verification
formData[0].addEventListener('change', function(event){
  let value = event.target.value;
  
  if ( value.length < 2 || !isLettertest(value) ){
   isNotValid(event) 
   nameValide.valide = false;

   if(formData[0].childElementCount < 5){
    formData[0].appendChild(createElement("div")).innerHTML=(validations[0].err)
    }
  
  }

  else{
    isValid(event)
    nameValide.valide = true;
    
    if(formData[0].childElementCount >= 5){
      formData[0].childNodes[7].remove()
      }
    
    
  }
})

//lastname verification
formData[1].addEventListener('change', function(event){
  let value = event.target.value;
  if (value.length < 2 || value.length === 0 || !isLettertest(value)){
   isNotValid(event)
   lastNameValide.valide = false;
   if(formData[1].childElementCount < 5){
    formData[1].appendChild(createElement("div")).innerHTML=(validations[1].err)
    }
   
  } 
  else{
    isValid(event)
    lastNameValide.valide = true ;
    if(formData[1].childElementCount >= 5){
      formData[1].childNodes[7].remove()
      }

  }
});
//email verification
const regexMail= /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

function isValidMail(value){
   return /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(value)
}

formData[2].addEventListener("change", function (event){
  let value = event.target.value;
 if(isValidMail(value)) {
   isValid(event)
   emailValide.valide = true;
   
   if(formData[2].childElementCount >= 5){
    formData[2].childNodes[7].remove()
    }
   
 }else{
    isNotValid(event)
    emailValide.valide = false;
    if(formData[2].childElementCount < 5 ){
      formData[2].appendChild(createElement("div")).innerHTML=(validations[2].err)
      } 
  }
})

//birthday
const dateRegex = /(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})/;

function isValidDate(value){
 
  return dateRegex.test(value)

}

formData[3].addEventListener("change", function(event){
  let value = event.target.value;
  if(!isValidDate(value)){
    isValid(event);
    birthdayValide.valide = true;
    if(formData[3].childElementCount >= 5){
      formData[3].childNodes[7].remove()
      }
  }else{
    isNotValid(event)
    birthdayValide.valide= false ;
    if(formData[3].childElementCount < 5){
      formData[3].appendChild(createElement("div")).innerHTML=(validations[3].err)
      }
    
  }
})

//participation in a competiton
formData[4].addEventListener("change", function (event){
  let value = event.target.value;
  if (  isNaN(value) || value < 0){
    isNotValid(event)
    numberOfParticipationValide.valide = false;
    if(formData[4].childElementCount < 4 || value.length == 0){
      formData[4].appendChild(createElement("div")).innerHTML=(validations[4].err)
      }
    
  }
  else{
    isValid(event)
    numberOfParticipationValide.valide = true;
    if(formData[4].childElementCount >= 4 ){
      formData[4].childNodes[6].remove()
      }
   
  }
});

// select city
formData[5].addEventListener("change", function (e){
 let  value = e.target.checked
 
  if(value){
    cityValide.valide = true
    if(formData[5].childElementCount >= 15){
      formData[5].childNodes[7].remove()
      }
    
  }
  
    else{
    formData[5].childNodes[7].remove()
    if(formData[5].childElementCount < 15){
      formData[5].appendChild(createElement("div")).innerHTML=(validations[5].err)
      }
    
    
}

})


//select cgu 

const cgu = document.getElementById("checkbox1")
const childCgu = 
cgu.addEventListener("change", function (e){
  let value = e.target.checked;
  let valueTest= true;
  if(value){
    cguValide.valide = true;
    formData[6].childNodes[13].remove()
    if(formData[6].childElementCount >= 7){
      formData[6].childNodes[13].remove()
      }

  }
  
  else {
    
    cguValide.valide = false;
    if(formData[6].childElementCount < 7){
      formData[6].appendChild(createElement("div")).innerHTML=(validations[6].err)
      }
    valueTest = false;
     
  
  }
})


//send verification 
function formAsCorrect(){
  formData.forEach(function(data){
    data.style.display="none"; })
   
    formContainer.appendChild(createElement("div")).innerHTML="Merci ! Votre réservation a été reçue."; 
    formContainer.classList.add("form-send");
    
    console.log(finishSendButton);

  finishSendButton.innerHTML="fermer";
  finishSendButton.addEventListener('click', function(event){
    event.preventDefault()
    closeModal(event)
    formContainer.classList.remove("form-send")
   formContainer.style.display="none"
   
   
    
  
    
  })
}



btnSubmit.addEventListener("click",function(e){
  
  e.preventDefault()
    const formValid = validations.every(function(validation){ return validation.valide})

    if(formValid){
   
    formAsCorrect()
   // formContainer.appendChild(createElement("div")).innerHTML="Merci ! Votre réservation a été reçue."; 
   // formContainer.classList.replace("form-send");
    }
    else{
   
    e.stopPropagation()
    }

 
 })



