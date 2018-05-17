export interface ICanvas {
  MoveTo(x: number, y: number): void;
  LineTo(x: number, y: number): void;
}

export class Canvas implements ICanvas {

  public MoveTo(x: number, y: number): void {
    console.log(`MoveTo (${x}:${y})`);
  }

  public LineTo(x: number, y: number): void {
    console.log(`LineTo (${x}:${y})`);
  }
}
