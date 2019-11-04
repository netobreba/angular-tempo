import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '../../service/translate.service';

@Component({
    selector: 'app-select-language',
    templateUrl: './select-language.component.html',
    styleUrls: ['./select-language.component.scss']
})
export class SelectLanguageComponent implements OnInit {

    currentLanguage: string;

    constructor(private translateService: TranslateService) { }

    ngOnInit(): void {
        this.currentLanguage = this.translateService.getLang();
    }

    changeLanguage(lang: string): void {
        this.translateService.setLang(lang);
        this.currentLanguage = this.translateService.getLang();
    }

}