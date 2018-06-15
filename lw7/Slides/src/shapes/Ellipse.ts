import {Shape, ShapeEdge} from "../slides/Shape";
import {Canvas} from "../slides/Canvas";
import {Color} from "../standart/Color";

export class Ellipse extends Shape implements IGraphicCopmonent {

  private left: number;
  private top: number;
  private width: number;
  private height: number;

  constructor(left: number, top: number, width: number, height: number,
              borderColor: Color, fillColor: Color) {

    super(borderColor, fillColor);

    if (!this.IsValid(left, top, width, height)) {
      throw new Error('Invalid ellipse params');
    }

    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
  }

  public GetCenter(): ShapeEdge {
    return {x: this.left, y: this.top };
  }

  public GetHorizontalRadius(): number {
    return this.width / 2;
  }

  public GetVerticalRadius(): number {
    return this.height / 2;
  }

  public Draw(canvas: Canvas): void {
    const center = this.GetCenter();
    canvas.DrawEllipse(center.x, center.y, this.GetVerticalRadius(), this.GetHorizontalRadius());
  }

  private IsValid(left: number, top: number, width: number, height: number): boolean {
    return !!left && !!top && (!!width && width > 0) && (!!height && height > 0);
  }
}
