import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { PostsComponent } from './posts/posts.component';

import { ChipModule } from 'primeng/chip';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [ProfileComponent, PostsComponent],
  imports: [ButtonModule, ChipModule, CommonModule, UserRoutingModule],
})
export class UserModule {}
