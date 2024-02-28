import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { apiUrls } from '../api.urls';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  navigate(arg0: string[]) {
    throw new Error('Method not implemented.');
  }
  http = inject(HttpClient);

  registerService(registerObj: any){
    return this.http.post<any>(`${apiUrls.authServiceApi}register`,registerObj)
  }


  loginService(loginObj: any){
    // console.log(`${apiUrls.authServiceApi}login`,loginObj);
    
    return this.http.post<any>(`${apiUrls.authServiceApi}login`,loginObj)
  }

}
