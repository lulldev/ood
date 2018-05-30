import { Point } from '../both/point';

export class ModernGraphicsRenderer {

  private isDrawing: boolean = false;
  private outWriter: any;

  constructor(outWriter: any) {
    this.outWriter = outWriter;
  }

  public BeginDraw(): void {
    if (this.isDrawing) {
      throw Error('Drawing has already begun');
    }
    this.outWriter('<draw>');
    this.isDrawing = true;
  }

  public DrawLine(start: Point, end: Point): void {
    if (!this.isDrawing) {
      throw Error('DrawLine is allowed between BeginDraw()/EndDraw() only');
    }
    this.outWriter(`<line fromX="${start.x}" fromY="${start.y}" toX="${end.x}" toY="${end.y}">`);
  }

  public EndDraw(): void {
    if (!this.isDrawing) {
      throw Error('Drawing has not been started');
    }
    this.outWriter('</draw>');
    this.isDrawing = false;
  }
}
