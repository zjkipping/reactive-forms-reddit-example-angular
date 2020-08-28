import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap, debounceTime, map, distinctUntilChanged, tap } from 'rxjs/operators';

import { RedditApiService } from '../reddit-api.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  searchForm: FormGroup;
  results: Observable<{}[]>;

  constructor(private fb: FormBuilder, private ras: RedditApiService) {
    this.searchForm = this.fb.group({
      query: ['']
    });

    this.results = this.searchForm.controls.query.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((query: string) => this.ras.searchReddit(query)),
      map((result: any) => result.data.children),
      tap((posts: any) => console.log(posts))
    );
  }

  ngOnInit() {
  }
}
