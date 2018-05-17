import { ICanvas } from "../graphics_lib/graphics_lib";

export type Point = { x: number, y: number };

export interface ICanvasDrawable {
  Draw(canvas: ICanvas): void;
}

class Triangle implements ICanvasDrawable {

  private p1: Point;
  private p2: Point;
  private p3: Point;

  constructor (p1: Point, p2: Point, p3: Point) {
    // TODO: написать код конструктора
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
  }

  Draw(canvas: ICanvas): void {
    // TODO: написать код рисования треугольника на холсте
    console.log('draw triangle ', canvas)
  }
}

class Rectangle implements ICanvasDrawable {

  private leftTop: Point;
  private width: number;
  private height: number;

  constructor (leftTop: Point, width: number, height: number) {
    this.leftTop = leftTop;
    this.width = width;
    this.height = height;
  }

  Draw(canvas: ICanvas): void {
    console.log('draw rectangle ', canvas)
  }
}

export class CanvasPainter {

  private canvas: ICanvas;

  constructor (canvas: ICanvas) {
    this.canvas = canvas;
  }

  Draw(canvas: ICanvasDrawable): void {
    console.log('draw by ', this.canvas, canvas)
  }
}
