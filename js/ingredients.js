class Ingredients {
    constructor(ctx, gameSize, posX, posY, speed) {
        this.ingredientSize = { w: 100, h: 100 }
        this.ctx = ctx
        this.gameSize = gameSize
        this.ingredientPos = { x: posX, y: posY }
        this.speed = speed

    }

    init() {

    }


}


class Bread1 extends Ingredients {
    constructor(ctx, gameSize, posX, posY, speed) {
        super(ctx, gameSize, posX, posY, speed)

        this.name = 'Bottom bread'
        this.imageInstance = undefined

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'images/BottomBread.png'
    }

    draw() {
        this.move()
        this.ctx.drawImage(this.imageInstance, this.ingredientPos.x, this.ingredientPos.y, this.ingredientSize.w, this.ingredientSize.h)
    }

    move() {
        this.ingredientPos.y += this.speed
    }
}



class Meat extends Ingredients {
    constructor(ctx, gameSize, posX, posY, speed) {
        super(ctx, gameSize, posX, posY, speed)

        this.name = 'Meat'
        this.imageInstance = undefined

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'images/Meat.png'
    }

    draw() {
        this.move()
        this.ctx.drawImage(this.imageInstance, this.ingredientPos.x, this.ingredientPos.y, this.ingredientSize.w, this.ingredientSize.h)
    }

    move() {
        this.ingredientPos.y += this.speed
    }

}



class Cheese extends Ingredients {
    constructor(ctx, gameSize, posX, posY, speed) {
        super(ctx, gameSize, posX, posY, speed)

        this.name = 'Cheese'
        this.imageInstance = undefined

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'images/Cheese.png'
    }

    draw() {
        this.move()
        this.ctx.drawImage(this.imageInstance, this.ingredientPos.x, this.ingredientPos.y, this.ingredientSize.w, this.ingredientSize.h)
    }

    move() {
        this.ingredientPos.y += this.speed
    }
}



class Bread2 extends Ingredients {
    constructor(ctx, gameSize, posX, posY, speed) {
        super(ctx, gameSize, posX, posY, speed)

        this.name = 'Top bread'
        this.imageInstance = undefined

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'images/TopBread.png'
    }

    draw() {
        this.move()
        this.ctx.drawImage(this.imageInstance, this.ingredientPos.x, this.ingredientPos.y, this.ingredientSize.w, this.ingredientSize.h)
    }

    move() {
        this.ingredientPos.y += this.speed
    }

}


class Onion extends Ingredients {

    constructor(ctx, gameSize, posX, posY, speed) {
        super(ctx, gameSize, posX, posY, speed)

        this.name = 'Onion'
        this.imageInstance = undefined
        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = './images/Onion.png'
    }

    draw() {
        this.move()
        this.ctx.drawImage(this.imageInstance, this.ingredientPos.x, this.ingredientPos.y, this.ingredientSize.w, this.ingredientSize.h)
    }

    move() {
        this.ingredientPos.y += this.speed
    }

}



class Bacon extends Ingredients {

    constructor(ctx, gameSize, posX, posY, speed) {
        super(ctx, gameSize, posX, posY, speed)
        this.name = 'Bacon'
        this.imageInstance = undefined
        this.init()
    }

    init() {

        this.imageInstance = new Image()
        this.imageInstance.src = './images/Bacon.png'
    }
    draw() {
        this.move()
        this.ctx.drawImage(this.imageInstance, this.ingredientPos.x, this.ingredientPos.y, this.ingredientSize.w, this.ingredientSize.h)
    }

    move() {
        this.ingredientPos.y += this.speed
    }


}



class Lettuce extends Ingredients {

    constructor(ctx, gameSize, posX, posY, speed) {
        super(ctx, gameSize, posX, posY, speed)
        this.name = 'Letuce'
        this.imageInstance = undefined

        this.init()
    }

    init() {

        this.imageInstance = new Image()
        this.imageInstance.src = 'Letuce.png'
    }
    draw() {
        this.move()
        this.ctx.drawImage(this.imageInstance, this.ingredientPos.x, this.ingredientPos.y, this.ingredientSize.w, this.ingredientSize.h)
    }

    move() {
        this.ingredientPos.y += this.speed
    }
}

class Tomatoes extends Ingredients {
    constructor(ctx, gameSize, posX, posY, speed) {
        super(ctx, gameSize, posX, posY, speed)
        this.name = 'Tomato'
        this.imageInstance = undefined

        this.init()
    }

    init() {

        this.imageInstance = new Image()
        this.imageInstance.src = 'Tomato.png'
    }
    draw() {
        this.move()
        this.ctx.drawImage(this.imageInstance, this.ingredientPos.x, this.ingredientPos.y, this.ingredientSize.w, this.ingredientSize.h)
    }

    move() {
        this.ingredientPos.y += this.speed
    }
}