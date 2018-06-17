import {ICanvasDrawable} from '../canvas/ICanvasDrawable';
import {Frame} from '../standart/Frame';
import {IFillStyle} from '../style/IFillStyle';
import {IOutlineStyle} from '../style/IOutlineStyle';
import {ICompositShape} from './composit-shape/ICompositShape';

export interface IShape extends ICanvasDrawable {
  GetFrame(): Frame;
  SetFrame(frame: Frame): void;
  GetFillStyle(): IFillStyle;
  GetOutlineStyle(): IOutlineStyle;
  GetComposit(): any;
}
