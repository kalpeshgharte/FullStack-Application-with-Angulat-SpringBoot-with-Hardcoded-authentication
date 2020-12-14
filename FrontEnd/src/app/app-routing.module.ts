import { ListTodosComponent } from './list-todos/list-todos.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path : '' , component : LoginComponent},//canActivate , RouteGuardService
  { path : 'login' , component : LoginComponent},
  { path : 'welcome/:name' , component : WelcomeComponent, canActivate:[RouteGuardService]},
  { path : 'todos' , component : ListTodosComponent, canActivate:[RouteGuardService]},
  { path : 'logout' , component : LogoutComponent, canActivate:[RouteGuardService]},
  { path : 'todos/:id' , component : TodoComponent, canActivate:[RouteGuardService]},

  { path : '**' , component : ErrorComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
