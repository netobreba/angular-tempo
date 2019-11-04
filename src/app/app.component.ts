import { Component, OnInit } from '@angular/core';
import { TranslateService } from './shared/service/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(private translateService: TranslateService) { }

    ngOnInit(): void {
      this.translateService.setLang();
    }
  
}
