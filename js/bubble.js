import Particle from "./particle.js";
let colorChange = 0;
export default class Bubble extends Particle {
  constructor(x, y) {
    super(x, y);
    this.size = 10 + Math.random() * 10; // Initial size
    this.growthRate = 0.2 + Math.random() * 0.5; // Growth rate
    this.velocity = -1 - Math.random(); // Upward movement speed
    this.opacity = 255; // Start fully visible
    this.life = 0;
    this.maxLife = 100 + Math.floor(Math.random() * 100); // Random lifespan
  }

  update() {
    this.y += this.velocity; // Move upward
    this.size += this.growthRate; // Bubble grows
    this.life++;
    this.opacity = 255 * (1 - this.life / this.maxLife); // Fade out over time
  }

  draw() {
    push();
    translate(this.x, this.y);
    stroke(255);
    colorChange = colorChange + Math.random() * 20;
    if (colorChange >= 255) {
      colorChange = 0;
    }
    //console.log(colorChange);
    fill(10, 120, colorChange, this.opacity); // Light blue bubble
    ellipse(0, 0, this.size); // Draw bubble
    pop();
  }

  isDead() {
    return this.life > this.maxLife; // Bubble pops after its lifespan
  }
}

//for (let i = 0;) {}
