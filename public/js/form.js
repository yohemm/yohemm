const inputs = document.querySelectorAll('input, textarea');
const formGroups = document.querySelectorAll(".form-group")
const progressbar = document.querySelector('progress');
let sub = document.querySelector('input[type="submit"]');
let contentInputs = {}; 
progressbar.max = formGroups.length - 1;

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let input
document.addEventListener('DOMContentLoaded', () => {
  formGroups.forEach(inputContainer => {
    input = inputContainer.querySelector('input, textarea');
    if(input.value != ""){
      input.parentNode.classList.add('animation');
    }else if(input.value == ""){
      input.parentNode.classList.remove('animation');
    }
  })
  for (let i = 0; i < formGroups.length-1; i++) {
    input = formGroups[i].querySelector('input, textarea');
    if (input.value != '') {
      contentInputs[i] = true;
      progressbar.value += 1;
    }
    else {
      contentInputs[i] = false;
    }
  }
})
for (let i = 0; i < inputs.length - 1; i++){
  let field = inputs[i];
  field.addEventListener('input', (e) => {
    if(e.target.value != ""){
      e.target.parentNode.classList.add('animation');
    }else if(e.target.value == ""){
      
      e.target.parentNode.classList.remove('animation');
    }
  })
}

for (let i = 0; i < formGroups.length-1; i++) {
  const formGroup = formGroups[i];
  formGroup.addEventListener('change', ()=> {
    if(formGroup.querySelector('datalist')){
      let inDataList = false;
      formGroup.querySelectorAll('option').forEach(option =>{
        
        if(formGroup.querySelector('input, textarea').value == option.innerHTML){
          if(contentInputs[i] == false){
            contentInputs[i] = true;
            formGroup.querySelector('.err').innerHTML = null;
            progressbar.value += 1;
            inDataList = true;
          }
        }
      })
      if(inDataList == false && formGroup.querySelector('input, textarea').value != ''){
        formGroup.querySelector('input, textarea').value = '';
        formGroup.querySelector('.err').innerHTML = "Les élements ne sont pas dans la liste proposer";
      }
      if(contentInputs[i] == true && inDataList == false){
        contentInputs[i] = false;
        progressbar.value -= 1;
      }
    }else if(formGroup.querySelector('input[type="email"]')){
      if(emailRegex.test(formGroup.querySelector('input[type="email"]').value)){
        if(contentInputs[i] == false){
          contentInputs[i] = true;
          progressbar.value += 1;
        }
      }else if(contentInputs[i] == true && emailRegex.test(formGroup.querySelector('input[type="email"]')) == false){
        contentInputs[i] = false;
        progressbar.value -= 1;
      }
      if(formGroup.querySelector('input[type="email"]').value != '' && emailRegex.test(formGroup.querySelector('input[type="email"]').value) === false){
        formGroup.querySelector('.err').innerHTML = "Le format email est requis";
        
      }else{
        formGroup.querySelector('.err').innerHTML = null;
      }
    }
    else if (formGroup.querySelector('input, textarea').value != '' && contentInputs[i] == false) {
      contentInputs[i] = true;
      progressbar.value += 1;
      formGroup.querySelector('.err').innerHTML = null;
    }else if (contentInputs[i] == true) {
      if(formGroup.querySelector('input, textarea').value == ''){
        contentInputs[i] = false;
        progressbar.value -= 1;
      }
    }
    if(progressbar.value == progressbar.max){
      sub.disabled = false;
    }else{
      sub.disabled = true;
    }
  })
}


