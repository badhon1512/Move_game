class Car {
  constructor() {
    this.x = width / 2 - 75;
    this.y = height - 60;
    this.life = 3;
  }

  lifeChange() {
    this.life--;

    return this.life;
  }

  show() {
    ///  console.log("sho");

    if (this.life === 3) {
      fill(0, 250, 0);
    } else if (this.life === 2) {
      fill(255, 255, 0);
    } else if (this.life === 1) {
      fill(255, 0, 0);
    }

    rect(this.x, this.y, 150, 50);
  }

  move(l) {
    if (this.x + 100 < width - 19 && l > 0) {
      this.x += l;
    }

    if (this.x + l > 0 && l < 0) {
      this.x += l;
    }
  }
}
