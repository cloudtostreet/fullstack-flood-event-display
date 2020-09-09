import { Component, OnInit } from '@angular/core';
import { DjangoApiService } from './django-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-frontend';

  /**
   * Some example options. Replace as needed.
   */
  options: Array<string> = ['A Region', 'S Region', 'D Region', 'F Region'];

  constructor() {}

  ngOnInit() {}

  onSelect(selection) {
    console.log('Got selection', selection);
  }
}
