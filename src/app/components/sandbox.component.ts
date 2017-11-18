import {Component} from '@angular/core';

@Component({
  selector: 'app-sandbox',
  template: `<h1>Hello {{ name }}</h1>`
})

export class SandboxComponent {
  name: string = 'John Doe';
  age: number = 35;
  hasChildren: boolean = true;
  city: any = 'Boston';
  myNumbersArray: number[] = [1, 2, 3];
  myStringsArray: string[] = ['hello', 'world', 3];
  myAnyArray: any[] = [1, 2, 'hello'];
  myTuple: [string, number] = ['hello', 3];
  unusable: void = undefined;
  u: undefined = undefined;
  n: null = null;

  constructor() {
    this.myNumbersArray = ['hello', 'a', 'd'];

  }
}
