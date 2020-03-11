import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PlanetsFacadeService } from 'src/app/shared/services/planets-facade.service';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss']
})
export class PlanetDetailComponent implements OnInit {
  public planet: any;

  constructor(private route: ActivatedRoute, private planetFacadeService: PlanetsFacadeService) { }

  ngOnInit() {
    this.planet = this.route.paramMap.pipe(switchMap(params => this.planetFacadeService.getPlanetDetail(+params.get('id'))));
  }

}
