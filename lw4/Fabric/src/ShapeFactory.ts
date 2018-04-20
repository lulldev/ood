import {
  Shape,
  Rectangle,
  Triangle,
  Ellipse,
  RegularPolygon,
} from "./Shape";

export interface IShapeFactory {
  CreateShape(shapeParams: any): Shape;
}

export class ShapeFactory implements IShapeFactory {

  // private memberName: string;
  //
  // constructor(memberName: string) {
  //   this.memberName = memberName;
  // }

  public CreateShape(shapeParams: any): Shape {
    if (shapeParams.type === 'rectangle') {
      return new Rectangle(
        { x: shapeParams.centerX, y: shapeParams.centerY },
        shapeParams.width,
        shapeParams.height,
        shapeParams.color
      );
    }
    else if (shapeParams.type === 'triangle') {
      return new Triangle(
        { x: shapeParams.x1, y: shapeParams.y1 },
        { x: shapeParams.x2, y: shapeParams.y2 },
        { x: shapeParams.x3, y: shapeParams.y3 },
        shapeParams.color,
      );
    }
    else if (shapeParams.type === 'ellipse') {
      return new Ellipse(
        { x: shapeParams.centerX, y: shapeParams.centerY },
        shapeParams.horizontalRadius,
        shapeParams.verticalRadius,
        shapeParams.color,
      );
    }
    else if (shapeParams.type === 'regular-polygon') {
      return new RegularPolygon(
        { x: shapeParams.centerX, y: shapeParams.centerY },
        shapeParams.numberOfSides,
        shapeParams.sideSize,
        shapeParams.color,
      );
    }
    else {
      return null;
    }
  }
}
