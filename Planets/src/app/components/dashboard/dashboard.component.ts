import { Component, OnInit } from '@angular/core';
import { PlanetsFacadeService } from 'src/app/shared/services/planets-facade.service';
import { PlanetsService } from 'src/app/shared/services/planets.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public planets;
  public ff = 'fqwf';
  constructor(private planetsFacadeService: PlanetsFacadeService) { }

  ngOnInit() {
    this.planetsFacadeService.getPlanets().subscribe(planets => {
      this.planets = planets;
    });
  }

  hello(planet) {
    console.log(planet.url.split('/')[5]);
  }

}
