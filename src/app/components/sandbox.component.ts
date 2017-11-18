import {Component} from '@angular/core';

@Component({
  selector: 'app-sandbox',
  template: `
    <h1>Hello
      <!--
      <span *ngIf="showName">{{name}}</span>
      <span *ngIf="!showName">World</span>
      -->
      <span *ngIf="showName; else noName">{{name}}</span>
      <ng-template #noName>World</ng-template>

      <p>Hello {{ showName ? name : 'World'}}</p>

    </h1>

    <hr>

    <div [ngSwitch]="greeting">
      <div *ngSwitchCase="'1'">Hello World</div>
      <div *ngSwitchCase="'2'">Hi There</div>
      <div *ngSwitchCase="'3'">What's Up</div>
      <div *ngSwitchDefault>Hello</div>
    </div>

  `
})

export class SandboxComponent {
  name = 'John Doe';
  showName = true;
  greeting = -1;
}
