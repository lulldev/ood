import {IOutlineStyle} from '../../style/IOutlineStyle';
import {Color} from '../../standart/Color';

export class CompositOutlineStyle implements IOutlineStyle {

  private outlineStyles: IOutlineStyle[] = [];

  public IsEnabled(): boolean {
    return this.outlineStyles.some((outlineStyle: IOutlineStyle) => {
      return outlineStyle.IsEnabled();
    });
  }

  public Enable(enable: boolean): void {
    return this.outlineStyles.forEach((outlineStyle: IOutlineStyle) => {
      return outlineStyle.Enable(enable);
    });
  }

  public GetColor(): Color {
    let firstColor: (Color | undefined) = undefined;
    let allSame: boolean = true;

    this.outlineStyles.forEach((outlineStyle: IOutlineStyle) => {
      if (!firstColor) {
        firstColor = outlineStyle.GetColor();
      }
      else if (firstColor !== outlineStyle.GetColor()) {
        allSame = false;
      }
    });

    return (!firstColor || !allSame) ? Color.Undefined : firstColor;
  }

  public SetColor(color: Color): void {
    return this.outlineStyles.forEach((outlineStyle: IOutlineStyle) => {
      outlineStyle.SetColor(color);
    });
  }

  public SetThickness(thickness: number): void {
    return this.outlineStyles.forEach((outlineStyle: IOutlineStyle) => {
      outlineStyle.SetThickness(thickness);
    });
  }

  public GetThickness(): number {
    let firstThickness: (number|undefined) = undefined;
    let allSame: boolean = true;

    this.outlineStyles.forEach((outlineStyle: IOutlineStyle) => {
      if (!firstThickness) {
        firstThickness = outlineStyle.GetThickness();
      }
      else if (firstThickness !== outlineStyle.GetThickness()) {
        allSame = false;
      }
    });

    return (!firstThickness || !allSame) ? 1 : firstThickness;
  }
}
