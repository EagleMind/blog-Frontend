import { Post } from './post.model';

export class Profile {
  id!: string;
  email!: string;
  name!: string;
  profile_pic!: string;
  bio!: string;
  job_title!: string;
  user_posts!: [Post];
  followingIds!: [string];
  social_networks!: [SocialNetwork];
}

export class SocialNetwork {
  linkedin!: string;
}
