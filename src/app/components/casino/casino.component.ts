import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { CasinoService } from 'src/app/services/casino.service';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-casino',
  templateUrl: './casino.component.html',
  styleUrls: ['./casino.component.css'],
})
export class CasinoComponent implements OnInit {
  countries: any = [];
  brands: any = [];
  categories: any = [];
  games: any = [];
  selCountry:any = '';
  selBrandID = 0;
  selCategory:string = '';
  selCategories: any = [];
  dropdownSettings :IDropdownSettings = {};

  constructor(private casinoService: CasinoService) {
  }
  ngOnInit(): void {
    this.selCategories = [];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'brand',
      selectAllText: 'All Brands',
      unSelectAllText: 'All Brands',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.getCountries();
    this.getBrands();
  }
  
  getCountries(): void {
    this.casinoService.getCountries().subscribe(
      data => {
        this.countries = data
        this.selCountry = data[0].country;
        this.getCategories(this.selBrandID)
      },
      error => { console.log(error) }
    );
  }
  onChangeCountry(country: string): void {
    this.selCountry = country
    this.getGames(this.selCategory)
  }

  getBrands(): void {
    this.casinoService.getBrands().subscribe(
      data => {
        this.brands = data
        this.selBrandID = data[0].id
        this.getCategories(this.selBrandID)
      },
      error => { console.log(error) }
    )
  }

  getCategories(brandid: any): void {
    this.selBrandID = brandid
    this.casinoService.getCategories(this.selBrandID).subscribe(
      data => {
        this.categories = data
        this.getGames('all')
      },
      error => { console.log(error) }
    )
  }
  getGames(category: any): void {
    this.selCategory = category
    this.casinoService.getGames(this.selCountry, this.selBrandID, this.selCategory).subscribe(
      data => { this.games = data },
      error => { this.games = error }
    )
  }

  onClickGame(launchcode: string, providername: string, rtp: any) {
    alert(`
    Launch Code: ${launchcode}
    Provider Name: ${providername}
    RTP: ${rtp}
    
    Game preparing. Please wait a moment.`)
  }
}
