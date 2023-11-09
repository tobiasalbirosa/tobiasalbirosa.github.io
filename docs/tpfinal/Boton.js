class Boton {

  constructor(x, y, tamX, tamY, texto) {
    this.x = x
      this.y = y
      this.tamX = tamX
      this.tamY = tamY
      this.estado = "on"
      this.texto = texto

      this.colores = [ color(20), color(120), color(255)]
      this.colorFill = this.colores[0]
  }

  actualizar() {
    if (mouseX > this.x && mouseX < this.x + this.tamX && mouseY > this.y && mouseY < this.y + this.tamY) {
      this.colorFill = this.colores[1]
        if (mouseIsPressed == true) {
        this.colorFill = this.colores[2]
        this.evento(this.texto)
      }
    } else {
      this.colorFill = this.colores[0]
    }
  }
  evento(texto){
    //this.estado == texto
  }
  dibujar() {
    this.actualizar()
      fill(this.colorFill)
      rect(this.x, this.y, this.tamX, this.tamY)
      text(this.texto, this.x + this.tamX/4, this.y + this.tamY/2)
  }
}
