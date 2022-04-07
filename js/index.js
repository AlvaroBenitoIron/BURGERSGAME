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
    name: 'Burgers game',
    description: 'E-learning for coocking apprentice',
    version: '1.0.0',
    author: 'Álvaro y Guillermo',
    license: undefined,
    canvasNode: undefined,
    ctx: undefined,
    gameSize: { w: undefined, h: undefined },
    plate: undefined,
    ingredients: [],
    allPiggish: [],
    framesIndex: 0,
    timer: 45,
    lives: [],
    music: undefined,
    level: 0,
    thingsFalling: true,
    drawingVictoryImage: false,
    isDone: false,
    level2Passed: false,
    isFinished: false,




    init(canvas) {
        this.canvasNode = document.querySelector(`#${canvas}`)
        this.ctx = this.canvasNode.getContext('2d')
        this.losingImageInstance = new Image()
        this.losingImageInstance.src = 'images/GETOUT.png'
        this.winningImageInstance = new Image()
        this.winningImageInstance.src = 'images/BURGERREADY.png'
        this.burgerStartImageInstance = new Image
        this.burgerStartImageInstance.src = 'images/burger-start.png'
        this.meatImageInstance = new Image()
        this.meatImageInstance.src = 'images/burger-meat.png'
        this.cheeseMeatImageInstance = new Image()
        this.cheeseMeatImageInstance.src = 'images/burger-cheese.png'
        this.burgerEndImageInstance = new Image()
        this.burgerEndImageInstance.src = 'images/burger-end.png'
        this.burgerBaconImageInstance = new Image()
        this.burgerBaconImageInstance.src = 'images/burger2-bacon.png'
        this.burgerOnionImageInstance = new Image()
        this.burgerOnionImageInstance.src = 'images/burger2-onion.png'
        this.burgerEnd2ImageInstance = new Image()
        this.burgerEnd2ImageInstance.src = 'images/burger2-end.png'
        this.music = new Audio("music/Smiley-island-short.mp3")
        this.music.play()
        this.music.loop = true
        this.music.volume = 1

        this.setDimensions()
        this.createPlate()
        this.createLife()
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
        this.plate = new Plate(this.ctx, this.gameSize, this.gameSize.w / 2 - 75, this.gameSize.h - 60, 150, 30)
    },

    drawPlate() {
        this.plate.draw()
    },

    createLife() {
        let lifePlace = this.gameSize.w / 2
        for (let i = 0; i < this.plate.lives; i++) {
            this.lives.push(new Life(this.ctx, this.gameSize, lifePlace - 40, 20, 100, 50))
            lifePlace += 20
        }



    },

    drawLives() {
        this.lives.forEach(eachLives => eachLives.draw())

    },

    drawBurger() {

        if (allBurgers[0].ingredients.length === 3) {
            this.ctx.drawImage(this.burgerStartImageInstance, 3, 270, 80, 80)
        }

        if (allBurgers[0].ingredients.length === 2) {
            this.ctx.drawImage(this.meatImageInstance, 3, 270, 80, 80)
        }

        if (allBurgers[0].ingredients.length === 1) {
            this.ctx.drawImage(this.cheeseMeatImageInstance, 3, 270, 80, 80)
        }

        if (allBurgers[0].ingredients.length === 0) {
            this.ctx.drawImage(this.burgerEndImageInstance, 3, 270, 80, 80)
        }


    },


    drawAll() {
        this.drawPlate()

        this.drawLives()

        this.allPiggish.forEach(eachPiggish => eachPiggish.draw())

        this.ingredients.forEach(eachIngredient => eachIngredient.draw())

        if (this.level === 0) {
            this.drawBurger()
        } else {
            this.drawBurger2()
        }

        this.drawOrder()

    },

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


        this.interval = setInterval(() => {
            if (this.framesIndex >= 260 && this.framesIndex % 240 === 0) {
                this.createPiggish()
            }

            if (this.framesIndex >= 5 && this.framesIndex % 50 === 0) {
                this.randomNumber()
            }
            this.clearAll()
            this.drawAll()
            this.checkLives()
            this.checkIngredientCollision()
            this.checkPiggishCollisions() ? this.gameOver() : null
            this.updateClock()
            this.victory()
            this.end()
            this.framesIndex++

        }, 30)

    },


    createPiggish() {
        if (this.thingsFalling) {
            this.allPiggish.push(new Piggish(this.ctx, this.gameSize, Math.random() * this.gameSize.w * .75, 0, 5))
        }
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
        this.clearPiggish()
        this.clearIngredients()
    },

    clearPiggish() {
        // this.allPiggish = this.allPiggish.filter(eachPiggish => eachPiggish.piggishPos.y + eachPiggish.h < 700) PO QUÉ ASÍ NO FUNCIONA?
        this.allPiggish.forEach(eachPiggish => {
            if (eachPiggish.piggishPos.y > 700) {
                this.allPiggish.shift()
            }
        })

    },

    randomNumber() {
        if (this.level === 0) {
            let a = 1
            let b = 5
            let random = Math.floor(Math.random() * (b - a) + parseInt(a));
            this.createIngredient(random)
            return random
        } else {
            let a = 1
            let b = 7
            let random = Math.floor(Math.random() * (b - a) + parseInt(a));
            this.createIngredient(random)
            return random
        }
    },

    createIngredient(random) {
        if (this.thingsFalling) {
            if (random === 1) {
                this.ingredients.push(new Bread1(this.ctx, this.gameSize, Math.random() * this.gameSize.w * .75, 0, 5))
            }
            if (random === 2) {
                this.ingredients.push(new Meat(this.ctx, this.gameSize, Math.random() * this.gameSize.w * .75, 0, 5))
            }

            if (random === 3) {
                this.ingredients.push(new Cheese(this.ctx, this.gameSize, Math.random() * this.gameSize.w * .75, 0, 5))
            }
            if (random === 4) {
                this.ingredients.push(new Bread2(this.ctx, this.gameSize, Math.random() * this.gameSize.w * .75, 0, 5))
            }
            if (random === 5) {
                this.ingredients.push(new Bacon(this.ctx, this.gameSize, Math.random() * this.gameSize.w * .75, 0, 5))
            }
            if (random === 6) {
                this.ingredients.push(new Onion(this.ctx, this.gameSize, Math.random() * this.gameSize.w * .75, 0, 5))
            }
        }

    },



    clearIngredients() {
        this.ingredients.forEach(eachIngredient => {
            if (eachIngredient.ingredientPos.y > 700) {
                this.ingredients.shift()
            }
        })
    },

    drawOrder() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)'
        this.ctx.fillRect(10, 20, 150, 190)
        this.ctx.font = 'bold 20pt Barlow'
        this.ctx.fillStyle = 'white'
        this.ctx.fillText('Order:', 20, 50)
        this.ctx.font = 'bold 15pt Barlow'
        if (this.level === 0) {
            this.ctx.fillText(`${allBurgers[0].name}`, 20, 75)

            this.ctx.font = 'bold 10pt Barlow'
            let place = 95
            allBurgers[0].ingredients.forEach(eachIngredient => {
                this.ctx.fillText(`${eachIngredient}`, 20, place)
                place += 15
            })
            this.ctx.font = 'bold 30pt Barlow'
            this.ctx.fillStyle = 'white'
            this.ctx.fillText(`${this.timer}`, 430, 60)
        } else {
            this.ctx.fillText(`${allBurgers[1].name}`, 20, 75)

            this.ctx.font = 'bold 10pt Barlow'
            let place = 95
            allBurgers[1].ingredients.forEach(eachIngredient => {
                this.ctx.fillText(`${eachIngredient}`, 20, place)
                place += 15
            })
            this.ctx.font = 'bold 30pt Barlow'
            this.ctx.fillStyle = 'white'
            this.ctx.fillText(`${this.timer}`, 430, 60)
        }
    },



    checkPiggishCollisions() {
        let piggishFound = false

        this.allPiggish.forEach(eachPiggish => {
            const rect1 = { x: this.plate.platePos.x, y: this.plate.platePos.y, width: this.plate.plateSize.w, height: this.plate.plateSize.h }
            const rect2 = { x: eachPiggish.piggishPos.x, y: eachPiggish.piggishPos.y, width: eachPiggish.piggishSize.w, height: eachPiggish.piggishSize.h }

            if (rect1.x < rect2.x + rect2.width &&
                rect1.x + rect1.width > rect2.x &&
                rect1.y < rect2.y + rect2.height &&
                rect1.height + rect1.y > rect2.y) {
                piggishFound = true
            }
        })
        return piggishFound
    },

    drawGameOver() {

        this.ctx.drawImage(this.losingImageInstance, 0, 0)
    },

    gameOver() {
        this.drawGameOver()
        this.music.pause()

        clearInterval(this.interval)

    },

    updateClock() {

        if (this.timer === 0) {
            this.gameOver()
        } else {
            if (this.framesIndex % 33 === 0) {
                this.timer -= 1;
            }
        }
    },

    checkIngredientCollision() {
        let ingredientFound = false

        this.ingredients.forEach(eachIngredient => {
            const rect1 = { x: this.plate.platePos.x, y: this.plate.platePos.y, width: this.plate.plateSize.w, height: this.plate.plateSize.h }
            const rect2 = { x: eachIngredient.ingredientPos.x, y: eachIngredient.ingredientPos.y, width: eachIngredient.ingredientSize.w, height: eachIngredient.ingredientSize.h }

            if (rect1.x < rect2.x + rect2.width &&
                rect1.x + rect1.width > rect2.x &&
                rect1.y < rect2.y + rect2.height &&
                rect1.height + rect1.y > rect2.y) {
                ingredientFound = true
                const index = this.ingredients.indexOf(eachIngredient)
                this.ingredients.splice(index, 1)
                this.checkIngredient(eachIngredient.name)

            }
        })
        return ingredientFound
    },

    checkIngredient(eachIngredient) {

        if (this.level === 0) {
            if (eachIngredient === allBurgers[0].ingredients[0]) {
                allBurgers[0].ingredients.shift()
            } else {
                this.plate.lives -= 1
                this.lives.shift()

            }
        } else {
            console.log(eachIngredient)
            console.log(allBurgers[1].ingredients[0])
            if (eachIngredient === allBurgers[1].ingredients[0]) {
                console.log(this.ingredients)
                allBurgers[1].ingredients.shift()
                if (allBurgers[1].ingredients.length === 0) {
                    this.isFinished = true
                }
            } else {
                this.plate.lives -= 1
                this.lives.shift()
            }
        }
    },

    victory() {
        if (this.isDone === false) {
            if (allBurgers[0].ingredients.length === 0) {
                this.drawingVictoryImage = true
                this.drawVictory()
                this.level = 1

                this.music.pause()
            }

        }
    },

    drawVictory() {
        if (this.drawingVictoryImage === true) {
            this.cleanArrays()
            this.startNewLevel()
            this.thingsFalling = false
            this.timer = 120

            // this.ctx.fillRect(100, 100, 100, 100)


            this.ctx.drawImage(this.winningImageInstance, 0, 0)
            this.ctx.drawImage(this.burgerEndImageInstance, 235, 320, 230, 230)

            if (this.level === 1) {
                // clearInterval(this.interval)
                // this.ctx.drawImage(this.burgerEndImageInstance, 235, 320, 230, 230)

            }
        }



    },

    cleanArrays() {
        this.ingredients = []
        this.allPiggish = []
        this.lives = []
    },

    checkLives() {
        if (this.plate.lives < 0) {
            this.gameOver()
        }
    },

    drawLive() {
        if (this.plate.lives === 3) {

        }
    },

    startNewLevel() {
        if (this.level === 1) {
            document.querySelector("canvas").onclick = () => {
                this.drawingVictoryImage = false
                this.thingsFalling = true
                this.plate.lives = 30

                this.createLife()
                this.isDone = true
                this.music.play()
            }
        }

    },

    drawBurger2() {

        if (allBurgers[1].ingredients.length === 5) {
            this.ctx.drawImage(this.burgerStartImageInstance, 3, 270, 80, 80)
        }

        if (allBurgers[1].ingredients.length === 4) {
            this.ctx.drawImage(this.meatImageInstance, 3, 270, 80, 80)
        }

        if (allBurgers[1].ingredients.length === 3) {
            this.ctx.drawImage(this.cheeseMeatImageInstance, 3, 270, 80, 80)
        }

        if (allBurgers[1].ingredients.length === 2) {
            this.ctx.drawImage(this.burgerBaconImageInstance, 3, 270, 80, 80)
        }

        if (allBurgers[1].ingredients.length === 1) {
            this.ctx.drawImage(this.burgerOnionImageInstance, 3, 270, 80, 80)
        }


        if (allBurgers[1].ingredients.length === 0) {
            this.ctx.drawImage(this.burgerEnd2ImageInstance, 3, 270, 80, 80)
        }


    },

    end() {
        if (allBurgers[1].ingredients.length === 0 && this.isFinished === true) {
            this.level2Passed = true
            clearInterval(this.interval)
            this.drawEnd()
        }
    },

    drawEnd() {
        this.drawingVictoryImage = true
        this.ctx.drawImage(this.winningImageInstance, 0, 0)
        this.ctx.drawImage(this.burgerEnd2ImageInstance, 235, 320, 230, 230)
        this.music.pause()

    }



}