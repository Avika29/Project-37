class Question{
    constructor(){
        this.input = createInput("Name");
        this.input1 = createInput("Enter correct option no.")
        this.button = createButton("Submit");
        this.title = createElement("h3");
        //this.greeting = createElement("h3");

    }
    
    hide(){
      this.input.hide();
      this.input1.hide();
      this.button.hide();
      this.title.hide();
      //this.greeting.hide();
    }

    display(){
       
        this.title.html("MyQuiz Game");
        this.title.position(350,0);
        

        var question = createElement();
        question.html("Question :- What starts and ends with the letter 'E', but has only one letter?");
        question.position(150,80);
        var option1 = createElement();
        option1.html("1: Everyone");
        option1.position(150,120);
        var option2 = createElement();
        option2.html("2: Envelope");
        option2.position(150,150);
        var option3 = createElement();
        option3.html("3: Estimate");
        option3.position(150,180);
        var option4 = createElement();
        option4.html("4: Example");
        option4.position(150,210);
        
        
        this.input.position(180,250)
        this.input1.position(360,250);
        this.button.position(390,300)

        

        this.button.mousePressed(()=>{
            this.input.hide();
            this.input1.hide();
            this.button.hide()
            contestant.name = this.input.value();
            contestant.answer = this.input1.value();

            ContestantCount++
            contestant.index = ContestantCount
            contestant.update();
            contestant.updateCount(ContestantCount);

            //this.greeting.html("Hello "+contestant.name);
            //this.greeting.position(450,200);
        })
    }
}