import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishesFormComponent } from './fishes-form.component';

describe('FishesFormComponent', () => {
  let component: FishesFormComponent;
  let fixture: ComponentFixture<FishesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
