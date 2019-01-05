import { Component, OnInit } from '@angular/core';
import {TokenInfoModel} from '../share/tokeninfo/tokenInfo.model';
import {JwtService} from '../share/jwt/jwt.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  jwtService: JwtService;
  info: TokenInfoModel;
  email: string;
  id: string;

  constructor() { }

  ngOnInit() {
    this.jwtService = new JwtService();
  }

  getInfoToken() {
    this.info = JwtService.getValue();
    this.id = JwtService.getIDValue();
    this.email = JwtService.getEmailValue();
  }


}
