import { ICanvas } from './Canvas';

export interface IGraphicCopmonent {
  Draw(canvas: ICanvas): void;
}

export interface ICompoundGraphicCopmonent extends IGraphicCopmonent {
  AddChildren(children: IGraphicCopmonent): void;
  RemoveChildren(children: IGraphicCopmonent): void;
}
