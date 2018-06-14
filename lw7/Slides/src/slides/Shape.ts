import { Canvas } from './Canvas';
import { Color } from './Color';
import { IGraphicCopmonent } from './GraphicComponent';

export type ShapeEdge = { x: number; y: number };

export abstract class Shape {

  protected borderColor: Color;
  protected fillColor: Color;

  constructor(borderColor: Color, fillColor: Color) {
    this.borderColor = borderColor;
    this.fillColor = fillColor;
  }

  public GetBorderColor(): Color {
    return this.borderColor;
  }

  public GetFillColor(): Color {
    return this.fillColor;
  }

  public abstract Draw(canvas: Canvas): void;
}

export class Rectangle extends Shape implements IGraphicCopmonent {

  private startX: number;
  private startY: number;
  private width: number;
  private height: number;

  constructor(startX: number, startY: number, width: number,
              height: number, borderColor: Color, fillColor: Color) {

    super(borderColor, fillColor);

    if (!this.IsValid(startX, startY, width, height)) {
      throw new Error('Invalid rectangle params');
    }

    this.startX = startX;
    this.startY = startY;
    this.width = width;
    this.height = height;
  }

  public GetLeftTop(): ShapeEdge {
    return { x: this.startX, y: this.startY };
  }

  public GetRightBottom(): ShapeEdge {
    return { x: this.startX + this.height, y: this.startY + this.width };
  }

  public Draw(canvas: Canvas): void {
    canvas.DrawRectangle(this.startX, this.startY, this.width, this.height);
  }

  private IsValid(startX: number, startY: number, width: number, height: number): boolean {
    return !!startX && !!startY && (!!width && width > 0) && (!!height && height > 0);
  }

}

export class Triangle extends Shape implements IGraphicCopmonent {

  private x1: number;
  private y1: number;
  private x2: number;
  private y2: number;
  private x3: number;
  private y3: number;

  constructor(x1: number, y1: number, x2: number, y2: number,
              x3: number, y3: number, borderColor: Color, fillColor: Color) {

    super(borderColor, fillColor);

    if (!this.IsValid(x1, y1, x2, y2, x3, y3)) {
      throw new Error('Invalid triangle params');
    }

    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
  }

  public GetVertex1(): ShapeEdge {
    return { x: this.x1, y: this.y1 };
  }

  public GetVertex2(): ShapeEdge {
    return { x: this.x2, y: this.y2 };
  }

  public GetVertex3(): ShapeEdge {
    return { x: this.x3, y: this.y3 };
  }

  public Draw(canvas: Canvas): void {
    canvas.DrawTriangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
  }

  private IsValid(x1: number, y1: number, x2: number,
                  y2: number, x3: number, y3: number): boolean {
    return !!x1 && !!y1 && !!x2 && !!y2 && !!x3 && !!y3;
  }
}

export class Ellipse extends Shape implements IGraphicCopmonent {

  private left: number;
  private top: number;
  private width: number;
  private height: number;

  constructor(left: number, top: number, width: number, height: number,
              borderColor: Color, fillColor: Color) {

    super(borderColor, fillColor);

    if (!this.IsValid(left, top, width, height)) {
      throw new Error('Invalid ellipse params');
    }

    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
  }

  public GetCenter(): ShapeEdge {
    return {x: this.left, y: this.top };
  }

  public GetHorizontalRadius(): number {
    return this.width / 2;
  }

  public GetVerticalRadius(): number {
    return this.height / 2;
  }

  public Draw(canvas: Canvas): void {
    const center = this.GetCenter();
    canvas.DrawEllipse(center.x, center.y, this.GetVerticalRadius(), this.GetHorizontalRadius());
  }

  private IsValid(left: number, top: number, width: number, height: number): boolean {
    return !!left && !!top && (!!width && width > 0) && (!!height && height > 0);
  }
}
