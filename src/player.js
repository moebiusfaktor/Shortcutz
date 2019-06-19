let song;
let song2;
let input;
let button;

class Player {
  constructor(row, col, img, name, pos) {
    this.direction = "right";
    this.row = row;
    this.col = col;
    this.playerImageNumber = img;
    this.playerName = name;
    this.playerCoins = 0;
    this.displayScore = pos;
    this.prevPosition = [this.row, this.col];
  }

  // preload();{
  // song = loadSound ("/Shortcutz/assets/NFF-robo-toggle.wav")
  // song2 = loadSound ("/Shortcutz/assets/NFF-ugly-alarm.wav")
  // }

  setup() {
    this.image = loadImage(`assets/img${this.playerImageNumber}.png`);
    song = loadSound("/Shortcutz/assets/NFF-robo-toggle.wav");
    song2 = loadSound("/Shortcutz/assets/NFF-ugly-alarm.wav");
  }

  draw() {
    image(this.image, this.col * 30, this.row * 30, 25, 25);
    image(this.image, 5, this.displayScore, 25, 25);
    let t = this.playerCoins;
    fill(50);
    text(t, 30, this.displayScore + 7, 220, 220);
    textSize(13);
  }

  move() {
    let prevMoves = game.moves;
    if (game.moves > 0) {
      if (keyCode === RIGHT_ARROW) this.moveRight();
    }
    if (game.moves > 0) {
      if (keyCode === DOWN_ARROW) this.moveDown();
    }
    if (game.moves > 0) {
      if (keyCode === UP_ARROW) this.moveUp();
    }

    let space = game.board.grid[this.row][this.col];

    if (game.moves === 0 && prevMoves === 1) {
      // POINTS ATTRIBUTION
      let score = this.playerCoins + game.board.grid[this.row][this.col].points;
      this.playerCoins = score;

      // KICKBACK
      game.newPlayerArray.forEach(player => {
        if (
          this.playerName !== player.playerName &&
          this.row == player.row &&
          this.col == player.col
        ) {
          player.row = this.prevPosition[0];
          player.col = this.prevPosition[1];
          player.prevPosition = this.prevPosition;
          song2.play();
        }
      });

      // sets a copy of the previous position, to allow challenge kickback
      let prevPositionCopy = this.prevPosition.slice();
      // sets the previous position to the current after the turn
      this.prevPosition = [this.row, this.col];

      if (space.color === "red") {
        // ASK A QUESTION

        const randomIndex = Math.floor(Math.random() * quizArray.length);
        const quiz = quizArray[randomIndex];

        const question = createElement("p", quiz.question);
        question.position(20, 100);

        input = createInput();
        input.position(20, 130);
        button = createButton("submit");
        button.position(input.x + input.width, 130);
        button.mousePressed(() => {
          console.log(input.value());
          console.log(quiz.answer);
          if (input.value().toLowerCase() === quiz.answer) {
            this.playerCoins += 500;
          } else {
            this.row = prevPositionCopy[0];
            this.col = prevPositionCopy[1];
            // player.row = this.prevPosition[0];
            // player.col = this.prevPosition[1];
          }

          question.hide();
          input.hide();
          button.hide();
        });
      }
    }

    if (space.color === "green") {
      game.moves = 0;
      let score = this.playerCoins + game.board.grid[this.row][this.col].points;
      if (prevMoves > 0) this.playerCoins = score;
      console.log("hooray");
    }
    console.log(this.playerCoins);

    game.newPlayerArray.forEach(function(player) {
      console.log(player.playerName, player.playerCoins);
    });
  }

  moveRight() {
    if (game.board.grid[this.row][this.col + 1]) {
      game.moves = game.moves - 1;
      this.col += 1;
      song.play();
    }
  }

  moveUp() {
    if (game.board.grid[this.row - 1][this.col]) {
      game.moves = game.moves - 1;
      this.row -= 1;
      song.play();
    } else if (game.board.grid[this.row - 1][this.col + 1]) {
      game.moves = game.moves - 1;
      this.row -= 1;
      this.col += 1;
      song.play();
    }
  }

  moveDown() {
    if (game.board.grid[this.row + 1][this.col]) {
      game.moves = game.moves - 1;
      this.row += 1;
      song.play();
    } else if (game.board.grid[this.row + 1][this.col + 1]) {
      game.moves = game.moves - 1;
      this.row += 1;
      this.col += 1;
      song.play();
    }
  }
}
