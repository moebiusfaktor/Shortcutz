class Player {
  constructor() {
    this.direction = "right";
    this.row = 2;
    this.col = 1;
  }

  setup() {
    this.img = loadImage("/Shortcutz/assets/Monopoly-grey.png");
  }

  draw() {
    image(this.img, this.col * 30, this.row * 30, 25, 25);
  }

  move() {
    if (keyCode === RIGHT_ARROW) this.moveRight();
    if (keyCode === DOWN_ARROW) this.moveDown();
    if (keyCode === UP_ARROW) this.moveUp();
  }
  moveRight() {
    if (game.board.grid[this.row][this.col + 1]) this.col += 1;
  }

  moveUp() {
    if (game.board.grid[this.row - 1][this.col]) this.row -= 1;
  }

  moveDown() {
    if (game.board.grid[this.row + 1][this.col]) this.row += 1;
    else if (game.board.grid[this.row + 1][this.col + 1]) {
      this.row += 1;
      this.col += 1;
    }
  }
}
