import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FishesService } from '../fishes.service';
import { Catch } from '../dataclasses';

@Component({
  selector: 'app-fishes-form',
  templateUrl: './fishes-form.component.html',
  styleUrls: ['./fishes-form.component.css']
})
export class FishesFormComponent implements OnInit {

  catches: Catch[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private fishesService: FishesService
  ) {
    this.fishesService.getFishes().
    subscribe(catches => this.catches = catches);
   }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(formData: any): void {
    console.log(formData);
    this.fishesService.postFish({
      'id': this.catches.length + 1,
      'species': formData.species,
      'size': formData.size,
      'luretype': formData.luretype,
      'lurename': formData.lurename,
      'weather': formData.weather,
      'temperature': formData.temperature,
      'date': formData.date
    }).then();

  }

}
