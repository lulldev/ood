import {Point} from '../standart/Point';
import {Frame} from '../standart/Frame';
import {ShapeComponent} from './shape-component/ShapeComponent';
import {ICanvas} from '../canvas/ICanvas';

export class Ellipse extends ShapeComponent {

  private center: Point;
  private horizontalRadius: number;
  private verticalRadius: number;

  constructor(center: Point, horizontalRadius: number, verticalRadius: number) {

    super();

    this.center = center;
    this.horizontalRadius = horizontalRadius;
    this.verticalRadius = verticalRadius;
  }

  public GetCenter(): Point {
    return this.center;
  }

  public GetHorizontalRadius(): number {
    return this.horizontalRadius;
  }

  public GetVerticalRadius(): number {
    return this.verticalRadius;
  }

  public GetFrame(): Frame {
    const leftTop: Point = { x: this.center.x - this.horizontalRadius, y: this.center.y - this.verticalRadius };

    return { left: leftTop.x, top: leftTop.y, width: this.horizontalRadius * 2, height: this.verticalRadius * 2 };
  }

  public SetFrame(frame: Frame) {
    this.center.x = frame.left + frame.width / 2;
    this.center.y = frame.top + frame.height / 2;
    this.horizontalRadius = frame.width / 2;
    this.verticalRadius = frame.height / 2;
  }

  protected Fill(canvas: ICanvas) {
    canvas.FillEllipse(this.center, this.horizontalRadius, this.verticalRadius);
  }

  protected Stroke(canvas: ICanvas) {
    canvas.DrawEllipse(this.center, this.horizontalRadius, this.verticalRadius);

  }
}
