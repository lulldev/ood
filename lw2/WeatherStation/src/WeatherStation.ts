import {Observable, IObserver} from './Observer';
import {ucFirst} from './Utils';

export interface WeatherInfo {
  temperature: number;
  humidity: number;
  pressure: number;
}

export class Display implements IObserver {

  Update(data: WeatherInfo): void {
    const currentData = `
Current Temp ${data.temperature}
Current Hum ${data.humidity}
Current Pressure ${data.pressure}`;

    console.log(currentData);
  }

}

export class StatsDisplay implements IObserver {

  private minTemperature: number = Infinity;
  private maxTemperature: number = -Infinity;
  private accTemperature: number = 0;
  private countTemperatureAcc: number = 0;

  private minHumidity: number = Infinity;
  private maxHumidity: number = -Infinity;
  private accHumidity: number = 0;
  private countHumidityAcc: number = 0;

  private minPressure: number = Infinity;
  private maxPressure: number = -Infinity;
  private accPressure: number = 0;
  private countPressureAcc: number = 0;

  private CalculateBasicStat(data: WeatherInfo): any {
    for (let key in data) {
      const minKey = `min${ucFirst(key)}`;
      const maxKey = `max${ucFirst(key)}`;
      const accKey = `acc${ucFirst(key)}`;
      const countAccKey = `count${ucFirst(key)}Acc`;

      if (this[minKey] > data[key]) {
        this[minKey] = data[key];
      }

      if (this[maxKey] < data[key]) {
        this[maxKey] = data[key];
      }

      this[accKey] += data[key];
      ++this[countAccKey];

      const currentData = `
Max ${key} ${this[maxKey]}
Min ${key} ${this[minKey]}
Averge ${key} ${this[accKey] / this[countAccKey]}
---------------------------------`;

      console.log(currentData);
    }
  }

  Update(data: WeatherInfo): void {
    this.CalculateBasicStat(data);
  }
}

export class CrashDisplay implements IObserver {

  private wd;

  public setWd(wd: WeatherData) {
    this.wd = wd;
  }

  Update(data: WeatherInfo): void {
    console.log('Im crash your program!');
    this.wd.RemoveObserver(this); // todo: test delete nex object
    console.log(data);
  }

}

export class WeatherData extends Observable {

  private temperature: number = 0.0;
  private humidity: number = 0.0;
  private pressure: number = 760.0;

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

  SetMeasurements(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
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
