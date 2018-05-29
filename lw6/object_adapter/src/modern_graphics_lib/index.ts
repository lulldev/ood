import { Point } from '../both/point';

export class ModernGraphicsRenderer {

  private isDrawing: boolean = false;

  public BeginDraw(): void {
    if (this.isDrawing) {
      throw Error('Drawing has already begun');
    }
    console.log('<draw>');
    this.isDrawing = true;
  }

  public DrawLine(start: Point, end: Point): void {
    if (this.isDrawing) {
      throw Error('DrawLine is allowed between BeginDraw()/EndDraw() only');
    }
    console.log(`<line fromX="${start.x}" fromY="${start.y}" toX="${end.x}" toY="${end.y}">`);
  }

  public EndDraw(): void {
    if (this.isDrawing) {
      throw Error('Drawing has not been started');
    }
    console.log('</draw>');
    this.isDrawing = false;
  }
}
