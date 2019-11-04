import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-weather-show',
    templateUrl: './weather-show.component.html',
    styleUrls: ['./weather-show.component.scss']
})
export class WeatherShowComponent implements OnInit {

    @Input()
    predicted: any;

    constructor() { }

    ngOnInit(): void {

    }

}