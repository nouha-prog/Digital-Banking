import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      username: this.fb.control("", [Validators.required]),
      password: this.fb.control("", [Validators.required])
    });
  }

  handleLogin() {
    if (this.formLogin.valid) {
      this.errorMessage = null;
      this.authService.login(this.formLogin.value.username, this.formLogin.value.password).subscribe({
        next: (data) => {
          this.authService.loadProfile(data);
          this.router.navigateByUrl("/admin");
        },
        error: (err) => {
          this.errorMessage = 'Invalid username or password';
          console.log(err);
        }
      });
    } else {
      this.errorMessage = 'Please fill in all required fields';
    }
  }
}
