import {Color} from '../standart/Color';

export interface IFillStyle {
  IsEnabled(): boolean;
  Enable(enable: boolean): void;
  GetColor(): Color;
  SetColor(color: Color);
}
