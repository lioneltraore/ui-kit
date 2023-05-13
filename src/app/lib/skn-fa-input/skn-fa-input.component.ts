import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skn-fa-input',
  templateUrl: './skn-fa-input.component.html',
  styleUrls: ['./skn-fa-input.component.scss']
})
export class SknFaInputComponent implements OnInit {

  @Input()
  icon = '';

  constructor() { }

  ngOnInit(): void {
  }

  get classes() {
    const cssClasses: any = {};

    if(this.icon) {
      cssClasses['fa-' + this.icon] = true;
    }

    return cssClasses;
  }

}
