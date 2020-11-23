import { Component } from '@angular/core';
import { APP_TPL_TEXT } from './app.definitions';
import { ImageCard } from './models/image-card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'photo-search';
  imageList: any[] = [];
  readonly tplText = APP_TPL_TEXT;

  constructor() {}

  setImages(event): void {
    console.log('setImages fired', event);
    const items = event.data || [];
    this.imageList = items.map((image) => {
      return new ImageCard(image);
    });
  }

}
