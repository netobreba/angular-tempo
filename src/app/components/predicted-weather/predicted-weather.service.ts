import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PredictedWeatherURL } from 'src/app/shared/url/url.domain';

@Injectable()
export class PrectedWeatherService {

  constructor(private http: HttpClient) { }

  getPredicted(city: string) {
    return this.http.get(PredictedWeatherURL.getUrlPredicted(city));
  }
  
}