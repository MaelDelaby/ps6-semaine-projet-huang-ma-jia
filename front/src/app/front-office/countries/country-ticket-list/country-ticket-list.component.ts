import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Country} from 'src/models/country';

@Component({
  selector: 'app-country-ticket-list',
  templateUrl: './country-ticket-list.component.html',
  styleUrls: ['./country-ticket-list.component.scss']
})
export class CountryTicketListComponent implements OnInit {

  @Output() clickEventList = new EventEmitter<String>();

  @Input() countryTicketList:  Country[];
  @Input() countryTicketListVisible: Country[];

  public research: String = '';
  public selectedSort: String = 'Alphabétique A-Z';

  constructor() {
  }

  ngOnInit() {
  }

  onClick(countryId: string) {
    this.clickEventList.emit(countryId);
  }

  researchChange(value) {
    this.research = value;
    this.filterWithResearch();
  }

  selectASort(sort: String) {
    this.selectedSort = sort;
    this.countryListSort();
  }

  filterWithResearch() {
    this.countryTicketListVisible = this.countryTicketList.filter(country => {
      return country.name.toUpperCase().includes(this.research.toUpperCase())
        || country.id.toUpperCase().includes(this.research.toUpperCase());
    });
    this.countryListSort();
  }

  countryListSort() {
    this.countryTicketListVisible = this.countryTicketListVisible.sort((a, b) => {
      switch (this.selectedSort) {
        case 'Alphabétique A-Z':
          return a.name < b.name ? -1 : 1;
        case 'Alphabétique Z-A' :
          return a.name > b.name ? -1 : 1;
        case 'Facilité des démarches' :
          return b.visaStudentDifficulty - a.visaStudentDifficulty;
        case 'Cout de la vie croissant' :
          return a.costOfLiving - b.costOfLiving;
        case 'Note moyenne des stages' :
          return b.averageRatingIntership - a.averageRatingIntership;
        case 'Nombre d\'entreprise' :
          return b.nbCompany - a.nbCompany;
        case 'Nombre de stage' :
          return b.nbIntership - a.nbIntership;
      }
    });
  }
}



