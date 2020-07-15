import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment} from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

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
    AngularFireAuthModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [FishesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
