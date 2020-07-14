import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FishesService } from '../fishes.service';
import { Catch } from '../dataclasses';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-fishes-form',
  templateUrl: './fishes-form.component.html',
  styleUrls: ['./fishes-form.component.css']
})
export class FishesFormComponent implements OnInit {

  //catches: any [];

  //model = new Catch();

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    // herjasi tästä kun tein templaatissa fishesService.formData.species
    // niin laitoin publiciksi..
    public fishesService: FishesService,
    private firestore: AngularFirestore,
    private toastr: ToastrService,
    private router: Router
  ) {}
  /*{
    this.fishesService.getFishes().
    subscribe(catches => this.catches = catches);
   }*/

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm): void {
    if (form != null ){
    form.resetForm();
  }
    this.fishesService.formData = {
      id : null,
      species: '',
      size: '',
      luretype: '',
      lurename: '',
      weather: '',
      temperature: null,
      date: ''
    };
  }

  onSubmit(form: NgForm): void{
    const data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null){
      this.firestore.collection('catches').add(data);
    }
    else{
      this.firestore.doc('catches/' + form.value.id).update(data);
      this.resetForm(form);
    }
    this.toastr.success('Saalis lisätty!', 'Kalapankki');
  }

  goBack(): void {
    this.location.back();
  }

  /*onSubmit(formData: any): void {
    this.fishesService.postFish({
      id: this.catches.length + 1,
      species: formData.species,
      size: formData.size,
      luretype: formData.luretype,
      lurename: formData.lurename,
      weather: formData.weather,
      temperature: formData.temperature,
      date: formData.date
    }).then(res => {

    });

  }
  navigateToList(): void {
    this.router.navigate(['/']);
  }*/
}
