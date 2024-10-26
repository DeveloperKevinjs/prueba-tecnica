import { Component,Inject, OnInit  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Countrie, states } from '../../interfaces/countrie.interface';
import { ImageUrl } from '../../interfaces/imageUrl.interface';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrl: './modal-info.component.css'
})
export class ModalInfoComponent implements OnInit {

  public filteredCountries!:Countrie;
  public imageUrls: ImageUrl = {};
  public url:string="";
  public nameCountry:string = "";
  public nameContinent:string = "";
  public nameCapital:string="";
  public nameLanguage:string="";
  public nameCurrency:string="";
  public regions:states[]=[]

 constructor(
    public dialogRef: MatDialogRef<ModalInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}


  ngOnInit(): void {
    this.filteredCountries = this.data[0];
    this.imageUrls = this.data[1];

    this.url = this.data[1][this.filteredCountries.name];

    this.nameCountry = this.filteredCountries.name;
    this.nameContinent = this.filteredCountries.continent.name;
    this.nameCapital = this.filteredCountries.capital;
    this.nameLanguage = this.filteredCountries.languages[0].name;
    this.nameCurrency = this.filteredCountries.currency
    this.regions = this.filteredCountries.states;

    console.log(this.filteredCountries)
    console.log(this.imageUrls)
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
