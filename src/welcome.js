export class Welcome{
  heading = 'Welcome to the Aurelia Navigation App!';
  firstName = 'Colin';
  lastName = 'Detwiller';

  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  welcome(){
    alert(`Welcome, ${this.fullName}!`);
  }
}