import { TestBed } from '@angular/core/testing';

import { Slider3dService } from './slider3d.service';

describe('Slider3dService', () => {
  let service: Slider3dService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Slider3dService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
