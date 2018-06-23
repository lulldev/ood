import {Menu} from './menu/Menu';
import {IDocument} from "./document/IDocument";

export class Editor {

  private document: IDocument;
  private menu: Menu = new Menu();
  private standartOutput: any;

  constructor(standartOutput: any) {
    this.standartOutput = standartOutput;
    this.menu.AddItem("help", "Help", () => { this.menu.ShowHelp(); });
    this.menu.AddItem("exit", "Exit", () => { this.menu.Exit(); });

    this.menu.AddItem(
      "SetTitle",
      "Set document title",
      this.SetTitle);

    this.menu.AddItem(
      "InsertParagraph",
      "Add paragraph at position. Args: <position>|end <text>",
      this.InsertParagraph,
    );

    this.menu.AddItem(
      "InsertImage",
      "Add image at positions. Args: <position>|end <width> <height> <path>",
      this.InsertImage,
    );

    this.menu.AddItem(
      "ReplaceText",
      "Replace text at position. Args: <position> <text>",
      this.ReplaceText,
    );

    this.menu.AddItem(
      "ResizeImage",
      "Resize image at position. Args: <position> <width> <height>",
      this.ResizeImage,
    );

    this.menu.AddItem(
      "DeleteItem",
      "Delete item in document",
      this.DeleteItem,
    );

    this.menu.AddItem(
      "Save",
      "Save html document to path. Args: <path>",
      this.Save,
    );

    this.menu.AddItem(
      "List",
      "Show document",
      this.Save,
    );

    this.menu.AddItem(
      "Undo",
      "Undo command",
      this.Undo,
    );

    this.menu.AddItem(
      "Redo",
      "Redo command",
      this.Redo,
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
      this.document.ResizeImage(width, height, position);
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
