const fs = require('fs');

import {History} from "../../command/History";
import {IImage} from "./IImage";
import {ResizeImageCommand} from "../document-commands/ResizeImage";
import {IHistory} from "../../command/IHistory";
import {Document} from "../Document";

export class Image implements IImage {

  private path: string;
  private width: number;
  private height: number;
  private history: IHistory;

  constructor(path: string, width: number, height: number, history: IHistory) {

    if (!fs.existsSync(path)){
      throw new Error("Invalid file path or not accessible file");
    }

    this.path = path;
    this.width = width;
    this.height = height;
    this.history = history;
  }

  public GetPath(): string {
    return this.path;
  }

  public GetWidth(): number {
    return this.width;
  }

  public GetHeight(): number {
    return this.height;
  }

  public SetWidth(width: number) {
    this.width = width;
  }

  public SetHeight(height: number) {
    this.height = height;
  }

  public Resize(width: number, height: number) {
    const resizeImageCommand = new ResizeImageCommand(this.width, this.height, width, height);
    this.history.AddAndExecuteCommand(resizeImageCommand);
    this.CommitChanges(this.history.GetLastChanges());
  }

  private CommitChanges(changes: any) {
    this.width = changes.hasOwnProperty('actualWidth') ? changes.actualWidth : this.width;
    this.height = changes.hasOwnProperty('actualHeight') ? changes.actualHeight : this.height;
  }
}
