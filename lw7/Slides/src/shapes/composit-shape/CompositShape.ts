import {IShape} from '../IShape';
import {ICanvas} from '../../canvas/ICanvas';
import {IFillStyle} from '../../style/IFillStyle';
import {IOutlineStyle} from '../../style/IOutlineStyle';
import {ICompositShape} from './ICompositShape';
import {IShapeCollection} from './IShapeCollection';
import {Pair} from '../../standart/Pair';
import {Frame} from '../../standart/Frame';
import {ShapeCollection} from './ShapeCollection';

export class CompositShape implements ICompositShape {

  private shapes: IShapeCollection = new ShapeCollection();
  private outlineStyle: (IOutlineStyle|undefined);
  private fillStyle: (IFillStyle|undefined);

  constructor() {
    this.fillStyle = undefined;
    this.outlineStyle = undefined;
  }

  public Add(shape: IShape): void {
    this.shapes.Add(shape);
  }

  public Remove(index: number): void {
    this.shapes.Remove(index);
  }

  public Draw(canvas: ICanvas): void {
    for (let i = 0; i < this.shapes.GetShapesCount(); i++) {
      this.shapes.GetShape(i).Draw(canvas);
    }
  }

  public GetComposit(): any {
    return this;
  }

  public GetShape(index: number): IShape {
    return this.shapes.GetShape(index);
  }

  public GetShapesCount(): number {
    return this.shapes.GetShapesCount();
  }

  public GetFillStyle(): IFillStyle {
    return this.fillStyle;
  }

  public GetOutlineStyle(): IOutlineStyle {
    return this.outlineStyle;
  }

  public SetFillStyle(fillStyle: IFillStyle): void {
    this.fillStyle = fillStyle;
    for (let i = 0; i < this.shapes.GetShapesCount(); i++) {
      this.shapes.GetShape(i).GetFillStyle().SetColor(this.fillStyle.GetColor());
      this.shapes.GetShape(i).GetFillStyle().Enable(this.fillStyle.IsEnabled());
    }
  }

  public SetOutlineStyle(outlineStyle: IOutlineStyle): void {
    this.outlineStyle = outlineStyle;
    for (let i = 0; i < this.shapes.GetShapesCount(); i++) {
      this.shapes.GetShape(i).GetOutlineStyle().SetColor(this.outlineStyle.GetColor());
      this.shapes.GetShape(i).GetOutlineStyle().SetThickness(this.outlineStyle.GetThickness());
      this.shapes.GetShape(i).GetOutlineStyle().Enable(this.outlineStyle.IsEnabled());
    }
  }

  public SetFrame(frame: Frame) {

    if (this.shapes.GetShapesCount() === 0) {
      throw new Error('Cant set frame to composite shape that has no children');
    }

    const oldCompositeFrame = this.GetFrame();
    const percentage: Pair = {
      first: frame.width / oldCompositeFrame.width,
      second: frame.height / oldCompositeFrame.height,
    };

    for (let i = 0; i < this.shapes.GetShapesCount(); ++i) {
      const oldInnerFrame: Frame = this.shapes.GetShape(i).GetFrame();
      const newX: number = frame.left + (oldInnerFrame.left - oldCompositeFrame.left) * percentage.first;
      const newY: number = frame.top + (oldInnerFrame.top - oldCompositeFrame.top) * percentage.second;
      this.shapes.GetShape(i).SetFrame({
        left: newX,
        top: newY,
        width: oldInnerFrame.width * percentage.first,
        height: oldInnerFrame.height * percentage.second});
    }
  }

  public GetFrame(): Frame {

    if (this.shapes.GetShapesCount() === 0) {
      throw new Error('Cant set frame to composite shape that has no children');
    }

    let innerFrame = this.shapes.GetShape(0).GetFrame();
    let minX: number = innerFrame.left;
    let minY: number = innerFrame.top;
    let maxX: number = innerFrame.left + innerFrame.width;
    let maxY: number = innerFrame.top + innerFrame.height;

    for (let i = 1; i < this.shapes.GetShapesCount(); ++i) {
      innerFrame = this.shapes.GetShape(i).GetFrame();

      if (innerFrame.left < minX) {
        minX = innerFrame.left;
      }

      if (innerFrame.top < minY) {
        minY = innerFrame.top;
      }

      if (innerFrame.left + innerFrame.width > maxX) {
        maxX = innerFrame.left + innerFrame.width;
      }

      if (innerFrame.top + innerFrame.height > maxY) {
        maxY = innerFrame.top + innerFrame.height;
      }
    }

    return { left: minX, top: minY, width: maxX - minX, height: maxY - minY };
  }

}
