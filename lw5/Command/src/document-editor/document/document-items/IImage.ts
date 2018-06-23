export interface IImage {
  GetPath(): string;
  GetWidth(): number;
  GetHeight(): number;
  SetWidth(width: number);
  SetHeight(height: number);
  Resize(width: number, height: number);
}
