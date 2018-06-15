import {ICanvas} from './ICanvas';

export interface ICanvasDrawable {
  Draw(canvas: ICanvas): void;
}
