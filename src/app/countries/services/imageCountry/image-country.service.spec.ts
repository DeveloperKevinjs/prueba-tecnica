import { TestBed } from '@angular/core/testing';

import { ImageCountryService } from './image-country.service';

describe('ImageCountryService', () => {
  let service: ImageCountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageCountryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
