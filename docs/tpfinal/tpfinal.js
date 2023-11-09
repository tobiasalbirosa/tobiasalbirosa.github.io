let app

function setup() {
  //console.log();
  fetch("http://127.0.0.1:8922/prueba.json").then((response) => {
    response.json().then(data => {
      console.log(data.textos[0])
    })
  })
  createCanvas(windowWidth, windowHeight)
  background(120)
  app = new App()
  
  
}


function draw() {
  app.dibujar()
}


function mousePressed(){

 app.mousePressed()
}
