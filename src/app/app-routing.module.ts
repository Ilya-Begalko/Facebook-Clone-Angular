import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FacebookGuard } from './guards/facebook.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [FacebookGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
