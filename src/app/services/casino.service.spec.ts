import { TestBed } from '@angular/core/testing';

import { CasinoService } from './casino.service';

describe('CasinoService', () => {
  let service: CasinoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CasinoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
