var gameState=0 
var form,game
var score = 0;
var choice1, choice2, choice3, choice4
var choice1_2, choice2_2, choice3_2, choice4_2
var database
var happiness
var x
var answer,submit, next, answer1, submit2


function setup(){
    createCanvas(1000,500)
    database=firebase.database()
    game=new Game()
    game.getState();
    game.start();
}



function draw (){
    background('cyan')

    if(gameState === 1){
        game.play();
    }

    
}














