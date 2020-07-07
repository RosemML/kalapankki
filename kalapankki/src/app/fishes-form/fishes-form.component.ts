import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-fishes-form',
  templateUrl: './fishes-form.component.html',
  styleUrls: ['./fishes-form.component.css']
})
export class FishesFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

}
