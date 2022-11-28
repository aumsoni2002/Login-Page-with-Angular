import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';

// To start a rendering our components through routing, we need to add their 'path' and 'component' as shown below
// The blank path is when the user does not write any path, it will automatically render the login component.
// The ** is when user writes a path that does not registered in below 'Routes', it will automatically render not-found component.
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // below registeration of 'admin' route is a method of doing a LazyLoading.
  // Simply saying if the user writes the below path '/admin' than only the whole module will load and render.
  // why we are registering only 'admin' component by the 'LazyLoading' method, because the 'admin' route has
  // many child routes and we don't want our application to load and render all routes at once in the beginning.

  /*
    As we are using child routes under 'admin', we need a Auth Guard which basically let users use 
    child routes only when they are logged in.
  */
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

/*
What is meant by lazy loading in Angular?
Lazy loading is the process of loading components, modules, or other assets of a website as they're required. 
Since Angular creates a SPA (Single Page Application), all of its components are loaded at once. 
This means that a lot of unnecessary libraries or modules might be loaded as well.
*/
