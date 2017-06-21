
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ChildComponent} from './child/child.component';
import {ParentComponent} from './parent/parent.component';
import {TitleService} from './title.service';


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent
  ],
  providers: [
    TitleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
