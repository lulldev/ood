import {WeatherData, WeatherDataType, WeatherInfo} from "./WeatherData";
import {IObserver} from "./Observer";

export class WeatherStationDuo {

  private inWeatherData: WeatherData = new WeatherData('in');
  private outWeatherData: WeatherData = new WeatherData('out');

  public RegisterObserver(wdType: WeatherDataType, observer: IObserver, priority: number): void {
    if (wdType === 'in') {
      this.inWeatherData.RegisterObserver(observer, priority);
    }
    else if (wdType === 'out') {
      this.outWeatherData.RegisterObserver(observer, priority);
    }
  }

  public RemoveObserver(wdType: WeatherDataType, observer: IObserver): void {
    if (wdType === 'in') {
      this.inWeatherData.RemoveObserver(observer);
    }
    else if (wdType === 'out') {
      this.outWeatherData.RemoveObserver(observer);
    }
  }

  public SetMeasurements(wdType: WeatherDataType, weatherData: WeatherInfo): void {
    if (wdType === 'in') {
      this.inWeatherData.SetMeasurements(weatherData);
    }
    else if (wdType === 'out') {
      this.outWeatherData.SetMeasurements(weatherData);
    }
  }

  public GetLog(wdType: WeatherDataType): string {
    let log = '';
    if (wdType === 'in') {
      log = this.inWeatherData.GetLog();
    }
    else if (wdType === 'out') {
      log = this.outWeatherData.GetLog();
    }
    return log;
  }
}
