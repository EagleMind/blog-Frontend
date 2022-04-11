import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { PostsComponent } from './posts/posts.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';

import { ChipModule } from 'primeng/chip';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [ProfileComponent, PostsComponent, EditProfileComponent],
  imports: [
    DialogModule,
    ButtonModule,
    ChipModule,
    CommonModule,
    UserRoutingModule,
  ],
})
export class UserModule {}
