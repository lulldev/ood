import {ICanvasDrawable} from '../canvas/ICanvasDrawable';
import {Frame} from './Frame';
import {IFillStyle} from '../style/IFillStyle';
import {IOutlineStyle} from '../style/IOutlineStyle';
import {ICompositShape} from './ICompositShape';

export interface IShape extends ICanvasDrawable {
  GetFrame(): Frame;
  SetFrame(frame: Frame): void;
  GetFillStyle(): IFillStyle;
  GetOutlineStyle(): IOutlineStyle;
  GetComposit(): ICompositShape;
}
