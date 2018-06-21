import { IPainter } from "./Painter";
import { Canvas } from "./Canvas";
import { IShape } from "./Shape";
import { Client } from "./Client";
import { Designer } from "./Designer";

export class PictureDraft implements IPainter {

  private client: Client;
  private designer: Designer;
  private shapesStore: IShape[];

  constructor(client: Client, designer: Designer) {
    this.client = client;
    this.designer = designer;
    this.shapesStore = [];
  }

  public AddShape(shapeParams: object): void {
    const newShape: IShape = this.designer.CreateDraft(shapeParams);
    this.shapesStore.push(newShape);
  }

  public GetShapesCount(): number {
    return this.shapesStore.length;
  }

  public DrawPicture(canvas: Canvas): void {
    canvas.ShowCanvasInfo();
    this.shapesStore.map((shape: IShape) => {
      shape.Draw(canvas);
    });
  }
}
