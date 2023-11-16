class Pantalla {

  constructor(id) {

    this.id = id
      this.img = loadImage("/assets/"+this.id+".png")
      this.texto = ""

      fetch("/prueba.json").then((response) => {
      response.json().then(data => {
        this.texto  = data.textos
            this.texto[i] = this.texto[i].replaceAll("\\\\n", "\n"); 
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
