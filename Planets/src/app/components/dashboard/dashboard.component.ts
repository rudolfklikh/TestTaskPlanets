import { Component, OnInit } from '@angular/core';
import { PlanetsFacadeService } from 'src/app/shared/services/planets-facade.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap, finalize } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { trigger, transition, useAnimation } from '@angular/animations';
import { flash, bounceOutUp } from 'ng-animate';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('bounce', [
      transition('void => *', useAnimation(flash)),
      transition('* => void', useAnimation(bounceOutUp))
  ])
  ],
})
export class DashboardComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  private _planets: any;
  // tslint:disable-next-line: variable-name
  private _pageCount = [];
  // tslint:disable-next-line: variable-name
  private _planetsCount: number;
  // tslint:disable-next-line: variable-name
  private _currentPage = 1;

  public loadingIndicator = false;
  public searchStr = new FormControl('');

  constructor(private planetsFacadeService: PlanetsFacadeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.pipe(
      map((params) =>  {
        this.loadingIndicator = false;
        return ({ page: params.page, searchStr: params.search });
      }),
      switchMap(({ page, searchStr }) => this.planetsFacadeService.getPlanets(page, searchStr).pipe(
        finalize(() => {
            this.loadingIndicator = true;
        })
      )),
      tap((data: any) => {
        this._planets = data.planets;
        this._pageCount = Array(data.pages).fill(0).map((num, iter) => ({ num: (iter + 1) }));
        this._currentPage = data.currentPage;
        this._planetsCount = data.count;
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

  public get planetsCount() {
    return this._planetsCount;
  }

  clearSearchStr() {
    this.searchStr.setValue('');
  }
}

