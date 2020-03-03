import { Injectable } from '@angular/core';
import { PlanetsService } from './planets.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanetsFacadeService {

  constructor(private planetsService: PlanetsService) { }



  getPlanets(): Observable<any> {
    return this.planetsService.getMainObject().pipe(
      map((planets: any) => planets.results)
    );
  }
}
