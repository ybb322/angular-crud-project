import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss'],
})
export class ActionButtonComponent implements OnInit {
  @Input() text!: string;

  constructor() {}

  ngOnInit(): void {}
}
