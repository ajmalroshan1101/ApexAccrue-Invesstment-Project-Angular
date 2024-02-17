import { TestBed } from '@angular/core/testing';

import { UsertokenService } from './services/usertoken.service';

describe('UsertokenService', () => {
  let service: UsertokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsertokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
