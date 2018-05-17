import { Canvas } from './graphics_lib/graphics_lib'
import { CanvasPainter } from './shape_drawing_lib/shape_drawing_lib'

export const PaintPicture = (painter: CanvasPainter): void => {
  // CTriangle triangle({ 10, 15 }, { 100, 200 }, { 150, 250 });
  // CRectangle rectangle({ 30, 40 }, 18, 24);
// TODO: нарисовать прямоугольник и треугольник при помощи painter
  console.log(painter)
}

export const PaintPictureOnCanvas = (): void => {
  const simpleCanvas: Canvas = new Canvas();
  const canvasPainter: CanvasPainter = new CanvasPainter(simpleCanvas);
  PaintPicture(canvasPainter);
}

PaintPictureOnCanvas();
