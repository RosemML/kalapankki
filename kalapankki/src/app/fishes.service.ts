import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { CATCH } from './data';
import { Catch } from './dataclasses';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FishesService {

  constructor( private firestore: AngularFirestore) { }
  form = new FormGroup({

  });
  // observablena tieto databasesta ja muutetaan catchin mukaan taulukoksi
  // ja tämä data tarjoillaan niille komponenteille, jotka tilaavat datan
  // komponentit voivat tilata esim. vain nimet ja joku toinen komponentti jotain muuta osaa datasta
  // mutta firabasea käyttäessä tieto tulee ilmeisesti promisena, eli ei observablea
  getFishes(): Observable<any> { 
    return this.firestore.collection('catches').snapshotChanges();
  }
// tiedon lähetys kantaan
  postFish(newCatch: Catch): any {
    return this.firestore.collection('catches').add(newCatch).then(
      // virheen käsittely
    );
  }
}
