import { Shape } from "./Shape";
import { Color } from "./Color";

export interface IShapeFactory {
  CreateShape(descr: string): void; // todo: Shape
}

export class ShapeFactory implements IShapeFactory {

  private memberName: string;

  constructor(memberName: string) {
    this.memberName = memberName;
  }

  public CreateShape(descr: string): void { // todo: Shape
    // todo
  }
}

