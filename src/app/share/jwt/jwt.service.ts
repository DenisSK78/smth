import {Injectable} from '@angular/core';
import {TokenInfoModel} from '../tokeninfo/tokenInfo.model';

@Injectable()
export class JwtService {

  constructor() {}

  static getValue(): TokenInfoModel {
    return JSON.parse(atob(sessionStorage.getItem('token').split('.')[1]));
  }

  static getIDValue(): string {
    return this.getValue().jti;
  }

  static getEmailValue(): string {
    return this.getValue().sub;
  }
}
