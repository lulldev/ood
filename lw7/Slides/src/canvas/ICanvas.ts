import {Color} from "../standart/Color";

export interface ICanvas {

  DrawLine(from: number, to: number): void;

  DrawEllipse(left: number, top: number, verticalRadius: number, horizontalRadius: number): void;
  FillEllipse(left: number, top: number, verticalRadius: number, horizontalRadius: number): void;

  FillPolygon(points: []): void;

  SetFillColor(fillColor: Color);
  SetOutlineColor(outlineColor: Color);
  SetOutlineThickness(outlineColor: Color);
}
