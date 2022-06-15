function showResult(){
  alertNumberNull()
  realizaTabuada()
}

function alertNumberNull(){
  const numberInput = parseInt(document.querySelector("#number").value)

  if(Number.isNaN(numberInput)){
    alert("Digite um número Válido")
  }
}
function realizaTabuada(){
  
  const numberInput = parseInt(document.querySelector("#number").value)

  const resultado = document.querySelector("#select")

  resultado.innerHTML = `<option>Resultado:</option>`
  
  let contador = 1

  while(contador < 11){
    calculaTabuada = contador * numberInput
    resultado.innerHTML += `<option>${numberInput} X ${contador} = ${calculaTabuada}</option>`
    contador ++
  }
  let resultadoStyle = resultado
  resultadoStyle.removeAttribute("disabled")


}