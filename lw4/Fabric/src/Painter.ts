import { Canvas } from "./Canvas";

export interface IPainter {
  DrawPicture(draft: any, canvas: Canvas): void;
}
