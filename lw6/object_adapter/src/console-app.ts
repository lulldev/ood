import { Canvas } from './graphics_lib';
import { ModernGraphicsRenderer } from './modern_graphics_lib';
import {
  CanvasPainter,
  Triangle,
  Rectangle,
} from './shape_drawing_lib';
import { CanvasObjectAdapter } from './adapter/canvas-object-adapter';
import * as readline from "readline";

namespace App {
  export const paintPicture = (painter: CanvasPainter): void => {
    const triangle: Triangle = new Triangle(
      { x: 10, y: 15 },
      { x: 100, y: 200 },
      { x: 150, y: 250 }
      );

    const rectangle: Rectangle = new Rectangle(
      { x: 30, y: 40 },
      18,
      24
    );

    console.log('(draw triangle)');
    painter.Draw(triangle);
    console.log('(draw rectangle)');
    painter.Draw(rectangle);
  };

  export const paintPictureOnCanvas = (): void => {
    const simpleCanvas: Canvas = new Canvas();
    const canvasPainter: CanvasPainter = new CanvasPainter(simpleCanvas);
    paintPicture(canvasPainter);
  };

  export const paintPictureOnModernGraphicsRenderer = (): void => {
    const modernGraphicsRenderer: ModernGraphicsRenderer = new ModernGraphicsRenderer();
    const adapter: CanvasObjectAdapter = new CanvasObjectAdapter(modernGraphicsRenderer);
    const canvasPainter: CanvasPainter = new CanvasPainter(adapter);
    paintPicture(canvasPainter);
  };
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Should we use new API? ', (answer) => {
  answer = answer.toLowerCase();
  switch (answer) {
    case 'y':
      App.paintPictureOnModernGraphicsRenderer();
      break;
    case 'n':
      App.paintPictureOnCanvas();
      break;
    default:
      console.log('Unknow command');
      break;
  }
  rl.close();
});
