function Start(){
canvas.show()
}
function Stop(){
  canvas.hide()
  }
  var b=0
  function draw1(){
    b=1
    console.log(b)
    }
function clear(){
  canvas.clear};
function preload() {
  classifier = ml5.imageClassifier("DoodleNet");
  
}

function setup() {
  canvas = createCanvas(280, 280);
  canvas.center();
  background("white");
  canvas.hide()
}

function draw() {
  
  if(b==1){
    console.log("drawing")
stroke("red")
strokeWeight(28)
if(mouseIsPressed){
line(pmouseX,pmouseY,mouseX,mouseY)
}
  }
}
