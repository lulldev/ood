import { IPainter } from "./Painter";
import { ICanvas, Canvas } from "./Canvas";
import { IShape } from "./Shape";

export interface IPictureDraft {
  GetShapesCount(): number;
  GetShape(index: number): IShape;
}

export class PictureDraft implements IPictureDraft {

  private shapesStore: IShape[];

  constructor() {
    this.shapesStore = [];
  }

  public AddShape(shape: IShape): void {
    this.shapesStore.push(shape);
  }

  public GetShapesCount(): number {
    return this.shapesStore.length;
  }

  public GetShape(index: number): IShape {
    return this.shapesStore[index];
  }

}
