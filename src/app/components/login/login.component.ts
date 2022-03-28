import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  login(email: string, password: string) {
    this.auth.login(email, password).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.error(err),
      complete: () => console.info('complete'),
    });
  }
}
