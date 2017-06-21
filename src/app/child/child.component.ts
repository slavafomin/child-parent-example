
import {Component, OnInit} from '@angular/core';

import {TitleService} from '../title.service';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent implements OnInit {

  constructor (
    private titleService: TitleService
  ) {
    console.log('ChildComponent.constructor()');
  }


  ngOnInit (): void {

    console.log('ChildComponent.ngOnInit()');

    // Updating title.
    this.titleService.setTitle('Title From Child Component');

  }

}
