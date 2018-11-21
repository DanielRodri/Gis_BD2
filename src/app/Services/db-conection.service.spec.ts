import { TestBed, inject } from '@angular/core/testing';

import { DbConectionService } from './db-conection.service';

describe('DbConectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DbConectionService]
    });
  });

  it('should be created', inject([DbConectionService], (service: DbConectionService) => {
    expect(service).toBeTruthy();
  }));
});
