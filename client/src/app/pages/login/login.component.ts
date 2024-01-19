<<<<<<< HEAD
import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

=======
import { Component } from '@angular/core';
>>>>>>> parent of 744f138 (Login and header setup 0.1)

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
<<<<<<< HEAD

export default class LoginComponent implements OnInit {
  fb = inject(FormBuilder);
  authService= inject(AuthService);
  router = inject(Router);
  loginForm !:FormGroup
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:["",Validators.required],
      password:["",Validators.required],
    })
  }

  login(){
    this.authService.loginService(this.loginForm.value).subscribe({
      next:(res)=>{
        alert("Login is Success!");
        this.router.navigate(['home']);
        this.loginForm.reset();
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
=======
export default class LoginComponent {

>>>>>>> parent of 744f138 (Login and header setup 0.1)
}
