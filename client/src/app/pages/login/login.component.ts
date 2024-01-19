import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  fb = inject(FormBuilder);
  authService= inject(AuthService);
  loginForm !:FormGroup
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:["",Validators.required],
      password:["",Validators.required],
    })
  }

  login(){console.log(this.loginForm.value);
  }
}
