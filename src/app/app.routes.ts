import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'mattari.dev | Home' },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  {
    path: 'projects',
    component: ProjectsComponent,
    title: 'mattari.dev | Projects',
  },
  { path: 'about', component: AboutComponent, title: 'mattari.dev | About' },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'mattari.dev | Contact',
  },
];
