import { Shape } from "./Shape";

export interface IShapeFactory {
  CreateShape(descr: string): Shape;
}

export class ShapeFactory implements IShapeFactory{

  private memberName: string;

  public CreateShape(descr: string): Shape {
    // todo
  }
}

