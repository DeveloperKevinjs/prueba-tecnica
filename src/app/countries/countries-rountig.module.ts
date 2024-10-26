import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { ByHomePageComponent } from './pages/by-home-page/by-home-page.component';
import { ByVista1PageComponent } from './pages/by-vista1-page/by-vista1-page.component';
import { ByVista2PageComponent } from './pages/by-vista2-page/by-vista2-page.component';

const routes: Routes = [
    {
      path: 'by_home',
      component: ByHomePageComponent
    },
    {
      path: 'by_vista1',
      component: ByVista1PageComponent
    },
    {
      path: 'by_vista2',
      component: ByVista2PageComponent
    },
    {
      path: '**',
      redirectTo: 'by_home',
    },

];

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class CountriesRoutingModule { }
