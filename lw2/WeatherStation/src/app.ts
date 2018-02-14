import { CDisplay, CStatsDisplay, CWeatherData } from './WeatherStation';

const wd : CWeatherData = new CWeatherData();
const display : CDisplay = new CDisplay();
const statsDisplay : CStatsDisplay = new CStatsDisplay();

wd.RegisterObserver(display);
wd.RegisterObserver(statsDisplay);

wd.SetMeasurements(3, 0.7, 760);
wd.SetMeasurements(4, 0.8, 761);
// wd.RemoveObserver(statsDisplay);

wd.SetMeasurements(10, 0.8, 761);
wd.SetMeasurements(-10, 0.8, 761);
