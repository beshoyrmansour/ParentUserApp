import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { config } from './shared/consts/defines';
import { AuthUserGuard } from './shared/guards/auth-user.guard';

const routes: Routes = [
  { path: '', redirectTo: config.auth.path,pathMatch:'full' },
  { path: config.auth.path, loadChildren:'./auth/auth.module#AuthModule', canActivateChild:[AuthUserGuard] },
  { path: config.user.path, loadChildren:'./users/users.module#UsersModule' ,canLoad:[AuthUserGuard]},
  { path:'**', redirectTo: config.auth.login.path, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
