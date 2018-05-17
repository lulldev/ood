import { Canvas } from './graphics_lib';
import { ModernGraphicsRenderer } from './modern_graphics_lib';
import { CanvasPainter } from './shape_drawing_lib';

namespace App {
  export const paintPicture = (painter: CanvasPainter): void => {
    // CTriangle triangle({ 10, 15 }, { 100, 200 }, { 150, 250 });
    // CRectangle rectangle({ 30, 40 }, 18, 24);
    // TODO: нарисовать прямоугольник и треугольник при помощи painter
    console.log(painter);
  };

  export const paintPictureOnCanvas = (): void => {
    const simpleCanvas: Canvas = new Canvas();
    const canvasPainter: CanvasPainter = new CanvasPainter(simpleCanvas);
    paintPicture(canvasPainter);
  };

  export const paintPictureOnModernGraphicsRenderer = (): void => {
    // const modernGraphicsRenderer: ModernGraphicsRenderer = new ModernGraphicsRenderer();
    // const canvasPainter: CanvasPainter = new CanvasPainter(modernGraphicsRenderer);
    // PaintPicture(canvasPainter);
  };
}

// App.PaintPictureOnCanvas();
console.log('test');
