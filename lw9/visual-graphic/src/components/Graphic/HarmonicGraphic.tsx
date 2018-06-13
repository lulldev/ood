// import * as React from 'react';
// import { Canvas } from './Canvas';
//
// interface IProps {
//   harmonicList: any
// }
//
// export default class HarmonicGraphic extends React.Component<IProps, any> {
//
//   constructor(props: any) {
//     super(props);
//     this.drawHarmonicGraph = this.drawHarmonicGraph.bind(this);
//     this.draw = this.draw.bind(this);
//     this.drawAxes = this.drawAxes.bind(this);
//   }
//
//   public drawHarmonicGraph(ctx: any, axes: any, color: any, thick: any): void {
//     let xx: any;
//     let yy: any;
//     const dx: any = 1;
//     const x0: any = axes.x0;
//     const y0: any = axes.y0;
//     const scale: any = axes.scale;
//     const iMax: any = Math.round((ctx.canvas.width - x0) / dx);
//     const iMin: any = axes.doNegativeX ? Math.round(-x0 / dx) : 0;
//     ctx.beginPath();
//     ctx.lineWidth = thick;
//     ctx.strokeStyle = color;
//
//     for (let i = iMin; i <= iMax; i++) {
//       xx = dx * i;
//       yy = scale * this.props.harmonicViewModel.calculateHarmonicSum(xx / scale);
//       if (i === iMin) {
//         ctx.moveTo(x0 + xx, y0 - yy);
//       }
//       else {
//         ctx.lineTo(x0 + xx, y0 - yy);
//       }
//     }
//     ctx.stroke();
//   }
//
//   public drawAxes(ctx: any, axes: any) {
//     const x0: any = axes.x0;
//     const w = ctx.canvas.width;
//     const y0: any = axes.y0;
//     const h = ctx.canvas.height;
//     const xmin: any = axes.doNegativeX ? 0 : x0;
//     ctx.beginPath();
//     ctx.strokeStyle = 'rgb(128,128,128)';
//     ctx.moveTo(xmin, y0);
//     ctx.lineTo(w, y0);
//     ctx.moveTo(x0, 0);
//     ctx.lineTo(x0, h);
//     ctx.stroke();
//   }
//
//   public clearCanvas(canvas: any, ctx: any): void {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//   }
//
//   public draw() {
//     const canvas: any = document.getElementById('canvas'); // todo
//     if (null == canvas || !canvas.getContext) {
//       return;
//     }
//
//     const ctx: any = canvas.getContext('2d');
//     this.clearCanvas(canvas, ctx);
//
//     const axes: any = {};
//     axes.x0 = .5 + .5 * canvas.width;
//     axes.y0 = .5 + .5 * canvas.height;
//     axes.scale = 40;
//     axes.doNegativeX = true;
//
//     this.drawAxes(ctx, axes);
//     this.drawHarmonicGraph(ctx, axes, 'red', 1);
//   }
//
//   public render() {
//     this.draw();
//     return (
//       <div>
//         <Canvas canvasHTMLId="canvas" />
//       </div>
//     );
//   }
// }
