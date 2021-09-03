import { Image } from './Image';

export interface Project {
  slug: string;
  title: string;
  image?: Image;
  excerpt?: string;
  content?: string;
  updatedAt: string;
}
