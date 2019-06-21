let playerArray = [
  new Player(2, 1, 1, "Player 1", 250),
  new Player(3, 1, 2, "Player 2", 290),
  new Player(4, 1, 3, "Player 3", 330),
  new Player(5, 2, 4, "Player 4", 370)
];

class Game {
  constructor(number) {
    this.board = new Board();
    this.newPlayerArray = [];
    this.playerTurn = -1;
    this.playerNumber = number;
    this.questionAsked = false;
    this.startScreen = true;
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
    image(bgImg, 0, 0);
    this.board.draw();
    this.newPlayerArray.forEach(function(player) {
      player.draw();
    });

    if (this.moves !== undefined) {
      // image(player.playerImageNumber, 5, this.displayScore, 25, 25);
      let question = createElement(
        "p",
        this.newPlayerArray[this.playerTurn % this.playerNumber].playerName +
          " you got " +
          this.moves +
          " moves"
      );
      question.parent("canvas");

      question.style(
        "background-color:black; color:white ; padding: 10px 15px; font-size: 1rem; text-align:center"
      );
      question.position(WIDTH - 150, 150);
    }
  }

  drawOver() {
    image(this.imageWin, 0, 0, width, height);
  }

  diceroll() {
    if (
      // keyCode === 32 &&
      (this.moves === 0 || this.moves === undefined) &&
      this.questionAsked === false
    ) {
      let dice1 = Math.ceil(Math.random() * 8);
      let dice2 = Math.ceil(Math.random() * 8);
      let moves = dice1 + dice2;
      this.moves = moves;
      this.playerTurn++;
    }
  }
}
