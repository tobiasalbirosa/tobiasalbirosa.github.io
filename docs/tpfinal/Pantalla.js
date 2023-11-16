class Pantalla {

  constructor(id) {

    this.id = id
      this.img = loadImage("/tpfinal/assets/"+this.id+".png")
      this.texto = ""

      fetch("/tpfinal/prueba.json").then((response) => {
      response.json().then(data => {
        this.texto  = data.textos

      }
      )
    }
    )
  }

  dibujar() {
    push()
      image(this.img, 0, 0, width, height)
      text(this.texto[this.id], width/2, height/5)
      pop()
  }
  
}
