
export namespace PredictedWeatherURL {
  const BASE = 'https://api.openweathermap.org/data/2.5/weather?appid=1e4e7c3c4cff6cab9934a24c705c13b8&units=metric&q={city}';
  export const getUrlPredicted = (value: string) => BASE.replace('{city}', value);
}
