import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;

  constructor(
    private auth: AuthService,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {}

  login() {
    this.auth.login(this.email, this.password).subscribe({
      next: (res) => {
        this.tokenStorage.saveToken(res.token, true);
      },
      error: (err) => console.error(err),
    });
  }
}
