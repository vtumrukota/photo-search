export class ImageCard {
  accountId: number;
  accountUrl: string;
  adConfig: any;
  adType: number;
  adUrl: string;
  commentCount: number;
  cover: string;
  coverHeight: number;
  coverWidth: number;
  datetime: number;
  description: string;
  downs: number;
  favorite: boolean;
  favoriteCount: number;
  id: string;
  images: any[]; // TODO: create interface
  imagesCount: number;
  inGallery: boolean;
  inMostViral: boolean;
  includeAlbumAds: boolean;
  isAd: boolean;
  isAlbum: boolean;
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
  topicId: number;
  ups: number;
  views: number;
  vote: any;

  constructor(init: any) {
    // Might consolidate into smaller models down the road
    this.accountId = init.account_id;
    this.accountUrl = init.account_url;
    this.adType = init.ad_type;
    this.adConfig = init.ad_config;
    this.adUrl = init.ad_url;
    this.commentCount = init.comment_count;
    this.cover = init.cover;
    this.coverHeight = init.cover_height;
    this.coverWidth = init.cover_width;
    this.datetime = init.datetime;
    this.description = init.description;
    this.downs = init.downs;
    this.favorite = init.favorite;
    this.favoriteCount = init.favorite_count;
    this.id = init.id;
    this.images = init.images;
    this.imagesCount = init.images_count;
    this.inGallery = init.in_gallery;
    this.inMostViral = init.in_most_viral;
    this.includeAlbumAds = init.include_album_ads;
    this.isAd = init.is_ad;
    this.isAlbum = init.is_album;
    this.layout = init.layout;
    this.link = init.link;
    this.nsfw = init.nsfw;
    this.points = init.points;
    this.privacy = init.privacy;
    this.score = init.score;
    this.section = init.section;
    this.tags = init.tags;
    this.title = init.title;
    this.topic = init.topic;
    this.topicId = init.topic_id;
    this.ups = init.ups;
    this.views = init.views || 0;
    this.vote = init.vote;
  }

}
