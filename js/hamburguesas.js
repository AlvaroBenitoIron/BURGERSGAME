class Burguers {
    constructor(ctx, gameSize, posX, posY, width, heigth, name, ingredients) {
        this.ctx = ctx
        this.gameSize = gameSize
        this.burguersPos = { x: posX, y: posY }
        this.burguersSize = { w: width, h: heigth }
        this.burguers = { name: undefined, ingredients: [] }

    }
}




// const allBurguers = [
//     {
//         name: 'cheeseburguer',
//         ingredients: ['bread1', 'meat', 'cheese', 'bread2']

//     },
//     {
//         name: 'cbo',
//         ingredients: ['bread1', 'meat', 'cheese', 'bacon', 'onion', 'bread2']
//     },
//     {
//         name: 'fullburguer',
//         ingredients: ['bread1', 'meat', 'cheese', 'bacon', 'onion', 'lettuce', 'tomatoe', 'bread2']
//     },
// ]

// // PARA ELEGIR UNA DE ESTAS HAMBURGUESAS RANDOM:

// let order = allBurguers[Math.floor(2 * Math.random())]



