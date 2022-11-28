import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';

// Well, below here we can register all components of 'modules/admin' folder and use LazyLoading method on those
// registered components. For LazyLoading go to the 'app-routing.module.ts'
// below registered routes in 'children' are child routes of 'admin-dashboard' component.

/*
simply saying that this is how we can render following components 
home: /admin/home
about: /admin/about
services: /admin/services
contact: /admin/contact
And lastly if you write just /admin, it will automatically render /admin/home 
*/
const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'contact', component: ContactComponent },
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}


/*
What is Child Route?
With child routes, you can have a component-like structure defined for the routes in your app. 
It is critical as there are views that the user should not be able to access unless they are in 
a particular view. This way, the structure becomes tree-like, just like the structure of components.

As your application grows more complex, you might want to create routes that are relative to a component 
other than your root component. These types of nested routes are called child routes. 
This means you're adding a second <router-outlet> to your app, because it is in addition to the 
<router-outlet> in AppComponent .
*/