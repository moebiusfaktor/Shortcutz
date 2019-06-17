// const player = new Player(0, 0, true);

class Game {
  constructor() {
    this.board = new Board();
    this.player = new Player();
  }

  setup() {
    this.board.setup();
    this.player.setup();
  }

  draw() {
    clear();
    this.board.draw();
    this.player.draw();
  }
}

// function setup() {
//   createCanvas(10, 5);
//   background(32);
//   noStroke();
//   fill(255);
//   textSize(18);
//   text("Click to roll the dice.", 20, 55);
// }

// function mousePressed() {
//   background(32);
//   var randomValue = random();
//   if (randomValue < 0.1666) {
//     text("You rolled a 1!", 25, 55);
//   } else if (randomValue < 0.3333) {
//     text("You rolled a 2!", 25, 55);
//   } else if (randomValue < 0.5) {
//     text("You rolled a 3!", 25, 55);
//   } else if (randomValue < 0.6666) {
//     text("You rolled a 4!", 25, 55);
//   } else if (randomValue < 0.8333) {
//     text("You rolled a 5!", 25, 55);
//   } else {
//     text("You rolled a 6!", 25, 55);
//   }
// }
