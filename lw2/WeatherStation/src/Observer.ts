export interface IObserver {
  Update(data: any): void;
}

export interface IObservable {
  RegisterObserver(observer: IObserver, priority: number): void;

  NotifyObservers(): void;

  RemoveObserver(observer: IObserver): void;
}

export abstract class Observable implements IObservable {

  private observerList: { observer: IObserver, priority: number }[] = [];
  protected log: string = '';

  public RegisterObserver(observer: IObserver, priority: number): void {
    this.observerList.push({observer: observer, priority: priority});
    this.observerList = this.observerList.sort((a: { observer: IObserver, priority: number }, b: { observer: IObserver, priority: number }) => {
      return (a.priority > b.priority) ? -1 : ((b.priority > a.priority) ? 1 : 0);
    });
  }

  public NotifyObservers(): void {
    const data: any = this.GetChangedData();
    this.observerList.forEach((currentObserver) => {
      currentObserver.observer.Update(data);
      this.WriteLog(
`Notification for ${currentObserver.observer.constructor.name} with ${currentObserver.priority} priority`);
    });
  }

  public RemoveObserver(observer: IObserver): void {
    this.observerList.forEach((currentObserver, index) => {
      if (currentObserver.observer === observer) {
        this.observerList.splice(index, 1);
      }
    });
  }

  private WriteLog(some: any): void {
    this.log += `${some}\n`;
  }

  public GetLog(): string {
    return this.log;
  }

  protected abstract GetChangedData(): any;
}
