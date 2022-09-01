import { TestBed } from '@angular/core/testing';

import { UtlisationService } from './utlisation.service';

describe('UtlisationService', () => {
  let service: UtlisationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtlisationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
