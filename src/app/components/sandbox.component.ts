import {Component} from '@angular/core';

@Component({
  selector: 'app-sandbox',
  template: `
    <!--
    <h1>Hello World</h1>
    &lt;!&ndash;3 ways to bind properties&ndash;&gt;
    <div><img src="{{ imageUrl }}"></div>
    <div><img [src]="imageUrl"></div>
    <div><img bind-src="imageUrl"></div>

    <h4>Image Location: <span [textContent]="imageUrl"></span></h4>
    -->
    <hr>
    <h2>Create Post</h2>
    <p [hidden]="isUnchanged">Post has been changed, please save</p>
    <button [disabled]="isUnchanged">Save</button>

  `
})

export class SandboxComponent {
  imageUrl = 'http://lorempixel.com/400/200';
  isUnchanged = false;
}
