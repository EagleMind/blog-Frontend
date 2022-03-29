import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  email!: string;
  password!: string;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  register() {
    this.auth.register(this.email, this.password).subscribe({
      next: () => {
        this.router.navigate(['/auth/login', { registered: true }]);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
