import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CATCH } from '../data';
import { FishesService } from '../fishes.service';
import { Catch } from '../dataclasses';
@Component({
  selector: 'app-fishes-details',
  templateUrl: './fishes-details.component.html',
  styleUrls: ['./fishes-details.component.css']
})
export class FishesDetailsComponent implements OnInit {

  catches: Catch[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private fishesService: FishesService,
  ) { }

 /* _getFishes(): void {
    this.fishesService.getFishes()
    .subscribe(catches => this.catches = catches);
  }*/
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
  }

  ngOnInit(): void {
    this._getFishes();
  }

  goBack(): void {
    this.location.back();
  }
  }

