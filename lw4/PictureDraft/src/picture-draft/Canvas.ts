import { Color } from './Color';

export interface ICanvas {
  ShowCanvasInfo(): void;
  SetCanvasColor(color: Color): void;
  GetCanvasColor(): Color;
  MoveTo(x: number, y: number): void;
  DrawLine(from: number, to: number): void;
  DrawEllipse(left: number, top: number, verticalRadius: number, horizontalRadius: number): void;
  DrawRectangle(l: number, t: number, w: number, h: number): void;
  DrawPolygon(centerX: number, centerY: number, numberOfSides: number, sideSize: number): void;
  DrawTriangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;
}

export class Canvas implements ICanvas {

  private color: Color;
  private output: (param: string) => (void);

  constructor(output: (param: string) => (void)) {
    this.color = Color.White;
    this.output = output;
  }

  public SetCanvasColor(color: Color): void {
    this.color = color;
    this.output(`Set canvas color ${this.color}`);
  }

  public GetCanvasColor(): Color {
    return this.color;
  }

  public ShowCanvasInfo(): void {
    this.output(`Canvas color ${this.GetCanvasColor()}`);
  }

  public MoveTo(x: number, y: number): void {
    this.output(`Move to: [${x}:${y}]`);
  }

  public DrawLine(from: number, to: number): void {
    this.output(`Draw line: from ${from} to ${to}`);
  }

  public DrawRectangle(x: number, y: number, width: number, height: number): void {
    this.output(`Draw rectangle: x = ${x}, y = ${y}, width = ${width}, height = ${height}`);
  }

  public DrawEllipse(left: number, top: number,
                     verticalRadius: number, horizontalRadius: number): void {
    this.output(`Draw ellipse: center = [${left};${top}], ` + `v = ${verticalRadius}, h = ${horizontalRadius}`);
  }

  public DrawPolygon(centerX: number, centerY: number,
                     numberOfSides: number, sideSize: number): void {
    this.output(`Draw polygon: center = [${centerX};${centerY}], ` +
      `sides count = ${numberOfSides}, side size = ${sideSize}`);
  }

  public DrawTriangle(x1: number, y1: number,
                      x2: number, y2: number,
                      x3: number, y3: number): void {
    this.output('Draw triangle');
    this.MoveTo(x1, y1);
    this.DrawLine(x2, y2);
    this.DrawLine(x3, y3);
    this.DrawLine(x1, y1);
  }
}
