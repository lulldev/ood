import {ICanvasDrawable} from '../canvas/ICanvasDrawable';
import {IShapeCollection} from '../shapes/composit-shape/IShapeCollection';

export interface ISlide extends ICanvasDrawable {
  GetHeight(): number;
  GetWidth(): number;
  GetShapes(): IShapeCollection;
}
