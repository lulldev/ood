import {IShapeCollection} from './IShapeCollection';
import {IShape} from '../IShape';

export class ShapeCollection implements IShapeCollection {

  private shapes: IShape[] = [];

  public Add(shape: IShape): void {
    this.shapes.push(shape);
  }

  public Remove(index: number): void {
    this.shapes.splice(index);
  }

  public GetShape(index: number): IShape {
    if (index > this.shapes.length) {
      throw new Error('Index must be less than shapes count');
    }

    return this.shapes[index];
  }

  public GetShapesCount(): number {
    return this.shapes.length;
  }
}
