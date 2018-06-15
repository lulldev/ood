import {IShape} from "./IShape";
import {IFillStyle} from "../style/IFillStyle";
import {IOutlineStyle} from "../style/IOutlineStyle";
import {ICanvas} from "../canvas/ICanvas";

export class ShapeComponent implements IShape {

  private fillStyle: IFillStyle;
  private outlineStyle: IOutlineStyle;

  constructor(fillStyle: IFillStyle, outlineStyle: IOutlineStyle) {
    this.fillStyle = fillStyle;
    this.outlineStyle = outlineStyle;
  }

  public GetFillStyle(): IFillStyle {

  }

  public GetOutlineStyle(): IFillStyle {

  }

  public Draw(canvas: ICanvas): void {

  }

  public GetComposite(): IFillStyle {

  }

  protected Stroke(canvas: ICanvas): void {

  }

  protected Fill(canvas: ICanvas): void {

  }


}
