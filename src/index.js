import Game from './Game'
import Player from './Player';

const gameCanvas = document.getElementById('game')

new Game({
  canvas: gameCanvas
}).run()