import { TestBed } from '@angular/core/testing';

import { CasinoServicioService } from './casino-servicio.service';

describe('CasinoServicioService', () => {
  let service: CasinoServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CasinoServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
