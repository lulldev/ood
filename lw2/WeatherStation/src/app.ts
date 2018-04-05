import { Display, StatsDisplay } from './WeatherStation';
import WeatherData from './WeatherData';
import { WeatherStationDuo } from "./WeatherStationDuo";

const wd : WeatherData = new WeatherData();
const display : Display = new Display();
const statsDisplay : StatsDisplay = new StatsDisplay();

wd.RegisterObserver(display, 200);
wd.RegisterObserver(statsDisplay, 100);

wd.SetMeasurements({temperature: 3, humidity: 0.9, pressure: 760});
wd.SetMeasurements({temperature: 4, humidity: 0.9, pressure: 760});
wd.RemoveObserver(statsDisplay);

wd.SetMeasurements({temperature: 5, humidity: 0.9, pressure: 760});
wd.SetMeasurements({temperature: 6, humidity: 0.9, pressure: 760});

const wsd: WeatherStationDuo = new WeatherStationDuo();

wsd.AddObserver('in', {observer: display, priority: 100});
wsd.AddObserver('in', {observer: statsDisplay, priority: 200});

wsd.AddObserver('out', {observer: display, priority: 200});
wsd.AddObserver('out', {observer: statsDisplay, priority: 200});

wsd.SetMeasurements('in', {temperature: 5, humidity: 0.9, pressure: 760});
wsd.SetMeasurements('out', {temperature: 15, humidity: 2.9, pressure: 800});


