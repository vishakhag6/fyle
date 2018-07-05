import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: String = 'Please select from select box or Type for search';
  public searchedVal: String = '';
  bankArr = [];
  values: any = [];
  animate: boolean = false;

  constructor(private _api: ApiService) {
    this.bankArr = this._api.bankArr;
  }

  ngOnInit() {
    
  }

  selectCountryChange(el) {
    this.animate = true;
    this._api.selectCountryChange(el).subscribe(data => this.values = data, error => console.log('Error'), () => this.animate = false);
  }

  searchValChange(val) {
    this.animate = true;
    this._api.searchValChange(val.toUpperCase()).subscribe(data => this.values = data , error => console.log('Error'), () => this.animate = false);
  }  
}
