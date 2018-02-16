import { CDisplay, CrashDisplay, CStatsDisplay, CWeatherData } from '../src/WeatherStation';

describe('Weather Stations', () => {

  it('Notify observers in the right order', () => {
    const wd : CWeatherData = new CWeatherData();

    const display : CDisplay = new CDisplay();
    const statsDisplay : CStatsDisplay = new CStatsDisplay();

    wd.RegisterObserver(statsDisplay, 100);
    wd.RegisterObserver(display, 200);

    let observersList = wd.GetObserversList();

    expect(observersList[0].priority).toBe(100);
    expect(observersList[1].priority).toBe(200);

    wd.SetMeasurements(3, 0.7, 760);
    observersList = wd.GetObserversList();

    expect(observersList[0].priority).toBe(200);
    expect(observersList[1].priority).toBe(100);

    wd.RemoveObserver(statsDisplay);

    const statsDisplay2 : CStatsDisplay = new CStatsDisplay();
    wd.RegisterObserver(statsDisplay2, 500);

    wd.SetMeasurements(3, 0.7, 760);
    observersList = wd.GetObserversList();

    expect(observersList[0].priority).toBe(500);
    expect(observersList[1].priority).toBe(200);
  });

  it('No unbehavior moments in notifications', () => {
    const wd : CWeatherData = new CWeatherData();
    const display1 : CDisplay = new CDisplay();
    const display2 : CDisplay = new CDisplay();
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
  });

});
