import { Component} from '@angular/core'; //Decorator, function that annotates a specific function

interface Nav {
  link: string,
  name: string,
  exact: boolean

}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
  <div>
    <nav class="nav">
      <a *ngFor="let nav of nav"
         [routerLink]="nav.link" 
         routerLinkActive="active"  
         [routerLinkActiveOptions]="{exact: nav.exact}" 
      >  <!--routerLinkActive says which class to use when link is active-->
        {{nav.name}}
      </a>
    </nav>
   <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {

  nav: Nav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true
    },
    {
      link: '/passengers',
      name: 'Passengers',
      exact: false
    },
    {
      link: '/notfound',
      name: '404',
      exact: false
    }
  ]

}

