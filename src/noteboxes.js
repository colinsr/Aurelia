import { states } from './states';

export class Noteboxes {
  noteboxes = [
    { name: 'States', cards: states },
    { name: 'Numbered Questions', cards: states },
    { name: 'Spelling Words', cards: states },
    { name: 'Vocabulary Words', cards: states }
  ];

  navigateToNotebox = function(clickedItem){
    console.log('You clicked the item with id of ' + clickedItem);
  };
}
