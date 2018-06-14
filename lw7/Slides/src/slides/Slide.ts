import { Frame } from './Frame';

export class Slide extends Frame {

  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }
}
