import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesRoutingModule } from './countries-rountig.module';
import { SharedModule } from '../shared/shared.module';
import { ByHomePageComponent } from './pages/by-home-page/by-home-page.component';
import { ModalInfoComponent } from './components/modal-info/modal-info.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModaContinentComponent } from './components/moda-continent/moda-continent.component';



@NgModule({
  declarations: [
    ByHomePageComponent,
    ModalInfoComponent,
    ModaContinentComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule,
    MatDialogModule,
    
  ]
})
export class CountriesModule { }
