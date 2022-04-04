class Piggish {
    constructor(ctx, gameSize, posX, posY, speed) {
        this.ctx = ctx
        this.gameSize = gameSize
        this.piggishPos = { x: posX, y: posY }
        this.piggishSize = { w: 60, h: 60 }
        this.speed = speed

        this.imageInstance = undefined

        this.init()

    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'images/piggish.png'
    }

    draw() {
        this.move()
        this.ctx.drawImage(this.imageInstance, this.piggishPos.x, this.piggishPos.y, this.piggishSize.w, this.piggishSize.h)
    }

    move() {
        this.piggishPos.y += this.speed
    }



}