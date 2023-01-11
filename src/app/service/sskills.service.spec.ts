import { TestBed } from '@angular/core/testing';

import { SskillsService } from './sskills.service';

describe('SskillsService', () => {
  let service: SskillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SskillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
