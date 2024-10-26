import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home/home.service';
import { Countrie } from '../../interfaces/countrie.interface';
import { ImageCountryService } from '../../services/imageCountry/image-country.service';
import { ImageUrl } from '../../interfaces/imageUrl.interface';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalInfoComponent } from '../../components/modal-info/modal-info.component';
import { PruebaComponent } from '../../../shared/components/prueba/prueba.component';
import { ModaContinentComponent } from '../../components/moda-continent/moda-continent.component';
import { Continent } from '../../interfaces/continent.interface';

@Component({
  selector: 'app-by-home-page',
  templateUrl: './by-home-page.component.html',
  styleUrl: './by-home-page.component.css'
})
export class ByHomePageComponent implements OnInit {


  public isContinentFilterActive: boolean = false; 
  public countries:Countrie[] =[];
  public filteredCountries:Countrie[]=[];
  public almacenarbusqueda:string="";
  public imageUrls: ImageUrl = {};

  public continents:Continent[]=[];
  public filteredCountries2:Countrie[]=[];
 
  constructor(
    private homeservice: HomeService,
    private imagecountryservice:ImageCountryService,
    private dialog:MatDialog
  ) {}

  ngOnInit(): void {

      this.homeservice.getAllCountries().subscribe({
        next: (result) => {
          this.countries = result;
        },
        error: (error) => {
          console.log(error);
        },
      }); 

      this.homeservice.getAllContinent().subscribe({
        next: (result) => {
          this.continents = result.map(continent => ({
            ...continent,
            selected: false
          }));
          console.log("contienentes: " , this.continents)
        },
        error: (error) => {
          console.log(error);
        },
      })
    
  }
  
  public onDebounce(search: string): void {
        if(search === "") return;
        this.applyFilter(search);
  }

  // applyFilter(search: string):void {
  //   this.filteredCountries = this.countries
  //   .filter(country => country.name.toLowerCase().includes(search.toLowerCase()));

  //   this.filteredCountries.forEach(value=>{
  //     this.viewImageCountry(value.name);
  //   });
  // }

  applyFilter(search: string): void {
    if (this.isContinentFilterActive) {
      this.filteredCountries = this.filteredCountries2;
      this.filteredCountries = this.filteredCountries
        .filter(country => country.name.toLowerCase().includes(search.toLowerCase()));
    } else {
      this.isContinentFilterActive=false;
      this.filteredCountries = this.countries
        .filter(country => country.name.toLowerCase().includes(search.toLowerCase()));
    }

    this.filteredCountries.forEach(value => {
      this.viewImageCountry(value.name);
    });
  }

  viewImageCountry(name:string){
    this.imagecountryservice.searchCountry(name).subscribe({
      next:(res)=>{
        if(res !== null){
          this.imageUrls[name] = res?.flags.svg;
        }
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }

  openModal(value:Countrie) {

    const dialogRef = this.dialog.open(ModalInfoComponent,{
      data: [value,this.imageUrls],
      width: '350px',
      height: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      console.log( {result} )
    });
  }

  openModalContinent(){
    const dialogRef = this.dialog.open(ModaContinentComponent,{
      data: this.continents,
      width: '800px',
      height: '400px',
      disableClose: true

    });

    dialogRef.afterClosed().subscribe((result:Continent[]) => {

      
      if (!result || result.length === 0) {
        this.filteredCountries2 = this.countries; 
        return; 
      }
      
      this.filteredCountries2 = this.countries.filter(country =>
        result.some((continent) =>
          country.continent.name.toLowerCase().includes(continent.name.toLowerCase())
        )
      );
      
      this.isContinentFilterActive = true;
    });
    
  }
}

