import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { UnitsComponent } from './units/units.component';
import { RegistarationComponent } from './registration/registaration.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    UnitsComponent,
    RegistarationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'authentication', component: AuthenticationComponent},
      {path: 'units', component: UnitsComponent},
      {path: 'registration', component: RegistarationComponent},
      {path: '', redirectTo: 'authentication', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
