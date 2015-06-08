import _ from 'underscore';

export class Notebox{
	answerMessage = 'See answer.';
	questionMessage = 'See question again.';

    notecards = [
    	{ answer: "Answer1.", question: "Question1?" },
    	{ answer: "Answer2.", question: "Question2?" },
    	{ answer: "Answer3.", question: "Question3?" },
    	{ answer: "Answer4.", question: "Question4?" }
    ];
  
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
