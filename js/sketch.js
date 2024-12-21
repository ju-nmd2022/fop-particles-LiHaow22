//import Fire from "./fire.js";
import Snow from "./snow.js";
import Bubble from "./bubble.js";

let particles = [];

function setup() {
  createCanvas(innerWidth, innerHeight);
}
window.setup = setup;

function draw() {
  background(0, 0, 0);

  for (let particle of particles) {
    particle.draw();
    particle.update();
    if (particle.isDead()) {
      const particleIndex = particles.indexOf(particle);
      particles.splice(particleIndex, 1);
    }
  }
}
window.draw = draw;
/*
function mouseClicked() {
  for (let i = 0; i < 100; i++) {
    let particle = new Fire(mouseX, mouseY);
    particles.push(particle);
  }
}
window.mouseClicked = mouseClicked;*/

function mouseClicked() {
  for (let i = 0; i < 100; i++) {
    let particle = new Snow(mouseX, mouseY);
    particles.push(particle);
  }
}
window.mouseClicked = mouseClicked;

function keyPressed() {
  // Check if the space bar is pressed
  if (keyIsDown(32)) {
    particles.push(new Bubble(width / 2, height / 2));
    //console.log("works");
  }
}
window.keyPressed = keyPressed;
