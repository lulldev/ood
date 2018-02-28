import { Display, StatsDisplay, WeatherData } from './WeatherStation';

const wd : WeatherData = new WeatherData();
const display : Display = new Display();
const statsDisplay : StatsDisplay = new StatsDisplay();

wd.RegisterObserver(display, 200);
wd.RegisterObserver(statsDisplay, 100);

wd.SetMeasurements(3, 0.7, 760);
wd.SetMeasurements(4, 0.8, 761);
wd.RemoveObserver(statsDisplay);

wd.SetMeasurements(10, 0.8, 761);
wd.SetMeasurements(-10, 0.8, 761);
