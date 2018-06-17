import {Display, StatsDisplay} from '../src/WeatherStation';
import {WeatherStationDuo} from '../src/WeatherStationDuo';

describe('Weather Station Duo', () => {

  it('Notify observers in the right order', () => {
    const wsd: WeatherStationDuo = new WeatherStationDuo();
    const display1: Display = new Display();
    const display2: Display = new Display();
    const statsDisplay1: StatsDisplay = new StatsDisplay();
    const statsDisplay2: StatsDisplay = new StatsDisplay();

    let notified: any = [];

    display1.Update = jest.fn().mockImplementation(() => {
      notified.push({display: 'display1 (in)', priority: 100});
    });
    display2.Update = jest.fn().mockImplementation(() => {
      notified.push({display: 'display2 (out)', priority: 200});
    });
    statsDisplay1.Update = jest.fn().mockImplementation(() => {
      notified.push({display: 'statsDisplay1 (in)', priority: 200});
    });
    statsDisplay2.Update = jest.fn().mockImplementation(() => {
      notified.push({display: 'statsDisplay2 (out)', priority: 100});
    });

    wsd.AddObserver('in', { observer: display1, priority: 100 });
    wsd.AddObserver('in', { observer: statsDisplay1, priority: 200 });

    wsd.AddObserver('out', { observer: display2, priority: 200 });
    wsd.AddObserver('out', { observer: statsDisplay2, priority: 100 });

    wsd.SetMeasurements('in', {temperature: 3, humidity: 0.7, pressure: 760});

    expect(notified).toEqual(
      [
        { display: 'statsDisplay1 (in)', priority: 200},
        { display: 'display1 (in)', priority: 100},]
    );

    notified = [];

    wsd.SetMeasurements('out', {temperature: 13, humidity: 1.7, pressure: 740});

    expect(notified).toEqual(
      [
        { display: 'display2 (out)', priority: 200},
        { display: 'statsDisplay2 (out)', priority: 100},
      ]
    );
  });
});
