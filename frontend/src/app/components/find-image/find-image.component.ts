import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  SecurityContext
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { APP_TPL_TEXT, MAX_PAGE_SIZE } from 'src/app/app.definitions';
import { SearchImageService } from 'src/app/services/search-image.service';

@Component({
  selector: 'app-find-image',
  templateUrl: './find-image.component.html',
  styleUrls: ['./find-image.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FindImageComponent {
  @Output() fetchImagesCb = new EventEmitter<any>();
  searchFormControl = new FormControl({ disabled: true }, Validators.required);
  query = '';
  lastQuery = '';
  page = 1; // start at first page by default
  isLoading = false;
  nonEmptyData = false;
  // flags to help with pagination UI
  hitSubmit = false;
  singlePage = false;
  readonly tplText = APP_TPL_TEXT;

  constructor(
    private searchImages: SearchImageService,
    private sanitizer: DomSanitizer,
  ) {}

  fetchImages(): void {
    if (!this.query || this.isLoading) { return; }
    this.isLoading = true;
    this.hitSubmit = true;
    if (this.query !== this.lastQuery) { this.page = 1; } // reset page counter if new search term
    this.query = this.sanitizer.sanitize(SecurityContext.HTML, this.query);
    this.lastQuery = this.query;
    this.searchImages.getImages(this.query, null, null, this.page).subscribe((resp) => {
      this.isLoading = false;
      this.nonEmptyData = !!resp.data.length;
      this.singlePage = resp.data.length < MAX_PAGE_SIZE;
      this.fetchImagesCb.emit(resp.data);
    }, (err) => {
      this.isLoading = false;
      console.log('Error on Search', err);
    });
  }

  getNextPage(): void {
    if (this.nonEmptyData) {
      this.page++;
      this.fetchImages();
    }
  }

  getPrevPage(): void {
    if (this.page > 1) { this.page--; }
    this.fetchImages();
  }

}
