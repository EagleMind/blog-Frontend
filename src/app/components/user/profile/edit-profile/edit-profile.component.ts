import { Component, Input, OnInit } from '@angular/core';
import { Inplace } from 'primeng/inplace';
import { Profile } from 'src/app/_models/profile.model';
import { ProfileService } from 'src/app/_services/profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  @Input() loading!: boolean;
  @Input() profile!: Profile;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {}

  inplaceClick(inp: Inplace) {
    if (inp.active) {
      const profileUpdate = this.profile;
      this.profileService.update(profileUpdate).subscribe({
        next: (res) => {
          inp.deactivate();
          console.log(res);
        },
        error: (err) => {
          console.error(err);
        },
      });
      return;
    }
    inp.activate();
  }
}
