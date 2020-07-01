import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishesDetailsComponent } from './fishes-details.component';

describe('FishesDetailsComponent', () => {
  let component: FishesDetailsComponent;
  let fixture: ComponentFixture<FishesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
