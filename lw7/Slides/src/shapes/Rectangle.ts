import {Shape, ShapeEdge} from "../slides/Shape";
import {Canvas} from "../slides/Canvas";
import {Color} from "../standart/Color";

export class Rectangle extends Shape implements IGraphicCopmonent {

  private startX: number;
  private startY: number;
  private width: number;
  private height: number;

  constructor(startX: number, startY: number, width: number,
              height: number, borderColor: Color, fillColor: Color) {

    super(borderColor, fillColor);

    if (!this.IsValid(startX, startY, width, height)) {
      throw new Error('Invalid rectangle params');
    }

    this.startX = startX;
    this.startY = startY;
    this.width = width;
    this.height = height;
  }

  public GetLeftTop(): ShapeEdge {
    return { x: this.startX, y: this.startY };
  }

  public GetRightBottom(): ShapeEdge {
    return { x: this.startX + this.height, y: this.startY + this.width };
  }

  public Draw(canvas: Canvas): void {
    console.log(canvas);
    // canvas.DrawRectangle(this.startX, this.startY, this.width, this.height);
  }

  private IsValid(startX: number, startY: number, width: number, height: number): boolean {
    return !!startX && !!startY && (!!width && width > 0) && (!!height && height > 0);
  }

}
