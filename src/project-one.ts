import { Player } from "./player";
import * as GLOBALS from './globals'

export function launch() {

    const canvas = document.getElementById("canvas") as HTMLCanvasElement
    const ctx = canvas.getContext("2d")
    if (ctx === null) throw Error();
    canvas.width = GLOBALS.CANVAS_WIDTH
    canvas.height = GLOBALS.CANVAS_HEIGHT


    const playerImage = new Image()
    playerImage.src = "shadow_dog.png"


    const player = new Player(ctx, playerImage)
    player.animate()


    let playerState = 'idle';
    const dropdown = document.getElementById('animations') as HTMLSelectElement
    dropdown.addEventListener('change', (e) => {
        let target = e.target as HTMLSelectElement
        player.setState(target.value)
    })
    dropdown.value = playerState
}
