import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { AboutComponent } from './features/about/about.component';
import { ContactComponent } from './features/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'mattari.dev | Home'},
  { path: 'home', redirectTo: '', pathMatch: 'full'},
  { path: 'projects', component: ProjectsComponent, title: 'mattari.dev | Projects'},
  { path: 'about', component: AboutComponent, title: 'mattari.dev | About'},
  { path: 'contact', component: ContactComponent, title: 'mattari.dev | Contact'},
];
