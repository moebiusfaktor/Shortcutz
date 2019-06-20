let song;
let song2;
let songBg;
let input;
let button;
let question;

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
    songBg = loadSound("/Shortcutz/assets/EtyenElephantInTheRoom.m4a");
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
    if (game.questionAsked === true) return;

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

    if (space.color === "green") {
      prevMoves = 1;
      game.moves = 0;
    }
    if (game.moves === 0 && prevMoves === 1) {
      // POINTS ATTRIBUTION
      let score = this.playerCoins + game.board.grid[this.row][this.col].points;
      this.playerCoins = score;

      // KICKBACK
      game.newPlayerArray.forEach(player => {
        if (
          this.playerName !== player.playerName &&
          this.row == player.row &&
          this.col == player.col &&
          space.color !== "red"
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

      // if (keyCode === 77) {
      //   player.songBg.play();
      // }

      if (space.color === "red") {
        // ASK A QUESTION

        const randomIndex = Math.floor(Math.random() * quizArray.length);
        const quiz = quizArray[randomIndex];

        question = createElement("p", quiz.question);
        question.position(400, 400);

        input = createInput();
        input.position(500, 440);
        button = createButton("submit");
        button.position(540, 465);

        game.questionAsked = true;

        button.mousePressed(() => {
          console.log(input.value());
          console.log(quiz.answer);
          if (input.value().toLowerCase() === quiz.answer) {
            this.playerCoins += 300;

            game.newPlayerArray.forEach(player => {
              if (
                this.playerName !== player.playerName &&
                this.row == player.row &&
                this.col == player.col
              ) {
                player.row = prevPositionCopy[0];
                player.col = prevPositionCopy[1];
                player.prevPosition = this.prevPosition;
                song2.play();
              }
            });
          } else {
            this.row = prevPositionCopy[0];
            this.col = prevPositionCopy[1];
          }

          question.hide();
          input.hide();
          button.hide();

          game.questionAsked = false;
        });
      }

      if (space.color === "green") {
        // game.moves = 0;

        const randomIndex = Math.floor(Math.random() * quizArray.length);
        const quiz = quizArray[randomIndex];

        question = createElement("p", quiz.question);
        question.position(400, 400);

        input = createInput();
        input.position(500, 440);
        button = createButton("submit");

        game.questionAsked = true;

        button.position(540, 465);
        button.mousePressed(() => {
          console.log(input.value());
          console.log(quiz.answer);
          if (input.value().toLowerCase() === quiz.answer) {
            question.hide();
            input.hide();
            button.hide();
            game.gameOver = true;
          } else {
            this.row = prevPositionCopy[0];
            this.col = prevPositionCopy[1];
            question.hide();
            input.hide();
            button.hide();
            game.questionAsked = false;
          }
        });
        setTimeout(() => {
          question.hide();
          input.hide();
          button.hide();
          this.row = prevPositionCopy[0];
          this.col = prevPositionCopy[1];

          game.questionAsked = false;
        }, this.playerCoins * 10);
      }
    }

    if (space.color === "blue") {
      if (keyCode === 69) {
        game.moves = 0;
        game.newPlayerArray.forEach(player => {
          if (
            this.playerName !== player.playerName &&
            this.row == player.row &&
            this.col == player.col
          ) {
            player.row = prevPositionCopy[0];
            player.col = prevPositionCopy[1];
            player.prevPosition = this.prevPosition;
            song2.play();
          }
        });
        // game.playerTurn++;
      }
    }

    if (space.color === "orange" && game.moves == 0 && keyCode === 51) {
      game.moves = game.moves + 2;
    }

    if (space.color === "cyan") {
      let rowLength = game.board.grid[0].length;
      let portals = game.board.grid
        .flat()
        .map(function(el, i) {
          let obj = Object.assign({}, el);
          let row = Math.floor(i / rowLength);
          let col = i % rowLength;
          obj.row = row;
          obj.col = col;
          return obj;
        })
        .filter(function(el) {
          if (el.color === "cyan") {
            return true;
          }
        })
        .map(function(el) {
          return [el.row, el.col];
        });
      let randPortal = portals[Math.floor(Math.random() * portals.length)];
      if (this.row == randPortal.row && this.col == randPortal.col) {
        console.log("minimin");
        // this.row =
        // this.col =
      }
      console.log(randPortal);
      // select a random portal from the portals array
      // switch player row & col with the picked square's coordinates
      //debugger;
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
