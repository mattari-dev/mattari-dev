import { Component, Input } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { SafePipe } from '../../../shared/pipes/safe.pipe';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [SafePipe],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  @Input() src!: SafeResourceUrl;
  @Input() type!: string;
}
