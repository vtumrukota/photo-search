import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  SecurityContext
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { APP_TPL_TEXT } from 'src/app/app.definitions';
import { SearchImageService } from 'src/app/services/search-image.service';


@Component({
  selector: 'app-find-image',
  templateUrl: './find-image.component.html',
  styleUrls: ['./find-image.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FindImageComponent {
  @Output() fetchImagesCb = new EventEmitter<any>();
  query = '';
  isLoading = false;
  searchFormControl = new FormControl({ disabled: true }, Validators.required);
  readonly tplText = APP_TPL_TEXT;

  constructor(
    private searchImages: SearchImageService,
    private sanitizer: DomSanitizer,
  ) {}

  fetchImages(): void {
    if (!this.query || this.isLoading) { return; }
    this.isLoading = true;
    this.query = this.sanitizer.sanitize(SecurityContext.HTML, this.query);
    this.searchImages.getImages(this.query).subscribe((resp) => {
      this.isLoading = false;
      this.fetchImagesCb.emit(resp.data);
    }, (err) => {
      this.isLoading = false;
      console.log('Error on Search', err);
    });
  }


}
