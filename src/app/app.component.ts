import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.redirectRoute();
  }

  redirectRoute(): void {
    if (this.authService.isAuthenticated())
      this.router.navigate(['/to-do-list'])
    else
      this.router.navigate(['/sign-in'])
  }
}
