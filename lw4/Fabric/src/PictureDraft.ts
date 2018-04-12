// import { Shape } from "./Shape";
import { IPainter } from "./Painter";
import { Canvas } from "./Canvas";

export class PictureDraft implements IPainter {

  public GetShapeCount(): number {
    // todo
    return 0;
  }

  public GetShape(): void { // todo: Shape

  }

  DrawPicture(draft: any, canvas: Canvas): void {
    console.log(draft, canvas);
  }

}

