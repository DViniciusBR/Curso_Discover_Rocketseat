function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //Pode utilizar a função toggle ou o condicional

  /*if (html.classList.contains("light")) {
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  }*/
  
  const img = document.querySelector("#profile img")

  if (html.classList.contains('light')) {
    img.setAttribute('src', '../assets/avatar_black.png')
  } else{
    img.setAttribute('src', '../assets/avatar_light.png')
  }
}
