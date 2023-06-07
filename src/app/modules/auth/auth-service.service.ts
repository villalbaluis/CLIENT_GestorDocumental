import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  userData: any;

  constructor() { }

  decodeJwt(token: string): any {
    const elToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFsdmdhbCIsImNvcnJlbyI6ImdhbGVhbm9hbHZhcm9Ab3V0bG9vay5jb20iLCJob3JhTG9naW4iOiIxNDowNzo1MCIsImZlY2hhTG9naW4iOiIyMDIzLTA1LTI4VDA1OjAwOjAwLjAwMFoiLCJlbXBsZWFkbyI6IkFsdmFybyBHYWxlYW5vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICIsImRvY3VtZW50byI6IjEyMzQ1NjciLCJyb2wiOiJHZXJlbnRlIiwiaWF0IjoxNjg1MzQwMDc0LCJleHAiOjE2ODUzNDM2NzR9.KgEHJ2Qn8T5lehEna5vKgu064KC1s6dnpg3KsRgyImE"   
    return jwt_decode(elToken);
  };

  logout() {
    localStorage.removeItem('userData');
    // sessionStorage.removeItem('userData');
  }
}
