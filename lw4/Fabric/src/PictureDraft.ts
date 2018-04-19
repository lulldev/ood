import { IPainter } from "./Painter";
import { Canvas } from "./Canvas";
import { Shape } from "./Shape";
import { Client } from "./Client";
import { Designer } from "./Designer";
import { Color } from "./Color";

export class PictureDraft implements IPainter {

  private client: Client;
  private designer: Designer;
  private shapesStore: Shape[];

  constructor(client: Client, designer: Designer) {
    this.client = client;
    this.designer = designer;
    this.shapesStore = [];
  }

  public AddShape(shapeParams: object): void {
    const newShape: Shape = this.designer.CreateDraft(shapeParams);
    this.shapesStore.push(newShape);
  }

  public GetShapesCount(): number {
    return this.shapesStore.length;
  }

  // public GetShape(): Shape {}

  DrawPicture(canvas: Canvas): void {
    this.shapesStore.map((shape) => {
      shape.Draw(canvas);
    });
  }

}
