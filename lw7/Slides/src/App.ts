import {Slide} from './slides/Slide';
import {Triangle} from './shapes/Triangle';
// import {Rectangle} from './shapes/Rectangle';
// import {Ellipse} from './shapes/Ellipse';
import {CompositShape} from './shapes/composit-shape/CompositShape';
// import {IFillStyle} from './style/IFillStyle';
// import {IOutlineStyle} from './style/IOutlineStyle';
// import {Color} from './standart/Color';
import {Canvas} from './canvas/Canvas';

const canvas = new Canvas();
const slide = new Slide(500, 400);
const triangle = new Triangle({x: 10, y: 10}, {x: 20, y: 20}, {x: 50, y: 30});
const house = new CompositShape();

house.Add(triangle);

slide.GetShapes().Add(house);
slide.Draw(canvas);
