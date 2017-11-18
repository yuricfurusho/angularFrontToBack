import {Component} from '@angular/core';

@Component({
  selector: 'app-sandbox',
  template: `
    <h1>Hello World</h1>
    <button id="btn" (click)="fireEvent($event)">click Event</button>  <br>
    <button id="btn" (mouseover)="fireEvent($event)">mouseover Event</button>  <br>
    <button id="btn" (mousedown)="fireEvent($event)">mousedown Event</button>  <br>
    <button id="btn" (mouseup)="fireEvent($event)">mouseup Event</button>  <br>
    <button id="btn" (dblclick)="fireEvent($event)">dblclick Event</button>  <br>
    <button id="btn" (drag)="fireEvent($event)">drag Event</button>  <br>
    <button id="btn" (dragover)="fireEvent($event)">dragover Event</button>  <br>
  `
})

export class SandboxComponent {
  fireEvent(e) {
    // console.log('Button clicked');
    // console.log(greeting);
    // console.log(e.target);
    // console.log(e.target.id);
    console.log(e.type);
    // alert(e.type);

  }
}
