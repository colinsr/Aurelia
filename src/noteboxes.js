import { Router } from 'aurelia-router';
import { states } from './states';

export class Noteboxes {
  static inject = [Router];

  constructor(router) {
    this.router = router;
  }

  noteboxes = [
    'States',
    'Numbered Questions',
    'Spelling Words',
    'Vocabulary Words'
  ];

  navigateToNotebox = function(notebox){
    var url = this.router.generate("Notebox", { name: notebox });
    this.router.navigate(url);
  };
}
