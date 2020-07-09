import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CATCH } from '../data';
import { FishesService } from '../fishes.service';
@Component({
  selector: 'app-fishes-details',
  templateUrl: './fishes-details.component.html',
  styleUrls: ['./fishes-details.component.css']
})
export class FishesDetailsComponent implements OnInit {

  public fishes = [];
  //catch = CATCH;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private fishesService: FishesService,
  ) { }

  ngOnInit(): void {
    this.fishes = this.fishesService.getFishes();
  }

  goBack(): void {
    this.location.back();
  }

}
