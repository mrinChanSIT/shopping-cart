import { TestBed } from '@angular/core/testing';

import { CarticonService } from './carticon.service';

describe('CarticonService', () => {
  let service: CarticonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarticonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
