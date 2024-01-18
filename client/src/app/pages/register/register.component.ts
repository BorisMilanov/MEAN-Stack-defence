import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder,FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export default class  RegisterComponent implements OnInit {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  registerForm !: FormGroup;
  ngOnInit(): void{
    this.registerForm = this.fb.group({
      firstName:['', Validators.required],
      username:['', Validators.required],
      email:['', Validators.compose([Validators.required, Validators.email])],
      password:['', Validators.required],
    })
  }

  register(){
    this.authService.registerService(this.registerForm.value).subscribe({next:(res)=>{
      alert("User Created");
    },error(err) {
      console.log(err);
    },})
  }
}
