import {Command} from "../../command/Command";

export class ResizeImageCommand extends Command {

  private width: number;
  private height: number;
  private newWidth: number;
  private newHeight: number;

  constructor(width: number, height: number, newWidth: number, newHeight: number) {
    super();
    this.width = width;
    this.height = height;
    this.newWidth = newWidth;
    this.newHeight = newHeight;
  }

  public GetChanges(): object {
    return { newWidth: this.width, newHeight: this.height};
  }

  protected DoExecute() {
    [this.width, this.newWidth] = [this.newWidth, this.width];
    [this.height, this.newHeight] = [this.newHeight, this.height];
  }

  protected DoUnexecute() {
    [this.width, this.newWidth] = [this.newWidth, this.width];
    [this.height, this.newHeight] = [this.newHeight, this.height];
  }
}
