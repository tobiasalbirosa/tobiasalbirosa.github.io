class App {

  constructor() {

    this.pantalla = 0
      this.cantidadDePantallas = 9
      this.instanciaPantalla = []
      this.tiempoParaCambiar = 0
      this.pantallas = []
      this.textos = []
      this.imgs = []

      this.botonInicio = new Boton(width/4, height/2, width/10, height/20, "Iniciar")
      this.botonCreditos = new Boton(width/2, height/2, width/10, height/20, "Créditos")
      this.irainicio = new Boton(width/2-width/4, height/2, width/10, height/20, "Inicio")

      this.siguiente = new Boton(width/2, height/2, width/10, height/20, "Siguiente")
      this.volver = new Boton(width/2-width/4, height/2, width/10, height/20, "Volver")

      for (let i = 0; i < this.cantidadDePantallas; i++) {

      this.instanciaPantalla[i] = new Pantalla(i)
    }
  }
  actualizar() {
    this.tiempoParaCambiar++

      if ( this.tiempoParaCambiar > 60) {
      this.cambiable = true
    }
  }
  dibujar() {



    if (this.pantalla == 0) {

        this.instanciaPantalla[this.pantalla].dibujar()
        this.botonInicio.dibujar()
        this.botonCreditos.dibujar()
        
    } else if (this.pantalla == 1) {

        this.instanciaPantalla[this.pantalla].dibujar()
        this.volver.dibujar()
    
    } else if (this.pantalla == 2) {

        this.instanciaPantalla[this.pantalla].dibujar()
        this.irainicio.dibujar()
        this.siguiente.dibujar()
    
    } else if (this.pantalla == 3) {

        this.instanciaPantalla[this.pantalla].dibujar()
        this.volver.dibujar()
        this.siguiente.dibujar()
    } else if (this.pantalla == 4) {

      this.instanciaPantalla[this.pantalla].dibujar()
      this.volver.dibujar()
      this.siguiente.dibujar()
    }
  }

  cambiarPantalla(param) {


    if ( this.cambiable == true) {


      console.log("ir a:", param)
        if (param  == "creditos") {
        this.pantalla = 1
          console.log("ir a creditos:", param)
      } else if (param == "irainicio") {
        this.pantalla = 0
      } else if (param == "volver") {
        this.pantalla--
      } else if (param == "Siguiente") {
        this.pantalla++
      } else if (param == 2) {
        this.pantalla = 2
      }

      this.cambiable = false
        this.tiempoParaCambiar = 0
    }
  }
}
