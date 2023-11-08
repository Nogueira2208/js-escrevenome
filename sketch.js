function setup() {
    createCanvas(600, 600);
    background("pink");  
    }
  
  function draw() {
    stroke("black");
    strokeWeight(5);
    fill("rgb(0,255,233)");
    if(mouseIsPressed){
    rect(mouseX, mouseY, 40, 40);
    }
  }