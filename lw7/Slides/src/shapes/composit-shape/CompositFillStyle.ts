import {IFillStyle} from '../../style/IFillStyle';
import {Color} from '../../standart/Color';

export class CompositFillStyle implements IFillStyle {

  private fillStyles: IFillStyle[] = [];

  public IsEnabled(): boolean {
    return this.fillStyles.some((fillStyle: IFillStyle) => {
      return fillStyle.IsEnabled();
    });
  }

  public Enable(enable: boolean): void {
    return this.fillStyles.forEach((fillStyle: IFillStyle) => {
      return fillStyle.Enable(enable);
    });
  }

  public GetColor(): Color {
    let firstColor: (Color|undefined) = undefined;
    let allSame: boolean = true;

    this.fillStyles.forEach((fillStyle: IFillStyle) => {
      if (!firstColor) {
        firstColor = fillStyle.GetColor();
      }
      else if (firstColor !== fillStyle.GetColor()) {
        allSame = false;
      }
    });

    return (!firstColor || !allSame) ? Color.Undefined : firstColor;
  }

  public SetColor(color: Color): void {
    return this.fillStyles.forEach((fillStyle: IFillStyle) => {
      return fillStyle.SetColor(color);
    });
  }
}
