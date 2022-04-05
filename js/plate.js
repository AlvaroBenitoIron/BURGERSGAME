class Plate {
    constructor(ctx, gameSize, posX, posY, width, height) {
        this.ctx = ctx
        this.gameSize = gameSize
        this.platePos = { x: posX, y: posY }
        this.plateSize = { w: width, h: height }

        this.imageInstance = undefined

        this.lives = 3

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'images/plate.png'

    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.platePos.x, this.platePos.y, this.plateSize.w, this.plateSize.h)
    }

    moveRight() {
        if (this.platePos.x + this.plateSize.w < this.gameSize.w) {
            this.platePos.x += 15
        }
    }

    moveLeft() {
        if (this.platePos.x >= 0) {
            this.platePos.x -= 15
        }
    }


}