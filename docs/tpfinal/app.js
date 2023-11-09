class App {

  constructor() {
    this.pantalla = 0
      this.botonInicio = new Boton(width/4, height/2, width/10, height/20, "Iniciar")
      this.botonCreditos = new Boton(width/2, height/2, width/10, height/20, "Créditos")
  }

  dibujar() {
    if (this.pantalla == 0) {
      background(255)
        this.botonInicio.dibujar()
        this.botonCreditos.dibujar()
    }
  }

  mousePressed() {
  }
}
