import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { SearchFormComponent } from './search-form/search-form.component';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule, HttpClientModule ],
  declarations: [ AppComponent, SearchFormComponent, PostListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
