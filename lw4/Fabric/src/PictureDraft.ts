// import { Shape } from "./Shape";
import { IPainter } from "./Painter";
import { Canvas } from "./Canvas";
// import { Designer } from "./Designer";
import { Shape } from "./Shape";

export class PictureDraft implements IPainter {

  private designer: object;
  private shapesStore: Shape[];

  constructor(designer: object) {
    this.designer = designer;
    this.shapesStore = [];
  }

  public GetShapeCount(): number {
    return this.shapesStore.length;
  }

  public GetShape(): void { // todo: Shape

  }

  DrawPicture(canvas: Canvas): void {
    console.log(canvas);
  }

}

