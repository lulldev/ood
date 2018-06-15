import { ICanvas } from './ICanvas';

export class Canvas implements ICanvas {

  public MoveTo(x: number, y: number): void {
    console.log(`Move to: [${x}:${y}]`);
  }

  public DrawLine(from: number, to: number): void {
    console.log(`Draw line: from ${from} to ${to}`);
  }

  public DrawRectangle(x: number, y: number, width: number, height: number): void {
    console.log(`Draw rectangle: x = ${x}, y = ${y}, width = ${width}, height = ${height}`);
  }

  public DrawEllipse(left: number, top: number,
                     verticalRadius: number, horizontalRadius: number): void {
    console.log(`Draw ellipse: center = [${left};${top}], ` + `v = ${verticalRadius}, h = ${horizontalRadius}`);
  }

  // public DrawTriangle(x1: number, y1: number,
  //                     x2: number, y2: number,
  //                     x3: number, y3: number): void {
  //   console.log(`Draw triangle`);
  //   this.MoveTo(x1, y1);
  //   this.DrawLine(x2, y2);
  //   this.DrawLine(x3, y3);
  //   this.DrawLine(x1, y1);
  // }
}
