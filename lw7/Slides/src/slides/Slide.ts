import {ICanvas} from '../canvas/ICanvas';
import {ISlide} from './ISlide';
import {IGraphicComponent} from './ISlide';

export class Slide implements ISlide {

  private width: number;
  private height: number;
  private childrenComponents: IGraphicCopmonent[] = [];

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  public AddChildren(children: IGraphicCopmonent): void {
    // todo: check coord
    this.childrenComponents.push(children);
  }

  public RemoveChildren(children: IGraphicCopmonent): void {
    this.childrenComponents.filter((e: IGraphicCopmonent) => e !== children);
  }

  public Draw(canvas: ICanvas) {
    this.childrenComponents.forEach((children: IGraphicCopmonent) => {
      children.Draw(canvas);
    });
  }
}
