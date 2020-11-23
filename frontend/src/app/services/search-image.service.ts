import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchImageService {
  private readonly baseUrl: string = 'https://api.imgur.com/3/gallery/search/';

  constructor(private http: HttpClient) { }

  getImages(query: string, sort?: string, window?: string, page?: number): Observable<any> {
    let params = '';
    if (sort) { params += `${sort}/`; }
    if (window) { params += `${window}/`; }
    if (page) { params += `${page}`; }
    return this.http.get(`${this.baseUrl}${params}?q=${query}`);
  }
}
