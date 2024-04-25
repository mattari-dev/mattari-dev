import { Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { VerticalDividerComponent } from '../vertical-divider/vertical-divider.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    IconComponent,
    VerticalDividerComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  logo_icon = "assets/icons/logo_square.svg"
}
