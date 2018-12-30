import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {

  public numberUnit: number;
  public name: string;

  constructor() {
    this.numberUnit = 34;
    this.name = 'Present simple';
  }

  getUnit() {
    return this.numberUnit + ': ' + this.name;
  }

  ngOnInit() {
  }

}
