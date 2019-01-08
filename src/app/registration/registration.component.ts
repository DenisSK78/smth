import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;

  constructor(private router: Router,
              private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.initForm();
  }

  toLogin() {
    this.router.navigateByUrl('authentication');
  }

  onRegistration() {
    console.log(this.form.getRawValue());
  }

  private initForm() {
    this.form = this.fb.group({
      name: ['', [
        Validators.required, Validators.min(2), Validators.max(20)
      ]
      ],
      email: ['', [
        Validators.required, Validators.email
      ]
      ],
      password: ['', [
        Validators.required, Validators.min(4), Validators.max(20)
      ]
      ],
      repeat: ['', [
        Validators.required
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
    this.onRegistration();
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.form.controls[controlName];
    return control.invalid && control.touched;
  }

}
