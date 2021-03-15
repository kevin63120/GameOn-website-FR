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

const validations =  [nameValide, lastNameValide,  emailValide, birthdayValide, numberOfParticipationValide, cityValide, cguValide];



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
const createADiv=document.createElement('div')


//name verification
formData[0].addEventListener('change', function(event){
  let value = event.target.value;
  if (value.length < 2 || value.length === 0 ){
   isNotValid(event) 
   validations[nameValide.valide = false];
   formData[0].appendChild(createADiv).innerHTML=(validations[0].err)
  }
  else{
    isValid(event)
    validations[nameValide.valide = true];
    
  }
})

//lastname verification
formData[1].addEventListener('change', function(event){
  let value = event.target.value;
  if (value.length < 2 || value.length === 0 ){
   isNotValid(event)
   validations[lastNameValide.valide = false];
   formData[1].appendChild(createADiv).innerHTML=(validations[1].err)
   
  } 
  else{
    isValid(event)
    validations[lastNameValide.valide = true] ;

  }
});
//email verification
const regexMail= /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

function isValidMail(value){
   return /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(value)
}

formData[2].addEventListener("change", function (event){
  let value = event.target.value;
 if(isValidMail(value) == true) {
   validations[emailValide.valide = true];
 }else{
    isNotValid(event)
    validations[emailValide.valide = false];
    formData[2].appendChild(createADiv).innerHTML=(validations[2].err)    
  }
})

//birthday
const dateRegex = /(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})/;

function isValidDate(value){
  return dateRegex.test(value)
}

formData[3].addEventListener("change", function(event){
  let value = event.target.value;
  if(isValidDate(value) == false){
    isValid(event);
    validations[birthdayValide.valide = true];
  }else{
    isNotValid(event)
    validations[birthdayValide.valide= false] ;
    formData[3].appendChild(createADiv).innerHTML=(validations[3].err)
    
  }
})

//participation in a competiton
formData[4].addEventListener("change", function (event){
  let value = event.target.value;
  if (value.length === 0 || isNaN(value)){
    isNotValid(event)
    validations[numberOfParticipationValide.valide = false];
    formData[4].appendChild(createADiv).innerHTML=(validations[4].err)
    
  }
  else{
    isValid(event)
    validations[numberOfParticipationValide.valide = true];
  }
});

// select city
formData[5].addEventListener("change", function (e){
 let  value = e.target.checked
  if(value == true){
    validations[cityValide.valide = true]}
  else{
    formData[5].appendChild(createADiv).innerHTML=(validations[5].err)
}

})


//select cgu 

const cgu = document.getElementById("checkbox1")

formData[6].addEventListener("change", function (e){
  let value = e.target.checked;
  if(value == true){
    validations[cguValide.valide = true];
  }
  else {
    validations[cguValide.valide = false];
    formData[6].appendChild(createADiv).innerHTML=(validations[6].err)
  }
})


//send verification 
function formAsCorrect(){
  formData.forEach(function(data){
    data.style.display="none"; })
  formData[0].appendChild(createADiv).innerHTML("merci de votre envoi")
  
}
btnSubmit.addEventListener("click",function(e){
 let value = e.target.value;
 
 for (validation of validations){ 
   if (validation.valide === true){
      e.preventDefault()
      console.log(validation.title)
     // formAsCorrect()
     
   }
   else{
     e.preventDefault()
     // formData[validation].appendChild(createADiv).innerHTML(validation.err)
     console.log ('err')
     
     }
   }
 })



