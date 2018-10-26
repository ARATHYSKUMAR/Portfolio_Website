import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [

  { path: '', component: HeaderComponent },
  { path: 'jumbo', component: JumbotronComponent },
  { path: 'profile', component: ProfileComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
