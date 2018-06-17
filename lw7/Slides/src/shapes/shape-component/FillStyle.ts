import {IFillStyle} from '../../style/IFillStyle';
import {Color} from '../../standart/Color';

export class FillStyle implements IFillStyle {

  private enabled: boolean = true;
  private color: Color = Color.Black;

  constructor(enabled: boolean = true, color: Color = Color.Black) {
    this.enabled = enabled;
    this.color = color;
  }

  public IsEnabled(): boolean {
    return this.enabled;
  }

  public Enable(enable: boolean): void {
    this.enabled = enable;
  }

  public GetColor(): Color {
    return this.color;
  }

  public SetColor(color: Color): void {
    this.color = color;
  }
}
