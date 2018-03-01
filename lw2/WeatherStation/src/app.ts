import { Display, StatsDisplay } from './WeatherStation';
import {WeatherData} from './WeatherData';

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
