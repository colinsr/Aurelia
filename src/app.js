import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Flash Cards';
    config.map([
      //{ route: ['','welcome'],  moduleId: './welcome',      nav: true, title:'Welcome' },
      { route: ['', 'Noteboxes'],  moduleId: './noteboxes',      nav: true, title:'Noteboxes' },
	    { route: 'Notebox',  moduleId: './notebox',      nav: true, title:'Notebox' },
      { route: 'states',  moduleId: './states',      nav: true, title:'States' }
    ]);

    this.router = router;
  }
}
