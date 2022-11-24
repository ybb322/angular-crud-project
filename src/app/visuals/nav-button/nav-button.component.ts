import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss'],
})
export class NavButtonComponent implements OnInit {
  constructor() {}

  @Input() text!: string;

  ngOnInit(): void {}
}
