import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { SelectLanguageComponent } from './select-language.component';
import { MatMenuModule, MatButtonModule } from '@angular/material';

@NgModule({
    declarations: [SelectLanguageComponent],
    exports: [SelectLanguageComponent],
    imports: [
        CommonModule,
        TranslateModule,
        
        MatMenuModule,
        MatButtonModule
    ]
})
export class SelectLanguageModule {}
