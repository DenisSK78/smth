import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../share/auth/auth.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthService,
              private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  toLogin() {
    this.router.navigateByUrl('authentication');
  }

  private initForm() {

  }
}
