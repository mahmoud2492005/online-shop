import { TestBed } from '@angular/core/testing';

import { DetailesService } from './detailes.service';

describe('DetailesService', () => {
  let service: DetailesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
