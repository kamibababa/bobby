import { CELL_SIZE, isSolid, isBlocking } from './Cell'
import Point from './Point'
import Direction from './Direction'
import Game from './Game'

export default class Player {
  public canmove: boolean
  private position: Point
  private previousPosition: Point
  private startPosition: Point
  private targetPosition: Point
  private displayPosition: Point
  private mov: number
  private timer: number
  private game: Game

  public constructor(game: Game, start: Point) {
    const startX = start.x
    const startY = start.y

    this.game = game
    this.position = new Point(startX, startY)
    this.previousPosition = this.position.clone()
    this.startPosition = new Point(startX * CELL_SIZE, startY * CELL_SIZE)
    this.targetPosition = this.startPosition.clone()
    this.displayPosition = this.startPosition.clone()
    this.canmove = true
    this.mov = 0
    this.timer = 0
  }

  public update(dt: number): void {
    // Déplace le joueur tant qu'il n'a plus de contrôles
    if (!this.canmove) {
      this.timer += dt * 5

      this.displayPosition.x = linear(this.startPosition.x, this.targetPosition.x, this.timer)
      this.displayPosition.y = linear(this.startPosition.y, this.targetPosition.y, this.timer)

      // Une fois le temps écoulé, remise à zéro du compteur, autorisation du
      // déplacement et positionne le joueur sur sa cible
      if (this.timer >= 1) {
        this.timer = 0
        this.canmove = true
        this.displayPosition = this.targetPosition.clone()

        this.game.getMap().onPassingEvent(this.position, this)
        this.game.getMap().nextStateOf(this.previousPosition)
      }
    }
  }

  public render(ctx: CanvasRenderingContext2D): void {
    if (this.mov === 0)
      ctx.fillStyle = 'red'
    else if (this.mov === 1)
      ctx.fillStyle = 'blue'
    else if (this.mov === 2)
      ctx.fillStyle = 'yellow'

    ctx.fillRect(
      this.displayPosition.x + CELL_SIZE / 4,
      this.displayPosition.y + CELL_SIZE / 4,
      CELL_SIZE / 2,
      CELL_SIZE / 2,
    )
  }

  public move(direction: Direction): void {
    if (!this.canmove)
      return

    const newMapPosition = this.position.clone()

    switch (direction) {
      case Direction.Up:
        newMapPosition.y -= 1
        break

      case Direction.Down:
        newMapPosition.y += 1
        break

      case Direction.Right:
        newMapPosition.x += 1
        break

      case Direction.Left:
        newMapPosition.x -= 1
        break
    }

    const previousCell = this.game.getMap().getCell(this.position)
    const nextCell = this.game.getMap().getCell(newMapPosition)

    if (isBlocking(previousCell, direction) || isSolid(nextCell, direction))
      return

    this.moveTo(newMapPosition)
  }

  private moveTo(poisiton: Point) {
    this.previousPosition = this.position
    this.position = poisiton
    this.canmove = false

    this.startPosition = this.targetPosition.clone()
    this.targetPosition.x = this.position.x * CELL_SIZE
    this.targetPosition.y = this.position.y * CELL_SIZE
  }
}

function linear(a: number, b: number, t: number): number {
  return a * (1 - t) + b * t
}
