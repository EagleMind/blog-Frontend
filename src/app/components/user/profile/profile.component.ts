import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/_models/profile.model';
import { ProfileService } from 'src/app/_services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profile: Profile = new Profile();
  showEdit: boolean = false;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.profileService.me().subscribe({
      next: (res) => {
        this.profile = res[0];
        console.log(this.profile);
      },
      error: (err) => console.error(err),
    });
  }

  editProfile() {
    this.showEdit = true;
  }
}
