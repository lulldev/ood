import { Display, CrashDisplay, StatsDisplay, WeatherData } from '../src/WeatherStation';

describe('Weather Stations', () => {

  it('Notify observers in the right order', () => {
    const wd : WeatherData = new WeatherData();

    const display : Display = new Display();
    const statsDisplay : StatsDisplay = new StatsDisplay();

    wd.RegisterObserver(statsDisplay, 100);
    wd.RegisterObserver(display, 200);
    wd.SetMeasurements(3, 0.7, 760);

    // test
    console.log(wd.GetLog());

    const statsDisplay2 : StatsDisplay = new StatsDisplay();
    wd.RegisterObserver(statsDisplay2, 500);
    wd.SetMeasurements(2, 0.7, 760);

    console.log(wd.GetLog());


    // test

  });

  /*it('No unbehavior moments in notifications', () => {
    const wd : WeatherData = new WeatherData();
    const display1 : Display = new Display();
    const display2 : Display = new Display();
    const crashDisplay : CrashDisplay = new CrashDisplay();

    wd.RegisterObserver(display1, 200);
    wd.RegisterObserver(display2, 200);
    wd.RegisterObserver(crashDisplay, 100);
    crashDisplay.setWd(wd);

    wd.SetMeasurements(3, 0.7, 760);
    let observersList = wd.GetObserversList();
    expect(observersList.length).toBe(2);

    wd.SetMeasurements(3, 0.7, 760);
    observersList = wd.GetObserversList();
    expect(observersList.length).toBe(2);
  });*/

  it('test', () => {
    const wd : WeatherData = new WeatherData();
    const display1 : Display = new Display();
    const display2 : Display = new Display();
    const crashDisplay : CrashDisplay = new CrashDisplay();

    // todo check object test expect(display1).toEqual(display2);
    // console.log(display1 == display2);

  });
});
