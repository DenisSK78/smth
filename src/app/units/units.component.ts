import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css'],
  styles: ['img{margin: 20px}']
})
export class UnitsComponent implements OnInit {

  public numberUnit: number;
  public name: string;
  imageSrc = '/assets//images/open.png';
  imageTitle = 'open';
  flag = false;

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
