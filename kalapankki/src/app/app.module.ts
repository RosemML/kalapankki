import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FishesComponent } from './fishes/fishes.component';
import { FishesDetailsComponent } from './fishes-details/fishes-details.component';
import { LatestFishesComponent } from './latest-fishes/latest-fishes.component';
import { FishesHomeComponent } from './fishes-home/fishes-home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FishesComponent,
    FishesDetailsComponent,
    LatestFishesComponent,
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
