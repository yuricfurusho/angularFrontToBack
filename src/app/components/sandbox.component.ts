import {Component} from '@angular/core';

@Component({
  selector: 'app-sandbox',
  template: `
    <h1>Hello World</h1>
    <button (click)="changeValue()">Change Value</button>
    <div *ngIf="value">
      <h1>{{ text }}</h1>
    </div>


  `
})

export class SandboxComponent {
  text = 'Hello World';
  value = true;

  changeValue() {
    // this.value = false;
    this.value = !this.value;
  }
}
