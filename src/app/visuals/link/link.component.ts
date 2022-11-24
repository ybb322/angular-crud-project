import { Component, Input } from '@angular/core';

@Component({
  selector: 'link-text',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent {
  @Input() text: string;
}
