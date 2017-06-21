
import {Subscription} from 'rxjs/Subscription';
import {Component, OnDestroy, OnInit} from '@angular/core';

import {TitleService} from '../title.service';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent implements OnInit, OnDestroy {

  title: string;


  private titleSubscription: Subscription;


  constructor (private titleService: TitleService) {
    console.log('ParentComponent.constructor()');
  }


  ngOnInit (): void {

    console.log('ParentComponent.ngOnInit()');

    this.title = this.titleService.getTitle();

    // Watching for title change.
    this.titleSubscription = this.titleService.onTitleChange()
      .subscribe(title => this.title = title)
    ;

  }

  ngOnDestroy (): void {
    if (this.titleSubscription) {
      this.titleSubscription.unsubscribe();
    }
  }

}
