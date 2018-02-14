export interface IObserver {
  _observerId: number;
  Update(data : any) : void;
}

export abstract class CObserver implements IObserver {

  _observerId: number;

  set observerId(observerId: number) {
    this._observerId = observerId;
  }

  get observerId() {
    return this._observerId;
  }

  public abstract Update(data : any) : void;
}


export interface IObservable {
  RegisterObserver(observer: CObserver): void;
  NotifyObservers(): void;
  RemoveObserver(observer: IObserver): void;
}

export abstract class CObservable implements IObservable {

  observers: Array<CObserver> = [];

  RegisterObserver(observer: CObserver) : void {
    observer.observerId = this.GetNewObserverId();
    this.observers.push(observer);
  }

  NotifyObservers() : void {
    const data : any = this.GetChangedData();
    this.observers.forEach((observer) => {
      observer.Update(data);
    });
  }

  RemoveObserver(observer: CObserver): void {
    this.observers.forEach((currentObserver, index) => {
      if (currentObserver.observerId === observer.observerId) {
        this.observers.slice(index, 1);
      }
    });
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
