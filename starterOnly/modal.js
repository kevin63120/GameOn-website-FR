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

//constructor  validation and err obj
class validation {
  constructor(title , valide , err){
    this.title = title;
    this.valide = valide;
    this.err = err;
  }
}
// objects for validation and error message include on input 
let nameValide = new validation("name",false,"veuillez entrez deux caractère minimum");
let lastNameValide = new validation("lastname",false,"veuillez entrez deux caractère minimum");
let emailValide = new validation("email",false,"entrez un email valide");
let birthdayValide = new validation("birthday",false,"entrez votre date de naissance ex: 10/02/1998");
let numberOfParticipationValide = new validation("nombre de participation",false,"inscrivez le nombre de vos participation");
let cityValide= new validation("ville de participation",false,"cochez une ville");
let cguValide = new validation("cgu",true , "acceptation obligatoire CGU");

//validation array 
const validations =  [nameValide, lastNameValide,  emailValide, birthdayValide, numberOfParticipationValide, cityValide, cguValide];




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
    event.target.style.border=('#DC143C 3px solid')
    
    
    
    
}

function isValid(event){
    event.target.style.border=('green 3px solid')
    
}

//const createP = document.createElement('p');
//function for create element html 
function createElement (elt) { 
  return document.createElement(elt)}


const regexLetter = /^[a-zA-Z]+$/;
// function for testing input user  
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
    formData[0].childNodes[7].classList.add("err-input-response");
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
    formData[1].childNodes[7].classList.add("err-input-response");
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
      formData[2].childNodes[7].classList.add("err-input-response");
      } 
  }
})

//birthday
const dateRegex = /(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/;

function isValidDate(value){
 
  return dateRegex.test(value)

}

formData[3].addEventListener("change", function(event){
  let value = event.target.value;
  if(isValidDate(value)){
    isValid(event);
    birthdayValide.valide = true;
    if(formData[3].childElementCount >= 5){
      formData[3].childNodes[7].remove()
      }
  }else{
    isNotValid(event)
    birthdayValide.valide= false ;
    if(formData[3].childElementCount <5){
      formData[3].appendChild(createElement("div")).innerHTML=(validations[3].err);
      formData[3].childNodes[7].classList.add("err-input-response");
    
      }
    
  }
})
const numberRegex= /[0-9]/;
function isValidNumber(value){
  return numberRegex.test(value)
}
//participation in a competiton
formData[4].addEventListener("change", function (event){
  let value = event.target.value;
  if (  !isValidNumber(value) || value < 0){
    isNotValid(event)
    numberOfParticipationValide.valide = false;
    if(formData[4].childElementCount < 4 || value.length == 0){
      formData[4].appendChild(createElement("div")).innerHTML=(validations[4].err)
      formData[4].childNodes[6].classList.add("err-input-response");
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
      formData[5].childNodes[7].classList.add("err-input-response");
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
      formData[3].childNodes[13].classList.add("err-input-response");
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
  
    }
    else{
   
    e.stopPropagation()
    }

 
 })



