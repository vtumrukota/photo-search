import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { APP_TPL_TEXT, DIALOG_CFG } from 'src/app/app.definitions';
import { ImageCard } from 'src/app/models/image-card';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.sass']
})
export class ImageListComponent implements OnInit {
  @Input() images: ImageCard[];
  readonly tplText = APP_TPL_TEXT;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {}

  showImage(item: ImageCard): void {
    this.dialog.open(DialogComponent, {
      ...DIALOG_CFG,
      data: {
        title: item.title,
        images: item.images,
      }
    });
  }
}
