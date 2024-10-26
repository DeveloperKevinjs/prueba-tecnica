import { Injectable } from '@angular/core';
import { Apollo , gql } from 'apollo-angular';
import { map, Observable, tap } from 'rxjs';
import { Countrie, CountriesResponse } from '../../interfaces/countrie.interface';
import { Continent, ContinentResponse } from '../../interfaces/continent.interface';

const QUERY =gql`
  {
  countries {
      code
      name
      capital
      currency
      continent{
        name
      }
      languages{
        name
      }
      states{
        name
      }
    }
  }
`;
const QUERY02 =gql`
  {
    continents {
      code
      name
    } 
  }
`;


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor( private apollo:Apollo ) { }

  getAllCountries():Observable<Countrie[]>{
    return this.apollo.watchQuery<CountriesResponse>({
      query: QUERY
    }).valueChanges.pipe(
      map(response=> response.data.countries)
    );
  }

  getAllContinent():Observable<Continent[]>{
    return this.apollo.watchQuery<ContinentResponse>({
      query: QUERY02
    }).valueChanges.pipe(
      map(response=> response.data.continents)
    );
  }
}
