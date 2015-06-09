import _ from 'underscore';
import { states } from './states';
import { numberedQuestions } from './numberedQuestions';
import { spellingWords } from './spellingWords';
import { vocabularyWords } from './vocabularyWords';


export class Notebox {
	  answerMessage = 'See answer.';
	  questionMessage = 'See question again.';

    activate(params, routeConfig, a) {
      let collection = { };
      collection[states.name] = states.cards;
      collection[numberedQuestions.name] = numberedQuestions.cards;
      collection[spellingWords.name] = spellingWords.cards;
      collection[vocabularyWords.name] = vocabularyWords.cards;

      this.notecards = collection[params.name];
      this.shuffleCards();
      this.nextCard();
    }

    notecards = [];
  
    cardIndex = 0;

    showAnswer = false;
  
    notecard = undefined;
  
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
