import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ebanking-frontend';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.loadJwtTokenFromLocalStorage();
  }
}
