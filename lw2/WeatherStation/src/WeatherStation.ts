import { IObserver, CObservable } from './Observer';

interface SWeatherInfo {
  temperature: number;
  humidity: number;
  pressure: number;
}

class CDisplay implements IObserver {

  observerId: number;

  Update(data : SWeatherInfo) : void {
    const currentData =
      `Current Temp ${data.temperature}\n
       Current Hum ${data.humidity}\n
       Current Pressure ${data.humidity}\n`;

    console.log(currentData);
  }

}

class CStatsDisplay implements IObserver {

  observerId: number;
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

    const currentData =
      `Max Temp ${this.maxTemperature}\n
       Min Temp ${this.minTemperature}\n
       Averge Temp ${this.accTemperature / this.countAcc}\n
       ---------------------------------\n`;

    console.log(currentData);

  }
}

class CWeatherData extends CObservable {

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
