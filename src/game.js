let playerArray = [
  new Player(11, 26, 1, "Player 1", 250),
  new Player(3, 1, 2, "Player 2", 290),
  new Player(4, 1, 3, "Player 3", 330),
  new Player(5, 1, 4, "Player 4", 370)
];

class Game {
  constructor(number) {
    this.board = new Board();
    this.newPlayerArray = [];
    this.playerTurn = -1;
    this.playerNumber = number;
    this.questionAsked = false;
    this.gameOver = false;
  }

  setup() {
    this.board.setup();
    this.imageWin = loadImage("assets/winner.jpg");
    for (let i = 0; i < this.playerNumber; i++) {
      this.newPlayerArray.push(playerArray[i]);
      this.newPlayerArray[this.newPlayerArray.length - 1].setup();
    }
  }

  draw() {
    clear();
    this.board.draw();
    this.newPlayerArray.forEach(function(player) {
      player.draw();
    });

    if (this.moves !== undefined) {
      // image(player.playerImageNumber, 5, this.displayScore, 25, 25);
      let s =
        this.newPlayerArray[this.playerTurn % this.playerNumber].playerName +
        " you got " +
        this.moves +
        " moves";
      fill(50);
      text(s, 700, 20, 240, 240);
      textSize(13);
    }
  }

  drawOver() {
    image(this.imageWin, 700, 200, 500, 500);
  }

  diceroll() {
    if (
      // keyCode === 32 &&
      (this.moves === 0 || this.moves === undefined) &&
      this.questionAsked === false
    ) {
      let dice1 = Math.ceil(Math.random() * 6);
      let dice2 = Math.ceil(Math.random() * 6);
      let moves = dice1 + dice2;
      this.moves = moves;
      this.playerTurn++;
    }
  }
}
