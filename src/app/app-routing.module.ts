import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { config } from './shared/consts/defines';

const routes: Routes = [
  { path: '', redirectTo: config.auth.path,pathMatch:'full' },
  { path: config.auth.path, loadChildren:'./auth/auth.module#AuthModule' },
  { path: config.user.path, loadChildren:'./users/users.module#UsersModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
