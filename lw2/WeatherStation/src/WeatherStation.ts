import { CObserver, CObservable } from './Observer';

export interface SWeatherInfo {
  temperature: number;
  humidity: number;
  pressure: number;
}

export class CDisplay extends CObserver {

  _observerId: number;

  Update(data : SWeatherInfo) : void {
    const currentData = `
Current Temp ${data.temperature}
Current Hum ${data.humidity}
Current Pressure ${data.humidity}`;

    console.log(currentData);
  }

}

export class CStatsDisplay extends CObserver {

  _observerId: number;
  private minTemperature: number = Infinity;
  private maxTemperature: number = -Infinity;
  private accTemperature: number = 0;
  private countAcc: number = 0;

  Update(data : SWeatherInfo) : void {

    if (this.minTemperature > data.temperature)
    {
      this.minTemperature = data.temperature;
    }

    if (this.maxTemperature < data.temperature)
    {
      this.maxTemperature = data.temperature;
    }

    this.accTemperature += data.temperature;
    ++this.countAcc;

    const currentData = `
Max Temp ${this.maxTemperature}
Min Temp ${this.minTemperature}
Averge Temp ${this.accTemperature / this.countAcc}
---------------------------------`;

    console.log(currentData);

  }
}

export class CWeatherData extends CObservable {

  private temperature : number = 0.0;
  private humidity : number = 0.0;
  private pressure : number = 760.0;

  public GetTemperature() : number {
    return this.temperature;
  }

  public GetHumidity() : number {
    return this.humidity;
  }

  public GetPressure() : number {
    return this.pressure;
  }

  public MeasurementsChanged() : void {
    this.NotifyObservers();
  }

  SetMeasurements(temperature : number, humidity : number, pressure : number) : void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.MeasurementsChanged();
  }

  protected GetChangedData() : SWeatherInfo {
    return {
      temperature: this.GetTemperature(),
      humidity: this.GetHumidity(),
      pressure: this.GetPressure(),
    };
  }
}
