export class Noteboxes {
  noteboxes = [
    { name: 'States',             id: 1 },
    { name: 'Numbered Questions', id: 2 },
    { name: 'Spelling Words',     id: 3 },
    { name: 'Vocabulary Words',   id: 4 }
  ];

  navigateToNotebox = function(clickedItem){
    console.log('You clicked the item with id of ' + clickedItem);
  };
}
