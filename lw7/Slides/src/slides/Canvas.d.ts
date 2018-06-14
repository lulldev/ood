import { Color } from './Color';
export interface ICanvas {
    SetColor(color: Color): void;
    DrawLine(from: number, to: number): void;
    DrawEllipse(l: number, t: number, w: number, h: number): void;
}
export declare class Canvas implements ICanvas {
    private color;
    constructor();
    SetColor(color: Color): void;
    DrawLine(from: number, to: number): void;
    DrawEllipse(l: number, t: number, w: number, h: number): void;
}
