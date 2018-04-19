import { Color } from './Color';

// todo: interface

export interface ICanvas {
  SetColor(color: Color): void;
  MoveTo(x: number, y: number): void;
  DrawLine(from: number, to: number): void;
  DrawEllipse(centerX: number, centerY: number, verticalRadius: number, horizontalRadius: number): void;
  DrawRectangle(l: number, t: number, w: number, h: number): void;
  DrawPolygon(centerX: number, centerY: number, numberOfSides: number, sideSize: number): void;
  DrawTriangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;
}

// todo: текстовое рисование

export class Canvas implements ICanvas {

  private color: Color;

  constructor() {
    this.color = Color.White;
  }

  public SetColor(color: Color): void {
    this.color = color;
  }

  public DrawRectangle(x: number, y: number, width: number, height: number): void {
    console.log(`Draw rectangle: x = ${x}, y = ${y}, width = ${width}, height = ${height}`);
  }

  public MoveTo(x: number, y: number): void {
    console.log(`Move to: [${x}:${y}]`);
  }

  public DrawLine(from: number, to: number): void {
    console.log(`Draw line: from ${from} to ${to}`);
  }

  public DrawEllipse(centerX: number, centerY: number,
                     verticalRadius: number, horizontalRadius: number): void {
    console.log(`Draw ellipse: center = [${centerX};${centerY}], 
    v = ${verticalRadius}, h = ${horizontalRadius}`);
  }

  public DrawPolygon(centerX: number, centerY: number,
                     numberOfSides: number, sideSize: number): void {
    console.log(`Draw polygon: center = [${centerX};${centerY}], 
    sides count = ${numberOfSides}, side size = ${sideSize}`);
  }

  public DrawTriangle(x1: number, y1: number,
                      x2: number, y2: number,
                      x3: number, y3: number): void {
    console.log(`Draw triangle`);
    this.MoveTo(x1, y1);
    this.DrawLine(x2, y2);
    this.DrawLine(x3, y3);
    this.DrawLine(x1, y1);
  }
}
