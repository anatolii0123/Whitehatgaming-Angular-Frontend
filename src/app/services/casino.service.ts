import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../models/country.model';
import { Brand } from '../models/brand.model';
import { Category } from '../models/category.model';
import { Game } from '../models/game.model';

const baseUrl = 'https://whitehatgaming.herokuapp.com/api/casino';

@Injectable({
  providedIn: 'root'
})
export class CasinoService {

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(baseUrl + '/countries');
  }
  getBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(baseUrl + '/brands');
  }
  getCategories(brandid: number): Observable<Category[]> {
    return this.http.get<Category[]>(baseUrl + `/categories?brandid=${brandid}`);
  }
  getGames(country:number, brandid: number, category: string): Observable<Game[]> {
    return this.http.get<Game[]>(baseUrl + `/games?country=${country}&brandid=${brandid}&category=${category}`);
  }
}
