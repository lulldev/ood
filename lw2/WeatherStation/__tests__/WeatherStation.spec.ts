import {Display, CrashDisplay, StatsDisplay} from '../src/WeatherStation';
import {WeatherData} from '../src/WeatherData';

describe('Simple Weather Station', () => {

  it('Notify observers in the right order', () => {
    const wd: WeatherData = new WeatherData();

    const display: Display = new Display();
    const statsDisplay: StatsDisplay = new StatsDisplay();

    wd.RegisterObserver(statsDisplay, 100);
    wd.RegisterObserver(display, 200);
    wd.SetMeasurements({temperature: 3, humidity: 0.7, pressure: 760});

    let notifiedObservers = wd.GetNotifiedObservers();
    expect(notifiedObservers[0]).toEqual({observerType: 'Display', priority: 200});
    expect(notifiedObservers[1]).toEqual({observerType: 'StatsDisplay', priority: 100});

    const statsDisplay2: StatsDisplay = new StatsDisplay();
    wd.RegisterObserver(statsDisplay2, 500);

    wd.SetMeasurements({temperature: 2, humidity: 0.7, pressure: 760});

    notifiedObservers = wd.GetNotifiedObservers();
    expect(notifiedObservers[0]).toEqual({observerType: 'StatsDisplay', priority: 500});
    expect(notifiedObservers[1]).toEqual({observerType: 'Display', priority: 200});
    expect(notifiedObservers[2]).toEqual({observerType: 'StatsDisplay', priority: 100});

  });

  describe('Unbehavior moments in notifications', () => {

    it('Stable work if remove self', () => {
      const wd: WeatherData = new WeatherData();
      const display1: Display = new Display();
      const display2: Display = new Display();
      const crashDisplay: CrashDisplay = new CrashDisplay(wd, display1, true);

      wd.RegisterObserver(display1, 200);
      wd.RegisterObserver(display2, 200);
      wd.RegisterObserver(crashDisplay, 100);

      wd.SetMeasurements({temperature: 3, humidity: 0.7, pressure: 760});

      let notifiedObservers = wd.GetNotifiedObservers();
      expect(notifiedObservers[0]).toEqual({observerType: 'Display', priority: 200});
      expect(notifiedObservers[1]).toEqual({observerType: 'Display', priority: 200});
      expect(notifiedObservers[2]).toEqual({observerType: 'CrashDisplay', priority: 100});

      wd.SetMeasurements({temperature: 2, humidity: 0.9, pressure: 760});

      notifiedObservers = wd.GetNotifiedObservers();
      expect(notifiedObservers[0]).toEqual({observerType: 'Display', priority: 200});
      expect(notifiedObservers[1]).toEqual({observerType: 'Display', priority: 200});
    });
  });

  it('Stable work if remove next observer', () => {
    const wd: WeatherData = new WeatherData();
    const display1: Display = new Display();
    const display2: Display = new Display();
    const crashDisplay: CrashDisplay = new CrashDisplay(wd, display2, false);

    wd.RegisterObserver(display1, 200);
    wd.RegisterObserver(display2, 200);
    wd.RegisterObserver(crashDisplay, 100);

    wd.SetMeasurements({temperature: 2, humidity: 0.9, pressure: 760});

    let notifiedObservers = wd.GetNotifiedObservers();
    expect(notifiedObservers[0]).toEqual({observerType: 'Display', priority: 200});
    expect(notifiedObservers[1]).toEqual({observerType: 'Display', priority: 200});
    expect(notifiedObservers[2]).toEqual({observerType: 'CrashDisplay', priority: 100});

    wd.SetMeasurements({temperature: 1, humidity: 0.9, pressure: 760});

    notifiedObservers = wd.GetNotifiedObservers();
    expect(notifiedObservers[0]).toEqual({observerType: 'Display', priority: 200});
    expect(notifiedObservers[1]).toEqual({observerType: 'CrashDisplay', priority: 100});

  });
});

