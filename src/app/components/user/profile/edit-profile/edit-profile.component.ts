import { Component, Input, OnInit } from '@angular/core';
import { Profile } from 'src/app/_models/profile.model';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  @Input() profile!: Profile;

  constructor() {}

  ngOnInit(): void {}
}
