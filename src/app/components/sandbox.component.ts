import {Component} from '@angular/core';

@Component({
  selector: 'app-sandbox',
  template: `
    <h1>Hello World</h1>
    <div>
      <input type="text" (keyup)="fireEvent($event)" placeholder="keyup event">
    </div>
    <div>
      <input type="text" (keydown)="fireEvent($event)" placeholder="keydown event">
    </div>
    <div>
      <input type="text" (focus)="fireEvent($event)" placeholder="focus event">
    </div>
    <div>
      <input type="text" (blur)="fireEvent($event)" placeholder="blur event">
    </div>
    <div>
      <input type="text" (cut)="fireEvent($event)" placeholder="cut event">
    </div>
    <div>
      <input type="text" (copy)="fireEvent($event)" placeholder="copy event">
    </div>
    <div>
      <input type="text" (paste)="fireEvent($event)" placeholder="paste event">
    </div>

    <hr>

    <div>
      <input type="text" (keyup)="changeText($event)" placeholder="change text" value="{{text}}">
    </div>

    <h2>{{ text }}</h2>
  `
})

export class SandboxComponent {
  text = 'Hello';


  fireEvent(e) {
    console.log(e.type);
  }

  changeText(e) {
    this.text = e.target.value;
  }
}
