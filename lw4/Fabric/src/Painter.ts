import { Canvas } from "./Canvas";

export interface IPainter {
  DrawPicture(canvas: Canvas): void;
}
