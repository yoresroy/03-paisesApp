import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string = 'https://restcountries.com/v3.1'

  constructor(private http:HttpClient) { }


  bucarPais( termino : string ) : Observable<Country[]> {

    const url = `${this.apiUrl}/name/${termino}`
    return this.http.get<Country[]>(url);
  }

  bucarCapital( termino : string ) : Observable<Country[]> {

    const url = `${this.apiUrl}/capital/${termino}`
    return this.http.get<Country[]>(url);
  }

  getPaisPorAlpha( termino : string ) : Observable<Country> {

    const url = `${this.apiUrl}/alpha/${termino}`
    return this.http.get<Country>(url);
  }
  

}
