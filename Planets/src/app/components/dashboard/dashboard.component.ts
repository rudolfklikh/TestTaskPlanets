import { Component, OnInit  } from '@angular/core';
import { PlanetsFacadeService } from 'src/app/shared/services/planets-facade.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  private _planets: any;
    // tslint:disable-next-line: variable-name
  private _pageCount = [];
    // tslint:disable-next-line: variable-name
  private _currentPage = 1;
  public searchStr = new FormControl('');

  constructor(private planetsFacadeService: PlanetsFacadeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.pipe(
      map((params) => ({page: params.page, searchStr: params.search})),
      switchMap(({page, searchStr}) => {
        return this.planetsFacadeService.getPlanets(page, searchStr);
      }),
      tap((data: any) => {
        this._planets = data.planets;
        this._pageCount = Array(data.pages).fill(0).map((num, iter) => ({ num: (iter + 1)}));
        this._currentPage = data.currentPage;
      })
    ).subscribe();
  }
  public get planets() {
    return this._planets;
  }
  public get pageCount() {
    return this._pageCount;
  }
  public get currentPage() {
    return this._currentPage;
  }

  ff() {
    this.searchStr.setValue('');
  }
}

