import { SafeResourceUrl } from '@angular/platform-browser';

export interface Project {
  id: number;
  image: SafeResourceUrl | null;
  content: string;
}
