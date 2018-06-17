import {Point} from '../standart/Point';
import {Frame} from '../standart/Frame';
import {ShapeComponent} from './shape-component/ShapeComponent';
import {ICanvas} from '../canvas/ICanvas';

export class Rectangle extends ShapeComponent {

  private leftTop: Point;
  private width: number;
  private height: number;

  constructor(leftTop: Point, width: number, height: number) {

    super();

    this.leftTop = leftTop;
    this.width = width;
    this.height = height;
  }

  public GetLeftTop(): Point {
    return this.leftTop;
  }

  public GetWidth(): number {
    return this.width;
  }

  public GetHeight(): number {
    return this.height;
  }

  public GetFrame(): Frame {
    return { left: this.leftTop.x, top: this.leftTop.y, width: this.width, height: this.height };
  }

  public SetFrame(frame: Frame) {
    this.leftTop = { x: frame.left, y: frame.top };
    this.width = frame.width;
    this.height = frame.height;
  }

  protected Fill(canvas: ICanvas) {
    canvas.FillPolygon(this.PointsToBounding());
  }

  protected Stroke(canvas: ICanvas) {
    const boundingPoints = this.PointsToBounding();
    canvas.DrawLine(boundingPoints[0], boundingPoints[1]);
    canvas.DrawLine(boundingPoints[1], boundingPoints[2]);
    canvas.DrawLine(boundingPoints[2], boundingPoints[3]);
    canvas.DrawLine(boundingPoints[3], boundingPoints[0]);
  }

  private PointsToBounding(): (Point)[] {
    return [
      { x: this.leftTop.x, y: this.leftTop.y },
      { x: this.leftTop.x + this.width, y: this.leftTop.y },
      { x: this.leftTop.x + this.width, y: this.leftTop.y + this.height },
      { x: this.leftTop.x, y: this.leftTop.y + this.height }];
  }

}
