import {History} from "../../command/History";
import {IImage} from "./IImage";
import {ResizeImageCommand} from "../document-commands/ResizeImage";

export class Image implements IImage {

  private path: string;
  private width: number;
  private height: number;
  private history: History;

  constructor(path: string, width: number, height: number, history: History) {

    // todo check path
    // if (!exists(boost::filesystem::path(path))){
    //   throw std::invalid_argument("Invalid file path or not accessible file");
    // }

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
  }

}
