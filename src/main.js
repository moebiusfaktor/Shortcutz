const game = new Game(4);
// const player = new Player(0, 0, true);

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  game.setup();
}

function draw() {
  game.draw();
  // player.draw();
}

function keyPressed() {
  game.diceroll();
  if (game.playerTurn !== -1)
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
