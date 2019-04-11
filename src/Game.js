import TileMap from './TileMap'
import Map01 from './maps/Map01'
import Player from './Player';

export default class Game {
  constructor ({ fps = 30, canvas = null }) {
    this.fps = fps
    this.canvas = canvas
    this.context = this.canvas.getContext('2d')
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.context.translate(this.canvas.width / 2, 50)

    this.players = []
  }

  async run () {
    this.tileMap = new TileMap({
      context: this.context
    })

    await this.tileMap.loadTileMap({
      tileMapName: './assets/ground-tiles.png'
    })

    this.grid = Map01
    this.players.push(new Player({ context: this.context, grid: this.grid }))

    this.loop()
  }

  loop () {
    this.context.clearRect(this.canvas.width / 2, 0, -this.canvas.width, this.canvas.height)

    for(var y = 0; y < this.grid.length; y++)
      for(var x = 0; x < this.grid[y].length; x++) {
        this.tileMap.drawImageTile({
          x,
          y,
          index: this.grid[y][x]
        });
      }

    for (var i = 0; i < this.players.length; i++) {
      this.players[i].draw()
    }

    requestAnimationFrame(() => this.loop())
  }
}
