import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.verifySession();
  }

  verifySession() {
    if (!this.authService.isAuthenticated())
      this.router.navigate(['/Register'])
  }

  taskGerada: string = '';

  handleEvent(eventData: string): void {
    this.taskGerada = eventData;
  }

}
