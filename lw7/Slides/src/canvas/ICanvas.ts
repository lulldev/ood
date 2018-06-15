import {Color} from '../standart/Color';
import {Point} from '../standart/Point';

export interface ICanvas {

  DrawLine(from: Point, to: Point): void;

  DrawEllipse(center: Point, verticalRadius: number, horizontalRadius: number): void;
  FillEllipse(center: Point, verticalRadius: number, horizontalRadius: number): void;

  FillPolygon(points: Point[]): void;

  SetFillColor(fillColor: Color);
  SetOutlineColor(outlineColor: Color);
  SetOutlineThickness(outlineThickness: number);
}
