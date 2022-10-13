import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  fieldUrl = ''
  countriesURL = 'https://restcountries.com/v3.1/all'


  constructor(private http: HttpClient) { }
  getData(){
    this.fieldUrl = `${this.countriesURL}`
    console.log(this.fieldUrl)
    return this.http.get(this.fieldUrl)
  }

}

