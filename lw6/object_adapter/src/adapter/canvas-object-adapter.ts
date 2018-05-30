import { ModernGraphicsRenderer } from "../modern_graphics_lib";
import { ICanvas } from "../graphics_lib";
import { Point } from "../both/point";


export class CanvasObjectAdapter implements ICanvas {

  private modernRenderer: ModernGraphicsRenderer;
  private position: Point;

  constructor(renderer: ModernGraphicsRenderer) {
    this.modernRenderer = renderer;
    this.modernRenderer.BeginDraw();
  }

  public MoveTo(x: number, y: number): void {
    this.position = { x, y };
  }

  public LineTo(x: number, y: number): void {
    this.modernRenderer.DrawLine(this.position, { x, y })
    this.position = { x, y };
  }

  public End(): void {
    this.modernRenderer.EndDraw();
  }
}
