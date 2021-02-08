var canva;
var gameState = 0;
var ContestantCount;
var database;
var quiz, question, contestant;
var allContestants;

function setup(){
  database = firebase.database();

  canvas = createCanvas(850,400);

  quiz = new Quiz();
  quiz.getState();
  quiz.start();
 
  
}


function draw(){
  background("pink");

  if(ContestantCount === 4){
    quiz.update(1);
  }

  if(gameState === 1){
    Contestant.getContestantInfo();
    contestant.display();
  }
  
}
