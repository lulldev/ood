import { ICanvas } from './Canvas';
import { ICompoundGraphicCopmonent, IGraphicCopmonent } from './GraphicComponent';

export class Frame implements ICompoundGraphicCopmonent {

  private childrenComponents: IGraphicCopmonent[] = [];

  public AddChildren(children: IGraphicCopmonent): void {
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
