export class Notebox{
	answerMessage = 'See answer';
	questionMessage = 'See question again';

    notecards = [
    	{ front: "Answer.", back: "Question?" },
    	{ front: "Answer2.", back: "Question2?" },
    	{ front: "Answer3.", back: "Question3?" }
    ];

    notecard = this.notecards[0];
    console.log(this.notecard);
  
    cardIndex = 0;
    cardCount = this.notecards.length;

    showAnswer = false;
    
    flipCard = function(){
    	this.showAnswer ? this.showAnswer = false : this.showAnswer = true;
    }
  
    nextCard = function(){
    	var me = this;
    	var currentNotecard = me.notecard;

    	if(me.cardIndex < me.cardCount){
			me.cardIndex++;
			me.notecard = me.notecards[me.cardIndex];
			
    	};
    }
}