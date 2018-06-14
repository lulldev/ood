import { Canvas } from './slides/Canvas';
import { Color } from './slides/Color';
import { Frame } from './slides/Frame';
import { Ellipse, Rectangle, Triangle } from './slides/Shape';
import { Slide } from './slides/Slide';

const slide = new Slide(500, 400);
const frame = new Frame();
const canvas = new Canvas();

frame.AddChildren(new Triangle(10, 20, 30, 20, 30, 10, Color.Red, Color.Undefined));
frame.AddChildren(new Rectangle(10, 20, 30, 10, Color.Red, Color.Black));
frame.AddChildren(new Ellipse(10, 20, 30, 20, Color.Red, Color.Black));

slide.AddChildren(frame);
slide.Draw(canvas);
