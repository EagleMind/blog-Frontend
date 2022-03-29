import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'primeng/api';
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
  remember: boolean = false;
  registered: boolean = false;
  msgs: Message[] = [
    {
      severity: 'success',
      summary: 'Account created',
      detail: 'Use your credentials to login',
    },
  ];

  constructor(
    private auth: AuthService,
    private tokenStorage: TokenStorageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.registered = !!this.route.snapshot.paramMap.get('registered');
  }

  login() {
    this.auth.login(this.email, this.password).subscribe({
      next: (res) => {
        this.tokenStorage.saveToken(res.token, this.remember);
      },
      error: (err) => console.error(err),
    });
  }
}
