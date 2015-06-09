import _ from 'underscore';



export class Notebox {
	  answerMessage = 'See answer.';
	  questionMessage = 'See question again.';

    activate(params, routeConfig, a) {
      //inside class
      debugger;
    }

    constructor(notecards){
      this.notecards = notecards;
    }

    notecards = [];
  
    cardIndex = 0;

    showAnswer = false;
  
    notecard = this.notecards[this.cardIndex];
  
    flipCard = function(){
    	this.showAnswer ? this.showAnswer = false : this.showAnswer = true;
    };
  
    nextCard = function(){
    	if (this.cardIndex < this.notecards.length - 1) {
			  this.cardIndex++;
    	}
    	else
    	{
    		this.cardIndex = 0;
    	}

	    this.notecard = this.notecards[this.cardIndex];
    };

    shuffleCards = function(){
        this.notecards = _(this.notecards).shuffle();
    };
}
