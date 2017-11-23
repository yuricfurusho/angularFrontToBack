import {Component} from '@angular/core';

@Component({
  selector: 'app-sandbox',
  template: `
    <h1>Hello World</h1>
    <div class="container">
      <form>
        <div class="form-group">
          <label>Name</label>
          <input type="text" [(ngModel)]="name" name="name" class="form-control">
        </div>
        <div class="form-group">
          <label>Age</label>
          <input type="number" [(ngModel)]="age" name="age" class="form-control">
        </div>

        <input type="submit" value="submit" class="btn btn-success">
      </form>
    </div>

    <h4>{{name}}</h4>
    <h4>{{age}}</h4>
  `
})

export class SandboxComponent {
  name = '';
  age = 0;
}
