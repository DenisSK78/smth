import {Component, OnInit} from '@angular/core';
import {AuthService} from '../share/auth/auth.service';
import {Router} from '@angular/router';
import {AuthModel} from '../share/auth/auth.model';
import {JwtModel} from '../share/jwt/jwt.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  public jwtModel: JwtModel;
  form: FormGroup;

  constructor(private router: Router,
              private authService: AuthService,
              private fb: FormBuilder
              ) { }

  ngOnInit() {
      this.initForm();
  }

  onAuth() {
    this.authService.authRequest( this.form.getRawValue())
      .subscribe(data => {
        this.jwtModel = data;
        // console.log(this.jwtModel);
      });
  }

  private initForm() {
    this.form = this.fb.group({
      password: ['', [
        Validators.required
      ]
      ],
      username: ['', [
        Validators.required, Validators.email
      ]
      ]
    });
  }

  onSubmit() {
    const controls = this.form.controls;

    if (this.form.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      return;
    }
    this.onAuth();
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.form.controls[controlName];
    return control.invalid && control.touched;
  }

// localStorage.setItem('id_token', authResult.idToken);
}
