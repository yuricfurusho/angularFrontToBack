import {Component} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-sandbox',
  template: `<h1>Hello World</h1>`
})

export class SandboxComponent {
  constructor(public dataService: DataService) {

  }
}
