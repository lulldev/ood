import { IObserver } from './Observer';
import WeatherData, { WeatherInfo } from './WeatherData';

export class Display implements IObserver {

  Update(data: WeatherInfo): void {
    const currentData = `
Current Temp ${data.temperature}
Current Hum ${data.humidity}
Current Pressure ${data.pressure}`;
    console.log(currentData);
  }

}

class StatsCalculator {
  private amountName: string;
  private min: number;
  private max: number;
  private counter: number;
  private acc: number;

  constructor(amountName: string) {
    this.amountName = amountName;
    this.min = Infinity;
    this.max = -Infinity;
    this.counter = 0;
    this.acc = 0;
  }

  private Calculate(newValue): void {
    if (this.min > newValue) {
      this.min = newValue;
    }

    if (this.max < newValue) {
      this.max = newValue;
    }

    this.acc += newValue;
    ++this.counter;
  }

  private GetAverage(): number {
    return this.acc / this.counter;
  }

  public GetCalculation(newValue: number): object {
    this.Calculate(newValue);
    return {
      amountName: this.amountName,
      min: this.min,
      max: this.max,
      average: this.GetAverage(),
    };
  }
}

export class StatsDisplay implements IObserver {

  private temperature: StatsCalculator = new StatsCalculator('temperature');
  private humidity: StatsCalculator = new StatsCalculator('humidity');
  private pressure: StatsCalculator = new StatsCalculator('pressure');

  private FormatCalculation(calculationData: any) {
    return `
Max ${calculationData.amountName} ${calculationData.max}
Min ${calculationData.amountName} ${calculationData.min}
Average ${calculationData.amountName} ${calculationData.average}
---------------------------------`;
  }

  Update(data: any): void {
    const temperature = this.temperature.GetCalculation(data.temperature);
    const humidity = this.humidity.GetCalculation(data.humidity);
    const pressure = this.pressure.GetCalculation(data.pressure);

    this.FormatCalculation(temperature);
    this.FormatCalculation(humidity);
    this.FormatCalculation(pressure);
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
