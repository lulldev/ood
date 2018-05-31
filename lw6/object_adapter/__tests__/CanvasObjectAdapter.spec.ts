import { Canvas } from '../src/graphics_lib';
import { ModernGraphicsRenderer } from '../src/modern_graphics_lib';
import {
  CanvasPainter,
  Triangle,
  Rectangle,
} from '../src/shape_drawing_lib';
import { CanvasObjectAdapter } from '../src/adapter/canvas-object-adapter';

describe('CanvasObjectAdapter', () => {

  let outputLog = [];
  const outputHookHelper = (data) => {
    if (data) {
      outputLog.push(data);
    }
  };
  const modernGraphicsRenderer: ModernGraphicsRenderer = new ModernGraphicsRenderer(outputHookHelper);
  const adapter: CanvasObjectAdapter = new CanvasObjectAdapter(modernGraphicsRenderer);
  const canvasPainter: CanvasPainter = new CanvasPainter(adapter);

  const triangle: Triangle = new Triangle(
    { x: 10, y: 15 },
    { x: 100, y: 200 },
    { x: 150, y: 250 }
  );

  it('After init modern canvas adapter draw starting', () => {
    expect(outputLog[0]).toEqual('<draw>');
  });

  it('End drawing add last tag to canvas', () => {
    canvasPainter.End();
    expect(outputLog[1]).toEqual('</draw>');
  });

  it('End drawing throw if draw mode not start', () => {
    expect(() => canvasPainter.End()).toThrow();
  });

  it('Draw triangle in not begin draw mode', () => {
    outputLog = [];
    expect(() => canvasPainter.Draw(triangle)).toThrow();
    expect(outputLog.length).toEqual(0);
  });

  it('Draw triangle in begin draw mode', () => {
    outputLog = [];
    const modernGraphicsRenderer: ModernGraphicsRenderer = new ModernGraphicsRenderer(outputHookHelper);
    const adapter: CanvasObjectAdapter = new CanvasObjectAdapter(modernGraphicsRenderer);
    const canvasPainter: CanvasPainter = new CanvasPainter(adapter);

    canvasPainter.Draw(triangle);
    canvasPainter.End();

    expect(outputLog).toEqual(
      [
        '<draw>',
        '<line fromX="10" fromY="15" toX="100" toY="200">',
        '<line fromX="100" fromY="200" toX="150" toY="250">',
        '<line fromX="150" fromY="250" toX="10" toY="15">',
        '</draw>'
      ]
    );
  });
});

