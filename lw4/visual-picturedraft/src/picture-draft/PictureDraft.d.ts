import { Shape } from "./Shape";
import { IPainter } from "./Painter";
import { Canvas } from "./Canvas";
export declare class PictureDraft implements IPainter {
    GetShapeCount(): number;
    GetShape(): Shape;
    DrawPicture(draft: any, canvas: Canvas): void;
}
