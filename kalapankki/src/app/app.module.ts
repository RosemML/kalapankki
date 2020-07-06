import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FishesDetailsComponent } from './fishes-details/fishes-details.component';
import { FishesHomeComponent } from './fishes-home/fishes-home.component';

@NgModule({
  declarations: [
    AppComponent,
    FishesDetailsComponent,
    FishesHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
