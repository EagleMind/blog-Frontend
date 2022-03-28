import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  register(email: string, password: string) {
    this.auth.register(email, password).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.error(err),
      complete: () => console.info('complete'),
    });
  }
}
