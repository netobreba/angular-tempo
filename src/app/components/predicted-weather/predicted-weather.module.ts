import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule, MatInputModule, MatCardModule, MatDividerModule, MatSelectModule, MatMenuModule } from '@angular/material';

import { TranslateModule } from '@ngx-translate/core';

import { PredictedWeatherComponent } from './predicted-weather.component';
import { PrectedWeatherService } from './predicted-weather.service';
import { DebounceValueModule } from 'src/app/shared/directives/debounce-value/debounce-value.module';
import { HttpClientModule } from '@angular/common/http';
import { WeatherShowModule } from 'src/app/shared/components/weather-show/weather-show.module';
import { SelectLanguageModule } from 'src/app/shared/components/select-language/select-language.module';

const routes: Routes = [
    {
        path: '',
        component: PredictedWeatherComponent
    }
];

@NgModule({
    declarations: [
        PredictedWeatherComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        TranslateModule,

        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatDividerModule,
        MatSelectModule,
        MatMenuModule,

        RouterModule.forChild(routes),
        DebounceValueModule,
        WeatherShowModule,
        SelectLanguageModule
    ],
    providers: [
        PrectedWeatherService
    ]
})
export class PredictedWeatherModule { }