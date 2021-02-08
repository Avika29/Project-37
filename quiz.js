class Quiz{
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState : state
        });
    }

    start(){
        if(gameState === 0){
            contestant = new Contestant();
            contestant.getCount();
            question = new Question()
            question.display();
        }
    }
}