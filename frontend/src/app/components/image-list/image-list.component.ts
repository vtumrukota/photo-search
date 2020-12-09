import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { APP_TPL_TEXT, DIALOG_CFG } from 'src/app/app.definitions';
import { ImageCard } from 'src/app/models/image-card';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.sass']
})
export class ImageListComponent implements OnInit, OnChanges {
  @Input() images: ImageCard[];
  tagList: any[] = [];
  readonly tplText = APP_TPL_TEXT;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (!!changes.images) {
      this.generateTags(changes.images.currentValue as any);
    }
  }

  showImage(item: ImageCard): void {
    this.dialog.open(DialogComponent, {
      ...DIALOG_CFG,
      data: {
        title: item.title,
        images: item.images,
      }
    });
  }

  filterTags() {
    // check if the card has tag list, ignore if not
    // iterate over tagList, then if the tag contains that name, return it to a new list
    this.images = this.images.filter((img) => {
      // if (img.tags) {
      //   img.tags()
      // }
    })
  }

  private generateTags(list: ImageCard[]) {
    let countMap = {};
    this.tagList = list.reduce((acc, img) => {
      if (img.tags) {
        img.tags.forEach((tag) => {
          if (countMap[tag.name]) {
            countMap[tag.name]++;
          } else {
            countMap[tag.name] = 1;
          }
          acc.push(tag.name);
        })
      }
      return acc;
    }, [])
    const keys = Object.keys(countMap);
    console.log('keys', keys);
    const tagCounts = keys.reduce((acc, item) => {
      acc.push({ name: item, count: countMap[item] });
      return acc;
    }, []);
    console.log('tagCounts', tagCounts);
    this.tagList = tagCounts.sort((a, b) => {
      return b.count - a.count;
    });
    // console.log('tag list', this.tagList);
  }

  

}
