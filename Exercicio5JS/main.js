let array = new Array()

function showResultsInAdicionar(){
  showAlert()
  AddNumber()
}

function showAlert(){

  const inputNumber = parseInt(document.querySelector("#number").value)
  
  if(inputNumber > 100 || inputNumber <1 || Number.isNaN(inputNumber) || array.includes(inputNumber)){
    alert("Selecione um número Válido")
  }
}

function AddNumber(){
  const inputNumber = parseInt(document.querySelector("#number").value)
  const result = document.querySelector("#select")

  if(inputNumber < 101 && inputNumber >0){
    if(array.includes(inputNumber) == false){
    result.innerHTML += `<option>Valor ${inputNumber} adicionado.</option>`
    array.push(inputNumber)
  }
  }
  
}
function finalizar(){


}
console.log(array)