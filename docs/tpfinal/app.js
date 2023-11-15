class App {

  constructor() {
    this.pantalla = 0

      this.cantidadDePantallas = 9
      this.instanciaPantalla = []

      this.pantallas = []
      this.textos = []
      this.imgs = []

      this.botonInicio = new Boton(width/4, height/2, width/10, height/20, "Iniciar")
      this.botonCreditos = new Boton(width/2, height/2, width/10, height/20, "Créditos")
      this.siguiente = new Boton(width/2, height/2, width/10, height/20, "Siguiente")
      this.volver = new Boton(width/2, height/2, width/10, height/20, "Volver")


      for (let i = 0; i < this.cantidadDePantallas; i++) {

      this.instanciaPantalla[i] = new Pantalla(i)
    }
  }

  dibujar() {
    if (this.pantalla == 0) {
      background(255)

        this.instanciaPantalla[this.pantalla].dibujar()
        this.botonInicio.dibujar()
        this.botonCreditos.dibujar()
    }

    if (this.pantalla == 1) {
      background(0)
              this.instanciaPantalla[this.pantalla].dibujar()

        this.volver.dibujar()
    }

    if (this.pantalla == 2) {
      background(255)
        this.botonInicio.dibujar()
        this.botonCreditos.dibujar()
    }
  }

  mousePressed() {
  }
}
