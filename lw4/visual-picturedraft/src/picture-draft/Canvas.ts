import {Color} from './Color';

export interface ICanvas {
  SetCanvasColor(color: Color): void;

  GetCanvasColor(): Color;

  DrawEllipse(centerX: number, centerY: number, verticalRadius: number, horizontalRadius: number, color: string): void;

  DrawRectangle(l: number, t: number, w: number, h: number, color: string): void;

  DrawPolygon(centerX: number, centerY: number, numberOfSides: number, sideSize: number, color: string): void;

  DrawTriangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, color: string): void;
}

export class Canvas implements ICanvas {

  private color: Color;
  private HTMLElementID: string;

  constructor(HTMLElementID: string) {
    this.color = Color.White;
    this.HTMLElementID = HTMLElementID;
  }

  public SetCanvasColor(color: Color): void {
    this.color = color;
  }

  public GetCanvasColor(): Color {
    return this.color;
  }

  public GetHTMLElementID(): string {
    return this.HTMLElementID;
  }

  public GetCanvasInfo(): string {
    return `Canvas color ${this.GetCanvasColor()}`;
  }

  public DrawRectangle(x: number, y: number, width: number, height: number, color: string): void {
    console.log(`Draw rectangle: x = ${x}, y = ${y}, width = ${width}, height = ${height}`);

    const canvas: any = document.getElementById(this.HTMLElementID);
    const context: any = canvas.getContext('2d');
    context.beginPath();
    context.fillStyle = color;
    context.lineWidth = 0.3;
    context.strokeRect(x, y, width, height);
    context.fillRect(x, y, width, height);
  }

  public DrawEllipse(centerX: number, centerY: number,
                     verticalRadius: number, horizontalRadius: number,
                     color: string): void {
    console.log(`Draw ellipse: center = [${centerX};${centerY}], ` + `v = ${verticalRadius}, h = ${horizontalRadius}`);
  }

  public DrawPolygon(centerX: number, centerY: number,
                     numberOfSides: number, sideSize: number,
                     color: string): void {

    const canvas: any = document.getElementById(this.HTMLElementID);
    const context: any = canvas.getContext('2d');

    numberOfSides = +numberOfSides;
    const size = +sideSize;
    const Xcenter = +centerX;
    const Ycenter = +centerY;

    context.beginPath();
    context.moveTo (Xcenter +  size * Math.cos(0), Ycenter +  size *  Math.sin(0));

    for (let i = 1; i <= numberOfSides; i += 1) {
      context.lineTo (Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides),
        Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
    }

    context.fillStyle = color;
    context.strokeStyle = color;
    context.lineWidth = 1;
    context.stroke();
    context.fill();
  }

  public DrawTriangle(x1: number, y1: number,
                      x2: number, y2: number,
                      x3: number, y3: number,
                      color: string): void {

    console.log(`Draw triangle`);

    const canvas: any = document.getElementById(this.HTMLElementID);
    const context: any = canvas.getContext('2d');
    context.beginPath();
    context.fillStyle = color;
    context.lineWidth = 0.2;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(x3, y3);
    context.lineTo(x1, y1);
    context.stroke();
    context.fill();
  }
}
