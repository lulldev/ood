import {Display, CrashDisplay, StatsDisplay, WeatherData} from '../src/WeatherStation';

describe('Weather Stations', () => {

  it('Notify observers in the right order', () => {
    const wd: WeatherData = new WeatherData();

    const display: Display = new Display();
    const statsDisplay: StatsDisplay = new StatsDisplay();

    wd.RegisterObserver(statsDisplay, 100);
    wd.RegisterObserver(display, 200);
    wd.SetMeasurements(3, 0.7, 760);

    expect(wd.GetLog()).toEqual(
      'Notification for Display with 200 priority\n' +
      'Notification for StatsDisplay with 100 priority\n'
    );

    const statsDisplay2: StatsDisplay = new StatsDisplay();
    wd.RegisterObserver(statsDisplay2, 500);

    wd.ClearLog();
    wd.SetMeasurements(2, 0.7, 760);

    expect(wd.GetLog()).toEqual(
      'Notification for StatsDisplay with 500 priority\n' +
      'Notification for Display with 200 priority\n' +
      'Notification for StatsDisplay with 100 priority\n'
    );
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

      wd.SetMeasurements(2, 0.7, 760);

      expect(wd.GetLog()).toEqual(
        'Notification for Display with 200 priority\n' +
        'Notification for Display with 200 priority\n' +
        'Notification for CrashDisplay with 100 priority\n'
      );

      wd.ClearLog();
      wd.SetMeasurements(2, 0.7, 760);

      expect(wd.GetLog()).toEqual(
        'Notification for Display with 200 priority\n' +
        'Notification for Display with 200 priority\n'
      );
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

    wd.SetMeasurements(2, 0.7, 760);

    expect(wd.GetLog()).toEqual(
      'Notification for Display with 200 priority\n' +
      'Notification for Display with 200 priority\n' +
      'Notification for CrashDisplay with 100 priority\n'
    );

    wd.ClearLog();
    wd.SetMeasurements(1, 0.7, 760);

    expect(wd.GetLog()).toEqual(
      'Notification for Display with 200 priority\n' +
      'Notification for CrashDisplay with 100 priority\n'
    );
  });
});

