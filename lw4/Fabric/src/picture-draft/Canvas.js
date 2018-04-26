"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Color_1 = require("./Color");
class Canvas {
    constructor() {
        this.color = Color_1.Color.White;
    }
    SetColor(color) {
        this.color = color;
    }
    DrawLine(from, to) {
        console.log(from, to);
    }
    DrawEllipse(l, t, w, h) {
        console.log(l, t, w, h);
    }
}
exports.Canvas = Canvas;
//# sourceMappingURL=Canvas.js.map