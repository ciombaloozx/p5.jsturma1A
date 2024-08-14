function setup() {
  createCanvas(400, 400);
}

function inicializaCores(){
  background("yellow");
  fill("black");
  textSize(64);
  textAlign(CENTER,CENTER);
}

function draw() {
  inicializaCores();
  
  let maximo = width;
  let minimo = 1;
  let palavra = ".......ツ";
  let quantidade = map(mouseX, 0, width, 1, palavra.length);
  let parcial = palavra.substring(0,quantidade);
  text(parcial,200,200);
}
