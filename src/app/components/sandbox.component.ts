import {Component} from '@angular/core';

@Component({
  selector: 'app-sandbox',
  template: `
    <h1>Hello World</h1>

    <form (submit)="onSubmit()">
      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control" [(ngModel)]="name" name="name">
      </div>
      <input type="submit" class="btn btn-success" value="Submit">
    </form>
    <hr>
    <ul class="list-group">
      <li class="list-group-item" *ngFor="let user of users">{{ user}}
      </li>
    </ul>
  `
})

export class SandboxComponent {
  name = '';
  users: string[] = ['John Doe', 'Mary Swanson', 'Kevin Smith'];

  onSubmit() {
    // console.log(this.name);
    this.users.push(this.name);
    this.name = '';
  }
}
