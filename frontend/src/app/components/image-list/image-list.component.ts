import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { APP_TPL_TEXT } from 'src/app/app.definitions';
import { ImageCard } from 'src/app/models/image-card';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.sass']
})
export class ImageListComponent implements OnInit {
  @Input() images: ImageCard[];
  readonly tplText = APP_TPL_TEXT;

  constructor() { }

  ngOnInit(): void {
    console.log('')
  }

}
