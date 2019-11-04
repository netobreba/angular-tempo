import { Component, OnInit } from '@angular/core';

import { PrectedWeatherService } from './predicted-weather.service';

@Component({
    selector: 'app-predicted-weather',
    templateUrl: './predicted-weather.component.html',
    styleUrls: ['./predicted-weather.component.scss']
})
export class PredictedWeatherComponent implements OnInit {

    predicted: any;

    constructor(private predictedService: PrectedWeatherService) { }

    ngOnInit(): void {

    }

    onChangeValue(city: string): void {
        console.log('component', city);
        this.predictedService.getPredicted(city).subscribe((result: any) => {
            this.predicted = result;
        }, error => {
            this.predicted = undefined;
        });
    }

}