export interface ICanvas {
  SetCanvasColor(color: string): void;

  GetCanvasColor(): string;

  DrawEllipse(centerX: number, centerY: number, verticalRadius: number, horizontalRadius: number, color: string): void;

  DrawRectangle(l: number, t: number, w: number, h: number, color: string): void;

  DrawPolygon(centerX: number, centerY: number, numberOfSides: number, sideSize: number, color: string): void;

  DrawTriangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, color: string): void;
}

export class Canvas implements ICanvas {

  private canvasColor: string;
  private HTMLElementID: string;

  constructor(HTMLElementID: string) {
    this.canvasColor = '#fff';
    this.HTMLElementID = HTMLElementID;
  }

  public SetCanvasColor(color: string): void {
    this.canvasColor = color;
  }

  public GetCanvasColor(): string {
    return this.canvasColor;
  }

  public GetCanvasInfo(): string {
    return `Canvas color ${this.GetCanvasColor()}`;
  }

  public GetCanvasHTMLElementID(): string {
    return this.HTMLElementID;
  }

  public DrawRectangle(x: number, y: number, width: number, height: number, color: string): void {
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
    const canvas: any = document.getElementById(this.HTMLElementID);
    const context: any = canvas.getContext('2d');

    context.save();
    context.beginPath();
    context.translate(centerX, centerY);
    context.scale(horizontalRadius / verticalRadius, 1);
    context.arc(0, 0, verticalRadius, 0, Math.PI * 2, true);
    context.fillStyle = color;
    context.restore();
    context.closePath();
    context.stroke();
    context.stroke();
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
    context.moveTo(Xcenter + size * Math.cos(0), Ycenter + size * Math.sin(0));

    for (let i = 1; i <= numberOfSides; i += 1) {
      context.lineTo(Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides),
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
