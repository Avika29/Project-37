class Contestant{
    constructor(){
        this.index = null;
        this.answer = null;
        this.name = null;

        

    }

    getCount(){
        var ContestantCountRef = database.ref('ContestantCount');
        ContestantCountRef.on("value",function(data){
            ContestantCount = data.val();
        })
    }

    updateCount(count){
        database.ref('/').update({
            ContestantCount : count
        });
    }

    static getContestantInfo(){
        var ContestantInfoRef = database.ref('Contestants')
        ContestantInfoRef.on("value", function (data){
            allContestants = data.val();
        })
    }
    update(){
        var ContestantIndex = "Contestants/Contestant"+this.index;
        database.ref(ContestantIndex).set({
            name : this.name,
            answer : this.answer
        });
    }

    display(){
           clear();
           background("yellow");
           question.hide();
           var title1 = createElement("h3");
        title1.html("Result of the Quiz");
        title1.position(350,0);
        
        textSize(18);
        fill("black");
        text("*NOTE: Contestants who answered correctly are shown in green colour.",150,250);
        var display_position = 280;

        for(var cn in allContestants){
          if(allContestants[cn].answer == "2")
            fill("green");
            else
            fill("red");
            textSize(16);
              text(allContestants[cn].name + ": "+allContestants[cn].answer,150,display_position);
              display_position+=20;
          
        }
            //this.greeting.html("Hello "+contestant.name);
            //this.greeting.position(displayWidth/2-40,displayHeight/2-80);
        
    }
}