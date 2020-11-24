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

  setImages(images: any = []): void {
    this.imageList = images.map((image) => {
      return new ImageCard(image);
    });
    console.log('image list: ', this.imageList);
  }

}
