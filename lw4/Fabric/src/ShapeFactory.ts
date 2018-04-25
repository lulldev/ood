import {
  Shape,
  Rectangle,
  Triangle,
  Ellipse,
  RegularPolygon,
} from "./Shape";

import { Color, GetColorByName } from './Color';

export interface IShapeFactory {
  CreateShape(shapeParams: any): Shape;
}

export class ShapeFactory implements IShapeFactory {

  public CreateShape(shapeParams: any): Shape {

    const shapeColor: Color = GetColorByName(shapeParams.color);

    try {
      if (shapeParams.type === 'rectangle') {
        return new Rectangle(
          shapeParams.centerX,
          shapeParams.centerY,
          shapeParams.width,
          shapeParams.height,
          shapeColor
        );
      }
      else if (shapeParams.type === 'triangle') {
        return new Triangle(
          shapeParams.x1,
          shapeParams.y1,
          shapeParams.x2,
          shapeParams.y2,
          shapeParams.x3,
          shapeParams.y3,
          shapeColor,
        );
      }
      else if (shapeParams.type === 'ellipse') {
        return new Ellipse(
          shapeParams.centerX,
          shapeParams.centerY,
          shapeParams.horizontalRadius,
          shapeParams.verticalRadius,
          shapeColor,
        );
      }
      else if (shapeParams.type === 'regular_polygon') {
        return new RegularPolygon(
          shapeParams.centerX,
          shapeParams.centerY,
          shapeParams.numberOfSides,
          shapeParams.sideSize,
          shapeColor,
        );
      }
      else {
        return null;
      }
    }
    catch(e) {
      throw new Error(`Invalid shape params for create: ${e.message}`);
    }
  }
}
