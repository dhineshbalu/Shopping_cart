import { TestBed, inject } from '@angular/core/testing';

import { MyorderService } from './myorder.service';

describe('MyorderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyorderService]
    });
  });

  it('should be created', inject([MyorderService], (service: MyorderService) => {
    expect(service).toBeTruthy();
  }));
});
