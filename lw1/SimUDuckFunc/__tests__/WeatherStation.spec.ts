import { Display, CrashDisplay, StatsDisplay } from '../src/WeatherStation';
import WeatherData from '../src/WeatherData';

describe('Simple Weather Station', () => {

  it('Notify observers in the right order', () => {
    const wd: WeatherData = new WeatherData();
    const display: Display = new Display();
    const statsDisplay: StatsDisplay = new StatsDisplay();

    let notified: any = [];

    wd.RegisterObserver(statsDisplay, 100);
    wd.RegisterObserver(display, 200);

    display.Update = jest.fn().mockImplementation(() => {
      notified.push({display: 'display', priority: 200});
    });

    statsDisplay.Update = jest.fn().mockImplementation(() => {
      notified.push({display: 'statDisplay', priority: 100});
    });

    wd.SetMeasurements({temperature: 3, humidity: 0.7, pressure: 760});

    expect(notified).toEqual(
      [
        { display: 'display', priority: 200 },
        { display: 'statDisplay', priority: 100 } ]
    );

    notified = [];

    const statsDisplay2: StatsDisplay = new StatsDisplay();
    wd.RegisterObserver(statsDisplay2, 500);
    statsDisplay2.Update = jest.fn().mockImplementation(() => {
      notified.push({display: 'statDisplay2', priority: 500});
    });

    wd.SetMeasurements({temperature: 2, humidity: 0.7, pressure: 760});

    expect(notified).toEqual(
      [ { display: 'statDisplay2', priority: 500 },
        { display: 'display', priority: 200 },
        { display: 'statDisplay', priority: 100 } ]
    );
  });


  describe('Unbehavior moments in notifications', () => {

    it('Stable work if remove self', () => {
      const wd: WeatherData = new WeatherData();
      const display1: Display = new Display();
      const display2: Display = new Display();
      const crashDisplay: CrashDisplay = new CrashDisplay(wd, display1, true);

      let notified: any = [];

      wd.RegisterObserver(display1, 200);
      wd.RegisterObserver(display2, 200);
      wd.RegisterObserver(crashDisplay, 100);

      display1.Update = jest.fn().mockImplementation(() => {
        notified.push({display: 'display1', priority: 200});
      });

      display2.Update = jest.fn().mockImplementation(() => {
        notified.push({display: 'display2', priority: 200});
      });

      crashDisplay.Update = jest.fn().mockImplementation(() => {
        notified.push({display: 'crashDisplay', priority: 100});
      });

      wd.SetMeasurements({temperature: 3, humidity: 0.7, pressure: 760});

      expect(notified).toEqual(
        [ { display: 'display1', priority: 200 },
          { display: 'display2', priority: 200 },
          { display: 'crashDisplay', priority: 100 } ]
      );
    });
  });

  it('Stable work if remove next observer', () => {
    const wd: WeatherData = new WeatherData();
    const display1: Display = new Display();
    const display2: Display = new Display();
    const crashDisplay: CrashDisplay = new CrashDisplay(wd, display2, false);

    let notified: any = [];

    wd.RegisterObserver(display1, 200);
    wd.RegisterObserver(display2, 200);
    wd.RegisterObserver(crashDisplay, 100);

    display1.Update = jest.fn().mockImplementation(() => {
      notified.push({display: 'display1', priority: 200});
    });

    display2.Update = jest.fn().mockImplementation(() => {
      notified.push({display: 'display2', priority: 200});
    });

    crashDisplay.Update = jest.fn().mockImplementation(() => {
      notified.push({display: 'crashDisplay', priority: 100});
    });

    wd.SetMeasurements({temperature: 2, humidity: 0.9, pressure: 760});

    expect(notified).toEqual(
      [ { display: 'display1', priority: 200 },
        { display: 'display2', priority: 200 },
        { display: 'crashDisplay', priority: 100 } ]
    );

    notified = [];

    wd.SetMeasurements({temperature: 1, humidity: 0.9, pressure: 760});

    expect(notified).toEqual(
      [
        { display: 'display1', priority: 200 },
        { display: 'display2', priority: 200 },
        { display: 'crashDisplay', priority: 100 } ]
    );
  });
});

