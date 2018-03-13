
import {Display, StatsDisplay} from '../src/WeatherStation';
import {WeatherStationDuo} from '../src/WeatherStationDuo';

describe('Weather Station Duo', () => {
/*
  it('Notify observers in the right order', () => {
    const wsd: WeatherStationDuo = new WeatherStationDuo();

    const display: Display = new Display();
    const statsDisplay: StatsDisplay = new StatsDisplay();

    wsd.RegisterObserver('in', display, 100);
    wsd.RegisterObserver('in', statsDisplay, 200);

    wsd.RegisterObserver('out', display, 200);
    wsd.RegisterObserver('out', statsDisplay, 100);

    wsd.SetMeasurements('in', {temperature: 3, humidity: 0.7, pressure: 760});
    expect(wsd.GetLog('in')).toEqual(
      'Notification for StatsDisplay with 200 priority, type = in\n' +
      'Notification for Display with 100 priority, type = in\n'
    );


    wsd.SetMeasurements('out', {temperature: 13, humidity: 1.7, pressure: 740});
    expect(wsd.GetLog('out')).toEqual(
      'Notification for Display with 200 priority, type = out\n' +
      'Notification for StatsDisplay with 100 priority,type = out\n'
    );

  });
  */
});
