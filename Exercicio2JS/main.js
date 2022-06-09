
const date = new Date()

// let form = document.querySelector('form')
// form.onsubmit = (event) =>{
//   event.preventDefault()
//   showAlertModal(event.target)
// }
function showAlertModal(form){ //Aprendizado
  const anoNascimento = form.birth.value//Aprendizado
  // let gender = form.gender.value//Aprendizado
  if(Number.isNaN(anoNascimento)){
    alert(` Você digitou: ${anoNascimento}. \n Digite dados válidos`)
  }

}
function showResult(form){  

  const anoNascimento = form.birth.value//Aprendizado
  const gender = form.gender.value//Aprendizado 
  const divBoxModel = document.querySelector(".content")
  const idade = date.getFullYear() - anoNascimento

  const p = document.querySelector("p")
    p.textContent = `Detectamos ${gender} com ${idade} anos`
  const resultado = document.querySelector(".result")
  resultado.innerHTML += `<img>`  
  const img = document.querySelector('img')

 




  console.log(img)
  if(idade > 0 || idade <=6 && gender == "Feminino"){ 

    img.classList.add("image")
    img.setAttribute('src' , './baby.jpg')    
    divBoxModel.style.height = "30rem"
  }
}