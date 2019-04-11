export default class Player {
  constructor ({ x = 0, y = 0, context, grid }) {
    this.x = 0
    this.y = 0
    this.context = context
    this.grid = grid
    this.playerMap = null
    this.playerWidth = 128
    this.playerHeight = 128

    this.loadPlayerMap()
  }

  loadPlayerMap () {
    let playerMap = document.createElement("img")
    playerMap.addEventListener("load", () => {
      this.playerMap = playerMap
      document.body.addEventListener("keydown", (e) => this.move(e));
    })
    playerMap.src = './assets/player-tiles.png'
  }

  move (event) {
    switch (event.keyCode) {
      case 37:
        if (this.canMove(this.x - 1, this.y)) {
          this.x--;
        }
        break;
      case 38:
        if (this.canMove(this.x, this.y - 1)) {
          this.y--;
        }
        break;
      case 39:
        if (this.canMove(this.x + 1, this.y)) {
          this.x++;
        }
        break;
      case 40:
        if (this.canMove(this.x, this.y + 1)) {
          this.y++;
        }
        break;
    }
  }

  canMove (x, y) {
    x = Math.floor(x);
    y = Math.floor(y);
    if (y < 0 || y >= this.grid.length) {
      return false;
    }
    if (x < 0 || x >= this.grid[y].length) {
      return false;
    }
    return true;
  }

  draw () {
    if (this.playerMap === null) return

    this.context.save()
    this.context.translate((this.x - this.y) * this.playerWidth / 2, (this.x + this.y) * this.playerHeight / 4)

    this.context.drawImage(this.playerMap, 0, 0, this.playerWidth, this.playerMap.height,
      -this.playerHeight / 2, 128, this.playerWidth, this.playerMap.height)

    this.context.restore()
  }
}
