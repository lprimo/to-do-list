import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task/task.service';

@Component({
  selector: 'app-registro',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  formRegister!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.validateForm();
  }

  validateForm(): void {
    this.formRegister = this.fb.group({
      name: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.formRegister.valid) {
      const name = this.formRegister.value.name;
      this.authService.login(name);
      this.taskService.initTask();
      this.router.navigate(['/to-do-list'])
      
    } else {
      this.formRegister.reset();
      console.error('Dado inválido');
    }
  }
}
