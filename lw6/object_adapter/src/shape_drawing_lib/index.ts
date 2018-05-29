import { Point } from '../both/point';
import { ICanvas } from '../graphics_lib';

export interface ICanvasDrawable {
  Draw(canvas: ICanvas): void;
}

export class Triangle implements ICanvasDrawable {

  private p1: Point;
  private p2: Point;
  private p3: Point;

  constructor (p1: Point, p2: Point, p3: Point) {
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
  }

  public Draw(canvas: ICanvas): void {
    canvas.MoveTo(this.p1.x, this.p1.y);
    canvas.LineTo(this.p2.x, this.p2.y);
    canvas.LineTo(this.p3.x, this.p3.y);
    canvas.LineTo(this.p1.x, this.p1.y);
  }
}

export class Rectangle implements ICanvasDrawable {

  private leftTop: Point;
  private width: number;
  private height: number;

  constructor (leftTop: Point, width: number, height: number) {
    this.leftTop = leftTop;
    this.width = width;
    this.height = height;
  }

  public Draw(canvas: ICanvas): void {
    canvas.MoveTo(this.leftTop.x, this.leftTop.y);
    canvas.LineTo(this.leftTop.x + this.width, this.leftTop.y);
    canvas.LineTo(this.leftTop.x + this.width, this.leftTop.y + this.height);
    canvas.LineTo(this.leftTop.x, this.leftTop.y + this.height);
    canvas.LineTo(this.leftTop.x, this.leftTop.y);
  }
}

export class CanvasPainter {

  private canvas: ICanvas;

  constructor (canvas: ICanvas) {
    this.canvas = canvas;
  }

  public Draw(canvas: ICanvasDrawable): void {
    canvas.Draw(this.canvas);
  }
}
