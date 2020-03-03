import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PlanetsService } from 'src/app/shared/services/planets.service';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss']
})
export class PlanetDetailComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute, private affServ: PlanetsService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => this.affServ.getOnePl(+params.get('id'))))
      .subscribe(id => {
      console.log(id);
    });
  }

}
