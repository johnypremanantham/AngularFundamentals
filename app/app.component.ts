import { Component} from '@angular/core'; //Decorator, function that annotates a specific function


@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
  <div>
   <passenger-dashboard></passenger-dashboard>
  </div>
  `
})
export class AppComponent {}

