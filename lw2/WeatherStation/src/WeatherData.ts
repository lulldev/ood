import {Observable} from "./Observer";

export type WeatherDataType = 'in'|'out'|'simple';

export interface WeatherInfo {
  temperature: number;
  humidity: number;
  pressure: number;
}

export class WeatherData extends Observable {

  private temperature: number = 0.0;
  private humidity: number = 0.0;
  private pressure: number = 760.0;
  private wdType: WeatherDataType;

  constructor(wdType: WeatherDataType = 'simple') {
    super();
    this.wdType = wdType;
  }

  public GetTemperature(): number {
    return this.temperature;
  }

  public GetHumidity(): number {
    return this.humidity;
  }

  public GetPressure(): number {
    return this.pressure;
  }

  public MeasurementsChanged(): void {
    this.NotifyObservers();
  }

  public SetMeasurements(weatherData: WeatherInfo): void {
    this.temperature = weatherData.temperature;
    this.humidity = weatherData.humidity;
    this.pressure = weatherData.pressure;
    this.MeasurementsChanged();
  }

  protected GetChangedData(): WeatherInfo {
    return {
      temperature: this.GetTemperature(),
      humidity: this.GetHumidity(),
      pressure: this.GetPressure(),
    };
  }
}
