import { TestBed } from '@angular/core/testing';

import { SrestaurantesService } from './srestaurantes.service';

describe('SrestaurantesService', () => {
  let service: SrestaurantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrestaurantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
