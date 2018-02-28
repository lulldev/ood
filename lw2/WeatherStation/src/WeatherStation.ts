import {Observable, IObserver} from './Observer';
import {ucFirst} from './Utils';

interface IStatType {
  min: number;
  max: number;
  counter: number;
  acc: number
}

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

  private temperature: IStatType = {min: Infinity, max: -Infinity, counter: 0, acc: 0};
  private humidity: IStatType = {min: Infinity, max: -Infinity, counter: 0, acc: 0};
  private pressure: IStatType = {min: Infinity, max: -Infinity, counter: 0, acc: 0};

  private CalculateBasicStat(param: { valueType: string, value: number }): void {

    if (this[param.valueType].min > param.value) {
      this[param.valueType].min = param.value;
    }

    if (this[param.valueType].max < param.value) {
      this[param.valueType].max = param.value;
    }

    this[param.valueType].acc += param.value;
    ++this[param.valueType].counter;

    console.log(`
Max ${param.valueType} ${this[param.valueType].max}
Min ${param.valueType} ${this[param.valueType].min}
Averge ${param.valueType} ${this[param.valueType].acc / this[param.valueType].counter}
---------------------------------`);
  }

  Update(data: WeatherInfo): void {
    this.CalculateBasicStat({valueType: 'temperature', value: data.temperature});
    this.CalculateBasicStat({valueType: 'humidity', value: data.humidity});
    this.CalculateBasicStat({valueType: 'pressure', value: data.pressure});
  }
}

export class CrashDisplay implements IObserver {

  private wd: WeatherData;
  private nextInitializedObserver: IObserver;
  private isDeleteSelf: boolean = false;

  constructor(wd: WeatherData, nextInitializedObserver: IObserver, isDeleteSelf: boolean) {
    this.wd = wd;
    this.nextInitializedObserver = nextInitializedObserver;
    this.isDeleteSelf = isDeleteSelf;
  }

  Update(data: WeatherInfo): void {
    console.log('Im crash your program!');
    this.wd.RemoveObserver(this.isDeleteSelf ? this : this.nextInitializedObserver);
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

  public SetMeasurements(temperature: number, humidity: number, pressure: number): void {
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
