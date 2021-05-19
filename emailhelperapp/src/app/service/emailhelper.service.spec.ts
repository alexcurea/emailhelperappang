import { TestBed } from '@angular/core/testing';

import { EmailhelperService } from './emailhelper.service';

describe('EmailhelperService', () => {
  let service: EmailhelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailhelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
