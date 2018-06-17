import {IShape} from '../IShape';
import {IShapeCollection} from './IShapeCollection';
import {IFillStyle} from '../../style/IFillStyle';
import {IOutlineStyle} from '../../style/IOutlineStyle';

export interface ICompositShape extends IShape, IShapeCollection {
  SetFillStyle(fillStyle: IFillStyle): void;
  SetOutlineStyle(outlineStyle: IOutlineStyle): void;
}
