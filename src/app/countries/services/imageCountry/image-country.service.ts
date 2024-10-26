import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { ImageCountry } from '../../interfaces/imageCountry.interface';
import { CountrieRest } from '../../interfaces/countrieRest.interface';

@Injectable({
  providedIn: 'root'
})
export class ImageCountryService {

  private accessKey: string = 'X3JyCSZUGnWYlUZ9ynMMUJNYMoLfE6rXCiKAq1IrvGE';
  private url:string ='https://api.unsplash.com/search/';

  private urlBase: string = 'https://restcountries.com/v3.1/';

  // const url = `https://api.unsplash.com/search/photos?query=${country}&client_id=${accessKey}&per_page=1`;
  
  constructor(private http: HttpClient) {}

  // searchCountry(namecountry: string): Observable<ImageCountry> {
  //   const url = `${this.url}photos?query=bandera+${namecountry}&client_id=${this.accessKey}&per_page=1`;
  //   return this.http.get<ImageCountry>(url)
  // }

  searchCountry(namecountry: string): Observable<CountrieRest | null> {
    const url = `${this.urlBase}name/${namecountry}`;
    return this.http.get<CountrieRest[]>(url).pipe(
      map((value=>(value.length > 0 ? value[0] : null)))
    ).pipe(
      catchError((error) => {
        return of(null);
      })
    );
  }
}