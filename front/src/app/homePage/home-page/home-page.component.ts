import { Component, OnInit } from '@angular/core';
import {Country} from '../../../models/country';
import {CountryService} from '../../../services/country/country.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public countryTicketList: Country[] = [];

  constructor(public countryService: CountryService) {
    this.countryService.countries$.subscribe((countries) => this.countryTicketList = countries);
  }

  ngOnInit() {

  }

  onClick(countryId: string) {
    window.location.href = 'http://localhost:4200/country/?id=' + countryId;
  }
}
