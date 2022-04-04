class Ingredients {
    constructor(ctx, gameSize, posX, posY, speed) {
        this.ingredientSize = { w: 130, h: 30 }
        this.ctx = ctx
        this.gameSize = gameSize
        this.ingredientPos = { x: posX, y: posY }
        this.speed = speed

        this.init()
    }

    init() {

    }


}

// SI SOLO CAMBIA LA IMAGEN Y EL NOMBRE, COMO SE METE DENTRO DEL CONSTRUCTOR???

// class Bread extends Ingredients {
//     constructor(ctx, gameSize, posX, posY, name, image){
//         super(ctx, gameSize, posX, posY)

//     }

// }