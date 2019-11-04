import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { WeatherShowComponent } from './weather-show.component';


@NgModule({
    declarations: [WeatherShowComponent],
    exports: [WeatherShowComponent],
    imports: [
        CommonModule,
        TranslateModule
    ]
})
export class WeatherShowModule {}
