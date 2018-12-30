import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {JwtModel} from '../jwt/jwt.model';
import {AuthModel} from './auth.model';


@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {}

  authRequest(authentication: AuthModel): Observable <JwtModel> {
    return this.http.post <JwtModel> ( `${environment.apiUrl}/auth`, authentication);
  }
}
