import { Color } from './Color';
import { Canvas } from './Canvas';
export declare type ShapeEdge = {
    x: number;
    y: number;
};
export declare abstract class Shape {
    protected color: Color;
    constructor(color: Color);
    GetColor(): Color;
    abstract Draw(canvas: Canvas): void;
}
export declare class Rectangle extends Shape {
    private x;
    private y;
    private width;
    private height;
    constructor(startPoint: ShapeEdge, width: number, height: number, color: Color);
    GetLeftTop(): ShapeEdge;
    GetRightBottom(): ShapeEdge;
    Draw(canvas: Canvas): void;
}
export declare class Triangle extends Shape {
    private a;
    private b;
    private c;
    private width;
    private height;
    constructor(a: ShapeEdge, b: ShapeEdge, c: ShapeEdge, color: Color);
    GetVertex1(): ShapeEdge;
    GetVertex2(): ShapeEdge;
    GetVertex3(): ShapeEdge;
    Draw(canvas: Canvas): void;
}
export declare class Ellipse extends Shape {
    private center;
    private horizontalRadius;
    private verticalRadius;
    constructor(center: ShapeEdge, horizontalRadius: number, verticalRadius: number, color: Color);
    GetCenter(): ShapeEdge;
    GetHorizontalRadius(): number;
    GetVerticalRadius(): number;
    Draw(canvas: Canvas): void;
}
export declare class RegularPolygon extends Shape {
    private center;
    private numberOfSides;
    private sideSize;
    constructor(center: ShapeEdge, numberOfSides: number, sideSize: number, color: Color);
    GetVertexCount(): number;
    GetCenter(): ShapeEdge;
    GetRadius(): number;
    Draw(canvas: Canvas): void;
}
