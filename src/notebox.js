export class Notebox{
	answerMessage = 'See answer.';
	questionMessage = 'See question again.';

    notecards = [
    	{ answer: "Answer1.", question: "Question1?" },
    	{ answer: "Answer2.", question: "Question2?" },
    	{ answer: "Answer3.", question: "Question3?" },
    	{ answer: "Answer4.", question: "Question4?" }
    ];
  
    cardIndex = 0;  //todo: this needs to increment if the show next is clicked

    showAnswer = false;
  
    notecard = this.notecards[this.cardIndex];
  
    flipCard = function(){
    	this.showAnswer ? this.showAnswer = false : this.showAnswer = true;
    }
  
    nextCard = function(){
    	this.cardIndex++; 
    	this.notecard = this.notecards[this.cardIndex];
    }
}