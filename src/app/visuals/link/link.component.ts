import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'link-text',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent implements OnInit {
  @Input() text!: string;

  constructor() {}

  ngOnInit(): void {}
}
