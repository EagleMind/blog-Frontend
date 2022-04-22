import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { PostsComponent } from './posts/posts.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';

import { ChipModule } from 'primeng/chip';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InplaceModule } from 'primeng/inplace';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SkeletonModule } from 'primeng/skeleton';
import { ImageModule } from 'primeng/image';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  declarations: [ProfileComponent, PostsComponent, EditProfileComponent],
  imports: [
    TabViewModule,
    ImageModule,
    SkeletonModule,
    InputTextareaModule,
    InputTextModule,
    InplaceModule,
    DialogModule,
    ButtonModule,
    ChipModule,
    FormsModule,
    CommonModule,
    UserRoutingModule,
  ],
})
export class UserModule {}
