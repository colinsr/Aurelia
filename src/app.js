import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      { route: ['','welcome'],  moduleId: './welcome',      nav: true, title:'Welcome' },
	  { route: 'Notebox',  moduleId: './notebox',      nav: true, title:'Notebox' }
    ]);

    this.router = router;
  }
}