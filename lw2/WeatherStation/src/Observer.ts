export interface IObserver {
  Update(data : any) : void;
}

export abstract class CObserver implements IObserver {

  private _observerId: number;
  private _priority: number;

  set observerId(observerId: number) {
    this._observerId = observerId;
  }

  get observerId() {
    return this._observerId;
  }

  set priority(observerId: number) {
    this._priority = observerId;
  }

  get priority() {
    return this._priority;
  }

  public abstract Update(data : any) : void;
}

export interface IObservable {
  RegisterObserver(observer: CObserver, priority: number): void;
  NotifyObservers(): void;
  RemoveObserver(observer: IObserver): void;
}

export abstract class CObservable implements IObservable {

  private observers: Array<CObserver> = [];

  public RegisterObserver(observer: CObserver, priority: number) : void {
    observer.observerId = this.GetNewObserverId();
    observer.priority = priority;
    this.observers.push(observer);
  }

  public NotifyObservers() : void {
    const data : any = this.GetChangedData();

    // priority sort
    this.observers = this.observers.sort((a: CObserver, b: CObserver) => {
      return (a.priority > b.priority) ? -1 : ((b.priority > a.priority) ? 1 : 0); });

    this.observers.forEach((observer) => {
      observer.Update(data);
    });
  }

  public RemoveObserver(observer: CObserver): void {
    this.observers.forEach((currentObserver, index) => {
      if (currentObserver.observerId === observer.observerId) {
        this.observers.slice(index, 1);
      }
    });
  }

  public GetObserversList(): Array<CObserver> {
    return this.observers;
  }

  private GetNewObserverId() : number {
    if (this.observers.length === 0) {
      return 1;
    }
    const lastObserver : CObserver = this.observers.reduce(function(prev, current) {
      return (prev.observerId > current.observerId) ? prev : current
    });
    return ++lastObserver.observerId;
  }

  protected abstract GetChangedData() : any;
}
