import { TestBed } from '@angular/core/testing';

import { Requestservice } from './request.service';

describe('RequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Requestservice = TestBed.get(Requestservice);
    expect(service).toBeTruthy();
  });
});
