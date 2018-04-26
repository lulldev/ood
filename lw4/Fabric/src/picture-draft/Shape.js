"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shape {
    constructor(color) {
        this.color = color;
    }
    GetColor() {
        return this.color;
    }
}
exports.Shape = Shape;
class Rectangle extends Shape {
    constructor(startPoint, width, height, color) {
        super(color);
        this.x = startPoint.x;
        this.y = startPoint.y;
        this.width = width;
        this.height = height;
    }
    GetLeftTop() {
        return { x: this.x, y: this.y };
    }
    GetRightBottom() {
        return { x: this.x + this.height, y: this.y + this.width };
    }
    Draw(canvas) {
        /*
        const context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.fillStyle = this.color;
        context.lineWidth = 0.5;
        context.strokeRect(this.x, this.y, this.width, this.height);
        context.fillRect(this.x, this.y, this.width, this.height);
        */
    }
}
exports.Rectangle = Rectangle;
class Triangle extends Shape {
    constructor(a, b, c, color) {
        super(color);
        this.a = a;
        this.b = b;
        this.c = c;
    }
    GetVertex1() {
        return this.a;
    }
    GetVertex2() {
        return this.b;
    }
    GetVertex3() {
        return this.c;
    }
    Draw(canvas) {
        /*
            let context = canvasContext.getContext("2d");
            context.clearRect(0, 0, canvasContext.width, canvasContext.height);
            context.beginPath();
            context.fillStyle = this.getBgColor();
            context.lineWidth = 0.5;
            context.strokeStyle = this.getBorderColor();
            context.moveTo(this.x1, this.y1);
            context.lineTo(this.x2, this.y2);
            context.lineTo(this.x3, this.y3);
            context.lineTo(this.x1, this.y1);
            context.stroke();
            context.fill();
        */
    }
}
exports.Triangle = Triangle;
class Ellipse extends Shape {
    constructor(center, horizontalRadius, verticalRadius, color) {
        super(color);
        this.center = center;
        this.horizontalRadius = horizontalRadius;
        this.verticalRadius = verticalRadius;
    }
    GetCenter() {
        return this.center;
    }
    GetHorizontalRadius() {
        return this.horizontalRadius;
    }
    GetVerticalRadius() {
        return this.verticalRadius;
    }
    Draw(canvas) {
        // https://true-coder.ru/javascript/risuem-ellips-na-canvas.html
    }
}
exports.Ellipse = Ellipse;
class RegularPolygon extends Shape {
    constructor(center, numberOfSides, sideSize, color) {
        super(color);
        this.center = center;
        this.numberOfSides = numberOfSides;
        this.sideSize = sideSize;
    }
    GetVertexCount() {
        return 0; // todo
    }
    GetCenter() {
        return this.center;
    }
    GetRadius() {
        return 0; // todo
    }
    Draw(canvas) {
        // http://scienceprimer.com/drawing-regular-polygons-javascript-canvas
        // https://processing.org/examples/regularpolygon.html
    }
}
exports.RegularPolygon = RegularPolygon;
//# sourceMappingURL=Shape.js.map