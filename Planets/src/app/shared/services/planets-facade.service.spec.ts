import { TestBed } from '@angular/core/testing';

import { PlanetsFacadeService } from './planets-facade.service';

describe('PlanetsFacadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanetsFacadeService = TestBed.get(PlanetsFacadeService);
    expect(service).toBeTruthy();
  });
});
