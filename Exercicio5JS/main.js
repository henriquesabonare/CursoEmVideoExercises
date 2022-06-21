let array = new Array()

function showResultsInAdicionar(){
  showAlert(array)
  addNumber(array)
}
function showAlert(arrayValue){
  const inputNumber = parseInt(document.querySelector("#number").value)
  
  if(inputNumber > 100 || inputNumber <1 || Number.isNaN(inputNumber) || arrayValue.includes(inputNumber)){
    alert("Selecione um número Válido")
  }
}
function addNumber(arrayValue){
  const inputNumber = parseInt(document.querySelector("#number").value)
  const result = document.querySelector("#select")

  if(inputNumber < 101 && inputNumber >0){
    if(arrayValue.includes(inputNumber) == false){
    result.innerHTML += `<option>Valor ${inputNumber} adicionado.</option>`
    arrayValue.push(inputNumber)
    }
  }
  return array
}
function somar() {
    let soma = 0;
    for(let i in array){
      soma += array[i]
    } 
    return soma
}
function finalizar(){
  const resultNumbers = document.querySelector(".resultNumbers")
  const expandContent = document.querySelector(".content")

  if(array.length === 0){
    return alert(`Insira ao menos um valor`)
  }else{
  expandContent.style.height = `105%`
  resultNumbers.innerHTML = `
  <p>Ao todo, temos ${array.length} números cadastrados </p>
  <p>O maior valor informado foi  ${Math.max.apply(null, array)}.</p>
  <p>O menor valor informado foi  ${Math.min.apply(null, array)}.</p>
  <p>Somando todos os valores, temos ${somar()}.</p>
  <p>A média dos valores inseridos é  ${somar()/array.length}.</p>
  `
  }  
}