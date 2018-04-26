export interface IShapeFactory {
    CreateShape(descr: string): void;
}
export declare class ShapeFactory implements IShapeFactory {
    private memberName;
    constructor(memberName: string);
    CreateShape(descr: string): void;
}
