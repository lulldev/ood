import {IShape} from "./Shape";
import {IShapeFactory} from "./ShapeFactory";
import {IPictureDraft, PictureDraft} from "./PictureDraft";
import {ICanvas} from "./Canvas";

export interface IDesigner {
  AddShape(shapeParams: object): void;
  CreateDraft(): IPictureDraft;
}

export class Designer implements IDesigner {

  private shapeFactory: IShapeFactory;
  private pictureDraft: PictureDraft;

  constructor(shapeFactory: IShapeFactory) {
    this.shapeFactory = shapeFactory;
    this.pictureDraft = new PictureDraft();
  }

  public AddShape(shapeParams: object): void {
    const newShape: IShape = this.shapeFactory.CreateShape(shapeParams);
    this.pictureDraft.AddShape(newShape);
  }

  public CreateDraft(): IPictureDraft {
    return this.pictureDraft;
  }
}
