import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  FishesHomeComponent } from './fishes-home/fishes-home.component';
import { FishesDetailsComponent } from './fishes-details/fishes-details.component';
import { FishesFormComponent } from './fishes-form/fishes-form.component';


const routes: Routes = [
  {path: '', redirectTo: '/fisheshome', pathMatch: 'full'},
  {path: 'fisheshome', component: FishesHomeComponent},
  {path: 'fishesdetails', component: FishesDetailsComponent},
  {path: 'fishesform', component: FishesFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
