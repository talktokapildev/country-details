import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Country } from './models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  countriesList: any;
  selectedCountry: any = {};
  private url = 'https://restcountries.com/v2/region/';

  constructor(private http: HttpClient) {}

  getCountries(para: any) {
    return this.http
      .get<Country[]>(this.url + para)
      .pipe(tap((data) => console.log(data)));
  }
}
