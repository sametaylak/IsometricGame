export default class TileMap {
  constructor ({ tileWidth = 128, tileHeight = 128, context }) {
    this.tileWidth = tileWidth
    this.tileHeight = tileHeight
    this.context = context
    this.tileMap = null
  }

  loadTileMap ({ tileMapName }) {
    return new Promise((resolve, _) => {
      let tileMap = document.createElement("img")
      tileMap.addEventListener("load", () => {
        this.tileMap = tileMap
        resolve()
      });
      tileMap.src = tileMapName
    })
  }

  drawImageTile ({ x, y, index }) {
    this.context.save()
    this.context.translate((x - y) * this.tileWidth / 2, (x + y) * this.tileHeight / 4)

    this.context.drawImage(this.tileMap, index * this.tileWidth, 0, this.tileWidth, this.tileMap.height,
      -this.tileHeight / 2, 200, this.tileWidth, this.tileMap.height)

    this.context.restore()
  }
}