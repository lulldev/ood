import {Color} from '../standart/Color';
import {Point} from '../standart/Point';
import {Frame} from '../standart/Frame';
import {ShapeComponent} from './shape-component/ShapeComponent';
import {IOutlineStyle} from '../style/IOutlineStyle';
import {IFillStyle} from '../style/IFillStyle';
import {ICanvas} from "../canvas/ICanvas";

export class Triangle extends ShapeComponent {

  private vertex1: Point;
  private vertex2: Point;
  private vertex3: Point;

  constructor(vertext1: Point, vertext2: Point, vertext3: Point) {

    super();

    this.vertex1 = vertext1;
    this.vertex2 = vertext2;
    this.vertex3 = vertext3;
  }

  public GetVertex1(): Point {
    return this.vertex1;
  }

  public GetVertex2(): Point {
    return this.vertex2;
  }

  public GetVertex3(): Point {
    return this.vertex3;
  }

  public GetFrame(): Frame {
    const minX: number = [ this.vertex1.x, this.vertex2.x, this.vertex3.x ].reduce((p: number, v: number) => p < v ? p : v);
    const maxX: number = [ this.vertex1.x, this.vertex2.x, this.vertex3.x ].reduce((p: number, v: number) => p > v ? p : v);
    const width = maxX - minX;

    const minY: number = [ this.vertex1.y, this.vertex2.y, this.vertex3.y ].reduce((p: number, v: number) => p < v ? p : v);
    const maxY: number = [ this.vertex1.y, this.vertex2.y, this.vertex3.y ].reduce((p: number, v: number) => p > v ? p : v);
    const height = maxY - minY;

    return { left: minX, top: minY, width, height };
  }

  public SetFrame(frame: Frame) {
    type pair = {first: number; second: number };
    const percentages: pair[] = [];

    const oldFrame = this.GetFrame();

    [this.vertex1, this.vertex2, this.vertex3].forEach((vertex: Point) => {
      percentages.push({first: (vertex.x - oldFrame.left) / oldFrame.width,
        second: (vertex.y - oldFrame.top) / oldFrame.height});
    });

    this.vertex1 = { x: frame.left + percentages[0].first * frame.width,
                     y: frame.top + percentages[0].second * frame.height };

    this.vertex2 = { x: frame.left + percentages[1].first * frame.width,
                     y: frame.top + percentages[1].second * frame.height };

    this.vertex3 = { x: frame.left + percentages[2].first * frame.width,
                     y: frame.top + percentages[2].second * frame.height };
  }

  protected Fill(canvas: ICanvas) {
    canvas.FillPolygon([ this.vertex1, this.vertex2, this.vertex3 ]);
  }

  protected Stroke(canvas: ICanvas) {
    canvas.DrawLine(this.vertex1, this.vertex2);
    canvas.DrawLine(this.vertex2, this.vertex3);
    canvas.DrawLine(this.vertex3, this.vertex1);
  }

}
