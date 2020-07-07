import { TestBed } from '@angular/core/testing';

import { FishesService } from './fishes.service';

describe('FishesService', () => {
  let service: FishesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FishesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
