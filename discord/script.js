function toggleMode() {
  const html = document.body

  //if(html.classList.contains('light')){
  //  html.classList.remove('light')
  //} else {
  //  html.classList.add('light')
  //}

  html.classList.toggle("light")

  //Pegar a tag image
  const img = document.querySelector("#profile img")

  //Substituir a imagem
  if (html.classList.contains("light")) {
    // Se tiver light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto do Mayk de oculos")
  } else {
    //set tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto do Mayk sem oculos")
  }
}
