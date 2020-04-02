import { Component, OnInit, Input, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-planet-card',
  templateUrl: './planet-card.component.html',
  styleUrls: ['./planet-card.component.scss']
})
export class PlanetCardComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  private _planet: any;
  public imgLink: string = '';

  @Input() set planet(planet: any) {
    this._planet = planet;
    this.imgLink = `/dist/Planets/assets/${planet.name}.png`;
  }
  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line: adjacent-overload-signatures
  get planet() {
    return this._planet;
  }

}
