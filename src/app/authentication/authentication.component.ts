import { Component, OnInit } from '@angular/core';
import {AuthService} from '../share/auth/auth.service';
import {Router} from '@angular/router';
import {AuthModel} from '../share/auth/auth.model';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  authentication: AuthModel;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
      this.authentication = new AuthModel();
  }

  onAuth() {
    this.authService.authRequest(this.authentication)
      .subscribe(data => console.log(data));
  }

}
