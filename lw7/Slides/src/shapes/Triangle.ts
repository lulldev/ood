import {Shape, ShapeEdge} from '../slides/Shape';
import {Canvas} from '../slides/Canvas';
import {Color} from '../standart/Color';

export class Triangle extends ShapeComponent {

  private x1: number;
  private y1: number;
  private x2: number;
  private y2: number;
  private x3: number;
  private y3: number;

  constructor(x1: number, y1: number, x2: number, y2: number,
              x3: number, y3: number, borderColor: Color, fillColor: Color) {

    super(borderColor, fillColor);

    if (!this.IsValid(x1, y1, x2, y2, x3, y3)) {
      throw new Error('Invalid triangle params');
    }

    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
  }

  public GetVertex1(): ShapeEdge {
    return { x: this.x1, y: this.y1 };
  }

  public GetVertex2(): ShapeEdge {
    return { x: this.x2, y: this.y2 };
  }

  public GetVertex3(): ShapeEdge {
    return { x: this.x3, y: this.y3 };
  }

  public Draw(canvas: Canvas): void {
    canvas.DrawLine(this.x1, this.x2);
    canvas.DrawLine(this.x2, this.x3);
    canvas.DrawLine(this.x3, this.x1);
  }

}
