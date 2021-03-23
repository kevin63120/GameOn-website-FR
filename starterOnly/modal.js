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
  constructor(title , valide , err , selector){
    this.title = title;
    this.valide = valide;
    this.err = err;
    this.selector = selector;
  }
}
// objects for validation and error message include on input 
let nameValide = new validation("name",false,"Veuillez entrer 2 caractères ou plus pour le champ du nom", document.querySelector('.firstname'));
let lastNameValide = new validation("lastname",false,"Veuillez entrer 2 caractères ou plus pour le champ du nom",  document.querySelector('.lastname'));
let emailValide = new validation("email",false,"entrez un email valide",  document.querySelector('.email'));
let birthdayValide = new validation("birthday",false,"Vous devez entrer votre date de naissance ex: 10/02/1998",  document.querySelector('.birthdate'));
let numberOfParticipationValide = new validation("nombre de participation",false,"Inscrivez le nombre de vos participations",  document.querySelector('.number'));
let cityValide= new validation("ville de participation",false,"Vous devez choisir une option.",  document.querySelector('.city'));
let cguValide = new validation("cgu",true , "Vous devez vérifier que vous acceptez les termes et conditions.", document.querySelector('.conditions'));

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

// verification of form
function isNotValid(event){
    event.target.style.border=('#DC143C 3px solid')
   
}

function isValid(event){
    event.target.style.border=('green 3px solid')
    
}

// function to add an attribute of element for can show the default message.
function showFieldError(selector, error){
  selector.setAttribute('data-error', error)
  selector.setAttribute('data-error-visible', true)
}

// function to remove an attribute on element for can't show the default message
function hideFieldError(selector){
  selector.removeAttribute('data-error',)
  selector.removeAttribute('data-errror-visible')
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
   showFieldError(nameValide.selector, nameValide.err)
  }

  else{
    isValid(event)
    nameValide.valide = true;
    hideFieldError(nameValide.selector)  
  }
});

//lastname verification
formData[1].addEventListener('change', function(event){
  let value = event.target.value;
  if (value.length < 2 || value.length === 0 || !isLettertest(value)){
   isNotValid(event)
   lastNameValide.valide = false; 
  showFieldError(lastNameValide.selector,lastNameValide.err ) 
  } 

  else{
    isValid(event)
    lastNameValide.valide = true ;
  hideFieldError(lastNameValide.selector)
  }
});

//email verification
const regexMail= /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

function isValidMail(value){
   return regexMail.test(value)
}

formData[2].addEventListener("change", function (event){
  let value = event.target.value;
 if(isValidMail(value)) {
   isValid(event)
   emailValide.valide = true;
  hideFieldError(emailValide.selector)
  
   
 }else{
    isNotValid(event)
    emailValide.valide = false;
    showFieldError(emailValide.selector, emailValide.err)
    
  }
});

//birthdate
const dateRegex = /(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/;

function isValidDate(value){
 
  return dateRegex.test(value)

}

formData[3].addEventListener("change", function(event){
  let value = event.target.value;
  if(isValidDate(value)){
    isValid(event);
    birthdayValide.valide = true;
    hideFieldError(birthdayValide.selector)
   
  }else{
    isNotValid(event)
    birthdayValide.valide= false ;
    showFieldError(birthdayValide.selector, birthdayValide.err)
    
    
  }
});

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
    showFieldError(numberOfParticipationValide.selector, numberOfParticipationValide.err) 
  }

  else{
    isValid(event)
    numberOfParticipationValide.valide = true;
    hideFieldError(numberOfParticipationValide.selector)
  }
});

// select city
formData[5].addEventListener("change", function (e){
 let  value = e.target.checked
 
  if(value){
    cityValide.valide = true
    hideFieldError(cityValide.selector) 
  }
  
  else{
      showFieldError(cityValide.selector , cityValide.err)
      cityValide.valide = false
  }

})


//select cgu 

const cgu = document.getElementById("checkbox1")
const childCgu = 
cgu.addEventListener("change", function (e){
  let value = e.target.checked;
  if(value){
    cguValide.valide = true;
    hideFieldError(cguValide.selector) 
  }
  
  else {
    cguValide.valide = false;
    showFieldError(cguValide.selector, cguValide.err)
  }
})


//send verification 
function formAsCorrect(){
  formData.forEach(function(data){
    data.style.display="none"; }) 
    formContainer.appendChild(createElement("div")).innerHTML="Merci ! Votre réservation a été reçue."; 
    formContainer.classList.add("form-send");
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
      const invalidfields = validations.filter(validation =>(!validation.valide))
        invalidfields.forEach(function (validation){
        showFieldError(validation.selector, validation.err)
      })
      e.stopPropagation()
    }

 
 })



