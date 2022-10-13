import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  fieldUrl = ''
  countriesURL = 'https://restcountries.com/v3.1/'


  constructor(private http: HttpClient) { }
  getAllData(){
    this.fieldUrl = `${this.countriesURL}all`
    console.log(this.fieldUrl)
    return this.http.get(this.fieldUrl);
  }
  getDataArgs(args: any){
    this.fieldUrl = 'https://restcountries.com/v3.1/all?fields='

    args.forEach((element: any) => {
      this.fieldUrl += element + ','
    });
    console.log(this.fieldUrl,"all data ARGs")
    return this.http.get(this.fieldUrl);
  }


}

