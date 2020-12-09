import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as CONFIG from '../../env_config.json'; // Imgur API Client Key

@Injectable({
  providedIn: 'root'
})
export class SearchImageService {
  private headers: HttpHeaders;
  private readonly baseUrl: string = 'https://api.imgur.com/3/gallery/search';

  constructor(private http: HttpClient) {
    this.setHeaders();
  }

  getImages(query: string, sort?: string, window?: string, page?: number): Observable<any> {
    let params = '';
    if (sort) { params += `/${sort}`; }
    if (window) { params += `/${window}`; }
    if (page) { params += `/${page}`; }
    if (query) { params += `/?q=${query}`; }
    return this.http.get(`${this.baseUrl}${params}`, { headers: this.headers });
  }

  private setHeaders(): void {
    console.log('imgur key', CONFIG.IMGUR_KEY);
    this.headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Client-ID ${CONFIG.IMGUR_KEY}`);
  }
}
