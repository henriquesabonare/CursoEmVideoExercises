function callFunctions() {
showAlertModal()
showResult()
}
const date = new Date()

let divBoxModel = document.querySelector(".content")
let container = document.querySelector(".container")

let p = document.querySelector("p")
let resultado = document.querySelector(".result")

// let form = document.querySelector('form')
// form.onsubmit = (event) =>{
//   event.preventDefault()
//   showAlertModal(event.target)
// }
function showAlertModal(){ //Aprendizado
  const anoNascimento = parseInt(document.querySelector('#born').value)
  // const anoNascimento = form.birth.value  //Aprendizado
  if(Number.isNaN(anoNascimento)){
    alert(` Você digitou: ${anoNascimento}. \n Digite dados válidos`)
    return alert
  }
}

function showResult(){ 
  // const anoNascimento = form.birth.value
  // const gender = form.gender.value //Aprendizado 

  const anoNascimento = parseInt(document.querySelector('#born').value)
  const gender = document.querySelector('input[name="gender"]:checked').value
  const idade = date.getFullYear() - anoNascimento 

  divBoxModel.style.height = "35rem"

  if (gender == "Feminino"){
    container.style.backgroundColor = 'pink'
    p.textContent = `Detectamos ${gender} com ${idade} anos`
  }else{
    p.textContent = `Detectamos ${gender} com ${idade} anos`
  }

  let img = document.querySelector('img')
  img.classList.add("image")

  if(idade <=6 && gender === "Feminino"){ 
    img.setAttribute('src' , './babygirl.jpg')        
  }else if(idade <=6 && gender === "Masculino"){     
    img.setAttribute('src', './baby.jpg')    
  }else if(idade >6 && idade <=11 && gender === "Feminino"){
    img.setAttribute('src' , './childgirl.jpg') 
  }else if(idade >6 && idade <=11 && gender === "Masculino"){
    img.setAttribute('src' , './childboy.jpg') 
  }else if(idade > 11 && idade <=18 && gender === "Feminino"){
    img.setAttribute('src' , './adolescentGirl.jpg') 
  }else if(idade > 11 && idade <=18 && gender === "Masculino"){
    img.setAttribute('src' , './adolescentBoy.jpg') 
  }else if(idade > 18 && idade <=50 && gender === "Feminino"){
    img.setAttribute('src' , './woman.jpg') 
  }else if(idade > 18 && idade <=50 && gender === "Masculino"){
    img.setAttribute('src' , './men.jpg') 
  }else if(idade > 50 && gender === "Feminino"){
    img.setAttribute('src' , './grandma.jpg') 
  }else if(idade > 50 && gender === "Masculino"){
    img.setAttribute('src' , './grandpa.jpg') 
  }

}
