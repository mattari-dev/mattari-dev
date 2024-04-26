import { Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { VerticalDividerComponent } from '../vertical-divider/vertical-divider.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TuiButtonModule } from '@taiga-ui/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    IconComponent,
    VerticalDividerComponent,
    TuiButtonModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  logo_icon = 'assets/icons/logo_square.svg';
  discord_icon = 'assets/icons/discord.svg';
  youtube_icon = 'assets/icons/youtube.svg';
  github_icon = 'assets/icons/github.svg';
}
