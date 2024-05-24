import { TestBed } from '@angular/core/testing';

import { BikiniService } from './bikini.service';

describe('BikiniService', () => {
  let service: BikiniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BikiniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
