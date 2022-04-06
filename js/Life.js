class Life {
    constructor(ctx, gameSize, posX, posY, width, height) {

        this.ctx = ctx
        this.gameSize = gameSize
        this.lifePos = { x: posX, y: posY }
        this.lifeSize = { w: width, h: height }


        this.name = 'Life'
        this.imageInstance = undefined

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'images/life.png'
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.lifePos.x, this.lifePos.y, this.lifeSize.w, this.lifeSize.h)
    }

}