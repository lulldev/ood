import {DocumentItem} from "./document-items/DocumentItem";

export interface IDocument {
  SetTitle(title: string);
  GetTitle(): string;
  InsertParagraph(text: string, position?: number);
  InsertImage(src: string, width: number, height: number, position?: number);
  DeleteItem(position: number);
  ReplaceText(text: string, position: number);
  Save(path: string);
  CanUndo(): boolean;
  Undo();
  CanRedo(): boolean;
  Redo();
  GetItemsCount(): number;
  GetItem(index: number): DocumentItem;
}
