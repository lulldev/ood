import {Canvas, ICanvas} from "./Canvas";
import {IPictureDraft, PictureDraft} from "./PictureDraft";
import {IShape} from "./Shape";
import {IDesigner} from "./Designer";
import {IShapeFactory} from "./ShapeFactory";

export interface IPainter {
  DrawPicture(canvas: Canvas, pictureDraft: IPictureDraft): void;
}

export class Painter implements IPainter {

  public DrawPicture(canvas: Canvas, pictureDraft: IPictureDraft): void {
    canvas.ShowCanvasInfo();
    for (let i = 0; i < pictureDraft.GetShapesCount(); i++) {
      pictureDraft.GetShape(i).Draw(canvas);
    }
  }
}
