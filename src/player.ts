import * as GLOBALS from './globals'

type Loc = {
  x: number
  y: number
}
type Data = {
  loc: Array<Loc>
}
  
export class Player {
  
  private ctx: CanvasRenderingContext2D;
  private img: HTMLImageElement;

  private spriteWidth = 575;
  private spriteHeight = 523;

  private gameFrame = 0;
  private staggerFrames = 5;

  private animationStates = [
    {name: 'idle', frames: 7},
    {name: 'jump', frames: 7},
    {name: 'fall', frames: 7},
    {name: 'run', frames: 9},
    {name: 'dizzy', frames: 11},
    {name: 'sit', frames: 5},
    {name: 'roll', frames: 7},
    {name: 'bite', frames: 7},
    {name: 'ko', frames: 12},
    {name: 'getHit', frames: 4},
  ]
  private spirteAnimations: { [key: string]: Data } = {};

  private state = 'idle'

  constructor(ctx: CanvasRenderingContext2D, img: HTMLImageElement) {
    this.ctx = ctx;
    this.img = img;
    this.prefill()
  }
  
  animate() : void {
    this.ctx.clearRect(0 ,0, GLOBALS.CANVAS_WIDTH, GLOBALS.CANVAS_HEIGHT)

    let maxIndex = this.spirteAnimations[this.state].loc.length || 0

    let position = Math.floor(this.gameFrame / this.staggerFrames) % maxIndex
    let frameX = this.spriteWidth * position
    let frameY = this.spirteAnimations[this.state].loc[position].y

    this.ctx.drawImage(this.img, 
      frameX, frameY, this.spriteWidth, this.spriteHeight,
      0, 0, this.spriteWidth, this.spriteHeight)

    this.gameFrame++ 
    requestAnimationFrame(() => this.animate())
  }

  prefill(): void {
    this.animationStates.forEach((state: any, index: number) => {
      let frames = new Array<Loc>()
      for (let i = 0; i < state.frames; i++) {
          let xx = i * this.spriteWidth
          let yy = index * this.spriteHeight
          frames.push({ x: xx, y: yy })
      }
      this.spirteAnimations[state.name] = {loc: frames}
    })
  }

  setState(state: string): void {
    this.state = state;
  }

}
  