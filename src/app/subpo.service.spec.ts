import { TestBed } from '@angular/core/testing';

import { SubpoService } from './subpo.service';

describe('SubpoService', () => {
  let service: SubpoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubpoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
