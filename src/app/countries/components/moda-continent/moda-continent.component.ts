import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Continent } from '../../interfaces/continent.interface';

@Component({
  selector: 'app-moda-continent',
  templateUrl: './moda-continent.component.html',
  styleUrl: './moda-continent.component.css'
})
export class ModaContinentComponent implements OnInit {

  public continents:Continent[]=[];
  public selectedContinents:Continent[]=[];

  constructor(
    public dialogRef: MatDialogRef<ModaContinentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnInit(): void {
    this.continents = this.data;
  }
  toggleSelection(continent: any) {
    continent.selected = !continent.selected;
  }
  clearSelection() {
    this.continents.forEach(continent => continent.selected = false);
  }
  closeDialog() {

    this.selectedContinents = this.continents
      .filter(continent => continent.selected)

    
      
    this.dialogRef.close(this.selectedContinents);
  }

}
