import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) { }

  getMainObject() {
    return this.http.get('https://swapi.co/api/planets/');
  }

  getOnePl(id: number) {
    return this.http.get(`https://swapi.co/api/planets/${id}`);
  }

}
