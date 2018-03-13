import { WeatherData, WeatherDataType } from "./WeatherData";

type ObserverListType = { observer: IObserver, priority: number };
type NotifiedObserverType = { observerType: string, priority: number };

export interface IObserver {
  Update(data: any): void;
}

export interface IObservable {
  RegisterObserver(observer: IObserver, priority: number): void;
  NotifyObservers(): void;
  RemoveObserver(observer: IObserver): void;
}

export abstract class Observable implements IObservable {

  private observerList: ObserverListType[] = [];
  private notifiedObservers: NotifiedObserverType[] = [];

  public RegisterObserver(observer: IObserver, priority: number): void {
    this.observerList.push({observer: observer, priority: priority});
    this.observerList = this.observerList.sort((
      a: ObserverListType,
      b: ObserverListType) => {
      return (a.priority > b.priority) ? -1 : ((b.priority > a.priority) ? 1 : 0);
    });
  }

  public NotifyObservers(): void {
    const data: any = this.GetChangedData();
    data.wdType = this.GetWDType();

    this.notifiedObservers = [];
    this.observerList.forEach((currentObserver) => {
      currentObserver.observer.Update(data);
      this.notifiedObservers.push({
        observerType: currentObserver.observer.constructor.name,
        priority: currentObserver.priority,
      });
    });
  }

  public RemoveObserver(observer: IObserver): void {
    this.observerList.forEach((currentObserver, index) => {
      if (currentObserver.observer === observer) {
        this.observerList.splice(index, 1);
      }
    });
  }

  public GetNotifiedObservers(): NotifiedObserverType[] {
    return this.notifiedObservers;
  }

  protected abstract GetChangedData(): any;
  protected abstract GetWDType(): WeatherDataType;
}
