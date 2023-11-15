class Boton {

  constructor(x, y, tamX, tamY, texto) {
    this.x = x
      this.y = y
      this.tamX = tamX
      this.tamY = tamY
      this.estado = "off"
      this.texto = texto
      this.colores = [ color(20), color(120), color(255)]

      this.colorFill = this.colores[0]
      this.colorTextFill = this.colores[2]

      this.tiempo = 0
  }

  actualizar() {
    if (this.tiempo <= 150) {
      this.tiempo++
    }
    if (this.tiempo >= 150) {
      this.estado = "on"
    }

    if (this.estado == "on" && mouseX > this.x && mouseX < this.x + this.tamX && mouseY > this.y && mouseY < this.y + this.tamY) {
      this.colorFill = this.colores[1]

        if (mouseIsPressed == true && this.estado == "on") {
        this.colorFill = this.colores[2]
          this.evento(this.texto)
      }
    } else {
      this.colorFill = this.colores[0]
    }
  }
  evento(texto) {
    //this.estado == texto

    if (texto == "Créditos") {
      app.pantalla=1
    }
      if (texto == "Inicio") {
      app.pantalla=2
    }
    
    if (texto == "Siguiente") {
      app.pantalla=+1
        this.tiempo = 0
        this.estado == "off"
    }
    if (texto == "Volver") {
      app.pantalla=1
        this.tiempo = 0
        this.estado == "off"
    }
  }
  dibujar() {
    this.actualizar()
      push()
      fill(this.colorFill)
      rect(this.x, this.y, this.tamX, this.tamY)
      fill(this.colorTextFill)
      text(this.texto, this.x + this.tamX/4, this.y + this.tamY/2)

      pop()
  }
}
