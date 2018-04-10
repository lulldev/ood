import { Color } from './Color';
import { Canvas } from './Canvas';

export type ShapeEdge = { x: number, y: number };

export abstract class Shape {

  protected color: Color;

  constructor(color: Color) {
    this.color = color;
  }

  public GetColor(): Color {
    return this.color;
  }

  public abstract Draw(canvas: Canvas): void;
}

export class Rectangle extends Shape {

  private x: number;
  private y: number;
  private width: number;
  private height: number;

  constructor(startPoint: ShapeEdge, width: number, height: number, color: Color) {
    super(color);
    this.x = startPoint.x;
    this.y = startPoint.y;
    this.width = width;
    this.height = height;
  }

  public GetLeftTop(): ShapeEdge {
    return { x: this.x, y: this.y };
  }

  public GetRightBottom(): ShapeEdge {
    return { x: this.x + this.height, y: this.y + this.width };
  }

  public Draw(canvas: Canvas): void {
    /*
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.fillStyle = this.color;
    context.lineWidth = 0.5;
    context.strokeRect(this.x, this.y, this.width, this.height);
    context.fillRect(this.x, this.y, this.width, this.height);
    */
  }
}

export class Triangle extends Shape {

  private a: ShapeEdge;
  private b: ShapeEdge;
  private c: ShapeEdge;
  private width: number;
  private height: number;

  constructor(a: ShapeEdge, b: ShapeEdge, c: ShapeEdge,  color: Color) {
    super(color);
    this.a = a;
    this.b = b;
    this.c = c;
  }

  public GetVertex1(): ShapeEdge {
    return this.a;
  }

  public GetVertex2(): ShapeEdge {
    return this.b;
  }

  public GetVertex3(): ShapeEdge {
    return this.c;
  }

  public Draw(canvas: Canvas): void {
    /*
        let context = canvasContext.getContext("2d");
        context.clearRect(0, 0, canvasContext.width, canvasContext.height);
        context.beginPath();
        context.fillStyle = this.getBgColor();
        context.lineWidth = 0.5;
        context.strokeStyle = this.getBorderColor();
        context.moveTo(this.x1, this.y1);
        context.lineTo(this.x2, this.y2);
        context.lineTo(this.x3, this.y3);
        context.lineTo(this.x1, this.y1);
        context.stroke();
        context.fill();
    */
  }
}

export class Ellipse extends Shape {

  private center: ShapeEdge;
  private horizontalRadius: number;
  private verticalRadius: number;

  constructor(center: ShapeEdge, horizontalRadius: number, verticalRadius: number,  color: Color) {
    super(color);
    this.center = center;
    this.horizontalRadius = horizontalRadius;
    this.verticalRadius = verticalRadius;
  }

  public GetCenter(): ShapeEdge {
    return this.center;
  }

  public GetHorizontalRadius(): number {
    return this.horizontalRadius;
  }

  public GetVerticalRadius(): number {
    return this.verticalRadius;
  }

  public Draw(canvas: Canvas): void {
    // https://true-coder.ru/javascript/risuem-ellips-na-canvas.html
  }
}

export class RegularPolygon extends Shape {

  private center: ShapeEdge;
  private numberOfSides: number;
  private sideSize: number;

  constructor(center: ShapeEdge, numberOfSides: number, sideSize: number,  color: Color) {
    super(color);
    this.center = center;
    this.numberOfSides = numberOfSides;
    this.sideSize = sideSize;
  }

  public GetVertexCount(): number {
    return 0; // todo
  }

  public GetCenter(): ShapeEdge {
    return this.center;
  }

  public GetRadius(): number {
    return 0; // todo
  }

  public Draw(canvas: Canvas): void {
    // http://scienceprimer.com/drawing-regular-polygons-javascript-canvas
    // https://processing.org/examples/regularpolygon.html
  }
}

