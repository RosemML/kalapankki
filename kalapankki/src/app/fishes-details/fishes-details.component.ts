import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CATCH } from '../data';
import { FishesService } from '../fishes.service';
import { Catch } from '../dataclasses';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-fishes-details',
  templateUrl: './fishes-details.component.html',
  styleUrls: ['./fishes-details.component.css']
})
export class FishesDetailsComponent implements OnInit {

  list: Catch[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private fishesService: FishesService,
    private firestore: AngularFirestore,
    private toastr: ToastrService
  ) { }


  ngOnInit(): void {
    this.fishesService.getCathes().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Catch;
      });
    });
  }

  onEdit(c: Catch): void{
    this.fishesService.formData = Object.assign({}, c);
  }

  onDelete(id: string): void {
    if (confirm('Haluatko varmasti poistaa tämän saaliin?')) {
      this.firestore.doc('catches/' + id).delete();
      this.toastr.warning('Saalis poistettu!', 'Kalapankki')
    }
  }


  /*goBack(): void {
    this.location.back();
  }*/
  }

  /* _getFishes(): void {
    this.fishesService.getFishes()
    .subscribe(catches => this.catches = catches);
  }
  _getFishes(): void {
    this.fishesService.getFishes()
    .subscribe(payloads => {
      this.catches = payloads;
      console.log(payloads[0].payload.doc.data().species);
      for (let i = 0; i < payloads.length; i++) {
    this.catches.push({ id: payloads[i].payload.doc.data().id,
    species: payloads[i].payload.doc.data().species,
    size: payloads[i].payload.doc.data().size,
    luretype: payloads[i].payload.doc.data().luretype,
    lurename: payloads[i].payload.doc.data().lurename,
    weather: payloads[i].payload.doc.data().weather,
    temperature: payloads[i].payload.doc.data().temperature,
    date: payloads[i].payload.doc.data().date
     });
      }
      console.log(payloads);
    });
  }*/

