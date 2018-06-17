import {IOutlineStyle} from '../../style/IOutlineStyle';
import {Color} from '../../standart/Color';

export class OutlineStyle implements IOutlineStyle {

  private enabled: boolean = true;
  private color: Color = Color.Black;
  private thickness: number = 1;

  constructor(enabled: boolean = true, color: Color = Color.Black, thickness: number = 1) {
    this.enabled = enabled;
    this.color = color;
    this.thickness = thickness;
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

  public GetThickness(): number {
    return this.thickness;
  }

  public SetThickness(thickness: number): void {
    this.thickness = thickness;
  }
}
