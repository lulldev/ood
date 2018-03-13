import {Display, StatsDisplay} from '../src/WeatherStation';
import {WeatherStationDuo} from '../src/WeatherStationDuo';

describe('Weather Station Duo', () => {

  it('Notify observers in the right order', () => {
    const wsd: WeatherStationDuo = new WeatherStationDuo();

    const display: Display = new Display();
    const statsDisplay: StatsDisplay = new StatsDisplay();

    wsd.AddObserver('in', { observer: display, priority: 100 });
    wsd.AddObserver('in', { observer: statsDisplay, priority: 200 });

    wsd.AddObserver('out', { observer: display, priority: 200 });
    wsd.AddObserver('out', { observer: statsDisplay, priority: 100 });

    wsd.SetMeasurements('in', {temperature: 3, humidity: 0.7, pressure: 760});
    let notifiedInObservers = wsd.GetNotifiedObservers('in');
    let notifiedOutObservers = wsd.GetNotifiedObservers('out');

    expect(notifiedInObservers[0]).toEqual({observerType: 'StatsDisplay', priority: 200, wdType: 'in'});
    expect(notifiedInObservers[1]).toEqual({observerType: 'Display', priority: 100, wdType: 'in'});
    expect(notifiedOutObservers.length).toEqual(0);

    wsd.SetMeasurements('out', {temperature: 13, humidity: 1.7, pressure: 740});
    expect(notifiedOutObservers[0]).toEqual({observerType: 'Display', priority: 200, wdType: 'out'});
    expect(notifiedOutObservers[1]).toEqual({observerType: 'StatsDisplay', priority: 100, wdType: 'out'});
  });
});
