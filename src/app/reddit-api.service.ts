import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedditApiService {
  constructor(private http: HttpClient) { }

  searchReddit(query: string): Observable<any> {
    return this.http.get(`https://www.reddit.com/search.json?q=${query}`);
  }

}
