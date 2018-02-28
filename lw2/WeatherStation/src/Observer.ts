export interface IObserver {
  Update(data: any): void;
}

export interface IObservable {
  RegisterObserver(observer: IObserver, priority: number): void;

  NotifyObservers(): void;

  RemoveObserver(observer: IObserver): void;
}

export abstract class CObservable implements IObservable {

  private observerList: { observer: IObserver, priority: number }[] = [];

  public RegisterObserver(observer: IObserver, priority: number): void {
    this.observerList.push({observer: observer, priority: priority});
    this.observerList = this.observerList.sort((a: { observer: IObserver, priority: number }, b: { observer: IObserver, priority: number }) => {
      return (a.priority > b.priority) ? -1 : ((b.priority > a.priority) ? 1 : 0); });
  }

  public NotifyObservers(): void {
    const data: any = this.GetChangedData();
    this.observerList.forEach((currentObserver) => {
      currentObserver.observer.Update(data);
    });
  }

  public RemoveObserver(observer: IObserver): void {
    this.observerList.forEach((currentObserver, index) => {
      if (currentObserver.observer === observer) {
        this.observerList.splice(index, 1);
      }
    });
  }

  protected abstract GetChangedData(): any;
}
