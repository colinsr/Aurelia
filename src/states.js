import { mytest } from './test';
import { Notebox } from './notebox';

export class States {
  notebox = undefined;

  constructor(){
    this.notecards = new Notebox(mytest);
  };

}
