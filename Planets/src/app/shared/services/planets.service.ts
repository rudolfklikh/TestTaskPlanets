import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) { }

  getMainObject(page, searchStr) {
    return this.http.get(`https://swapi.co/api/planets/?search=${searchStr}&page=${page}`);
  }

  getDetail(id: number) {
    return this.http.get(`https://swapi.co/api/planets/${id}`);
  }

}
