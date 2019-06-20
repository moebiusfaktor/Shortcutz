class Board {
  constructor() {
    this.grid = grid;
    this.grid[1][7] = { color: "cyan", points: 100, bonus: "" };
    this.grid[1][8] = { color: "red", points: 100, bonus: "" };
    this.grid[1][9] = { color: "grey", points: 100, bonus: "" };
    this.grid[1][10] = { color: "black", points: -200, bonus: "" };
    this.grid[1][11] = { color: "grey", points: 100, bonus: "" };
    this.grid[1][12] = { color: "red", points: 100, bonus: "" };
    this.grid[1][13] = { color: "black", points: -200, bonus: "" };
    this.grid[1][14] = { color: "grey", points: 100, bonus: "" };
    this.grid[1][15] = { color: "black", points: -200, bonus: "" };
    this.grid[1][16] = { color: "red", points: 100, bonus: "" };
    this.grid[1][17] = { color: "black", points: -200, bonus: "" };
    this.grid[1][18] = { color: "grey", points: 100, bonus: "" };
    this.grid[1][19] = { color: "black", points: -200, bonus: "" };

    this.grid[2][1] = { color: "yellow", points: 0, bonus: "" };
    this.grid[2][2] = { color: "red", points: 100, bonus: "" };
    this.grid[2][3] = { color: "red", points: 100, bonus: "" };
    this.grid[2][4] = { color: "red", points: 100, bonus: "" };
    this.grid[2][5] = { color: "blue", points: 200, bonus: "" };
    this.grid[2][6] = { color: "red", points: 100, bonus: "" };
    this.grid[2][16] = { color: "red", points: 100, bonus: "" };
    this.grid[2][20] = { color: "red", points: 100, bonus: "" };

    this.grid[3][1] = { color: "yellow", points: 0, bonus: "" };
    this.grid[3][3] = { color: "blue", points: 200, bonus: "" };
    this.grid[3][7] = { color: "grey", points: 100, bonus: "" };
    this.grid[3][8] = { color: "grey", points: 100, bonus: "" };
    this.grid[3][16] = { color: "red", points: 100, bonus: "" };
    this.grid[3][21] = { color: "black", points: -200, bonus: "" };

    // function extraMove2(){ return player.move +=2}
    // this.grid[3][8].bonus || console.log('no bonus')

    this.grid[4][1] = { color: "yellow", points: 0, bonus: "" };
    this.grid[4][3] = { color: "grey", points: 100, bonus: "" };
    this.grid[4][9] = { color: "black", points: -200 };
    this.grid[4][16] = { color: "red", points: 100 };
    this.grid[4][22] = { color: "red", points: 100 };

    this.grid[5][1] = { color: "yellow", points: 0 };
    this.grid[5][3] = { color: "red", points: 100 };
    this.grid[5][4] = { color: "orange", points: 100 };
    this.grid[5][10] = { color: "black", points: -200 };
    this.grid[5][16] = { color: "red", points: 100 };
    this.grid[5][23] = { color: "black", points: -200 };

    this.grid[6][3] = { color: "blue", points: 200 };
    this.grid[6][5] = { color: "black", points: -200 };
    this.grid[6][11] = { color: "red", points: 100 };
    this.grid[6][16] = { color: "red", points: 100 };
    this.grid[6][24] = { color: "red", points: 100 };

    this.grid[7][3] = { color: "grey", points: 100 };
    this.grid[7][6] = { color: "black", points: -200 };
    this.grid[7][12] = { color: "black", points: -200 };
    this.grid[7][16] = { color: "red", points: 100 };
    this.grid[7][25] = { color: "black", points: -200 };

    this.grid[8][3] = { color: "blue", points: 200 };
    this.grid[8][7] = { color: "red", points: 100 };
    this.grid[8][13] = { color: "black", points: -200 };
    this.grid[8][16] = { color: "red", points: 100 };
    this.grid[8][26] = { color: "grey", points: 100 };

    this.grid[9][3] = { color: "grey", points: 100 };
    this.grid[9][8] = { color: "red", points: 100 };
    this.grid[9][14] = { color: "grey", points: 100 };
    this.grid[9][15] = { color: "red", points: 100 };
    this.grid[9][16] = { color: "black", points: -200 };
    this.grid[9][17] = { color: "grey", points: 100 };
    this.grid[9][18] = { color: "black", points: -200 };
    this.grid[9][19] = { color: "black", points: -200 };
    this.grid[9][20] = { color: "cyan", points: 100 };
    this.grid[9][21] = { color: "black", points: -200 };
    this.grid[9][22] = { color: "red", points: 100 };
    this.grid[9][23] = { color: "red", points: 100 };
    this.grid[9][24] = { color: "orange", points: 100 };
    this.grid[9][27] = { color: "grey", points: 100 };

    this.grid[10][3] = { color: "grey", points: 100 };
    this.grid[10][9] = { color: "black", points: -200 };
    this.grid[10][25] = { color: "black", points: -200 };
    this.grid[10][28] = { color: "black", points: -200 };

    this.grid[11][3] = { color: "grey", points: 100 };
    this.grid[11][10] = { color: "black", points: -200 };
    this.grid[11][26] = { color: "black", points: -200 };
    this.grid[11][29] = { color: "green", points: 1000 }; //final challenge

    this.grid[12][4] = { color: "red", points: 100, bonus: "" };
    this.grid[12][10] = { color: "grey", points: 100, bonus: "" };
    this.grid[12][27] = { color: "grey", points: 100, bonus: "" };
    this.grid[12][28] = { color: "grey", points: 100, bonus: "" };
    this.grid[13][5] = { color: "black", points: -200, bonus: "" };
    this.grid[13][6] = { color: "grey", points: 100, bonus: "" };
    this.grid[13][7] = { color: "grey", points: 100, bonus: "" };
    this.grid[13][8] = { color: "blue", points: 200, bonus: "" };
    this.grid[13][9] = { color: "grey", points: 100, bonus: "" };
    this.grid[13][10] = { color: "grey", points: 100, bonus: "" };
    this.grid[13][11] = { color: "blue", points: 200, bonus: "" };
    this.grid[13][12] = { color: "orange", points: 100, bonus: "" };
    this.grid[13][13] = { color: "blue", points: 200, bonus: "" };
    this.grid[13][14] = { color: "grey", points: 100, bonus: "" };
    this.grid[13][15] = { color: "blue", points: 200, bonus: "" };
    this.grid[13][16] = { color: "black", points: -200, bonus: "" };
    this.grid[13][17] = { color: "blue", points: 200, bonus: "" };
    this.grid[13][18] = { color: "grey", points: 100, bonus: "" };
    this.grid[13][19] = { color: "cyan", points: 100, bonus: "" };
    this.grid[13][20] = { color: "blue", points: 200, bonus: "" };
    this.grid[13][21] = { color: "blue", points: 200, bonus: "" };
    this.grid[13][22] = { color: "grey", points: 100, bonus: "" };
    this.grid[13][23] = { color: "grey", points: 100, bonus: "" };
    this.grid[13][24] = { color: "blue", points: 200, bonus: "" };
    this.grid[13][25] = { color: "grey", points: 100, bonus: "" };
    this.grid[13][26] = { color: "grey", points: 100, bonus: "" };

    //    this.grid[5][1] = { color: "red", points: 100 };

    console.log(this.grid);
  }

  setup() {}
  drawGrid() {
    background("white");

    strokeWeight(0);

    for (let row = 0; row < this.grid.length; row++) {
      for (let col = 0; col < this.grid[row].length; col++) {
        const square = this.grid[row][col];

        fill(square.color || "white");

        circle(col * 30 + 10, row * 30 + 10, 20);
      }
    }
  }

  draw() {
    this.drawGrid();

    // fill("yellow");
    // rect(25, 55, SQUARE_SIDE - 10, SQUARE_SIDE - 10);
    // fill("green");
    // rect(835, 355, SQUARE_SIDE - 10, SQUARE_SIDE - 10);
  }
}
