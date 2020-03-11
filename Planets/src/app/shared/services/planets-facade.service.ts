import { Injectable } from '@angular/core';
import { PlanetsService } from './planets.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanetsFacadeService {

  constructor(private planetsService: PlanetsService) { }



  getPlanets(page: number = 1, searcStr: string = ''): Observable<any> {
    return this.planetsService.getMainObject(page, searcStr).pipe(
      map((planets: any) => {
        const pages = Math.ceil(planets.count / 10);
        const currentPage = +page;

        return {
          planets : planets.results,
          count: planets.count,
          pages,
          currentPage
        };
      })
    );
  }

  getPlanetDetail(id: number) {
    return this.planetsService.getDetail(id);
  }
}
