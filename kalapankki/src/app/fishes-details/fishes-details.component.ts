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
      this.toastr.warning('Saalis poistettu!', 'Kalapankki');
    }
  }

}

