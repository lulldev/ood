export interface IObserver {
  observerId: number;
  Update(data : any) : void;
}

export interface IObservable {
  RegisterObserver(observer: IObserver) : void;
  NotifyObservers() : void;
  RemoveObserver(observerId: number) : void;
}

export abstract class CObservable implements IObservable {

  observers: Array<IObserver> = [];

  RegisterObserver(observer: IObserver) : void {
    this.observers.push(observer);
  }

  NotifyObservers() : void {
    const data : any = this.GetChangedData();
    this.observers.forEach((observer) => {
      observer.Update(data);
    });
  }

  RemoveObserver(observerId: number) : void {
    this.observers.forEach((observer, index) => {
      if (observer.observerId === observerId) {
        this.observers.slice(index, 1);
      }
    });
  }

  protected abstract GetChangedData() : any;
}
