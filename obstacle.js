class Obstacle {
  constructor() {
    this.x = random(0 + 10, width - 50);
    this.y = random(-500, 0);
    this.velocity = 1;
  }

  show() {
    fill(255, 0, 0);
    rect(this.x, this.y, 50, 50);
  }
  move(level) {
    this.velocity = level;

    this.y += this.velocity;
  }
}
