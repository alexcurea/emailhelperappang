import { TestBed } from '@angular/core/testing';

import { ModguardService } from './modguard.service';

describe('ModguardService', () => {
  let service: ModguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
