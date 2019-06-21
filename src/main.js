let game;
let bgImg;
let songButton;
// let logoTwoImg;

function preload() {
  bgImg = loadImage("assets/cardboard_ivan.jpg");
  // logoTwoImg = loadImage("assets/shortcutz_logo2.png");
  songButton = loadSound("assets/button-05.wav");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  // game.setup();

  drawStartScreen();
}

let players = 2;

function drawStartScreen() {
  // image(logoTwoImg, 0, 0, WIDTH, HEIGHT);
  image(bgImg, 0, 0, WIDTH, HEIGHT);
  button = createButton("Start Game");
  button.position(540, 250);
  buttonp2 = createButton("2 Player");
  buttonp3 = createButton("3 Player");
  buttonp4 = createButton("4 Player");
  buttonp2.position(360, 400);
  buttonp3.position(560, 400);
  buttonp4.position(760, 400);

  buttonp4.style(
    "background-image: linear-gradient(to bottom right, lime,green);border-radius:8px; color:white;border:2px solid white;padding:20px;box-shadow: 10px 5px 5px black; font-size:2rem; "
  );

  // buttonp4.mouseOut(() =>
  //   buttonp4.style(
  //     "background-image: linear-gradient(to bottom right, lime,green);border-radius:8px; color:white;border:2px solid white;padding:20px;box-shadow: 10px 5px 5px black; font-size:2rem; "
  //   )
  // );

  // buttonp4.mouseOver(() =>
  //   buttonp4.style(
  //     "background-image: linear-gradient(to bottom right, green,black);border-radius:8px; color:white;border:2px solid white;padding:20px;box-shadow: 10px 5px 5px black; font-size:2rem; "
  //   )
  // );

  buttonp2.style(
    "background-image: linear-gradient(to bottom right, red,maroon);border-radius:8px; color:white;border:2px solid white;padding:20px;box-shadow: 10px 5px 5px black; font-size:2rem; "
  );
  buttonp3.style(
    "background-image: linear-gradient(to bottom right, blue,navy);border-radius:8px; color:white;border:2px solid white;padding:20px;box-shadow: 10px 5px 5px black; font-size:2rem; "
  );

  button.style(
    "background-image: linear-gradient(to bottom right, yellow,orange);border-radius:8px; color:white;border:2px solid white;padding:20px;box-shadow: 10px 5px 5px black; font-size:2rem; "
  );

  buttonp2.mousePressed(() => {
    players = 2;
    songButton.play();
  });

  buttonp3.mousePressed(() => {
    players = 3;
    songButton.play();
  });
  buttonp4.mousePressed(() => {
    players = 4;
    songButton.play();
  });

  button.mousePressed(() => {
    game = new Game(players || 2);
    songButton.play();
    game.setup();
    button.remove();
    buttonp2.remove();
    buttonp3.remove();
    buttonp4.remove();

    return (game.startScreen = false);
  });
}

function draw() {
  if (game) {
    if (game.gameOver === false && !game.startScreen) {
      game.draw();
    } else if (game.gameOver) {
      game.drawOver();
    }
  }

  // player.draw();
}

function keyPressed() {
  if (keyCode === 32) {
    game.diceroll();
  }

  if (game && game.playerTurn !== -1)
    game.newPlayerArray[game.playerTurn % game.newPlayerArray.length].move();
}

window.addEventListener(
  "keydown",
  function(e) {
    // space and arrow keys
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
    }
  },
  false
);

//KATTA
// function distinctDigitYear(year) {
//   for (let i = 2013 + 1; i <= 9000; i++) {
//     let yearDigits = i.toString().split("");

//     let uniqueDigits = yearDigits.filter(function(digit) {
//       if (yearDigits.indexOf(digit) === yearDigits.lastIindexOf(digit))
//         return true;
//     });
//   }
//   if (uniqueDigits.lenght === yearDigits.length) return i;
// }
