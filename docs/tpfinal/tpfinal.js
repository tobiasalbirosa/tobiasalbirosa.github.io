let app

function setup() {
 
  createCanvas(windowWidth, windowHeight)
  background(120)
  textSize(48)
  app = new App()
  
}

function draw() {
  app.dibujar()
}
