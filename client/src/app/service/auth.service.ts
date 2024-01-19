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

<<<<<<< HEAD
  loginService(loginObj: any){
    console.log(`${apiUrls.authServiceApi}login`);
    
    return this.http.post<any>(`${apiUrls.authServiceApi}login`,loginObj)
  }
=======
>>>>>>> parent of 744f138 (Login and header setup 0.1)
}
