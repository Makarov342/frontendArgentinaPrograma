import { TestBed } from '@angular/core/testing';

import { SproyectosServiceService } from './sproyectos-service.service';

describe('SproyectosServiceService', () => {
  let service: SproyectosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SproyectosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
