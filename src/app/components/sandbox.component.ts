import {Component} from '@angular/core';

@Component({
  selector: 'app-sandbox',
  template: `
    <h1>Hello World</h1>
    {{people}}
    <ul>
      <li *ngFor="let person of people">
        {{person}}
      </li>
    </ul>
    <ul>
      <li *ngFor="let person of people; let i = index">
        {{i + 1}} {{person}}
      </li>
    </ul>
    <ul>
      <li *ngFor="let person of people2; let i = index">
        {{person.firstName}} {{person.lastName}}
      </li>
    </ul>
  `
})

export class SandboxComponent {
  people = ['Rick', 'Daryl', 'Carl', 'Glen'];

  people2 = [
    {
      firstName: 'Rick',
      lastName: 'Grimes'
    },
    {
      firstName: 'Daryl',
      lastName: 'Dixon'
    },
    {
      firstName: 'Carl',
      lastName: 'Grimes'
    }, {
      firstName: 'Glen',
      lastName: 'Rhee'
    }
  ];

  constructor() {
    this.people[2] = 'Carol';
  }
}
