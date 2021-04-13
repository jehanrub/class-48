class Game {
    constructor() {


    }
    getState() {
        database.ref('gameState').on("value", (data) => {
            gameState = data.val();
        })
    }
    updateState(state) {
        database.ref('/').update({
            gameState: state
        })
    }
    start() {
        if (gameState === 0) {
            form = new Form()
            form.display()
            form.getScore()
        }
    }


    play() {
        var box = answer.value()
        box=box.toLowerCase()
        if(box === 'a'){
            form.updateScore(0)
        }
        else if (box === 'b'){
            form.updateScore(1)
        }
        else if (box === 'c'){
            form.updateScore(0)
        }
        else if(box === 'd') {
            form.updateScore(0)
        }
        

       form.end();
     
    }
}