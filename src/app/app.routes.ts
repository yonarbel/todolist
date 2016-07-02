import { provideRouter, RouterConfig }  from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { AppComponent } from './app.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/dashboard',
        terminal: true
    },
    {
        path: 'detail/:id',
        component: HeroDetailsComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'heroes',
        component: HeroesComponent
    }

];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];