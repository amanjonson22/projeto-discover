function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se tiver sem light mode, manter imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }

  //substituir o alt
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar alt light
    img.setAttribute(
      "alt",
      "Foto de cachorro olhando para o fundo da sua alma e fazendo você chorar. Tem dentinhos podres. É um cachorro pretinho pequeno, com orelhas para frente."
    )
  } else {
    //se tiver sem light mode, manter alt normal
    img.setAttribute(
      "alt",
      "Foto de cachorro da raça Husky Siberiano mostrando os quatro dentinhos frontais e com o nariz amassado, com fundo azul."
    )
  }
}
