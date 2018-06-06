import * as React from 'react';
import { Canvas } from './Canvas';

interface IProps {
  harmonicFunctions: any
}

export default class HarmonicGraphic extends React.Component<IProps, any> {

  constructor(props: any) {
    super(props);
    this.drawGraph = this.drawGraph.bind(this);
    this.draw = this.draw.bind(this);
    this.showAxes = this.showAxes.bind(this);
  }

  public drawGraph(ctx: any, axes: any, func: any, color: any, thick: any): void {
    let xx: any;
    let yy: any;
    const dx: any = 1;
    const x0: any = axes.x0;
    const y0: any = axes.y0;
    const scale: any = axes.scale;
    const iMax: any = Math.round((ctx.canvas.width - x0) / dx);
    const iMin: any = axes.doNegativeX ? Math.round(-x0 / dx) : 0;
    ctx.beginPath();
    ctx.lineWidth = thick;
    ctx.strokeStyle = color;

    for (let i = iMin; i <= iMax; i++) {
      xx = dx * i;
      yy = scale * func(xx / scale);
      if (i === iMin) {
        ctx.moveTo(x0 + xx, y0 - yy);
      }
      else {
        ctx.lineTo(x0 + xx, y0 - yy);
      }
    }
    ctx.stroke();
  }

  public showAxes(ctx: any, axes: any) {
    const x0: any = axes.x0;
    const w = ctx.canvas.width;
    const y0: any = axes.y0;
    const h = ctx.canvas.height;
    const xmin: any = axes.doNegativeX ? 0 : x0;
    ctx.beginPath();
    ctx.strokeStyle = 'rgb(128,128,128)';
    ctx.moveTo(xmin, y0);
    ctx.lineTo(w, y0);
    ctx.moveTo(x0, 0);
    ctx.lineTo(x0, h);
    ctx.stroke();
  }

  public draw() {
    const canvas: any = document.getElementById('canvas');
    if (null == canvas || !canvas.getContext) {
      return;
    }

    const axes: any = {};
    const ctx: any = canvas.getContext('2d');
    axes.x0 = .5 + .5 * canvas.width;
    axes.y0 = .5 + .5 * canvas.height;
    axes.scale = 40;
    axes.doNegativeX = true;

    this.showAxes(ctx, axes);
    this.props.harmonicFunctions.forEach((harmonicFunctionData: any) => {
      this.drawGraph(ctx, axes, this.buildHarmonicFunctionByData(harmonicFunctionData), 'red', 1);
    });
  }

  public buildHarmonicFunctionByData(data: any): any {
    const harmonicType: any = data.function === 'sin' ? Math.sin : Math.cos;
    const frequency = data.frequency ? data.frequency : 1;
    const amplitude = data.amplitude ? data.amplitude : 1;
    const phase = data.phase ? data.phase : 0;
    return (x: any): any => {
      return amplitude * harmonicType(frequency * x + phase);
    };
  }

  public render() {
    if (this.props.harmonicFunctions.length > 0) {
      this.draw();
    }
    return (
      <div>
        <Canvas canvasHTMLId="canvas" />
      </div>
    );
  }
}
