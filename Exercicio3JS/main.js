  let result = document.querySelector("p")

  function showResult(){
    alerts()
    letsCount()
  }

function alerts(){

  let start = parseInt(document.querySelector('#start').value)
  let end = parseInt(document.querySelector('#end').value)
  let step = parseInt(document.querySelector('#step').value)

  if(start <= 0 || end <= 0){
    alert('Favor inserir dados Válidos')
  }else if(step <= 0){
     alert(`Você digitou o passo: ${step}, consideraremos para cálculo o valor 1`)
      result.innerHTML = `<h3>Contando:</h3>`
      while(start <= end){
        result.innerHTML += `<span>${start}👉</span>`
        start ++
        
    } 
    result.innerHTML += "<span>🏁<span>" 
    }

}

function letsCount(){

  let start = parseInt(document.querySelector('#start').value)
  let end = parseInt(document.querySelector('#end').value)
  let step = parseInt(document.querySelector('#step').value)

  if(step > 0 && start > 0 && end > 0){
    result.innerHTML = `<h3>Contando:</h3>`
    while(start <= end)  {
      result.innerHTML += `<span>${start}👉</span>`
      start += step
    }
    result.innerHTML += "<span>🏁<span>"
  }


}