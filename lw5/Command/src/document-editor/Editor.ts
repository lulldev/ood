import {Menu} from './menu/Menu';
import {IDocument} from "./document/IDocument";
import {Document} from "./document/Document";

export class Editor {

  private document: IDocument = new Document();
  private menu: Menu = new Menu();
  private standartOutput: any;

  constructor(standartOutput: any) {
    this.standartOutput = standartOutput;
    this.menu.AddItem("help", "Help", () => { this.menu.ShowHelp(); });
    this.menu.AddItem("exit", "Exit", () => { this.menu.Exit(); });

    this.menu.AddItem(
      "SetTitle",
      "Set document title",
      (title: string) => this.SetTitle(title),
    );

    this.menu.AddItem(
      "InsertParagraph",
      "Add paragraph at position. Args: <position>|end <text>",
      (text: string, position?: number) => this.InsertParagraph(text, position),
    );

    this.menu.AddItem(
      "InsertImage",
      "Add image at positions. Args: <position>|end <width> <height> <path>",
      (src: string, width: number, height: number, position?: number) => this.InsertImage(src, width, height, position),
    );

    this.menu.AddItem(
      "ReplaceText",
      "Replace text at position. Args: <position> <text>",
      (text: string, position?: number) => this.ReplaceText(text, position),
    );

    this.menu.AddItem(
      "ResizeImage",
      "Resize image at position. Args: <position> <width> <height>",
      (width: number, height: number, position?: number) => this.ResizeImage(width, height, position),
    );

    this.menu.AddItem(
      "DeleteItem",
      "Delete item in document",
      (position: number) => this.DeleteItem(position),
    );

    this.menu.AddItem(
      "Save",
      "Save html document to path. Args: <path>",
      (path: string) => this.Save(path),
    );

    this.menu.AddItem(
      "List",
      "Show document",
      () => this.List(),
    );

    this.menu.AddItem(
      "Undo",
      "Undo command",
      () => this.Undo(),
    );

    this.menu.AddItem(
      "Redo",
      "Redo command",
      () => this.Redo(),
    );
  }

  public Init(): void {
    this.menu.Run();
  }

  private SetTitle(title: string) {
    this.document.SetTitle(title);
  }

  private InsertParagraph(text: string, position?: number) {
    try {
      this.document.InsertParagraph(text, position);
    }
    catch (e) {
      this.standartOutput(e);
    }
  }

  private InsertImage(src: string, width: number, height: number, position?: number) {
    try {
      this.document.InsertImage(src, width, height, position);
    }
    catch (e) {
      this.standartOutput(e);
    }
  }

  private ReplaceText(text: string, position?: number) {
    try {
      console.log(text, position);
      // auto item = this.document.GetItem(index);
      // if (!item.GetParagraph())
      // {
      //   throw invalid_argument("Can't replace text in non-text item");
      // }
      //
      // item.GetParagraph()->SetText(text);
    }
    catch (e) {
      this.standartOutput(e);
    }
  }

  private ResizeImage(width: number, height: number, position?: number) {
    try {
      console.log(width, height, position);
      /*
        size_t index = ReadUnsigned(in);
        unsigned width = ReadUnsigned(in);
        unsigned height = ReadUnsigned(in);

        auto item = this.document.GetItem(index);
        if (!item.GetImage())
        {
          throw invalid_argument("Can't resize non-image");
        }
        item.GetImage()->Resize(width, height);
      */
      // this.document.ResizeImage(width, height, position);
    }
    catch (e) {
      this.standartOutput(e);
    }
  }

  private DeleteItem(position: number) {
    try {
      this.document.DeleteItem(position);
    }
    catch (e) {
      this.standartOutput(e);
    }
  }

  private Save(path: string) {
    try {
      this.document.Save(path);
    }
    catch (e) {
      this.standartOutput(e);
    }
  }

  private List() {
    /*
        cout << "-------------" << endl;
    cout << this.document.GetTitle() << endl;
    for (unsigned i = 0; i < m_document->GetItemsCount(); i++)
    {
      auto item = this.document.GetItem(i);
      if (item.GetParagraph())
      {
        cout << i << ". Paragraph: " << item.GetParagraph()->GetText() << endl;
      }
      else
      {
        auto image = item.GetImage();
        cout << i << ". Image: " << image->GetWidth() << "x" << image->GetHeight() << " " << image->GetPath() << endl;
      }
    }
    cout << "-------------" << endl;
     */
  }

  private Undo() {
    if (this.document.CanUndo()) {
      this.document.Undo();
    }
    else {
      this.standartOutput("Can't undo");
    }
  }

  private Redo() {
    if (this.document.CanUndo()) {
      this.document.Redo();
    }
    else {
      this.standartOutput("Can't redo");
    }
  }
}
