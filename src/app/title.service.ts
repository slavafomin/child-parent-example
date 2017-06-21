
import {EventEmitter, Injectable} from '@angular/core';


@Injectable()
export class TitleService {

  private title = '';

  private titleChangeEmitter = new EventEmitter<string>();


  getTitle () {
    return this.title;
  }

  setTitle (title: string) {
    this.title = title;
    this.titleChangeEmitter.emit(title);
  }

  onTitleChange () {
    return this.titleChangeEmitter;
  }

}
