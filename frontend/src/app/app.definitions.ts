export enum ImgurGallerySort {
  TIME = 'time', // API default
  VIRAL = 'viral',
  TOP = 'top'
}

export enum ImgurGalleryWindow {
  ALL = 'all', // API default
  DAY = 'day',
  WEEK = 'week',
  MONTH = 'month',
  YEAR = 'year',
}

export interface IImgurRequest {
  sort?: ImgurGallerySort;
  window?: ImgurGalleryWindow;
  page?: number;
}

// Naive setup to easily add localization later for text going to view
export const APP_TPL_TEXT = {
  HEADER: 'Photo Gallery Finder',
  SEARCH: 'Search',
  SEARCH_INPUT: 'Search Images',
  SEARCH_PLACEHOLDER: 'ex. "Cats", "Cool Cats & Kittens", etc.',
  SEARCH_ERROR: 'Please enter a valid search query!',
};
