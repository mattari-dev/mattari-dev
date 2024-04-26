import { Component } from '@angular/core';
import { TuiButtonModule } from '@taiga-ui/core';
import { Project } from '../../core/models/project.model';
import { HorizontalDividerComponent } from '../../core/components/horizontal-divider/horizontal-divider.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TuiButtonModule, HorizontalDividerComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  projects: Project[] = [
    {
      id: 1,
      image: null,
      content: 'This is the page you are looking at right now!',
    },
    {
      id: 2,
      image: null,
      content: 'To be populated soon!',
    },
    {
      id: 3,
      image: null,
      content: 'To be populated soon!',
    },
  ];
}
