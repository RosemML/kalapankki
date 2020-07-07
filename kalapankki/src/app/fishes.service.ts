import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FishesService {

  constructor( private firestore: AngularFirestore) { }
  form = new FormGroup({

  });
}
