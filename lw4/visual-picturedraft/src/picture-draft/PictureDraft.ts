import { IPainter } from './Painter';
import { Canvas } from './Canvas';
import { Shape } from './Shape';
import { Client } from './Client';
import { Designer } from './Designer';

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

  public GetShapesStore(): string[] {
    return this.shapesStore.map((shape: any) => {
      return shape.constructor.name;
    });
  }

  public DrawPicture(canvas: Canvas): void {
    console.log(canvas.GetCanvasInfo());
    this.shapesStore.map((shape) => {
      shape.Draw(canvas);
    });
  }

}

