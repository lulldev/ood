interface IObserver {
  observerId: Number;
  Update(data : any);
}

interface IObservable {
  RegisterObserver(observer: IObserver) : void;
  NotifyObservers() : void;
  RemoveObserver(observerId: Number) : void;
}

abstract class CObservable implements IObservable {

  observers: Array<IObserver>;

  RegisterObserver(observer: IObserver) : void {
    this.observers.push(observer);
  }

  NotifyObservers() : void {
    const data : any = this.GetChangedData();
    this.observers.forEach((observer) => {
      observer.Update(data);
    });
  }

  RemoveObserver(observerId: Number) : void {
    this.observers.forEach((observer, index) => {
      if (observer.observerId === observerId) {
        this.observers.slice(index, 1);
      }
    });
  }

  protected abstract GetChangedData() : any;
}
