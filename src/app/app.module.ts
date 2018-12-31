import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { UnitsComponent } from './units/units.component';
import { RegistrationComponent } from './registration/registration.component';
import {AuthService} from './share/auth/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    UnitsComponent,
    RegistrationComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: 'authentication', component: AuthenticationComponent},
      {path: 'units', component: UnitsComponent},
      {path: 'registration', component: RegistrationComponent},
      {path: '', redirectTo: 'authentication', pathMatch: 'full' }
    ])
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
