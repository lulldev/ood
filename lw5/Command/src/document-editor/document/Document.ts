import {IDocument} from "./IDocument";

export class Document implements IDocument {

  private title: string;
  private history: any; // todo history
  private documentItems: any[]; // todo doc items
  private tempPath: string; // filesystem temp

  // first - where was
  // second - where downloaded
  // std::map<std::string, std::string> m_copyImages;

  public InsertParagraph(text: string, position?: number) {

  }

  public InsertImage(src: string, width: number, height: number, position?: number) {

  }

  public ReplaceText(text: string, position?: number) {

  }

  public ResizeImage(width: number, height: number, position?: number) {

  }

  public DeleteItem(position: number) {

  }

  public Save(path: string) {

  }

  public List() {

  }

  public CanUndo(): boolean {

  }

  public Undo() {

  }

  public CanRedo(): boolean {

  }

  public Redo() {

  }

  public GetTempPath() {

  }

  public GetItemsCount(): number {

  }

  public GetItem(index: number): any { // todo return CConstDocumentItem

  }

  private CopyImagesForFile(path: string) {

  }

  private CopyImage(path: string) {

  }

}
