import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment} from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FishesDetailsComponent } from './fishes-details/fishes-details.component';
import { FishesHomeComponent } from './fishes-home/fishes-home.component';
import { FishesFormComponent } from './fishes-form/fishes-form.component';
import { FishesService } from './fishes.service';


@NgModule({
  declarations: [
    AppComponent,
    FishesDetailsComponent,
    FishesHomeComponent,
    FishesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    HttpClientModule
  ],
  providers: [FishesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
