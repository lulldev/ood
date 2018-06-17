import {IShape} from '../IShape';
import {FillStyle} from './FillStyle';
import {OutlineStyle} from './OutlineStyle';
import {ICanvas} from '../../canvas/ICanvas';
import {Frame} from '../../standart/Frame';
import {ICompositShape} from '../composit-shape/ICompositShape';

export abstract class ShapeComponent implements IShape {

  private fillStyle: FillStyle;
  private outlineStyle: OutlineStyle;

  public GetFillStyle(): FillStyle {
    return this.fillStyle;
  }

  public GetOutlineStyle(): OutlineStyle {
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
