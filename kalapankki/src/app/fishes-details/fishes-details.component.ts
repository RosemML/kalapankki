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

  _getFishes(): void {
    this.fishesService.getFishes()
    .subscribe(catches => this.catches = catches);
  }

  ngOnInit(): void {
    this._getFishes();
  }

  goBack(): void {
    this.location.back();
  }
  }

