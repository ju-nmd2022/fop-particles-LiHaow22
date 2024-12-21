import Particle from "./particle.js";

export default class Snow extends Particle {
  constructor(x, y) {
    super(x, y);
    this.size = 5 + Math.random() * 6; // Random size
    this.swing = Math.random() * 50; // Tilt factor going right
    this.opacity = 25;
    this.velocity = 8;
    this.life = 100;
    this.maxLife = 50 + Math.floor(Math.random() * 100);
  }

  update() {
    this.y += 5; // Fall down speed
    this.x += Math.random(this.life * this.swing); // Tilted fall to the right
    this.life++;
    this.opacity = 255 * (1 - this.life / this.maxLife); // Fade out
    this.velocity = 0.8 + Math.random();
    //console.log(this.x);
  }

  draw() {
    push();
    translate(this.x, this.y);
    noStroke();
    fill(255, 255, 255, this.opacity);
    ellipse(0, 0, this.size);
    pop();
  }

  isDead() {
    return this.life > this.maxLife;
  }
}
