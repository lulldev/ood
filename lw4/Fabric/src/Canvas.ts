import { Color } from './Color';

// todo: interface

export interface ICanvas {
  SetColor(color: Color): void;
  DrawLine(from: number, to: number): void;
  DrawEllipse(l: number, t: number, w: number, h: number): void;
}

export class Canvas implements ICanvas{

  private color: Color;

  constructor() {
    this.color = Color.White;
  }

  public SetColor(color: Color): void {
    this.color = color;
  }

  public DrawLine(from: number, to: number): void {
    console.log(from, to);
  }

  public DrawEllipse(l: number, t: number, w: number, h: number): void {
    console.log(l, t, w, h);
  }
}
