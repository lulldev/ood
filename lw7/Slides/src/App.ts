import {Slide} from './slides/Slide';
import {Triangle} from './shapes/Triangle';
import {CompositShape} from './shapes/composit-shape/CompositShape';
import {OutlineStyle} from './shapes/shape-component/OutlineStyle';
import {Color} from './standart/Color';
import {Canvas} from './canvas/Canvas';
import {Rectangle} from './shapes/Rectangle';

const canvas = new Canvas();

const drawHouse = (width: number, height: number) => {

  const slide = new Slide(width, height);

  const roof = new Triangle(
    {x: width / 2, y: 20},
    {x: 50, y: 100},
    {x: 350, y: 100});
  const body = new Rectangle({x: 50, y: 100}, 400, 200);
  const house = new CompositShape();

  house.Add(roof);
  house.Add(body);

  const frame = house.GetFrame();
  house.SetFrame({left: 0, top: 0, width: 500, height: 400});
  house.SetOutlineStyle(new OutlineStyle(true, Color.Blue));

  slide.GetShapes().Add(house);
  slide.Draw(canvas);
};

drawHouse(500, 400);
