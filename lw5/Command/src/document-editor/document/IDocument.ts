export interface IDocument {
  InsertParagraph(text: string, position?: number);
  InsertImage(src: string, width: number, height: number, position?: number);
  ReplaceText(text: string, position?: number);
  ResizeImage(width: number, height: number, position?: number);
  DeleteItem(position: number);
  Save(path: string);
  List();
  Undo();
  Redo();
}
