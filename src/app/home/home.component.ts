import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title:string = "Please select from select box or Type for search";
  searchedVal:string = ""; 
  bankArr = ['Delhi', 'Banglore', 'Agra', 'Mumbai', 'Pune'];
  values = [];

  BASE_URL = 'https://app.fyle.in/api/bank_branches?city=';
  FETCH_URL = this.BASE_URL + this.searchedVal + '&offset=0&limit=50';

  constructor() {}

  ngOnInit() {}

  countryChange(e) {
    this.FETCH_URL = this.BASE_URL + e.target.value.toUpperCase() + '&offset=0&limit=50';
    fetch(this.FETCH_URL)
    .then((res) => res.json())
    .then((data) => this.values = data)
    .catch((err) => console.log(err));
    this.searchedVal = '';
  }

  searchValChange() {
    this.FETCH_URL = this.BASE_URL + this.searchedVal.toUpperCase() + '&offset=0&limit=50';
    fetch(this.FETCH_URL)
    .then((res) => res.json())
    .then((data) => this.values = data)
    .catch((err) => console.log(err));
    this.searchedVal = '';
  }
}
