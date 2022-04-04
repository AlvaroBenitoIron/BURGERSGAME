window.onload = () => {
    document.getElementById('start-button').onclick = () => {
        startGame();
    };

    function startGame() {

        gameApp.init('canvas')
        gameApp.setDimensions()

    }
};

const gameApp = {
    name: 'Burguers game',
    description: 'E-learning for coocking apprentice',
    version: '1.0.0',
    author: 'Alvaro y Guillermo',
    license: undefined,
    canvasNode: undefined,
    ctx: undefined,
    gameSize: { w: undefined, h: undefined },
    plate: undefined,
    ingredients: [],
    allPiggish: [],
    framesIndex: 0,




    init(canvas) {
        this.canvasNode = document.querySelector(`#${canvas}`)
        this.ctx = this.canvasNode.getContext('2d')
        this.setDimensions()
        this.createPlate()
        // this.createPiggish()
        this.setEventListeners()
        this.start()
    },

    setDimensions() {
        this.gameSize = {
            w: 500,
            h: 600
        }
    },

    createPlate() {
        this.plate = new Plate(this.ctx, this.gameSize, this.gameSize.w / 2 - 75, this.gameSize.h - 50, 150, 30)
    },

    drawPlate() {
        this.plate.draw()
    },

    drawAll() {
        this.drawPlate()

        this.allPiggish.forEach(eachPiggish => eachPiggish.draw())
        // if (this.framesIndex % 90 === 0) this.createPiggish()
        // this.drawPiggish()
        // this.clearPiggish() <-- POR QUÉ  NO FUNCIONA?


    },

    // drawPiggish() {
    //     this.allPiggish.forEach(eachPiggish => eachPiggish.draw())
    //     if (this.framesIndex % 90 === 0) this.createPiggish()
    // }

    setEventListeners() {
        document.onkeydown = event => {
            const { key } = event
            if (key === 'ArrowLeft') {
                this.plate.moveLeft()
            }
            if (key === 'ArrowRight') {
                this.plate.moveRight()
            }
        }
    },

    start() {
        setInterval(() => {


            if (this.framesIndex >= 300 && this.framesIndex % 300 === 0) {
                this.createPiggish()
            }
            this.clearAll()
            this.drawAll()

            this.framesIndex++
        }, 30)
    },

    createPiggish() {
        this.allPiggish.push(new Piggish(this.ctx, this.gameSize, Math.random() * this.gameSize.w * .75, 0, 5))
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
    },

    clearPiggish() {

        this.allPiggish = this.allPiggish.filter(eachPiggish => eachPiggish.piggishPos.y + eachPiggish.h >= 700)

    }


}

