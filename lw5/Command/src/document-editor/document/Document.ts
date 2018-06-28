import {IHTMLConverter} from "./HTMLConverter/IHTMLConverter";

const fs = require('fs');
const fse = require('fs-extra');

import {IDocument} from "./IDocument";
import {ChangeStringCommand} from "./document-commands/ChangeString";
import {DeleteItemCommand} from "./document-commands/DeleteItem";
import {InsertItemCommand} from "./document-commands/InsertItem";
import {Paragraph} from "./document-items/Paragraph";
import {Image} from "./document-items/Image";
import {DocumentItem} from "./document-items/DocumentItem";
import {History} from "../command/History";
import {HTMLConverter} from "./HTMLConverter/HTMLConverter";

export class Document implements IDocument {

  private static MAX_IMAGE_WIDTH: number = 10000;
  private static MAX_IMAGE_HEIGHT: number = 10000;
  private static TMP_PATH: string = '/tmp/document';

  private title: string = 'Untitled';
  private history: any = new History(); // todo history
  private documentItems: DocumentItem[] = [];
  private copyImg: {wasPath: string; willPath: string}[] = [];
  private htmlConverter: IHTMLConverter = new HTMLConverter();

  constructor() {
    if (!fs.existsSync(Document.TMP_PATH)) {
      fs.mkdirSync(Document.TMP_PATH);
    }
    if (!fs.existsSync(`${Document.TMP_PATH}/images`)) {
      fs.mkdirSync(`${Document.TMP_PATH}/images`);
    }
  }

  public SetTitle(title: string) {
    const changeStringCommand = new ChangeStringCommand(this.title, title);
    this.history.AddAndExecuteCommand(changeStringCommand);
  }

  public GetTitle(): string {
    return this.title;
  }

  public InsertParagraph(text: string, position?: number) {

    const paragraph = new Paragraph(text, this.history);
    const item = new DocumentItem(paragraph, null);
    const pos = position ? position : this.documentItems.length;

    if (pos > this.documentItems.length) {
      throw new Error("Index out range");
    }

    const insertCommand = new InsertItemCommand(this.documentItems, item, pos);
    this.history.AddAndExecuteCommand(insertCommand);
    return paragraph;
  }

  public InsertImage(src: string, width: number, height: number, position?: number) {
    const pos = position ? position : this.documentItems.length;
    if (pos > this.documentItems.length) {
      throw new Error("Index out range");
    }

    if (!fs.existsSync(src)) {
      throw new Error('File not exist');
    }
    if (width < 1 || width > Document.MAX_IMAGE_WIDTH) {
      throw new Error('Invalid image width');
    }
    if (height < 1 || width > Document.MAX_IMAGE_HEIGHT) {
      throw new Error('Invalid image height');
    }

    const iterEqual = this.copyImg.filter((copyImg: {wasPath: string; willPath: string}) => {
      return copyImg.wasPath === src;
    });


    if (iterEqual[0] === this.copyImg[this.copyImg.length]) {
      this.CopyImage(src);
    }

    const image = new Image(src, width, height, this.history);
    const item = new DocumentItem(null, image);

    const insertImage = new InsertItemCommand(this.documentItems, item, pos);
    this.history.AddAndExecuteCommand(insertImage);
    return image;
  }

  public DeleteItem(position: number) {
    if (this.documentItems.length === 0 || position > this.documentItems.length - 1) {
      throw new Error('Index out range');
    }

    const deleteItem = new DeleteItemCommand(this.documentItems, position);
    this.history.AddAndExecuteCommand(deleteItem);
  }

  public Save(path: string) {
    this.CopyImagesForFile(path);
    this.htmlConverter.Save(path, this);
  }

  public CanUndo(): boolean {
    return this.history.CanUndo();
  }

  public Undo() {
    this.history.Undo();
  }

  public CanRedo(): boolean {
    return this.history.CanRedo();
  }

  public Redo() {
    this.history.Redo();
  }

  public GetItemsCount(): number {
    return this.documentItems.length;
  }

  public GetItem(index: number): DocumentItem {
    if (this.documentItems.length === 0 || index > this.documentItems.length - 1) {
      throw new Error('Index out range');
    }
    return this.documentItems[index];
  }

  private CopyImagesForFile(path: string) {

    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }

    if (!fs.existsSync(`${path}/images`)) {
      fs.mkdirSync(`${path}/images`);
    }

    const imagePathInNewFolder = `${path}/images`;

    this.documentItems.forEach((item: DocumentItem) => {
      if (item.GetImage()) {
        const image = item.GetImage();
        const imagePath = image.GetPath();
        const newPath = `${imagePathInNewFolder}/${this.GetFilenameFromPath(image.GetPath())}`;
        fse.copySync(imagePath, newPath);
      }
    });
  }

  private CopyImage(path: string) {
    let pathToNewImage = path;

    const iterEqual = this.copyImg.filter((copyImg: {wasPath: string; willPath: string}) => {
      const imagePath = copyImg.willPath;
      const parentPath = this.GetParentPath(imagePath);
      const imageName = this.GetFilenameFromPath(imagePath);
      return (parentPath !== this.GetParentPath(path) && imageName === this.GetFilenameFromPath(path));
    });

    const newName = this.GetFilenameFromPath(path);
    pathToNewImage = `${Document.TMP_PATH}/images/${newName}`;

    // if (iterEqual[0] === this.copyImg[this.copyImg.length]) {
    //   const newName = this.GetFilenameFromPath(path);
    //   pathToNewImage = `${Document.TMP_PATH}/images/${newName}`;
    // }
    // else {
    //   // todo rnd
    //   const newName = this.GetFilenameFromPath(path);
    //   pathToNewImage = `${Document.TMP_PATH}/images/${newName}`;
    // }

    fse.copySync(path, pathToNewImage);
    this.copyImg.push({wasPath: path, willPath: pathToNewImage});
  }

  private GetParentPath(filePath: string): string {
    const spl = filePath.split('/');
    spl.splice(spl.length - 1);
    return spl.join('/');
  }

  private GetFilenameFromPath(filePath: string): string {
    const spl = filePath.split('/');
    return spl[spl.length - 1];
  }
}
