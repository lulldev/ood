import {Color} from '../standart/Color';

export interface IOutlineStyle {
  IsEnabled(): boolean;
  Enable(enable: boolean): void;
  GetColor(): Color;
  SetColor(color: Color);
  GetThickness(): number;
  SetThickness(thickness: number);
}
