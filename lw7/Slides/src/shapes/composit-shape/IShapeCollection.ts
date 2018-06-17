import {IShape} from '../IShape';

export interface IShapeCollection {
  Add(shape: IShape): void;
  Remove(index: number): void;
  GetShape(index: number): IShape;
  GetShapesCount(): number;
}
