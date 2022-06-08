let date = new Date()
changeImage()
showHour()
changeBackground()

function showHour(){
  const show = document.querySelector(".box-model")
  show.innerHTML += `<p>Agora são ${date.getHours()} horas</p>`
}

function changeBackground(){
  const backgroundAtualization = document.querySelector(".container")
  if(date.getHours() >= 6 && date.getHours() <= 12){
    backgroundAtualization.style.backgroundColor = "var(--background-color-day--)"
  }else if(date.getHours() > 12 && date.getHours() <= 18){
    backgroundAtualization.style.backgroundColor = "var(--background-color-afternoon--)"
  }else{
    backgroundAtualization.style.backgroundColor = "var(--background-color-night--)"
  }
}

function changeImage(){
  const imgTag = document.querySelector(".box-model")
  imgTag.innerHTML = `<img>`
  const img = document.querySelector('img')
  if(date.getHours() >= 6 && date.getHours() <= 12){
    img.setAttribute(`src`,`./day.jpg`)
  }else if(date.getHours() > 12 && date.getHours() <= 18){
    img.setAttribute(`src`,`./afternoon.jpg`)
  }else{
    img.setAttribute(`src`,`./night.jpg`)
  }
}   
