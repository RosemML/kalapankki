import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestFishesComponent } from './latest-fishes.component';

describe('LatestFishesComponent', () => {
  let component: LatestFishesComponent;
  let fixture: ComponentFixture<LatestFishesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestFishesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestFishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
