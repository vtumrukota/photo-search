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

export interface IImgurImageData {
  account_id: number;
  account_url: string;
  ad_config: any;
  // TODO: Cleanup an convert below to interface
  // ad_config: {safeFlags: Array(3), highRiskFlags: Array(0), unsafeFlags: Array(2), wallUnsafeFlags: Array(0), showsAds: false}
  ad_type: number;
  ad_url: string;
  comment_count: number;
  cover: string;
  cover_height: number;
  cover_width: number;
  datetime: number;
  description: string;
  downs: number;
  favorite: boolean;
  favorite_count: number;
  id: string;
  images: any[]; // TODO: create interface
  images_count: number;
  in_gallery: boolean;
  in_most_viral: boolean;
  include_album_ads: boolean;
  is_ad: boolean;
  is_album: boolean;
  layout: string;
  link: string;
  nsfw: boolean;
  points: number;
  privacy: string;
  score: number;
  section: string;
  tags: any[]; // TODO: create interface
  title: string;
  topic: string;
  topic_id: number;
  ups: number;
  views: number;
  vote: any;
}

// Naive setup to easily add localization later for text going to view
export const APP_TPL_TEXT = {
  HEADER: 'Photo Gallery Finder',
  SEARCH: 'Search',
  SEARCHING: 'Searching...',
  SEARCH_INPUT: 'Search Images',
  SEARCH_PLACEHOLDER: 'ex. "Cats", "Cool Cats & Kittens", etc.',
  SEARCH_ERROR: 'Please enter a valid search query!',
  VIEWS: 'Views',
};
