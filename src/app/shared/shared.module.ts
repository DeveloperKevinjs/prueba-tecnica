import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchComponent } from './components/search/search.component';
import { RouterModule } from '@angular/router';
import { PruebaComponent } from './components/prueba/prueba.component';



@NgModule({
  declarations: [
    SidebarComponent,
    SearchComponent,
    PruebaComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SidebarComponent,
    SearchComponent,
    PruebaComponent
  ]
})
export class SharedModule { }
