const game = new Game();
// const player = new Player(0, 0, true);

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  game.setup();
}

function draw() {
  game.draw();
  // player.drawPlayer();
}

function keyPressed() {
  game.player.move();
}
