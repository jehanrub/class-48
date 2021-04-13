class Form {
    constructor() {
        this.question = createElement('h3')
        this.question2 = createElement('h3')
    }

    getScore(){
        database.ref('score').on("value", (data)=>{
            score = data.val();
        })
    }
    
    updateScore(newScore){
        database.ref('/').update({
            score:newScore
        })
    }

    display() {
        var title = createElement('h1')
        title.html('Welcome To My Game !!')
        title.position(150, 50)
        var content = createElement('h3')
        content.html('This is a general knowledge quiz , each correct answers gains one point.<br> BEST OF LUCK !! ')
        content.position(90, 150)

        var Button = createButton('Enter')
        Button.position(950, 480)

        Button.mousePressed(() => {
            title.hide()
            content.hide()
            Button.hide()

            this.question.position(80, 80)
            this.question.html('Q. Who is the CEO of Tesla ')

            choice1 = createElement('h4')
            choice2 = createElement('h4')
            choice3 = createElement('h4')
            choice4 = createElement('h4')

            choice1.html('A. Jeff Bezoz')
            choice2.html('B. Elon Musk')
            choice3.html('C. Donald Trump')
            choice4.html('D. Modi ')

            choice1.position(200, 200)
            choice2.position(200, 230)
            choice3.position(200, 260)
            choice4.position(200, 290)

            answer = createInput("Enter the right choice")
            submit = createButton("Submit")


            answer.position(500, 250)
            submit.position(700, 250)

            next = createButton("Next")
            next.position(550,400)

            submit.mousePressed(() => {
                game.updateState(1)
            })

            
            next.mousePressed(() => {
                game.updateState(2)
                this.question.hide();
                choice1.hide();
                choice2.hide();
                choice3.hide();
                choice4.hide();
                
                if(gameState ===2){
                    this.question2.position(80, 80)
                    this.question2.html('Q. next ques');
                    choice1_2 = createElement('h4')
                    choice2_2 = createElement('h4')
                    choice3_2 = createElement('h4')
                    choice4_2 = createElement('h4')
        
                    choice1_2.html('A. Je')
                    choice2_2.html('B. E')
                    choice3_2.html('C. Do')
                    choice4_2.html('D. Mo ')
        
                    choice1_2.position(200, 200)
                    choice2_2.position(200, 230)
                    choice3_2.position(200, 260)
                    choice4_2.position(200, 290)
        
                    answer2 = createInput("Enter the right choice")
                    submit2 = createButton("Submit")
                }
            })



        });
    }


    end(){
        
        var happiness = createElement('h3')
        happiness.position(400, 400)
        happiness.html('Score: ' + score)   
    }
   

}

