import {IShape} from '../IShape';
import {FillStyle} from './FillStyle';
import {OutlineStyle} from './OutlineStyle';
import {ICanvas} from '../../canvas/ICanvas';
import {Frame} from '../../standart/Frame';
import {ICompositShape} from '../composit-shape/ICompositShape';
import {IFillStyle} from '../../style/IFillStyle';
import {IOutlineStyle} from '../../style/IOutlineStyle';

export abstract class ShapeComponent implements IShape {

  private fillStyle: IFillStyle;
  private outlineStyle: IOutlineStyle;

  constructor() {
    this.fillStyle = new FillStyle();
    this.outlineStyle = new OutlineStyle();
  }

  public GetFillStyle(): IFillStyle {
    return this.fillStyle;
  }

  public GetOutlineStyle(): IOutlineStyle {
    return this.outlineStyle;
  }

  public Draw(canvas: ICanvas): void {

    if (this.fillStyle.IsEnabled()) {
      canvas.SetFillColor(this.fillStyle.GetColor());
      this.Fill(canvas);
    }

    if (this.outlineStyle.IsEnabled()) {
      canvas.SetOutlineThickness(this.outlineStyle.GetThickness());
      canvas.SetOutlineColor(this.outlineStyle.GetColor());
      this.Stroke(canvas);
    }
  }

  public GetComposit(): ICompositShape {
    return null;
  }

  public abstract GetFrame(): Frame;

  public abstract SetFrame(frame: Frame);

  protected abstract Fill(canvas: ICanvas);

  protected abstract Stroke(canvas: ICanvas);
}
