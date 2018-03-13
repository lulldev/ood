import { WeatherData, WeatherInfo } from "./WeatherData";
import { IObserver, ObserverWithPriorityType, NotifiedObserverType } from "./Observer";

type NotifiedDuoObserverType = { observerType: string, priority: number, wdType: string };

export class WeatherStationDuo {
  private weatherStations: { in: WeatherData, out: WeatherData } =
    { in: new WeatherData(), out: new WeatherData() };

  public AddObserver(wdType: string, observerWithPriority: ObserverWithPriorityType): void {
    this.weatherStations[wdType].RegisterObserver(
      observerWithPriority.observer,
      observerWithPriority.priority,
    );
  }

  public RemoveObserver(wdType: string, observer: IObserver): void {
    this.weatherStations[wdType].RemoveObserver(observer);
  }

  public SetMeasurements(wdType: string, weatherData: WeatherInfo): void {
    this.weatherStations[wdType].SetMeasurements(weatherData);
  }

  public GetNotifiedObservers(wdType: string): NotifiedDuoObserverType[] {
    const notifiedObservers = this.weatherStations[wdType].GetNotifiedObservers();
    notifiedObservers.wdType = wdType;
    return notifiedObservers;
  }
}
