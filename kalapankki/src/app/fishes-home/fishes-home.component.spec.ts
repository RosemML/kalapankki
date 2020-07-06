import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishesHomeComponent } from './fishes-home.component';

describe('FishesHomeComponent', () => {
  let component: FishesHomeComponent;
  let fixture: ComponentFixture<FishesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
