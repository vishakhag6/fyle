import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public searchedVal: String = '';
  public bankArr = ['Delhi', 'Banglore', 'Agra', 'Mumbai', 'Pune'];
  public values: any = [];

  BASE_URL = 'https://app.fyle.in/api/bank_branches?city=';
  public FETCH_URL;

  constructor(private _http: HttpClient) {

  }

  selectCountryChange(e) {
    this.FETCH_URL = this.BASE_URL + e.target.value.toUpperCase() + '&offset=0&limit=150';
      return this._http.get(this.FETCH_URL);
  }

  searchValChange(val) {
    this.FETCH_URL = this.BASE_URL + val + '&offset=0&limit=150';
    return this._http.get(this.FETCH_URL);
  }
}
