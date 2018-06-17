import {ICanvas} from '../canvas/ICanvas';
import {ISlide} from './ISlide';
import {IShapeCollection} from '../shapes/composit-shape/IShapeCollection';
import {ShapeCollection} from '../shapes/composit-shape/ShapeCollection';

export class Slide implements ISlide {

  private width: number;
  private height: number;
  private shapes: IShapeCollection = new ShapeCollection();

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  public GetWidth(): number {
    return this.width;
  }

  public GetHeight(): number {
    return this.height;
  }

  public GetShapes(): IShapeCollection {
    return this.shapes;
  }

  public Draw(canvas: ICanvas) {
    for (let i = 0; i < this.shapes.GetShapesCount(); ++i) {
      this.shapes.GetShape(i).Draw(canvas);
    }
  }
}
