import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder,FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export default class  RegisterComponent implements OnInit {
  fb = inject(FormBuilder);
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
    console.log(this.registerForm.value);
    
  }
}
