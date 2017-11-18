import {Component} from '@angular/core';

@Component({
  selector: 'app-sandbox',
  template: `<h1>Hello World</h1>`
})

export class SandboxComponent {
  customer: Customer;
  customers: Customer;

  constructor() {
    this.customer = {
      id: 1,
      name: 'John Doe',
      email: 'john@gmail.com'
    };
    this.customers = [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@gmail.com'
      },
      {
        id: 2,
        name: 'Brad Traversy',
        email: 'brad@gmail.com'
      },
      {
        id: 3,
        name: 'Steve Smith',
        email: 'steve@gmail.com'
      }
    ];
  }
}

