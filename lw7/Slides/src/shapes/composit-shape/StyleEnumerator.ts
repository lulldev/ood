import {IOutlineStyle} from '../../style/IOutlineStyle';
import {IFillStyle} from '../../style/IFillStyle';
import {IShape} from '../IShape';

export type PropType = (IOutlineStyle|IFillStyle|undefined);

export const getProp: any = (shape: IShape, propName: string) => {
  return (propName === 'fill') ? shape.GetFillStyle() : shape.GetOutlineStyle();
};

export const styleEnumerator: any = (shapes: IShape[], propName: string) => {
  let first = undefined;
  let allSame = true;

  shapes.forEach((shape: IShape) => {
    if (!first) {
      first = getProp(shape, propName);
    }
    else if (getProp(shape, propName) !== getProp(first, propName)) {
      allSame = false;
    }
  });

  return (!first || !allSame) ? undefined : getProp(first, propName);
};
