import { Shape } from "./Shape";
import { ShapeFactory } from "./ShapeFactory";

export interface IDesigner {
  CreateDraft(shapeParams: object): Shape;
}

export class Designer implements IDesigner {
  public CreateDraft(shapeParams: object): Shape {
    const shapeFactory: ShapeFactory = new ShapeFactory();
    return shapeFactory.CreateShape(shapeParams);
  }
}
