import { Component, Input } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { SafePipe } from '../../../shared/pipes/safe.pipe';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [SafePipe, NgIf],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  @Input() src!: SafeResourceUrl;
  @Input() href: string | null | undefined;
  @Input() type!: string;
}
